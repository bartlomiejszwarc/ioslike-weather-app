import { useQuery } from "react-query";
import axios from "axios";
import WeatherPropertyContainer from "./WeatherPropertyContainer";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

function SunsetCard({ city, isDay }) {
	const API_KEY = process.env.REACT_APP_API_KEY;
	const { data } = useQuery(["astronomy", city], async () => {
		try {
			if (city) {
				const response = await axios.get(
					`https://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${city}&aqi=no&alerts=yes&days=10`
				);
				return response.data;
			}
		} catch (err) {
			throw err;
		}
	});

	if (isDay) {
		return (
			<WeatherPropertyContainer
				isDay={isDay}
				icon={<WbTwilightIcon />}
				iconText={"Sunset"}>
				<div className="w-full flex flex-col ">
					<span className="text-neutral-50 text-3xl ">
						{data?.astronomy?.astro?.sunset}
					</span>
					<span className="text-neutral-50 text-md">
						Sunrise: {data?.astronomy?.astro?.sunrise}
					</span>
				</div>
			</WeatherPropertyContainer>
		);
	} else {
		return (
			<WeatherPropertyContainer
				isDay={isDay}
				icon={<WbTwilightIcon />}
				iconText={"Sunrise"}>
				<div className="w-full flex flex-col ">
					<span className="text-neutral-50 text-3xl ">
						{data?.astronomy?.astro?.sunrise}
					</span>
					<span className="text-neutral-50 text-md">
						Sunset: {data?.astronomy?.astro?.sunset}
					</span>
				</div>
			</WeatherPropertyContainer>
		);
	}
}
export default SunsetCard;
