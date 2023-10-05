import { Divider } from "@mui/material";
import TemperatureColorBar from "./TemperatureColorBar";
function FutureForecastSimple({
	day,
	icon,
	minTemperature,
	maxTemperature,
	minWeekTemperature,
	maxWeekTemperature,
}) {
	const dateString = day;
	const date = new Date(dateString);
	const dayOfWeekNumber = date.getDay();
	const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
	if (new Date().getDate() === date.getDate()) {
		var dayOfWeekName = "Today";
	} else {
		var dayOfWeekName = daysOfWeek[dayOfWeekNumber];
	}
	return (
		<>
			<Divider sx={{ bgcolor: "#e5e5e5", height: "1px" }} />
			<div className="w-full flex flex-col py-2 font-inter">
				<div className="flex  text-white font-medium items-center">
					<div className="flex w-2/5 justify-between px-4 items-center">
						<span>{dayOfWeekName}</span>
						<img src={icon} className="w-8 h-8" />
					</div>
					<div className="flex w-3/5 px-4 items-center ">
						<div className="text-slate-300 w-8 flex justify-end">
							<span>{Math.round(minTemperature)}&#176;C</span>
						</div>
						<TemperatureColorBar
							minWeekTemperature={minWeekTemperature}
							maxWeekTemperature={maxWeekTemperature}
							minDayTemperature={minTemperature}
							maxDayTemperature={maxTemperature}
						/>
						<span> {Math.round(maxTemperature)}&#176;C</span>
					</div>
				</div>
			</div>
		</>
	);
}
export default FutureForecastSimple;
