import axios from "axios";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import WeatherPropertyContainer from "./WeatherPropertyContainer";
import CustomScrollbar from "./CustomScrollbar.css";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { Divider } from "@mui/material";
function MoonCard({ longitude, latitude, date, city, isDay }) {
	const SECRET = process.env.REACT_APP_ASTRONOMY_SECRET;
	const ID = process.env.REACT_APP_ASTRONOMY_ID;
	const params = {
		format: "png",
		style: {
			moonStyle: "default",
			backgroundStyle: "solid",
			backgroundColor: "transparent",
		},
		observer: {
			latitude: latitude,
			longitude: longitude,
			date: date,
		},
		view: {
			type: "portrait-simple",
			orientation: "south-up",
		},
	};

	const headers = {
		"X-Requested-With": "XMLHttpRequest",
		Authorization: `Basic ${btoa(`${ID}:${SECRET}`)}`,
	};

	const url = "https://api.astronomyapi.com/api/v2/studio/moon-phase";

	const [moonImagePath, setMoonImagePath] = useState("");

	useEffect(() => {
		axios.post(url, params, { headers }).then((response) => {
			setMoonImagePath(response?.data?.data?.imageUrl);
		});
	}, []);

	const API_KEY = process.env.REACT_APP_API_KEY;
	const { data } = useQuery(["moonPhase", city], async () => {
		try {
			if (city) {
				const response = await axios.get(
					`https://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${city}&aqi=no&alerts=yes&days=10`
				);
				return response.data;
			}
		} catch (err) {
			throw err;
		}
	});

	return (
		<WeatherPropertyContainer
			icon={<NightlightIcon />}
			iconText={data?.astronomy?.astro?.moon_phase}
			isDay={isDay}>
			<div className="flex justify-center">
				<div className="w-3/5 flex flex-col space-y-1 text-neutral-50">
					<div className="flex justify-between">
						<p>Illumination</p>
						<span className="text-neutral-200">
							{data?.astronomy?.astro?.moon_illumination}%
						</span>
					</div>
					<Divider sx={{ bgcolor: "#e5e5e5", height: "1px" }} />
					<div className="flex justify-between">
						<p>Moonset</p>
						<span className="text-neutral-200">
							{data?.astronomy?.astro?.moonset}
						</span>
					</div>
					<Divider sx={{ bgcolor: "#e5e5e5", height: "1px" }} />
					<div className="flex justify-between">
						<p>Moonrise</p>
						<span className="text-neutral-200">
							{data?.astronomy?.astro?.moonrise}
						</span>
					</div>
				</div>
				<div className="w-2/5 flex justify-center">
					<img
						src={moonImagePath}
						alt=""
						className="cropped-image none-image position-70-15"
					/>
				</div>
			</div>
		</WeatherPropertyContainer>
	);
}
export default MoonCard;
