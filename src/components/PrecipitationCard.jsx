import WeatherPropertyContainer from "./WeatherPropertyContainer";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
function PrecipitationCard({ isDay, precipitation }) {
	return (
		<WeatherPropertyContainer
			isDay={isDay}
			icon={<WaterDropIcon />}
			iconText={"Precipitation"}>
			<div className="w-full flex flex-col ">
				<span className="text-neutral-50 text-3xl ">{precipitation} mm</span>
				<span className="text-neutral-50 text-md ">in last 24h</span>
			</div>
		</WeatherPropertyContainer>
	);
}
export default PrecipitationCard;
