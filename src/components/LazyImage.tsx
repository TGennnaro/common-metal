import { forwardRef } from 'react';
import Image from 'next/image';
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import { Skeleton } from './ui/skeleton';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	alt: string;
	width?: number | `${number}`;
	height?: number | `${number}`;
	placeholder?: PlaceholderValue;
	fill?: boolean;
}

const LazyImage = forwardRef<HTMLImageElement, ImageProps>(
	({ src, alt, ...props }, ref) => {
		return (
			<>
				<Skeleton className='absolute inset-0' />
				<Image ref={ref} alt={alt} src={src} {...props} />
			</>
		);
	}
);

LazyImage.displayName = 'LazyImage';
export default LazyImage;
