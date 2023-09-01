'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import Balancer from 'react-wrap-balancer';

const buttonClass =
	'absolute top-0 bottom-0 z-10 w-12 bg-transparent hover:bg-black/20 transition-colors flex justify-center items-center';

function GalleryItem({
	image,
	header,
	description,
}: {
	image: string;
	header?: string;
	description?: string;
}) {
	return (
		<div className='relative h-[500px] w-[calc(100vw_-_1rem)]'>
			<Image
				src={image}
				alt='steel_image'
				fill={true}
				sizes='100vw'
				className='object-cover'
			/>
			{header || description ? (
				<div className='absolute inset-0 p-16 z-10 flex flex-col items-center justify-center bg-black/40'>
					{header && (
						<span className='text-center text-3xl lg:text-6xl !leading-snug font-bold text-white rounded-md [text-shadow:_0_2px_4px_rgba(0,_0,_0,_0.4)] max-w-screen-xl'>
							<Balancer>{header}</Balancer>
						</span>
					)}
					{description && (
						<span className='text-center text-base lg:text-2xl !leading-snug font-semibold text-white rounded-md [text-shadow:_0_2px_4px_rgba(0,_0,_0,_0.4)] max-w-screen-xl'>
							<Balancer>{description}</Balancer>
						</span>
					)}
				</div>
			) : null}
		</div>
	);
}

export default function Gallery() {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);
	return (
		<div className='shadow-lg'>
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
				autoplayDelay={10000}
			>
				<GalleryItem
					image={`/steel1.jpg`}
					header='COMMONWEALTH METAL COMPANY'
					description='For over thirty years, metal fabricating and sales in the Tri-State area'
				/>
				<GalleryItem
					image={`/steel2.jpg`}
					header='Providing you with the service and expertise you need'
				/>
				<GalleryItem
					image={`/steel3.jpg`}
					header='Leading the future in steel welding and fabrication'
				/>
			</ReactSimplyCarousel>
		</div>
	);
}
