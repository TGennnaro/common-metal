'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

const buttonClass =
	'absolute top-0 bottom-0 z-10 w-12 bg-transparent hover:bg-black/20 transition-colors flex justify-center items-center';

function GalleryItem({
	image,
	description,
}: {
	image: string;
	description?: string;
}) {
	return (
		<div className='relative h-[400px] w-[calc(100vw_-_1rem)]'>
			<Image src={image} alt='steel_image' layout='fill' objectFit='cover' />
			{description && (
				<div className='absolute inset-0 z-10 flex items-center justify-center'>
					<span className='text-center text-xl lg:text-3xl font-bold text-white bg-black/30 p-4 rounded-md'>
						{description}
					</span>
				</div>
			)}
		</div>
	);
}

export default function Gallery() {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);
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
				},
			}}
			autoplay={true}
			autoplayDelay={5000}
		>
			<GalleryItem
				image={`/steel1.jpg`}
				description='Leading the future in steel welding and fabrication'
			/>
			<GalleryItem
				image={`/steel2.jpg`}
				description='Providing you with the equipment and services you need'
			/>
			<GalleryItem
				image={`/steel3.jpg`}
				description='Helping you build the future of your company'
			/>
		</ReactSimplyCarousel>
	);
}
