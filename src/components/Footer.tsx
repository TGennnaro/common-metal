import Image from 'next/image';

export default function Footer() {
	const size = 256;
	return (
		<div>
			<div className='bg-zinc-50 border-y border-zinc-200'>
				<div className='flex p-8 gap-8 flex-wrap max-w-screen-xl mx-auto'>
					<Image src='/logo-nobg.png' alt='logo' width={size} height={size} />
					<div className='flex flex-col font-medium'>
						<span className='text-lg font-semibold'>
							Commonwealth Metal Company
						</span>
						<span>1957 Pioneer Road, Building E-1</span>
						<span>Huntingdon Valley, PA 19006-0312</span>
						<span className='mt-4'>Phone: 215 938-0810</span>
						<span>Fax: 215 938-0129</span>
						<span>Email: cmc_inc_@hotmail.com</span>
					</div>
					<div className='ml-auto flex flex-col justify-between items-center'>
						<ul className='flex gap-4 font-medium'>
							<li>
								<a href='https://linkedin.com' target='_blank'>
									LinkedIn
								</a>
							</li>
							<li>
								<a href='https://facebook.com' target='_blank'>
									Facebook
								</a>
							</li>
							<li>
								<a href='https://twitter.com' target='_blank'>
									Twitter
								</a>
							</li>
						</ul>
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
