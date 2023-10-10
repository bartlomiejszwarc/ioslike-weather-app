import { Divider } from "@mui/material";
import AirIcon from "@mui/icons-material/Air";
import WeatherPropertyContainer from "./WeatherPropertyContainer";

import WindDirection from "./WindDirection";
function WindCard({ data, isDay }) {
	return (
		<>
			<WeatherPropertyContainer
				isDay={isDay}
				icon={<AirIcon />}
				iconText={"Wind"}
				size={"full"}>
				<div className="flex w-full py-4 items-center justify-center space-x-4">
					<div className="w-1/2 flex flex-col  text-neutral-50 px-4 space-y-1">
						<div className="flex items-center space-x-2">
							<span className="text-5xl">{Math.round(data?.wind_kph)}</span>
							<div className="flex flex-col text-xs">
								<span className="text-base">km/h</span>
								<span className="text-base">Wind</span>
							</div>
						</div>
						<Divider sx={{ bgcolor: "white" }} />
						<div className="flex items-center space-x-2">
							<span className="text-5xl">{Math.round(data?.gust_kph)}</span>
							<div className="flex flex-col text-xs">
								<span className="text-base">km/h</span>
								<span className="text-base">Gust</span>
							</div>
						</div>
					</div>
					<WindDirection windDegree={data?.wind_degree} isDay={isDay} />
				</div>
			</WeatherPropertyContainer>
		</>
	);
}
export default WindCard;
