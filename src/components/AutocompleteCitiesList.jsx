import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
import AutocompleteFieldSkeleton from "./skeletons/AutocompleteFieldSkeleton";

function AutocompleteCitiesList({ input, handleCitySelect }) {
	const API_KEY = process.env.REACT_APP_API_KEY;
	const [autocompleteSearchDone, setAutocompleteSearchDone] = useState(false);

	const { isLoading, isError, data } = useQuery(
		["autocompleteCities", input],
		async () => {
			try {
				setAutocompleteSearchDone(false);
				if (input.length > 2) {
					const response = await axios.get(
						`http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${input}&aqi=no`
					);
					setAutocompleteSearchDone(true);
					return response.data;
				}
			} catch (err) {
				throw err;
			}
		}
	);

	if (isLoading) {
		return <AutocompleteFieldSkeleton amount={3} />;
	}

	if (isError) return null;

	const handleClick = (city) => {
		handleCitySelect(city);
	};

	return (
		<>
			<div className="w-full flex flex-col overflow-x-auto max-h-36 font-inter absolute top-10 z-10">
				{data?.length > 0 && autocompleteSearchDone ? (
					<>
						{data.map((city, key) => (
							<div
								key={key}
								onClick={() => handleClick(city)}
								value={city.name}
								className="bg-neutral-100 flex items-end space-x-2 border-b-[1px] text-neutral-900 py-3 px-3 scroll-auto ">
								<span className="font-medium">{city.name}</span>
								<span className="text-base text-neutral-600">
									{city.country}
								</span>
							</div>
						))}
					</>
				) : data?.length === 0 && autocompleteSearchDone ? (
					<div className="w-full text-center pt-4">
						<span className="text-xl text-neutral-200 font-thin">
							No matching locations found.
						</span>
					</div>
				) : null}
			</div>
		</>
	);
}
export default AutocompleteCitiesList;
