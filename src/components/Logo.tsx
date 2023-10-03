import Image from 'next/image';

export default function Logo({
	hasLink = true,
	hasText = false,
	width = 400 / 6,
	height = 350 / 6,
}: {
	hasLink?: boolean;
	hasText?: boolean;
	width?: number;
	height?: number;
}) {
	return (
		<a href={hasLink ? 'localhost:3000' : undefined} className='flex gap-2'>
			<Image
				src='/commonwealth_new.svg'
				alt='logo'
				width={width}
				height={height}
			/>
			{hasText && (
				<div className='flex flex-col'>
					<span className='font-semibold text-lg'>Commonwealth</span>
					<span className='text-sm font-medium tracking-widest'>
						Metal Company
					</span>
				</div>
			)}
		</a>
	);
}
