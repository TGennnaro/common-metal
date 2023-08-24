'use client';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import Divider from '@/components/Divider';
import Section from '@/components/Section';
import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import { Building, MapPin } from 'lucide-react';
import { Captions } from 'yet-another-react-lightbox/plugins';
import Button from '@/components/Button';

const projects = [
	{
		title: 'SEPTA Wawa Station',
		service: 'railing installation',
		location: '1490 West Baltimore Pike, Media, PA 19063',
		folder: '/projects/wawa_station/wawa-%d.jpg',
		length: 9,
		icon: MapPin,
	},
	{
		title: 'SEPTA Secane Station',
		service: 'railing installation',
		location: '1297 Providence Road, Clifton Heights, PA 19018',
		folder: '/projects/secane_station/secane-%d.jpg',
		length: 8,
		icon: MapPin,
	},
	{
		title: 'Unknown Railings',
		service: 'railing fabrication',
		location: 'Unknown location',
		folder: '/projects/unknown_railings/unknown-%d.jpg',
		length: 9,
		icon: Building,
	},
];

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
			<span className='uppercase text-red-600 font-bold text-bold'>
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

export default function ImageGallery() {
	const [index, setIndex] = useState(-1);
	const [page, setPage] = useState(-1);
	return (
		<>
			<div className='flex gap-4 sticky top-20 bg-white/40 backdrop-blur-lg z-10 p-4 border-y border-zinc-200 overflow-x-auto'>
				{projects.map((project, i) => (
					<a
						href={`#${project.title.toLowerCase().replace(' ', '_')}`}
						key={project.title}
						className='shrink-0'
					>
						<Button className='p-2 rounded-3xl bg-white border border-zinc-200 text-black hover:brightness-90'>
							<project.icon className='w-4 h-4 mr-2' />
							{project.title}
						</Button>
					</a>
				))}
			</div>
			{projects.map((project, projectIndex) => (
				<>
					<Section
						className='gap-4 scroll-mt-28'
						id={project.title.toLowerCase().replace(' ', '_')}
						key={project.title}
					>
						<ProjectHeader
							title={project.title}
							service={project.service}
							location={project.location}
						/>
						<div className='flex gap-4 flex-wrap'>
							{Array.from({ length: project.length }).map((_, i) => (
								<div
									className='relative w-64 h-80 [&:hover>div]:opacity-100 [&:hover>img]:scale-110 overflow-hidden'
									key={i}
								>
									<Image
										src={project.folder.replace('%d', `${i + 1}`)}
										alt={`${project.title}_${i}`}
										fill={true}
										className='object-cover rounded-md shadow-md cursor-pointer transition-transform duration-300'
										onClick={() => {
											setIndex(i);
											setPage(projectIndex);
										}}
									/>
									<div className='absolute inset-0 bg-black/30 pointer-events-none opacity-0 transition-opacity duration-300' />
								</div>
							))}
						</div>
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
				</>
			))}
		</>
	);
}
