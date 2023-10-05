function WeatherPropertyContainer({
	icon,
	iconText,
	size,
	lowercase,
	children,
}) {
	return (
		<>
			<div
				className={`relative w-full px-4 py-1 w-${size} px-2 mt-4 rounded-xl flex flex-col font-inter z-20`}>
				<div className="absolute bg-neutral-500 bg-opacity-5 backdrop-brightness-[0.6] backdrop-blur-[3px] w-full h-full top-0 left-0 -z-10 rounded-xl"></div>
				<span
					className={`text-sm text-neutral-300 ${
						lowercase ? "" : "uppercase"
					} font-medium py-1`}>
					{icon} {iconText}
				</span>
				{children}
			</div>
		</>
	);
}
export default WeatherPropertyContainer;
