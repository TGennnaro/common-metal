'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const navItems = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'Services', href: '/services' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'Contact', href: '/contact' },
];

function NavItem({ label, href }: { label: string; href: string }) {
	return (
		<li>
			<a
				href={href}
				className='hover:text-red-600 py-2 relative transition-colors duration-300 before:transition-opacity before:duration-300 before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-red-600 before:opacity-0 hover:before:opacity-100 before:pointer-events-none'
			>
				{label}
			</a>
		</li>
	);
}

export default function NavBar() {
	const [scrolled, setScrolled] = useState(false);
	const [navOpen, setNavOpen] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) setScrolled(true);
			else setScrolled(false);
		});
	}, []);
	return (
		<div
			className={`sticky top-0 p-4 flex justify-between items-center transition z-[999] bg-white ${
				scrolled ? 'border-b border-zinc-200 shadow-md' : ''
			}`}
		>
			<Logo />
			<ul
				className={`gap-4 font-medium absolute top-full -z-[999] left-0 p-4 bg-white w-full flex flex-col md:gap-8 md:p-0 md:static md:flex-row md:w-auto transition-all md:opacity-100 md:translate-y-0 ${
					navOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
				}`}
			>
				{navItems.map((item, index) => (
					<NavItem key={index} label={item.label} href={item.href} />
				))}
			</ul>
			<Button
				className='bg-white border border-zinc-200 block md:hidden'
				onClick={() => setNavOpen(!navOpen)}
			>
				<Menu />
			</Button>
		</div>
	);
}
