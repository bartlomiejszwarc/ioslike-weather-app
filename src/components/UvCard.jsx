import WeatherPropertyContainer from "./WeatherPropertyContainer";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function UvCard({ isDay, uv }) {
	const uvIndexDescription = (uv) => {
		if (uv <= 1) return "Low";
		else if (uv > 1 && uv <= 3) return "Moderate";
		else if (uv > 3 && uv <= 6) return "High";
		else if (uv > 6 && uv <= 8) return "Very high";
		else if (uv > 8) return "Extreme";
	};
	return (
		<WeatherPropertyContainer
			icon={<WbSunnyIcon />}
			iconText={"Solar UV index"}
			isDay={isDay}>
			<div className="w-full flex flex-col ">
				<span className="text-neutral-50 text-3xl ">{uv}</span>
				<span className="text-neutral-50 text-md ">
					{uvIndexDescription(uv)}
				</span>
			</div>
		</WeatherPropertyContainer>
	);
}
export default UvCard;
