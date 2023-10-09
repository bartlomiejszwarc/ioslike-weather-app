import { useQuery } from "react-query";
import axios from "axios";
import CurrentForecast from "./CurrentForecast";
import HourlyTemperature from "./HourlyTemperature";
import FutureForecastList from "./FutureForecastList";
import ForecastCardSkeleton from "./skeletons/ForecastCardSkeleton";
import WindCard from "./WindCard";
import { useState } from "react";
import UvCard from "./UvCard";
import SunsetCard from "./SunsetCard";
import FeelsLikeCard from "./FeelsLikeCard";
import PrecipitationCard from "./PrecipitationCard";
import VisibilityCard from "./VisibilityCard";
import HumidityCard from "./HumidityCard";
import MoonCard from "./MoonCard";

const moment = require("moment-timezone");

function ForecastCard({ city, handleIsDay }) {
	const API_KEY = process.env.REACT_APP_API_KEY;
	const [twentyForHoursData, setTwentyForHoursData] = useState([]);

	const getHourFromString = (hour, tz_id) => {
		const epochForUTC = hour;
		const locationTime = moment.unix(epochForUTC).tz(tz_id);
		return locationTime.format("H");
	};

	const { isLoading, isError, data } = useQuery(["weather", city], async () => {
		try {
			if (city) {
				const response = await axios.get(
					`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&aqi=no&alerts=yes&days=10`
				);
				handleIsDay(response.data?.current?.is_day);
				const hour = getHourFromString(
					response.data.location.localtime_epoch,
					response.data.location.tz_id
				);
				const hoursToMidnightArray =
					response.data?.forecast?.forecastday[0]?.hour?.slice(hour);
				const hoursFromMidnightArray =
					response.data?.forecast?.forecastday[1]?.hour?.slice(
						0,
						24 - (24 - hour)
					);
				const concatHoursArray = hoursToMidnightArray.concat(
					hoursFromMidnightArray
				);

				setTwentyForHoursData(concatHoursArray);
				return response.data;
			}
		} catch (err) {
			throw err;
		}
	});

	if (isLoading) return <ForecastCardSkeleton />;

	if (isError) return null;

	if (!city) return null;

	return (
		<>
			<div className="w-full font-inter">
				<CurrentForecast
					location={data?.location}
					current={data?.current}
					minTemperature={data?.forecast?.forecastday[0]?.day?.mintemp_c}
					maxTemperature={data?.forecast?.forecastday[0]?.day?.maxtemp_c}
				/>
				<HourlyTemperature
					description={data?.forecast?.forecastday[0]?.day?.condition?.text}
					hours={twentyForHoursData}
					isDay={data?.current?.is_day}
				/>
				<FutureForecastList data={data} isDay={data?.current?.is_day} />
				<div className="w-full flex h-40 space-x-2">
					<UvCard isDay={data?.current?.is_day} uv={data?.current?.uv} />
					<SunsetCard
						isDay={data?.current?.is_day}
						city={data?.location?.name}
					/>
				</div>
				<WindCard isDay={data?.current?.is_day} data={data?.current} />

				<div className="w-full flex h-40 space-x-2">
					<FeelsLikeCard
						isDay={data?.current?.is_day}
						feelsLikeTemperature={data?.current?.feelslike_c}
						actualTemperature={data?.current?.temp_c}
					/>
					<PrecipitationCard
						isDay={data?.current?.is_day}
						precipitation={data?.current?.precip_mm}
					/>
				</div>
				<div className="w-full flex h-40 space-x-2">
					<VisibilityCard
						isDay={data?.current?.is_day}
						visibility={data?.current?.vis_km}
					/>
					<HumidityCard
						isDay={data?.current?.is_day}
						humidity={data?.current?.humidity}
						dewPoint={twentyForHoursData[0]?.dewpoint_c}
					/>
				</div>
				<MoonCard
					latitude={data?.location?.lat}
					longitude={data?.location?.lon}
					date={data?.current?.last_updated.slice(0, 10)}
					isDay={data?.current?.is_day}
					city={data?.location?.name}
				/>
			</div>
		</>
	);
}
export default ForecastCard;
