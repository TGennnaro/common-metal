import { getMetadata } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata('Contact Us');

export default function Page() {
	return <div>Whoops! Nothing to see here.</div>;
}
