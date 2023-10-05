function CurrentForecast({
	current,
	location,
	minTemperature,
	maxTemperature,
}) {
	function roundHalf(num) {
		return Math.round(num * 2) / 2;
	}
	return (
		<div className="flex flex-col items-center space-y-2 pt-4 mb-4 font-inter">
			<div className="flex flex-col items-center">
				<span className="text-white text-xl uppercase font-medium">
					{location?.name}
				</span>
				<span className="text-neutral-100 text-sm uppercase font-medium">
					{location?.country}
				</span>
			</div>
			<span className="text-white text-7xl font-light">
				{current?.temp_c}&#176;C
			</span>
			<span className="text-white text-2xl font-light">
				{current?.condition?.text}
			</span>
			<span className="text-white text-2xl font-light">
				From {roundHalf(minTemperature)}&#176;C to {roundHalf(maxTemperature)}
				&#176;C
			</span>
		</div>
	);
}
export default CurrentForecast;
