import { Skeleton } from "@mui/material";
function ForecastCardSkeleton() {
	return (
		<>
			<div className="w-full flex flex-col items-center space-y-2 pt-4 mb-4 font-inter">
				<Skeleton width={"30%"} height={40} />
				<Skeleton width={"20%"} height={30} />
				<span className="text-white text-7xl font-light">--&#176;C</span>
				<Skeleton width={"40%"} height={40} />
				<Skeleton width={"50%"} height={40} />
			</div>
			<div className="w-full">
				<Skeleton width={"100%"} height={"10rem"} variant="rounded"></Skeleton>
			</div>
			<div className="w-full">
				<Skeleton width={"100%"} height={"30rem"} variant="rounded"></Skeleton>
			</div>
		</>
	);
}
export default ForecastCardSkeleton;
