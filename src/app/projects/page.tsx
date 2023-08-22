import HeaderImage from '@/components/HeaderImage';
import Section from '@/components/Section';
import Image from 'next/image';

export default function Page() {
	return (
		<main>
			<HeaderImage
				image='/projects/cit_bank_park.jpg'
				alt='citizens bank park'
				title='Project Showcase'
				imageClass='object-bottom'
			/>
			<Section>
				<div>
					<h1 className='text-4xl font-semibold mb-2'>SEPTA Wawa Station</h1>
					<h2 className='text-sm'>1490 West Baltimore Pike, Media, PA 19063</h2>
					<h3 className='py-8 text-xl font-medium'>
						Fabricated and installed the railings.
					</h3>
					<div className='flex gap-4 flex-wrap'>
						{Array.from({ length: 8 }).map((_, i) => (
							<div className='relative w-64 h-80' key={i}>
								<Image
									src={`/projects/wawa_station/wawa-${i + 1}.jpg`}
									alt={`wawa_station_${i}`}
									fill={true}
									className='object-cover'
								/>
							</div>
						))}
					</div>
				</div>
			</Section>
		</main>
	);
}
