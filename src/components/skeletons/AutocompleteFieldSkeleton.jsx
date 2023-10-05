import { Skeleton } from "@mui/material";
function AutocompleteFieldSkeleton({ amount }) {
	const skeletons = Array.from({ length: amount }).map((_, index) => (
		<div
			key={index}
			className="bg-neutral-100 flex items-end space-x-2 border-b-[1px] text-neutral-900 py-3 px-3 scroll-auto">
			<Skeleton variant="rounded" width={200} animation="wave" />
			<Skeleton variant="rounded" width={100} animation="wave" />
		</div>
	));

	return (
		<div className="w-full flex bg-red-500 flex-col overflow-x-auto max-h-36 font-inter absolute top-10 z-10">
			{skeletons}
		</div>
	);
}
export default AutocompleteFieldSkeleton;
