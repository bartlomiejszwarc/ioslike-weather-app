import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import AutocompleteCitiesList from "./AutocompleteCitiesList";

function LocationInput({ handleCityState }) {
	const [cityName, setCityName] = useState("");
	const [input, setInput] = useState("");

	const handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			setInput(e.target.value);
		}
	};
	const handleCityNameChange = (e) => {
		setCityName(e.target.value);
	};
	const handleSearch = () => {
		setInput(cityName);
	};
	const handleSelect = (city) => {
		setInput([]);
		setCityName(city.name);
		handleCityState(city.url);
	};

	return (
		<>
			<div className="w-full flex flex-col items-center font-inter relative">
				<div className="flex bg-transparent border-b-[1px] border-neutral-200 w-full">
					<input
						type="text"
						value={cityName}
						onChange={handleCityNameChange}
						onKeyDown={handleKeyDown}
						className="bg-transparent w-full text-white font-thin outline-none text-2xl py-1 pl-3 placeholder:text-2xl placeholder:font-thin placeholder:text-slate-300"
						placeholder="Search for a city"
					/>
					<button onClick={handleSearch} className="text-white">
						<SearchIcon />
					</button>
				</div>
				<AutocompleteCitiesList input={input} handleCitySelect={handleSelect} />
			</div>
		</>
	);
}
export default LocationInput;
