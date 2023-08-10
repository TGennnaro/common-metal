import Image from 'next/image';

export default function Logo() {
	const size = 64;
	return (
		<a href='localhost:3000' className='flex gap-2'>
			<Image src='/logo-nobg.png' alt='logo' width={size} height={size} />
			<div className='flex flex-col font-semibold text-lg'>
				<span>Commonwealth</span>
				<span>Metal Company</span>
			</div>
		</a>
	);
}
