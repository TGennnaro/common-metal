'use client';

import LazyImage from './LazyImage';

export default function ProjectCard({
	title,
	image,
}: {
	title: string;
	image: string;
}) {
	return (
		<div className='w-36 lg:w-[300px] aspect-square relative rounded-md overflow-hidden shadow-md lg:[&:hover>div]:h-full lg:[&:hover>img]:scale-110'>
			<LazyImage
				src={image}
				alt='steel_image'
				fill={true}
				className='object-cover transition-transform duration-500 ease-out'
			/>
			<div className='absolute bottom-0 left-0 right-0 h-1/4 max-h-16 bg-black/60 text-center flex items-center justify-center transition-all ease-out duration-500'>
				<span className='text-sm lg:text-2xl text-white font-semibold uppercase tracking-wide'>
					{title}
				</span>
			</div>
		</div>
	);
}
