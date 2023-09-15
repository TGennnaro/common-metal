'use client';

import { motion } from 'framer-motion';
import LazyImage from './LazyImage';

export default function ProjectCard({
	title,
	image,
	transitionDelay = 0,
}: {
	title: string;
	image: string;
	transitionDelay?: number;
}) {
	return (
		<motion.div
			className='w-36 lg:w-[300px] aspect-square relative rounded-md overflow-hidden shadow-md lg:[&:hover>div]:h-full lg:[&:hover>img]:scale-110'
			initial='hide'
			whileInView='show'
			viewport={{ once: true }}
			variants={{
				hide: {
					opacity: 0,
					y: 60,
				},
				show: {
					opacity: 1,
					y: 0,
					transition: {
						duration: 1,
						delay: transitionDelay,
					},
				},
			}}
		>
			<LazyImage
				src={image}
				alt='steel_image'
				fill={true}
				className='object-cover transition-transform duration-500 ease-out'
			/>
			<div className='absolute bottom-0 left-0 right-0 h-1/4 max-h-16 bg-black/60 text-center flex items-center justify-center transition-all ease-out duration-500'>
				<span className='text-sm lg:text-2xl text-white font-semibold uppercase tracking-wide'>
					{title}
				</span>
			</div>
		</motion.div>
	);
}
