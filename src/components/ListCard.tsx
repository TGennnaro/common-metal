import Image from 'next/image';

export default function ListCard({
	image,
	title,
}: {
	image: string;
	title: string;
}) {
	return (
		<div className='w-2/3 h-16 relative rounded-md overflow-hidden flex items-center p-8 [&:hover_img]:filter-none [&:hover_img]:scale-110 [&:hover>div::after]:-translate-x-1/2 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all'>
			<div className='-z-10 absolute inset-0 after:absolute after:inset-0 after:bg-gradient-to-r after:from-black/40 after:to-transparent after:from-80% after:transition-transform after:duration-300 after:ease-out pointer-events-none'>
				<Image
					src={image}
					alt={title}
					fill={true}
					className='object-cover object-center grayscale [transition:_400ms_filter_ease-out,_200ms_transform_ease-out]'
				/>
			</div>
			<span className='text-2xl text-white font-semibold uppercase tracking-wide'>
				{title}
			</span>
		</div>
	);
}
