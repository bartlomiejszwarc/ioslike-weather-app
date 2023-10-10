import "./AirBar.css";
function AirQualityColorBar({ shiftPercentage }) {
	return (
		<>
			<div className="relative w-full h-1 bg-red-500 rounded-lg air-gradient-bar ">
				<div
					className="absolute w-3 h-3 rounded-full bg-white border-2 border-neutral-800 top-0 translate-y-[-33%]"
					style={{ left: shiftPercentage }}></div>
			</div>
		</>
	);
}
export default AirQualityColorBar;
