function TemperatureColorBar({
	minWeekTemperature,
	maxWeekTemperature,
	minDayTemperature,
	maxDayTemperature,
}) {
	const dailyMinimumPerc =
		((minDayTemperature - minWeekTemperature) /
			(maxWeekTemperature - minWeekTemperature)) *
		100;

	const dailyMaximumPerc =
		((maxDayTemperature - minWeekTemperature) /
			(maxWeekTemperature - minWeekTemperature)) *
		100;

	return (
		<>
			<div className="relative w-full mx-2 h-1 rounded-full bg-gradient-to-r from-sky-400 via-yellow-400 to-orange-700">
				<div
					className={`h-1 absolute  bg-neutral-800 bg-opacity-90 left-0 z-10 rounded-l-full`}
					style={{ width: `${dailyMinimumPerc}%` }}></div>
				<div
					className={`h-1 absolute bg-neutral-800 bg-opacity-90 right-0 z-10 rounded-r-full`}
					style={{ width: `${100 - dailyMaximumPerc}%` }}></div>
			</div>
		</>
	);
}
export default TemperatureColorBar;
