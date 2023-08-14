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
			<h1 className='text-center text-4xl font-semibold italic'>
				<Balancer>{title}</Balancer>
			</h1>
			{description && (
				<span className='text-zinc-600 leading-relaxed mt-4 block'>
					<Balancer>{description}</Balancer>
				</span>
			)}
		</div>
	);
}
