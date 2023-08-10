import Image from 'next/image';

export default function Footer() {
	const size = 256;
	return (
		<div>
			<div className='flex p-8 gap-8 flex-wrap bg-zinc-50 border-y border-zinc-200'>
				<Image src='/logo-nobg.png' alt='logo' width={size} height={size} />
				<div className='flex flex-col font-medium'>
					<span className='text-lg font-semibold'>
						Commonwealth Metal Company
					</span>
					<span>1957 Pioneer Road, Building E-1</span>
					<span>Huntington Valley, PA 19006-0312</span>
					<span className='mt-4'>Phone: 215 938-0810</span>
					<span>Fax: 215 938-0129</span>
					<span>Email: cmc_inc_@hotmail.com</span>
				</div>
				<div className='ml-auto'>
					<ul className='flex gap-4'>
						<li>
							<a href='linkedin.com'>LinkedIn</a>
						</li>
						<li>
							<a href='facebook.com'>Facebook</a>
						</li>
						<li>
							<a href='twitter.com'>Twitter</a>
						</li>
					</ul>
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
