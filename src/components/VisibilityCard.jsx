import WeatherPropertyContainer from "./WeatherPropertyContainer";
import VisibilityIcon from "@mui/icons-material/Visibility";
function VisibilityCard({ isDay, visibility }) {
	function visibilityDescription() {
		if (visibility >= 15) return "Perfectly clear";
		else if (visibility < 15 && visibility >= 10) return "Good";
		else if (visibility < 10 && visibility >= 7) return "Relatively good";
		else if (visibility < 7 && visibility >= 5) return "Moderate";
		else if (visibility < 5) return "Poor";
	}
	return (
		<WeatherPropertyContainer
			isDay={isDay}
			icon={<VisibilityIcon />}
			iconText={"Visibility"}>
			<div className="w-full flex flex-col ">
				<span className="text-neutral-50 text-3xl ">{visibility} km</span>
				<span className="text-neutral-50 text-md ">
					{visibilityDescription()}
				</span>
			</div>
		</WeatherPropertyContainer>
	);
}
export default VisibilityCard;
