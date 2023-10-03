'use client';

import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/styles.css';

import LazyImage from '@/components/LazyImage';
import Section from '@/components/Section';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';

const gallery = [
	{
		label: 'Galvanized Railings',
		path: '/projects/galvanized_railings/gal-%d.jpg',
		length: 4,
	},
	{
		label: 'Architectural Railroad Shelters',
		path: '/projects/architectural_rail_shelters/arch-%d.jpg',
		length: 16,
	},
	{
		label: 'Stainless Steel Elevators',
		path: '/projects/elevators/elevator-%d.jpg',
		length: 6,
	},
	{
		label: 'Steel Staircases',
		path: '/projects/stairs/stairs-%d.jpg',
		length: 10,
	},
	{
		label: 'Carbon Steel Railings with Screen Infills',
		path: '/projects/carbon_railings/railings-%d.jpg',
		length: 9,
	},
	{
		label: 'Miscellaneous Projects',
		path: '/projects/misc/misc-%d.jpg',
		length: 34,
	},
];

export default function ImageGallery() {
	const [index, setIndex] = useState(-1);
	const [page, setPage] = useState(-1);
	return (
		<>
			{gallery.map(({ label, path, length }, sectionIndex) => (
				<Section key={sectionIndex} className='py-8'>
					<div className='sticky top-20 bg-white py-4 z-[1] after:-z-[1] after:absolute after:left-0 after:right-0 after:border-t after:border-zinc-300 after:top-1/2 after:-translate-y-1/2'>
						<span className='bg-white pr-4 font-semibold leading-6 text-xl'>
							{label}
						</span>
					</div>
					<div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4'>
						{Array.from({ length }).map((_, i) => (
							<div
								className='relative rounded-md shadow-md aspect-[3/4] [&:hover>div]:opacity-100 [&:hover>img]:scale-110 overflow-hidden'
								key={i}
							>
								<LazyImage
									src={path.replace('%d', `${i + 1}`)}
									alt={`${label}_${i}`}
									fill={true}
									className='object-cover cursor-pointer transition-transform duration-300'
									onClick={() => {
										setIndex(i);
										setPage(sectionIndex);
									}}
								/>
								<div className='absolute inset-0 bg-black/30 pointer-events-none opacity-0 transition-opacity duration-300' />
							</div>
						))}
					</div>
					<Lightbox
						plugins={[Captions]}
						slides={Array.from({ length: length }).map((_, i) => ({
							src: path.replace('%d', `${i + 1}`),
							alt: `${label}_${i}`,
							title: `${label} (${i + 1}/${length})`,
						}))}
						index={index}
						open={index > -1 && page === sectionIndex}
						close={() => {
							setIndex(-1);
							setPage(-1);
						}}
					/>
				</Section>
			))}
		</>
	);
}
