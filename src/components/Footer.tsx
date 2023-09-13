import Image from 'next/image';
import Logo from './Logo';

export default function Footer() {
	const size = 256;
	return (
		<div>
			<div className='bg-zinc-50 border-y border-zinc-200'>
				<div className='flex justify-center gap-8 p-8 flex-wrap max-w-screen-xl mx-auto sm:justify-between'>
					<div className='flex flex-col sm:flex-row gap-8 items-center'>
						<Image
							width={196}
							height={170}
							src='/logo-nobg.png'
							alt='commonwealth_logo'
							className='h-fit'
						/>
						<div className='flex flex-col font-medium'>
							<span className='text-lg font-semibold'>
								Commonwealth Metal Company
							</span>
							<span>1957 Pioneer Road, Building E-1</span>
							<span>Huntingdon Valley, PA 19006-0312</span>
							<span className='mt-4'>Phone: 215 394-8234</span>
							<span>Fax: 215 394-8313</span>
							<span>Email: cmc_inc_@hotmail.com</span>
						</div>
					</div>
					<div>
						<div className='flex items-center justify-between gap-8'>
							<Image
								src='/women-owned.png'
								alt='women_owned'
								width={96}
								height={96}
								className='h-fit'
							/>
							<Image
								src='/dbe-certified.webp'
								alt='dbe_certified'
								width={96}
								height={96}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='p-2 text-center'>
				<a className='text-sm font-medium' href='localhost:3000'>
					© {new Date().getFullYear()} Commonwealth Metal Company Inc.
				</a>
			</div>
		</div>
	);
}
