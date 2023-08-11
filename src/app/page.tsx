import Gallery from '@/components/Gallery';
import ProjectCard from '@/components/ProjectCard';
import ServiceItem from '@/components/ServiceItem';
import { Metadata } from 'next';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

export const metadata: Metadata = {
	title: 'Commonwealth Metal Company',
	description: 'Change me for better SEO',
};

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Gallery />
			<section className='flex flex-col gap-8 py-16 px-8'>
				<h1 className='text-center text-4xl font-semibold italic'>
					We Provide <span className='text-red-600'>High Quality</span> Services
				</h1>
				<div className='flex justify-center gap-8'>
					<ServiceItem
						title='Fabrication & Processing'
						image='/services/fabrication.webp'
						href='/services/fabrication'
					/>
					<ServiceItem
						title='Supply of Raw Materials'
						image='/services/raw_materials.jpg'
					/>
					<ServiceItem
						title='Welding Capabilities'
						image='/services/welding.webp'
					/>
				</div>
			</section>
			{/* <hr className='w-5/6 mx-auto' /> */}
			<section className='flex flex-col gap-8 py-16 px-8 bg-zinc-50 border-y border-zinc-200'>
				<div className='text-center'>
					<h1 className='text-center text-4xl font-semibold italic mb-4'>
						<Balancer>
							<span className='text-red-600'>Solutions</span> For Any Project
						</Balancer>
					</h1>
					<span className='text-zinc-600 leading-relaxed'>
						<Balancer>
							At Commonwealth Metal, we take pride in being your dependable
							partner for welding and fabrication needs, offering tailored
							solutions to meet the unique requirements of every project.
						</Balancer>
					</span>
				</div>
				<div className='w-fit grid grid-cols-4 gap-8 mx-auto'>
					<ProjectCard title='Bridges' image='/projects/bridge.jpg' />
					<ProjectCard title='Railroads' image='/projects/railroads.jpg' />
					<ProjectCard title='Grates' image='/projects/grates.webp' />
					<ProjectCard title='Screens' image='/projects/screens.jpg' />
					<ProjectCard title='Staircases' image='/projects/stairs.jpg' />
					<ProjectCard
						title='Parking Pillars'
						image='/projects/parking_pillars.jpg'
					/>
					<ProjectCard title='Railings' image='/projects/railings.jpg' />
					<ProjectCard title='Elevators' image='/projects/elevators.jpg' />
				</div>
			</section>
			{/* <hr className='w-5/6 mx-auto' /> */}
			<section className='flex flex-col gap-8 py-16 px-8'>
				<h1 className='text-center text-4xl font-semibold italic'>
					Trusted By <span className='text-red-600'>Experts</span> Since 1988
				</h1>
				<div className='flex gap-8 justify-center flex-wrap'>
					<Image
						src='clients/septa.svg'
						alt='septa_logo'
						width={128}
						height={128}
					/>
					<Image
						src='clients/septa.svg'
						alt='septa_logo'
						width={128}
						height={128}
					/>
					<Image
						src='clients/septa.svg'
						alt='septa_logo'
						width={128}
						height={128}
					/>
					<Image
						src='clients/septa.svg'
						alt='septa_logo'
						width={128}
						height={128}
					/>
					<Image
						src='clients/septa.svg'
						alt='septa_logo'
						width={128}
						height={128}
					/>
					<Image
						src='clients/septa.svg'
						alt='septa_logo'
						width={128}
						height={128}
					/>
				</div>
				{/* SEPTA, Walsh Company, PKF, Rockport Construction */}
			</section>
			{/* <section className='px-8 py-16 flex justify-between flex-wrap gap-4'>
				<div className='max-w-screen-md'>
					<h1 className='text-4xl font-medium mb-4'>Who we are...</h1>
					<p className='leading-normal text-gray-600'>
						At Commonwealth Metal Company, we are the cornerstone of exceptional
						metal fabrication and welding services in Huntingdon Valley, PA.
						With a firm foundation rooted in our local community, we are more
						than just a company - we are a team of dedicated artisans and
						skilled professionals who are passionate about transforming raw
						metal into works of art. Our commitment to precision and innovation
						drives us to push boundaries and redefine possibilities within the
						realm of metalwork. With each project we undertake, from intricate
						custom designs to industrial-grade solutions, we embody the spirit
						of craftsmanship and excellence that sets us apart. As proud members
						of the Huntingdon Valley community, we take great pride in being
						your trusted partners for all things metal. Commonwealth Metal
						Company: where expertise meets imagination, forging a future that
						melds creativity and strength.
					</p>
				</div>
				<Image src='/steel4.jpg' alt='steel_image' width={300} height={300} />
			</section> */}
			{/* <section className='px-8 py-16 flex flex-col gap-4 justify-between'>
				<h1 className='text-4xl font-medium mb-4'>What we do...</h1>
				<div className='flex justify-center gap-8 flex-wrap'>
					<ServiceItem
						title='Metal Manufacturing'
						image='/steel5.jpeg'
						description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore recusandae nobis corrupti inventore vel nulla, molestiae soluta aut consequuntur porro officiis, odio, nam voluptatibus autem fuga laborum accusamus possimus aspernatur rerum reiciendis hic laudantium quas corporis! Ullam, totam. Beatae, quisquam!'
					/>
					<ServiceItem
						title='Welding Services'
						image='/steel6.jpg'
						description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore recusandae nobis corrupti inventore vel nulla, molestiae soluta aut consequuntur porro officiis, odio, nam voluptatibus autem fuga laborum accusamus possimus aspernatur rerum reiciendis hic laudantium quas corporis! Ullam, totam. Beatae, quisquam!'
					/>
					<ServiceItem
						title='Steel Fabrication'
						image='/steel7.png'
						description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore recusandae nobis corrupti inventore vel nulla, molestiae soluta aut consequuntur porro officiis, odio, nam voluptatibus autem fuga laborum accusamus possimus aspernatur rerum reiciendis hic laudantium quas corporis! Ullam, totam. Beatae, quisquam!'
					/>
				</div>
			</section> */}
		</main>
	);
}
