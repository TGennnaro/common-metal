import ContactButton from '@/components/ContactButton';
import Divider from '@/components/Divider';
import HeaderImage from '@/components/HeaderImage';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { getMetadata } from '@/lib/utils';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = getMetadata('Supply of Raw Materials');

function ImageItem({ image, text }: { image: string; text: string }) {
	return (
		<li className='w-40 aspect-square relative rounded-md overflow-hidden shadow-md'>
			<Image src={image} alt={text} fill={true} className='object-cover' />
			<div className='absolute inset-0 bg-black/30 text-white flex items-end justify-center pb-2 font-semibold text-2xl'>
				<span className='text-center'>{text}</span>
			</div>
		</li>
	);
}

export default function Page() {
	return (
		<main>
			<HeaderImage
				image='/services/raw_steel.jpg'
				alt='raw_steel'
				title='Raw Material Supply'
				imageClass='object-center'
			/>
			<Section>
				<Hero
					pretext='affordable products'
					title='Learn about our products'
					description='Commonwealth Metal has always striven to provide our customers the very best products at the lowest prices. This has been a hallmark of the business for over thirty years and has brought us many satisfied repeat customers. Commonwealth sales professionals are trained to comb all markets and producers of metal products to find the best prices and most convenient delivery possibilities.'
				/>
			</Section>
			<Divider />
			<Section>
				<div className='flex justify-between'>
					<div className='w-1/2 flex flex-col text-justify'>
						<Hero
							pretext='top-notch'
							title='Steel Bars'
							className='text-left m-0'
						/>
						<p className='leading-8 text-lg text-zinc-600 mt-6'>
							We are a trusted source for top-notch steel bars. With a focus on
							delivering reliability and performance, we proudly offer an
							extensive selection available in both hot rolled and bar shapes.
							Our commitment to exceptional quality ensures that each steel bar,
							regardless of form, meets the highest industry standards.
						</p>
					</div>
					<div className='flex justify-center bg-zinc-100 p-8 rounded-lg shadow-xl'>
						<div className='w-80 aspect-square relative overflow-hidden'>
							<Image
								src='/services/stacked_bars.jpg'
								alt='stacked_bars'
								fill={true}
								className='aspect-square rounded-lg object-cover object-left-bottom scale-150'
							/>
						</div>
					</div>
				</div>
			</Section>
			<Section sectionClass='bg-zinc-50 border-y border-zinc-200'>
				<div className='flex justify-between max-w-screen-xl mx-auto'>
					<div className='w-1/2 flex flex-col text-justify'>
						<Hero
							pretext='robust'
							title='Steel Plates and Sheets'
							className='text-left m-0'
						/>
						<p className='leading-8 text-lg text-zinc-600 mt-6'>
							We specialize in top-grade steel plates and sheets, available in
							all grades. Whether you seek the robustness of steel plates or the
							flexibility of sheets, we deliver products that consistently meet
							the most rigorous industry standards. Our commitment to
							reliability and precision cements us as a dependable source for
							steel plates and sheets.
						</p>
					</div>
					<div className='flex justify-center bg-white p-8 rounded-lg shadow-xl'>
						<div className='w-80 aspect-square relative'>
							<Image
								src='/services/stacked_plates.jpg'
								alt='stacked_bars'
								fill={true}
								className='aspect-square rounded-lg object-cover'
							/>
						</div>
					</div>
				</div>
			</Section>
			<Section>
				<div>
					<Hero
						pretext='Any variety'
						title='Structural Steel'
						description='We provide a variety of structural steel options.'
						className='text-left m-0'
					/>
					<ul className='text-xl text-zinc-600 leading-loose mt-8 flex gap-4 flex-wrap'>
						<ImageItem image='/services/angled_steel.jpg' text='Angled' />
						<ImageItem image='/services/raw_materials.jpg' text='Beams' />
						<ImageItem image='/services/channel_steel.jpg' text='Channels' />
						<ImageItem image='/services/tubes_steel.jpg' text='Tubing' />
						<ImageItem
							image='/services/rectangular_steel.webp'
							text='Square and Rectangular'
						/>
						<ImageItem image='/services/pipe_steel.jpg' text='Pipe' />
					</ul>
				</div>
			</Section>
			<Divider />
			<Section className='items-center'>
				<Hero pretext='let us know' title='Interested in a purchase?' />
				<ContactButton />
			</Section>
		</main>
	);
}
