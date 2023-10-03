import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function HeaderImage({
	image,
	alt,
	title,
	imageClass,
}: {
	image: string;
	alt: string;
	title: string;
	imageClass?: string;
}) {
	return (
		<section className='w-full h-[240px] relative shadow-lg'>
			<Image
				src={image}
				alt={alt}
				fill={true}
				className={cn('object-cover object-top', imageClass ?? '')}
			/>
			<div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
				<span className='text-4xl font-bold text-white [text-shadow:_0_2px_4px_rgba(0,_0,_0,_0.4)]'>
					{title}
				</span>
			</div>
		</section>
	);
}
