import WeatherPropertyContainer from "./WeatherPropertyContainer";
import MasksIcon from "@mui/icons-material/Masks";
import AirQualityColorBar from "./AirQualityColorBar";
function AirQualityCard({ isDay, qualityIndex }) {
	function getRandomInt(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}

	function getQualityIndexDescription() {
		switch (qualityIndex) {
			case 1:
				return "Good";
			case 2:
				return "Moderate";
			case 3:
				return "Unhealthy for sensitive group";
			case 4:
				return "Unhealthy";
			case 5:
				return "Very unhealthy";
			case 6:
				return "Hazardous";
			default:
				return "";
		}
	}

	function calculatePercentage() {
		switch (qualityIndex) {
			case 1:
				return getRandomInt(0, 17) + "%";
			case 2:
				return getRandomInt(18, 34) + "%";
			case 3:
				return getRandomInt(35, 51) + "%";
			case 4:
				return getRandomInt(52, 68) + "%";
			case 5:
				return getRandomInt(69, 85) + "%";
			case 6:
				return getRandomInt(86, 100) + "%";
			default:
				return 0 + "%";
		}
	}
	return (
		<WeatherPropertyContainer
			icon={<MasksIcon />}
			iconText={"Air quality"}
			isDay={isDay}>
			<div className="flex flex-col w-full text-neutral-50 text-2xl pb-3 space-y-2">
				<p>
					{qualityIndex} - {getQualityIndexDescription()}
				</p>
				<AirQualityColorBar shiftPercentage={calculatePercentage()} />
			</div>
		</WeatherPropertyContainer>
	);
}
export default AirQualityCard;
