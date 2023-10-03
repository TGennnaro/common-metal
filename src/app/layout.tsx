import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { cn, getMetadata } from '@/lib/utils';
import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import Image from 'next/image';

const roboto = Roboto_Flex({ subsets: ['latin'] });

export const metadata: Metadata = getMetadata('Home');

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={cn('relative', roboto.className)}>
				<div className='fixed -z-10 inset-0'>
					<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
						<defs>
							<pattern
								id='brick-wall'
								x='0'
								y='0'
								width='42'
								height='44'
								patternUnits='userSpaceOnUse'
							>
								<path
									scale={2}
									fill='#ececec'
									fillRule='evenodd'
									fillOpacity='0.3'
									d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'
								/>
							</pattern>
							<radialGradient id='gradient-1' cx='50%' cy='50%' r='50%'>
								<stop offset='50%' stopColor='#fff' stopOpacity={0} />
								<stop offset='100%' stopColor='#fff' stopOpacity={1} />
							</radialGradient>
							<mask
								id='gradient-mask'
								maskUnits='objectBoundingBox'
								maskContentUnits='objectBoundingBox'
								x='0'
								y='0'
								width='1.0'
								height='1.0'
							>
								<rect
									x='0'
									y='0'
									width='1.0'
									height='1.0'
									fill='url(#gradient-1)'
								/>
							</mask>
						</defs>
						<rect
							x='0'
							y='0'
							width='100%'
							height='100%'
							fill='url(#brick-wall)'
							mask='url(#gradient-mask)'
						/>
					</svg>
				</div>
				{/* <div className='h-[2000px]' /> */}
				<Providers>
					<NavBar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
