import NorthIcon from "@mui/icons-material/North";
function WindDirection({ isDay, windDegree }) {
	return (
		<>
			<div className="w-2/5 flex items-center justify-center relative border-4 border-neutral-300 border-dashed rounded-full aspect-square">
				<NorthIcon
					style={{
						fontSize: "7rem",
						transform: `rotate(${windDegree}deg)`,
					}}
					className={`text-neutral-50`}
				/>

				<div className={`absolute top-0 flex items-center justify-center`}>
					<div
						className={` flex items-center justify-center text-xl w-8 h-8 rounded-full font-bold text-neutral-50 translate-y-[-50%] ${
							isDay
								? `bg-neutral-600`
								: !isDay
								? `bg-neutral-800`
								: "bg-neutral-800"
						}`}>
						N
					</div>
				</div>
				<div className={`absolute right-0 flex items-center justify-center`}>
					<div
						className={` flex items-center justify-center text-xl w-8 h-8 rounded-full font-bold text-neutral-50 translate-x-[50%] ${
							isDay
								? `bg-neutral-600`
								: !isDay
								? `bg-neutral-800`
								: "bg-neutral-800"
						}`}>
						E
					</div>
				</div>
				<div className={`absolute bottom-0 flex items-center justify-center `}>
					<div
						className={` flex items-center justify-center text-xl w-8 h-8  rounded-full font-bold text-neutral-50 translate-y-[50%] ${
							isDay
								? `bg-neutral-600`
								: !isDay
								? `bg-neutral-800`
								: "bg-neutral-800"
						}`}>
						W
					</div>
				</div>
				<div className={`absolute left-0 flex items-center justify-center`}>
					<div
						className={` flex items-center justify-center text-xl w-8 h-8 rounded-full font-bold text-neutral-50 translate-x-[-50%] ${
							isDay
								? `bg-neutral-600`
								: !isDay
								? `bg-neutral-800`
								: "bg-neutral-800"
						}`}>
						S
					</div>
				</div>
			</div>
		</>
	);
}
export default WindDirection;
