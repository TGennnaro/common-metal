import HeaderImage from '@/components/HeaderImage';
import ImageGallery from './ImageGallery';
import { Metadata } from 'next';
import { getMetadata } from '@/lib/utils';

export const metadata: Metadata = getMetadata('Featured Projects');

export default function Page() {
	return (
		<main>
			<HeaderImage
				image='/projects/cit_bank_park.jpg'
				alt='citizens bank park'
				title='Featured Projects'
				imageClass='object-bottom'
			/>
			<ImageGallery />
			{/* <Section className='gap-4'>
				<ProjectHeader
					title='SEPTA Wawa Station'
					service='railing installation'
					location='1490 West Baltimore Pike, Media, PA 19063'
				/>
				<div className='flex gap-4 flex-wrap'>
					{Array.from({ length: 9 }).map((_, i) => (
						<div className='relative w-64 h-80' key={i}>
							<Image
								src={`/projects/wawa_station/wawa-${i + 1}.jpg`}
								alt={`wawa_station_${i}`}
								fill={true}
								className='object-cover rounded-md shadow-md'
							/>
						</div>
					))}
				</div>
			</Section>
			<Divider />
			<Section className='gap-4'>
				<ProjectHeader
					title='SEPTA Secane Station'
					service='railing installation'
					location='1297 Providence Road, Clifton Heights, PA 19018'
				/>
				<div className='flex gap-4 flex-wrap'>
					{Array.from({ length: 8 }).map((_, i) => (
						<div className='relative w-64 h-80' key={i}>
							<Image
								src={`/projects/secane_station/secane-${i + 1}.jpg`}
								alt={`secane_station_${i}`}
								fill={true}
								className='object-cover rounded-md shadow-md'
							/>
						</div>
					))}
				</div>
			</Section>
			<Section className='gap-4'>
				<ProjectHeader
					title='Unknown Railings'
					service='railing fabrication'
					location='Unknown location'
				/>
				<div className='flex gap-4 flex-wrap'>
					{Array.from({ length: 9 }).map((_, i) => (
						<div className='relative w-64 h-80' key={i}>
							<Image
								src={`/projects/unknown_railings/unknown-${i + 1}.jpg`}
								alt={`unknown_railings_${i}`}
								fill={true}
								className='object-cover rounded-md shadow-md'
							/>
						</div>
					))}
				</div>
			</Section> */}
		</main>
	);
}
