import ContactButton from '@/components/ContactButton';
import Divider from '@/components/Divider';
import HeaderImage from '@/components/HeaderImage';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { getMetadata } from '@/lib/utils';
import { Metadata } from 'next';

// More pizzazz
// Pictures, a bit more animation

export const metadata: Metadata = getMetadata('Welding Capabilities');

export default function Page() {
	return (
		<main>
			<HeaderImage
				image='/services/welding_big.png'
				alt='welder'
				title='Welding Capabilities'
				imageClass='object-bottom'
			/>
			<Section>
				<Hero
					pretext='only the best'
					title='Your top pick for quality welding'
					description='Commonwealth Metal is one of the finest welding companies in the tri-state area. We offer multiple types of welding by certified, expert professional welders with over thirty years experience. We take on many different types of projects, both large and small.'
				/>
			</Section>
			<Section>
				<Hero
					pretext='what we offer'
					title='Stainless steel and aluminum welds'
				/>
				<div className='mt-4'>
					<h1 className='text-2xl font-semibold mb-4'>MIG Welding</h1>
					<span className='text-lg'>
						Gas-Metal Arc Welding (GMAW) is a welding process where an electric
						arc forms between a consumable MIG wire electrode and the workplace
						metal.
					</span>
				</div>
				<hr />
				<div>
					<h1 className='text-2xl font-semibold mb-4'>Flux Core Welding</h1>
					<span className='text-lg'>
						Notable for keeping the weld pool separate from the atmosphere with
						two types of shielding methods.
					</span>
				</div>
				<hr />
				<div>
					<h1 className='text-2xl font-semibold mb-4'>TIG Welding</h1>
					<span className='text-lg'>
						Gas-Tungsten Arc Welding (GTAW) is a welding method that uses a
						non-consumable tungsten electrode to produce the weld.
					</span>
				</div>
			</Section>
			<Section className='items-center'>
				<Hero pretext='get in touch' title='Unsure about what we offer?' />
				<ContactButton />
			</Section>
		</main>
	);
}
