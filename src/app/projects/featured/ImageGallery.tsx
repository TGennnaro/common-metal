'use client';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import Divider from '@/components/Divider';
import Section from '@/components/Section';
import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import {
	Building,
	LucideIcon,
	MapPin,
	Recycle,
	School,
	Train,
	TreeDeciduous,
} from 'lucide-react';
import { Captions } from 'yet-another-react-lightbox/plugins';
import Button from '@/components/Button';

interface Project {
	title: string;
	service: string;
	location: string;
	folder: string;
	length: number;
	icon: LucideIcon;
	testimonial?: Testimonial;
}

const projects: Project[] = [
	{
		title: 'SEPTA Wawa Station',
		service: 'railing installation',
		location: '1490 West Baltimore Pike, Media, PA 19063',
		folder: '/projects/wawa_station/wawa-%d.jpg',
		length: 9,
		icon: Train,
	},
	{
		title: 'SEPTA Secane Station',
		service: 'railing installation',
		location: '1297 Providence Road, Secane, PA 19018',
		folder: '/projects/secane_station/secane-%d.jpg',
		length: 10,
		icon: Train,
	},
	{
		title: 'Tommy Carts',
		service: 'cart fabrication',
		location: 'Richard S. Burns & Company Recycling',
		folder: '/projects/tommy_cart/tommy-%d.png',
		length: 4,
		icon: Recycle,
		testimonial: {
			quote:
				"Suzzanne Stilwell and her team at Commonwealth surpassed our expectations! Our 'Tommy Cart' was superbly crafted and proved a perfect fit in our inventory sorting process. To future clients of Commonwealth Metal, I give the firm my strongest recommendation! Know that my company is certain to use Commonwealth Metal in the future for all of our metal fabrication needs!",
			name: 'Richard Burns',
			title: 'Founder and CEO',
			company: 'Burns Recycling',
		},
	},
	{
		title: 'Stadium Safety Rails',
		service: 'safety rails installation',
		location: '435 Crossfield Road, King of Prussia, PA 19406',
		folder: '/projects/hs_bleachers/bleachers-%d.jpg',
		length: 8,
		icon: School,
	},
	{
		title: 'Park Benches',
		service: 'bench fabrication',
		location: 'Unknown location',
		folder: '/projects/benches/bench-%d.jpg',
		length: 5,
		icon: TreeDeciduous,
	},
];

interface Testimonial {
	quote: string;
	name: string;
	title: string;
	company: string;
}

function ProjectHeader({
	title,
	service,
	location,
}: {
	title: string;
	service: string;
	location: string;
}) {
	return (
		<div className='flex flex-col mb-8'>
			<span className='uppercase text-burgundy-400 font-bold text-bold'>
				{service}
			</span>
			<h1 className='text-4xl font-semibold mb-2'>{title}</h1>
			<h2 className='text-sm flex items-center text-zinc-600'>
				<MapPin className='w-4 h-4 mr-2' />
				{location}
			</h2>
		</div>
	);
}

function Testimonial({ quote, title, name, company }: Testimonial) {
	return (
		<div className='flex flex-col-reverse lg:flex-row lg:w-full lg:justify-center lg:gap-16 mx-auto mt-16'>
			<div className='relative w-[300px] h-[150px] mt-8'>
				<Image
					src='/clients/richard_burns_recycling.jpg'
					alt='burns_recycling'
					fill={true}
					className='object-contain'
				/>
			</div>
			<div className='w-full lg:w-1/2'>
				<blockquote className='text-lg font-semibold leading-8 mb-8'>
					&quot;{quote}&quot;
				</blockquote>
				<div className='flex flex-col'>
					<span className='font-semibold'>{name}</span>
					<span className='text-zinc-600'>
						{title} of {company}
					</span>
				</div>
			</div>
		</div>
	);
}

export default function ImageGallery() {
	const [index, setIndex] = useState(-1);
	const [page, setPage] = useState(-1);
	return (
		<>
			<div className='sticky top-20 bg-white z-10 border-y border-zinc-200 shadow-md'>
				<div className='flex gap-4 p-4 overflow-x-auto max-w-screen-xl mx-auto w-full'>
					{projects.map((project, i) => (
						<a
							href={`#${project.title.toLowerCase().replace(' ', '_')}`}
							key={project.title}
							className='shrink-0'
						>
							<Button variant='outline'>
								<project.icon className='w-4 h-4 mr-2' />
								{project.title}
							</Button>
						</a>
					))}
				</div>
			</div>
			{projects.map((project, projectIndex) => (
				<div key={project.title}>
					<Section
						sectionClass='gap-4 scroll-mt-28'
						id={project.title.toLowerCase().replace(' ', '_')}
					>
						<ProjectHeader
							title={project.title}
							service={project.service}
							location={project.location}
						/>
						<div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
							{Array.from({ length: project.length }).map((_, i) => (
								<div
									className='relative rounded-md aspect-[3/4] [&:hover>div]:opacity-100 [&:hover>img]:scale-110 overflow-hidden'
									key={i}
								>
									<Image
										src={project.folder.replace('%d', `${i + 1}`)}
										alt={`${project.title}_${i}`}
										fill={true}
										className='object-cover shadow-md cursor-pointer transition-transform duration-300'
										onClick={() => {
											setIndex(i);
											setPage(projectIndex);
										}}
									/>
									<div className='absolute inset-0 bg-black/30 pointer-events-none opacity-0 transition-opacity duration-300' />
								</div>
							))}
						</div>
						{project.testimonial && <Testimonial {...project.testimonial} />}
						<Lightbox
							plugins={[Captions]}
							slides={Array.from({ length: project.length }).map((_, i) => ({
								src: project.folder.replace('%d', `${i + 1}`),
								alt: `${project.title}_${i}`,
								title: `${project.title} (${i + 1}/${project.length})`,
							}))}
							index={index}
							open={index > -1 && page === projectIndex}
							close={() => {
								setIndex(-1);
								setPage(-1);
							}}
						/>
					</Section>
					{projectIndex < projects.length - 1 && <Divider />}
				</div>
			))}
		</>
	);
}
