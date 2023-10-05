import "./App.css";
import LocationInput from "./components/LocationInput";
import { QueryClient, QueryClientProvider } from "react-query";
import ForecastCard from "./components/ForecastCard";
import { useState } from "react";
const queryClient = new QueryClient({});

function App() {
	const [city, setCity] = useState(null);
	const [isDay, setIsDay] = useState();
	const getCity = (city) => {
		setCity(city);
	};
	const getIsDay = (isDay) => {
		setIsDay(isDay);
	};

	return (
		<QueryClientProvider client={queryClient}>
			<div
				style={{
					backgroundImage: `${
						isDay && city
							? "url(day-background.jpg)"
							: !isDay && city
							? "url(bg-night.jpg)"
							: "url(bg-clouds.svg)"
					}`,
					backgroundSize: "cover",
					backgroundAttachment: "fixed",
				}}
				className={`
					${city ? "h-auto" : "h-screen"} flex flex-col items-center pt-2 pb-10`}>
				<div className="w-11/12 md:w-2/3 lg:w-1/4 flex flex-col items-center">
					<LocationInput handleCityState={getCity} />
					{city ? (
						<ForecastCard city={city} handleIsDay={getIsDay} />
					) : (
						<span className="text-3xl text-white text-center pt-8 font-thin">
							Search a city to see current and upcoming weather
						</span>
					)}
				</div>
			</div>
		</QueryClientProvider>
	);
}

export default App;
