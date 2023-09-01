import Section from '@/components/Section';
import { getMetadata } from '@/lib/utils';
import { Metadata } from 'next';
import ImageGallery from './ImageGallery';
import HeaderImage from '@/components/HeaderImage';

export const metadata: Metadata = getMetadata('Gallery');

export default function Page() {
	return (
		<main>
			<HeaderImage
				image='/projects/gallery_header.jpg'
				alt='gallery header'
				title='Project Gallery'
				imageClass='object-center'
			/>
			<ImageGallery />
		</main>
	);
}
