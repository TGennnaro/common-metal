import Image from 'next/image';

export default function ServiceItem({
	image,
	title,
	description,
}: {
	image: string;
	title: string;
	description: string;
}) {
	return (
		<div className='w-[300px] border border-zinc-200 p-8 rounded-md shadow-md flex flex-col gap-4 items-center justify-between'>
			<Image
				src={image}
				alt='steel_image'
				width={196}
				height={196}
				className='rounded-md'
			/>
			<div className='flex flex-col gap-4 items-center'>
				<span className='text-xl font-medium'>{title}</span>
				<span className='text-zinc-600'>{description}</span>
			</div>
		</div>
	);
}
