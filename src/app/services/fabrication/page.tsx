import BlurCard from '@/components/BlurCard';
import ContactButton from '@/components/ContactButton';
import Divider from '@/components/Divider';
import HeaderImage from '@/components/HeaderImage';
import Hero from '@/components/Hero';
import ListCard from '@/components/ListCard';
import Section from '@/components/Section';
import { getMetadata } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata('Fabrication & Processing');

export default function Page() {
	return (
		<main>
			<HeaderImage
				image='/services/fabrication2.jpg'
				alt='fabrication'
				title='Fabrication and Processing'
				imageClass='object-bottom'
			/>
			<Section>
				<Hero
					pretext='Specialized expertise'
					title='Expertise for any enterprise'
					description='Elevate your enterprise with specialized expertise in fabrication and processing, offering tailored solutions crafted for diverse industries and their unique needs.'
				/>
				<ul className='flex gap-8 justify-center flex-wrap'>
					<BlurCard
						title='Rail and post'
						description='We offer a wide variety of rail and post options. We can also customize your railings to fit your needs.'
						image='/services/rail&post.jpg'
						className='w-[300px]'
					/>
					<BlurCard
						title='Short-run railings'
						description='We fabricate and install custom railings for your home or business. Contact us for a customized quote!'
						image='/services/short_run_rail.jpg'
						className='w-[300px]'
					/>
					<BlurCard
						title='Window Guards / Security Screens'
						description='Our expert welders fabricate customized window guards and security screens to suit your unique needs.'
						image='/projects/screens.jpg'
						className='w-[300px]'
					/>
				</ul>
			</Section>
			<Section>
				<Hero
					pretext='one-stop-shop'
					title='The all-in-one solution'
					description='We do it all! Our specialty services are sure to impress.'
				/>
				<div className='flex flex-col gap-2 items-center'>
					<ListCard image='/abilities/cutting-metal.jpg' title='Cutting' />
					<ListCard image='/abilities/grinding.jpg' title='Grinding' />
					<ListCard image='/abilities/galvanizing.jpg' title='Galvanizing' />
					<ListCard
						image='/abilities/painting.jpg'
						title='Priming & Painting'
					/>
					<ListCard
						image='/abilities/shearing.jpg'
						title='Punching & Drilling'
					/>
				</div>
				<h2 className='text-center text-xl font-semibold italic'>
					... and much more!
				</h2>
			</Section>
			<Divider />
			<Section className='items-center'>
				<Hero pretext='contact us' title='Ask us about our services' />
				<ContactButton />
			</Section>
		</main>
	);
}
