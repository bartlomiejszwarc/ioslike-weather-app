import WeatherPropertyContainer from "./WeatherPropertyContainer";
import WaterIcon from "@mui/icons-material/Water";
function HumidityCard({ isDay, humidity, dewPoint }) {
	return (
		<WeatherPropertyContainer
			isDay={isDay}
			icon={<WaterIcon />}
			iconText={"Humidity"}>
			<div className="w-full flex flex-col ">
				<span className="text-neutral-50 text-3xl ">{humidity}%</span>
				<span className="text-neutral-50 text-md ">
					The dew point is {Math.round(dewPoint)}&#176;C right now.
				</span>
			</div>
		</WeatherPropertyContainer>
	);
}
export default HumidityCard;
