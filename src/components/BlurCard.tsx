import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function BlurCard({
	image,
	title,
	description,
	className = '',
	href,
}: {
	image: string;
	title: string;
	description?: string;
	className?: string;
	href?: string;
}) {
	return (
		<a className='relative overflow-hidden rounded-md shadow-md' href={href}>
			<div
				className={cn(
					'hover:blur-sm aspect-square [transition:_300ms_filter_linear] ease-out [&:hover>img]:scale-110 [&:hover+div]:opacity-100 [&:hover~[data-hideaway-title]]:translate-y-full',
					className
				)}
			>
				<Image
					src={image}
					alt={title}
					fill={true}
					className='object-cover transition-transform duration-500 ease-out'
				/>
			</div>
			<div className='absolute inset-0 z-10 pointer-events-none text-white flex flex-col justify-end p-4 bg-black/40 opacity-0 transition-opacity duration-500 ease-out'>
				<span className='font-semibold text-lg'>{title}</span>
				<hr className='my-2 w-16' />
				<span className='italic text-sm'>{description}</span>
			</div>
			<div
				className='absolute left-0 right-0 bottom-0 h-16 pointer-events-none bg-black/60 flex justify-center items-center transition-transform duration-500 ease-out text-center p-4'
				data-hideaway-title
			>
				<span
					className={`text-lg text-white font-semibold uppercase tracking-wide`}
				>
					{title}
				</span>
			</div>
		</a>
	);
}
