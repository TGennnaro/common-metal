import Section from '@/components/Section';
import { getMetadata } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata('Gallery');

export default function Page() {
	return (
		<main>
			<Section>
				<div className='sticky top-20 bg-white py-4 z-[1] after:-z-[1] after:absolute after:left-0 after:right-0 after:border-t after:border-zinc-300 after:top-1/2 after:-translate-y-1/2'>
					<span className='bg-white pr-4 font-semibold leading-6'>
						Galvanized Railings
					</span>
				</div>
				<div className='bg-zinc-400 w-96 h-[500px]' />
				<div className='bg-zinc-400 w-96 h-[500px]' />
				<div className='bg-zinc-400 w-96 h-[500px]' />
			</Section>
			<Section>
				<h1 className='sticky top-20'>Grates</h1>
				<div className='bg-zinc-500 w-96 h-[500px]' />
				<div className='bg-zinc-500 w-96 h-[500px]' />
				<div className='bg-zinc-500 w-96 h-[500px]' />
			</Section>
		</main>
	);
}
