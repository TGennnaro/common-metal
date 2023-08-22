import Button from '@/components/Button';
import ContactButton from '@/components/ContactButton';
import Divider from '@/components/Divider';
import HeaderImage from '@/components/HeaderImage';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Image from 'next/image';

/*
	Bars
		- Hot rolled
		- Bar shapes
	Plates and Sheets:
		- All grades
	Structurals:
		- Angles
		- Beams
		- Channels
		- Tubing
		- Rectangular
		- Pipe
*/

function ImageItem({ image, text }: { image: string; text: string }) {
	return (
		<li className='w-40 aspect-square relative rounded-md overflow-hidden shadow-md'>
			<Image src={image} alt={text} fill={true} className='object-cover' />
			<div className='absolute inset-0 bg-black/30 text-white flex items-end justify-center pb-2 font-semibold text-2xl'>
				<span>{text}</span>
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
				<Hero title='Learn About The Products We Sell' />
			</Section>
			<Divider />
			<Section className='max-w-screen-xl mx-auto'>
				<div className='flex justify-between'>
					<div className='flex justify-center bg-zinc-100 p-8 rounded-lg shadow-xl'>
						<div className='w-80 aspect-square relative'>
							<Image
								src='/services/stacked_bars.jpg'
								alt='stacked_bars'
								fill={true}
								className='aspect-square rounded-lg'
							/>
						</div>
					</div>
					<div className='w-1/2 flex flex-col text-justify'>
						<h2 className='text-4xl font-semibold mb-4'>Steel Bars</h2>
						<p className='leading-relaxed text-xl text-zinc-600'>
							We are a trusted source for top-notch steel bars. With a focus on
							delivering reliability and performance, we proudly offer an
							extensive selection available in both hot rolled and bar shapes.
							Our commitment to exceptional quality ensures that each steel bar,
							regardless of form, meets the highest industry standards.
						</p>
					</div>
				</div>
			</Section>
			<Section className='bg-zinc-50 border-y border-zinc-200'>
				<div className='flex justify-between max-w-screen-xl mx-auto'>
					<div className='w-1/2 flex flex-col text-justify'>
						<h2 className='text-4xl font-semibold mb-4'>Plates and Sheets</h2>
						<p className='leading-relaxed text-xl text-zinc-600'>
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
			<Section className='max-w-screen-xl mx-auto'>
				<div>
					<h2 className='text-4xl font-semibold mb-4'>Structural Steel</h2>
					<p className='leading-relaxed text-xl text-zinc-600'>
						We provide a variety of structural steel options:
					</p>
					<ul className='text-xl text-zinc-600 leading-loose mt-8 flex gap-4 flex-wrap'>
						<ImageItem image='/services/angled_steel.jpg' text='Angled' />
						<ImageItem image='/services/raw_materials.jpg' text='Beams' />
						<ImageItem image='/services/channel_steel.jpg' text='Channels' />
						<ImageItem image='/services/tubes_steel.jpg' text='Tubing' />
						<ImageItem
							image='/services/rectangular_steel.webp'
							text='Rectangular'
						/>
						<ImageItem image='/services/pipe_steel.jpg' text='Pipe' />
					</ul>
				</div>
			</Section>
			<Divider />
			<Section className='flex flex-col items-center max-w-screen-xl mx-auto'>
				<Hero title='Interested In a Purchase?' />
				<ContactButton />
			</Section>
		</main>
	);
}
