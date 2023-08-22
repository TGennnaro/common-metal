import Button from '@/components/Button';
import HeaderImage from '@/components/HeaderImage';
import Section from '@/components/Section';
import Image from 'next/image';

// Reformat
// Add potential video of Suzzanne as intro
// More pictures, information about company
// Less paragraph-style content

export default function Page() {
	return (
		<main>
			<HeaderImage
				image='/about-us/hero-img.jpg'
				alt='bridge'
				title='About Us'
			/>
			<Section>
				<div className='columns-3 gap-x-8 [&>p]:indent-8 [&>p]:text-justify leading-relaxed'>
					<div className='w-fit mx-auto'>
						<Image
							src='/about-us/suzzanne.jpg'
							alt='suzzanne_portrait'
							width={300}
							height={600}
							className='float-left mb-8'
						/>
					</div>
					<p>
						Welcome to Commonwealth Metal Company, a leading force in the world
						of welding and fabrication. Founded and led by Suzzane Stilwell, a
						trailblazing entrepreneur with a deep-rooted passion for the metal
						industry, our 100% female-owned company has been shaping exceptional
						metal solutions since 1988. With an extensive background in the
						field, Ms. Stilwell&apos;s journey began by working in major metal
						warehouses and serving as a purchasing agent, which provided her
						with invaluable insights into the industry&apos;s dynamics.
					</p>
					<p>
						Nestled around Philadelphia, Commonwealth Metal stands as a
						warehouse distribution powerhouse, offering an array of metal
						options including structural carbon steel, stainless steel,
						aluminum, copper, and brass. Our commitment to innovation and
						durability is evident through our range of abrasive stair products,
						designed for both indoor and outdoor use. What sets us apart is our
						dedication to tailoring solutions - from precision cutting to
						specialty fabrication - to cater to the unique demands of each
						project. At the core of our company is a team of skilled
						professionals, including certified welders, who bring diverse
						expertise to every endeavor. We take pride in our affiliations with
						industry associations such as the Association of Women in the Metal
						Industry, and our leadership roles in the National Association of
						Women Business Owners and the Greater Philadelphia Chamber of
						Commerce.
					</p>
					<p>
						Our founder, Ms. Stilwell, embodies the spirit of excellence, which
						has earned her recognition as one of the area&apos;s Top Twenty
						Women in non-traditional businesses and accolades from various
						quarters. We believe in the power of building strong relationships,
						and that&apos;s why we actively participate in seminars and
						workshops to connect with like-minded businesses and potential
						partners. At Commonwealth Metal, we operate with the core principle
						that treating customers with respect and product knowledge forms the
						foundation of success. While being certified as a MBE or WBE is
						vital, we understand that growth stems from a deep understanding of
						our products, industry, and the cultivation of lasting customer
						relationships. Join us as we continue to forge new pathways in the
						metal industry, delivering quality, reliability, and innovation to
						every project we touch.
					</p>
				</div>
			</Section>
		</main>
	);
}
