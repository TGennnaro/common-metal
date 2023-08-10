import Gallery from '@/components/Gallery';
import ServiceItem from '@/components/ServiceItem';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'Commonwealth Metal Company',
	description: 'Change me for better SEO',
};

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Gallery />
			<section className='px-8 py-16 flex justify-between flex-wrap gap-4'>
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
			</section>
			<hr className='w-5/6 mx-auto' />
			<section className='px-8 py-16 flex flex-col gap-4 justify-between'>
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
			</section>
		</main>
	);
}
