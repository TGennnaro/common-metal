import Image from 'next/image';

export default function ServiceItem({
	image,
	title,
	href,
}: {
	image: string;
	title: string;
	href?: string;
}) {
	return (
		<a
			className='w-[400px] aspect-square relative rounded-md overflow-hidden shadow-md [&:hover>div]:h-full [&:hover>img]:scale-110'
			href={href}
		>
			<Image
				src={image}
				alt='steel_image'
				fill={true}
				className='object-cover transition-transform duration-500 ease-out'
			/>
			<div className='absolute bottom-0 left-0 right-0 h-16 bg-black/60 text-center flex items-center justify-center transition-all ease-out duration-500'>
				<span className='text-2xl text-white font-semibold uppercase tracking-wide'>
					{title}
				</span>
			</div>
		</a>
	);
}