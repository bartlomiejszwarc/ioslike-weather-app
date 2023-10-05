import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FutureForecastSimple from "./FutureForecastSimple";
import WeatherPropertyContainer from "./WeatherPropertyContainer";

const moment = require("moment-timezone");

function FutureForecastList({ data, isDay }) {
	function getMinMaxWeeklyTemperature(data) {
		let mins = [];
		let maxs = [];

		data?.forecast?.forecastday?.forEach((day) => {
			mins.push(day?.day?.mintemp_c);
		});
		data?.forecast?.forecastday?.forEach((day) => {
			maxs.push(day?.day?.maxtemp_c);
		});

		return [Math.min(...mins), Math.max(...maxs)];
	}

	return (
		<WeatherPropertyContainer
			isDay={isDay}
			icon={<CalendarMonthIcon />}
			iconText={`Forecast (${data?.forecast?.forecastday?.length} days)`}>
			{data?.forecast?.forecastday.map((day, key) => (
				<FutureForecastSimple
					key={key}
					day={day.date}
					icon={day?.day?.condition?.icon}
					minTemperature={day?.day?.mintemp_c}
					maxTemperature={day?.day?.maxtemp_c}
					minWeekTemperature={getMinMaxWeeklyTemperature(data)[0]}
					maxWeekTemperature={getMinMaxWeeklyTemperature(data)[1]}
				/>
			))}
		</WeatherPropertyContainer>
	);
}
export default FutureForecastList;
