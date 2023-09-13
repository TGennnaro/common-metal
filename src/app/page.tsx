import BlurCard from '@/components/BlurCard';
import Button from '@/components/Button';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Section from '@/components/Section';
import ServiceItem from '@/components/ServiceItem';
import { getMetadata } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata('Home');

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Gallery />
			<Section>
				<Hero
					pretext='The best in the business'
					title='Services of the highest quality'
					description='We pride ourselves on providing high quality services to our clients. We offer a wide range of services to meet the needs of any project.'
				/>
				<div className='flex justify-center gap-8 flex-wrap mt-8'>
					<ServiceItem
						title='Fabrication & Processing'
						image='/services/fabrication.jpg'
						href='/services/fabrication'
						transitionDelay={0.2}
					/>
					<ServiceItem
						title='Supply of Raw Materials'
						image='/services/raw_materials.jpg'
						href='/services/supply'
						transitionDelay={0.4}
					/>
					<ServiceItem
						title='Welding Capabilities'
						image='/services/welding.jpg'
						href='/services/welding'
						transitionDelay={0.6}
					/>
				</div>
			</Section>
			<Section className='relative z-[1] mt-32 before:absolute before:top-0 before:bottom-1/3 before:left-8 before:right-8 2xl:before:left-0 2xl:before:right-0 before:rounded-xl before:bg-gradient-to-t before:from-burgundy-700 before:to-burgundy-500 before:-z-[1]'>
				<div className='flex flex-col items-center gap-8'>
					<Hero
						pretext='see our work'
						title='Featured projects'
						variant='primary'
					/>
					<a href='/projects/featured'>
						<Button variant='white'>
							See more <ChevronRight className='w-4 h-4 ml-2' />
						</Button>
					</a>
				</div>
				<div className='grid grid-cols-3 mt-8 gap-x-8 px-8 2xl:px-8'>
					<BlurCard
						image='/projects/wawa_station/wawa-1.jpg'
						title='SEPTA Wawa Station'
						description="Fabricated and installed the safety railings for SEPTA's Wawa Station."
						className='aspect-[3/4]'
						href='/projects/featured#septa_wawa%20station'
					/>
					<BlurCard
						image='/projects/tommy_cart/tommy-1.png'
						title='Tommy Carts'
						description='Manufactured and welded Tommy Carts for Burns Recycling, the leading recycling firm on the east coast.'
						className='aspect-[3/4]'
						href='/projects/featured#tommy_carts'
					/>
					<BlurCard
						image='/projects/hs_bleachers/bleachers-6.jpg'
						title='Stadium Seating Barriers'
						description='Fabricated and installed the seating barriers for the stadium at Lower Merion High School in Ardmore, PA.'
						className='aspect-[3/4]'
						href='/projects/featured#stadium_seating%20barriers'
					/>
				</div>
			</Section>
			<Section>
				<Hero
					pretext='For any size'
					title='Solutions for any project'
					description='We offer the tools and services to complete any project, big or small. Our goal is to offer tailored solutions to meet
					the unique requirements of every project.'
				/>
				<div className='w-fit grid grid-cols-2 md:grid-cols-4 gap-8 mx-auto mt-8'>
					<ProjectCard
						transitionDelay={0.1}
						title='Bridges'
						image='/projects/bridge.jpg'
					/>
					<ProjectCard
						transitionDelay={0.2}
						title='Railroads'
						image='/projects/railroads.jpg'
					/>
					<ProjectCard
						transitionDelay={0.3}
						title='Grates'
						image='/projects/grates.webp'
					/>
					<ProjectCard
						transitionDelay={0.4}
						title='Screens'
						image='/projects/screens.jpg'
					/>
					<ProjectCard
						transitionDelay={0.5}
						title='Staircases'
						image='/projects/stairs.jpg'
					/>
					<ProjectCard
						transitionDelay={0.6}
						title='Bollards'
						image='/projects/parking_pillars.jpg'
					/>
					<ProjectCard
						transitionDelay={0.7}
						title='Railings'
						image='/projects/railings.jpg'
					/>
					<ProjectCard
						transitionDelay={0.8}
						title='Elevators'
						image='/projects/elevators.jpg'
					/>
				</div>
			</Section>
		</main>
	);
}
