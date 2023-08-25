import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { getMetadata } from '@/lib/utils';
import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';

const roboto = Roboto_Flex({ subsets: ['latin'] });

export const metadata: Metadata = getMetadata('Home');

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={roboto.className}>
				<Providers>
					<NavBar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
