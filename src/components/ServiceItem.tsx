import Image from 'next/image';

export default function ServiceItem({
	image,
	title,
	href,
	textSize = 'text-2xl',
}: {
	image: string;
	title: string;
	href?: string;
	textSize?: string;
}) {
	return (
		<a
			className='w-80 aspect-square relative rounded-md overflow-hidden shadow-md lg:[&:hover>div]:max-h-full lg:[&:hover>div]:h-full lg:[&:hover>img]:scale-110'
			href={href}
		>
			<Image
				src={image}
				alt='steel_image'
				fill={true}
				className='object-cover transition-transform duration-500 ease-out'
			/>
			<div className='absolute bottom-0 left-0 right-0 h-1/4 max-h-16 bg-black/60 text-center flex items-center justify-center transition-all ease-out duration-500'>
				<span className='text-lg lg:text-2xl text-white font-semibold uppercase tracking-wide'>
					{title}
				</span>
			</div>
		</a>
	);
}
