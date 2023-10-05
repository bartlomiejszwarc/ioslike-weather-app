import { Divider } from "@mui/material";
import HourlyWeatherCard from "./HourlyWeatherCard";
import WeatherPropertyContainer from "./WeatherPropertyContainer";

import "./CustomScrollbar.css";
function HourlyTemperature({ description, hours, isDay }) {
	const getHour = (date) => {
		return date?.time?.slice(-5, -3);
	};
	return (
		<>
			<WeatherPropertyContainer
				isDay={isDay}
				iconText={description}
				lowercase={true}>
				<Divider sx={{ bgcolor: "#e5e5e5", height: "1px" }} />
				<div className="flex flex-row space-x-6 overflow-x-auto pb-4 custom-scrollbar">
					{hours?.map((hour, key) => (
						<HourlyWeatherCard
							key={key}
							hour={getHour(hour)}
							temperature={hour?.temp_c}
							icon={hour?.condition?.icon}
						/>
					))}
				</div>
			</WeatherPropertyContainer>
		</>
	);
}
export default HourlyTemperature;
