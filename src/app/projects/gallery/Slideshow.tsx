'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useWindowSize } from 'rooks';

const buttonClass =
	'absolute top-0 bottom-0 z-10 w-12 bg-transparent hover:bg-black/20 transition-colors flex justify-center items-center';

function SlideshowItem({
	src,
	title,
	description,
	className,
}: {
	src: string;
	title: string;
	description?: string;
	className?: string;
}) {
	return (
		<div className='relative w-[calc(100vw_-_1rem)] max-w-[1280px] h-[500px]'>
			<Image
				src={src}
				alt={title}
				fill={true}
				sizes='100vw'
				className={cn('object-cover', className)}
			/>
			<div className='absolute bottom-0 right-0 left-0 bg-black/40 text-white flex flex-col gap-2 py-4 px-8'>
				<span className='text-3xl font-semibold'>{title}</span>
				<span className='text-lg'>{description}</span>
			</div>
		</div>
	);
}

export default function Slideshow() {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);
	const { innerWidth } = useWindowSize();

	return (
		<ReactSimplyCarousel
			activeSlideIndex={activeSlideIndex}
			onRequestChange={setActiveSlideIndex}
			itemsToShow={1}
			itemsToScroll={1}
			forwardBtnProps={{
				className: `${buttonClass} right-0`,
				children: <ChevronRight color='white' />,
			}}
			backwardBtnProps={{
				className: `${buttonClass} left-0`,
				children: <ChevronLeft color='white' />,
			}}
			speed={500}
			easing='ease-in-out'
			containerProps={{
				style: {
					flexFlow: 'row',
					position: 'relative',
					margin: '4rem auto',
					maxWidth: '1280px',
					width: (innerWidth || 0) - 16,
				},
			}}
			autoplay={true}
			autoplayDelay={10000}
		>
			<SlideshowItem
				src='/projects/comcast_building.jpg'
				title='Philadelphia Comcast Building'
				description='Supplied metal'
			/>
			<SlideshowItem
				src='/projects/philly_airport.jpg'
				title='Philadelphia International Airport Expansion'
				description='Architectural drawings'
			/>
			<SlideshowItem
				src='/projects/citizens_bank_park.jpg'
				title="Citizen's Bank Park"
				description='Supplied metal'
			/>
		</ReactSimplyCarousel>
	);
}
