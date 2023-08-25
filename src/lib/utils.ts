import config from '@/config/config';
import { twMerge } from 'tailwind-merge';

export function cn(...args: string[]) {
	return twMerge(...args);
}

export function getMetadata(title: string) {
	return {
		title: config.seo.title.replace('%s', title),
		description: config.seo.description,
	};
}
