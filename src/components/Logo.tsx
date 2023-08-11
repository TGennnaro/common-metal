import Image from 'next/image';

export default function Logo() {
	const size = 64;
	return (
		<a href='localhost:3000' className='flex gap-2'>
			<Image src='/logo-nobg.png' alt='logo' width={size} height={size} />
			<div className='flex flex-col'>
				<span className='font-semibold text-lg'>Commonwealth</span>
				<span className='text-sm font-medium tracking-widest'>
					Metal Company
				</span>
			</div>
		</a>
	);
}
