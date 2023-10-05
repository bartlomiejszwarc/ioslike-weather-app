function HourlyWeatherCard({ hour, temperature, icon }) {
	function roundHalf(num) {
		return Math.round(num * 2) / 2;
	}
	return (
		<>
			<div className="flex flex-col text-white items-center font-medium font-inter ">
				<p>{hour}</p>
				<img src={icon} className="h-10 w-10" />
				<p>{roundHalf(temperature)}&#176;C</p>
			</div>
		</>
	);
}
export default HourlyWeatherCard;
