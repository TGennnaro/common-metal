import HeaderImage from '@/components/HeaderImage';
import { getMetadata } from '@/lib/utils';
import { Metadata } from 'next';
import ImageGallery from './ImageGallery';
import Slideshow from './Slideshow';

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
			<Slideshow />
			<ImageGallery />
		</main>
	);
}
