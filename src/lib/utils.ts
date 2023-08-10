import { twMerge } from 'tailwind-merge';

export function cn(...args: string[]) {
	return twMerge(...args);
}
