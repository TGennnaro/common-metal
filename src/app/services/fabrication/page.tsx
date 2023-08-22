import BlurCard from '@/components/BlurCard';
import Button from '@/components/Button';
import ContactButton from '@/components/ContactButton';
import Divider from '@/components/Divider';
import HeaderImage from '@/components/HeaderImage';
import Hero from '@/components/Hero';
import ListCard from '@/components/ListCard';
import Section from '@/components/Section';
import { Phone } from 'lucide-react';

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
					title={
						<span>
							<span className='text-red-600'>Expertise</span> For Any Enterprise
						</span>
					}
					description='Elevate your enterprise with specialized expertise in fabrication and processing, offering tailored solutions crafted for diverse industries and their unique needs.'
				/>
				<ul className='flex gap-8 justify-center flex-wrap'>
					{/* <ServiceItem
						title='Rail and post'
						image='/services/rail&post.jpg'
						size={250}
						textSize='text-lg'
					/> */}
					<BlurCard
						title='Rail and post'
						description='We offer a wide variety of rail and post options. We can also customize your railings to fit your needs.'
						image='/services/rail&post.jpg'
						size={250}
					/>
					<BlurCard
						title='Short-run railings'
						description='We fabricate and install custom railings for your home or business. Contact us for a customized quote!'
						image='/services/short_run_rail.jpg'
						size={250}
					/>
					<BlurCard
						title='Window Guards / Security Screens'
						description='Our expert welders fabricate customized window guards and security screens to suit your unique needs.'
						image='/projects/screens.jpg'
						size={250}
					/>
				</ul>
			</Section>
			<Divider />
			<Section>
				<Hero
					title={
						<span>
							Your <span className='text-red-600'>One-Stop-Shop</span> For All
							Things Metal
						</span>
					}
					description='Cutting - grinding - galvanizing - burning - shearing - we do it all! Our specialty services are sure to impress.'
				/>
				<div className='flex flex-col gap-2 items-center'>
					<ListCard image='/abilities/cutting-metal.jpg' title='Cutting' />
					<ListCard image='/abilities/grinding.jpg' title='Grinding' />
					<ListCard image='/abilities/galvanizing.jpg' title='Galvanizing' />
					<ListCard image='/abilities/painting.jpg' title='Prime and Paint' />
					<ListCard image='/abilities/shearing.jpg' title='Shearing' />
				</div>
				<h2 className='text-center text-xl font-semibold italic'>
					... and much more!
				</h2>
			</Section>
			<Divider />
			<Section className='items-center'>
				<Hero title={<span>Need something not listed? Let us know!</span>} />
				<ContactButton />
			</Section>
		</main>
	);
}
