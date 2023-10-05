import WeatherPropertyContainer from "./WeatherPropertyContainer";
import ThermostatIcon from "@mui/icons-material/Thermostat";
function FeelsLikeCard({ isDay, feelsLikeTemperature, actualTemperature }) {
	const setDescription = () => {
		const similarThreshold = 1;
		const temperaturesDifference = Math.abs(
			actualTemperature - feelsLikeTemperature
		);
		if (temperaturesDifference <= similarThreshold)
			return "Similar to the actual temperature.";
		else return "Wind is making it feel cooler.";
	};
	return (
		<WeatherPropertyContainer
			icon={<ThermostatIcon />}
			iconText={"Feels like"}
			isDay={isDay}>
			<div className="w-full flex flex-col ">
				<span className="text-neutral-50 text-3xl ">
					{Math.round(feelsLikeTemperature)}&#176;C
				</span>
				<span className="text-neutral-50 text-md ">{setDescription()}</span>
			</div>
		</WeatherPropertyContainer>
	);
}
export default FeelsLikeCard;
