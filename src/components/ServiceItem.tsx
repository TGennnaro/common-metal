'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServiceItem({
	image,
	title,
	href,
	textSize = 'text-2xl',
	transitionDelay = 0,
}: {
	image: string;
	title: string;
	href?: string;
	textSize?: string;
	transitionDelay?: number;
}) {
	return (
		<motion.a
			href={href}
			className='w-80 aspect-square relative rounded-md overflow-hidden shadow-md lg:[&:hover>div]:max-h-full lg:[&:hover>div]:h-full lg:[&:hover>img]:scale-110'
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
			<Image
				src={image}
				alt='steel_image'
				fill={true}
				className='object-cover transition-transform duration-500 ease-out'
			/>
			<div className='absolute bottom-0 left-0 right-0 h-1/4 max-h-16 bg-black/60 text-center flex items-center justify-center transition-all ease-out duration-500'>
				<span className='text-lg lg:text-2xl text-white font-semibold uppercase tracking-wide'>
					{title}
				</span>
			</div>
		</motion.a>
	);
}
