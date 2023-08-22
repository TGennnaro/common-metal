import { ReactNode } from 'react';
import Balancer from 'react-wrap-balancer';

export default function Hero({
	title,
	description,
}: {
	title: ReactNode;
	description?: string;
}) {
	return (
		<div className='text-center'>
			<h1 className='text-center text-5xl font-semibold'>
				<Balancer>{title}</Balancer>
			</h1>
			{description && (
				<span className='leading-relaxed text-xl text-zinc-600 mt-4 block'>
					<Balancer>{description}</Balancer>
				</span>
			)}
		</div>
	);
}
