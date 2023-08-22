import ContactButton from '@/components/ContactButton';
import Divider from '@/components/Divider';
import HeaderImage from '@/components/HeaderImage';
import Hero from '@/components/Hero';
import Section from '@/components/Section';

// More pizzazz
// Pictures, a bit more animation

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
					title={
						<span>
							Your <span className='text-red-600'>Top Pick</span> For Quality
							Welding
						</span>
					}
					description='Commonwealth Metal is one of the finest welding companies in the tri-state area. We offer multiple types of welding by certified, expert professional welders with over thirty years experience. We take on many different types of projects, both large and small.'
				/>
			</Section>
			<Divider />
			<Section className='max-w-screen-lg mx-auto'>
				<Hero
					title='Welds We Offer'
					description='We offer specialty welding for stainless steel and aluminum.'
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
			<Divider />
			<Section className='items-center'>
				<Hero title='Have a question about what we offer? Ask us!' />
				<ContactButton />
			</Section>
		</main>
	);
}
