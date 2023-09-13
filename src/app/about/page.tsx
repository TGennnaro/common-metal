import HeaderImage from '@/components/HeaderImage';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { getMetadata } from '@/lib/utils';
import {
	Check,
	Construction,
	HardHat,
	Hash,
	LucideIcon,
	ScrollText,
	Warehouse,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

// Reformat
// Add potential video of Suzzanne as intro
// More pictures, information about company

export const metadata: Metadata = getMetadata('About Us');

function ListItem({
	Icon = Check,
	children,
}: {
	Icon?: LucideIcon;
	children: React.ReactNode;
}) {
	return (
		<li className='flex items-center text-lg font-medium'>
			<Icon className='w-6 h-6 mr-4 bg-burgundy-500 text-white rounded-full p-1' />
			{children}
		</li>
	);
}

function ListCard({
	Icon,
	title,
	children,
}: {
	Icon: LucideIcon;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className='flex flex-col max-w-md'>
			<Icon className='w-10 h-10 bg-burgundy-500 text-white rounded-lg p-2 mb-6' />
			<h3 className='leading-7 font-semibold'>{title}</h3>
			<p className='leading-7 text-zinc-600 mt-1'>{children}</p>
		</div>
	);
}

export default function Page() {
	return (
		<main>
			<HeaderImage
				image='/about-us/hero-img.jpg'
				alt='bridge'
				title='About Us'
			/>
			<Section>
				<Hero pretext='established in 1988' title='Where it all started' />
				<div className='text-justify leading-8 text-lg indent-8'>
					<p className='mt-6'>
						Having worked in the metals industry for several decades, Suzzanne
						Stilwell had a vision for a metals company that could supply
						Tri-state area businesses with all of their metal needs at a low
						price and delivered on-time. She also wanted to create a business
						that could carry out fabrication economically and efficiently with
						the very finest in quality. Out of this vision, in 1988, Ms.
						Stilwell started Commonwealth Metal Company in Huntingdon Valley,
						Pennsylvania and a remarkable new business opened its doors.
					</p>
					<p className='mt-6'>
						Now, with over thirty years in business, Commonwealth Metal has
						grown to become a valued supplier of metal to many businesses, both
						large and small. Moreover, the company has gained a vast amount of
						experience in fabricating all manner of metal projects of all sizes.
						This is because Commonwealth Metal has the most expert fabricating
						staff with welders that are among the very finest in the metals
						industry.
					</p>
				</div>
				<div className='flex gap-16 justify-center mt-8'>
					<Image
						src='/about-us/old-image-1.jpg'
						alt='historic_image_1'
						width={300}
						height={200}
						className='aspect-[3/2] object-cover rounded-md shadow-md'
					/>
					<Image
						src='/about-us/old-image-2.jpg'
						alt='historic_image_2'
						width={300}
						height={200}
						className='aspect-[3/2] object-cover rounded-md shadow-md'
					/>
					<Image
						src='/about-us/old-image-3.jpg'
						alt='historic_image_3'
						width={300}
						height={200}
						className='aspect-[3/2] object-cover rounded-md shadow-md'
					/>
				</div>
			</Section>
			<Section>
				<Hero
					pretext='unique service'
					title='Capability statement'
					className='mb-8'
				/>
				<div className='mx-auto mb-16'>
					<ul className='grid grid-cols-2 gap-8'>
						<ListCard Icon={HardHat} title='Superior construction management'>
							Streamline your project with our expert management, delivering
							timely completion and exceptional results by optimizing resources
							and communication.
						</ListCard>
						<ListCard Icon={Construction} title='Focus on quality and safety'>
							Prioritize safety and satisfaction with our meticulous adherence
							to quality standards and stringent safety protocols.
						</ListCard>
						<ListCard Icon={Warehouse} title='Perform all work in-house'>
							Experience integrated control as our in-house experts collaborate
							seamlessly, ensuring consistent quality and reducing project
							risks.
						</ListCard>
						<ListCard
							Icon={ScrollText}
							title='Ethical and honest business practices'
						>
							Trust in our transparent and ethical approach, forging a
							dependable partnership built on integrity and open communication.
						</ListCard>
					</ul>
				</div>
				<div className='flex justify-center flex-wrap gap-8'>
					<div className='p-8 w-fit'>
						<h3 className='text-2xl font-semibold mb-8 text-center'>
							NAICS Codes
						</h3>
						<ul className='grid grid-cols-2 gap-x-16 gap-y-4'>
							<ListItem Icon={Hash}>123456 Random NAICS Code</ListItem>
							<ListItem Icon={Hash}>123456 Random NAICS Code</ListItem>
							<ListItem Icon={Hash}>123456 Random NAICS Code</ListItem>
							<ListItem Icon={Hash}>123456 Random NAICS Code</ListItem>
							<ListItem Icon={Hash}>123456 Random NAICS Code</ListItem>
							<ListItem Icon={Hash}>123456 Random NAICS Code</ListItem>
							<ListItem Icon={Hash}>123456 Random NAICS Code</ListItem>
							<ListItem Icon={Hash}>123456 Random NAICS Code</ListItem>
						</ul>
					</div>
				</div>
			</Section>
			<Section>
				<Hero
					pretext='published article'
					title='"Woman of Steel"'
					description='by Matthew Donelson, 1998'
				/>
				<Image
					src='/team/suzzanne.jpg'
					alt='suzzanne_portrait'
					width={180}
					height={180}
					className='aspect-square object-cover mx-auto rounded-full shadow-md'
				/>
				<div className='text-justify leading-8 text-lg indent-8 w-3/4 mx-auto'>
					<p className='mt-6'>
						Suzzanne Stilwell is the owner and president of Commonwealth Metal
						Company, a 100% female-owned company. The company has been in
						business since 1988. Commonwealth Metal is a warehouse distribution
						company, providing all types of metal including structural carbon
						steel, stainless steel, aluminum, copper, and brass. Commonwealth
						Metal stocks different types of metal products, distributes
						innovative and long-lasting, abrasive stair products, which can be
						used in-and-outdoors. Commonwealth Metal also cuts to size and does
						specialty fabrication. Ms. Stilwell has an extensive background in
						metal industry. Prior to founding Commonwealth Metal, she worked for
						three major metal warehouses and was purchasing agent for a company
						that purchased metal products. So, when she began Commonwealth
						Metal, Ms. Stilwell already had some insight into the business. Some
						of her company&apos;s customers include the Port Authority Transit
						Company, Huntingdon Valley Country Club, SEPTA, PennDOT, NJ Transit,
						Strick Corporation, and the Heinz Corporation. Commonwealth Metal is
						located in the Philadelphia area, it provides metals and service to
						businesses within a 50 mile radius. Commonwealth Metal has even done
						business in the Scranton area. Ms. Stilwell has a core of seven
						people working for her, and has the ability to secure additional
						qualified individuals if the job requires a bigger team. The welders
						in her service department have multiple certifications, thereby
						enabling them to perform many different and highly specialized
						services within the company.
					</p>
					<p className='mt-6'>
						Ms. Stilwell is a member of the Association of Women in the Metal
						Industry. She is a board member of the National Association of Women
						Business Owners, Greater Philadelphia Chapter, and holds the Public
						Policy & Government Affairs Chair. She is a Board member of the
						Greater Philadelphia Chamber of Commerce and Past President of the
						National Association of Women Construction (NAWIC), Valley
						Forge/Philadelphia Chapter. Ms. Stilwell&apos;s success has not gone
						unnoticed. She was recognized in the June edition of the Small
						Business News for being one of the area&apos;s Top Twenty Women in
						non-traditional businesses, and also received an award from NAWBO
						for that distinction. She has also been featured several times in
						the Small Business News of Philadelphia, and in the Business Section
						of the Philadelphia Daily News. In addition, SEPTA invited Ms.
						Stilwell to address a group at one of its small business programs
						about &quot;how to do business with their agency&quot;, and also on
						the topic of doing business as a small business person.
					</p>
					<p className='mt-6'>
						In 1997, after attending one of DRPA&apos;s workshops, Commonwealth
						Metal won a job at the DRPA. She says she regularly attends seminars
						and workshops not only to gain knowledge about &quot;how to&quot; do
						business with a potential customer, but also to meet other
						businesses, and build potential business contacts. Her feeling is,
						&quot;If the customer cares enough to have a seminar, and invite
						Commonwealth Metal Company, then she should be there&quot;. Ms.
						Stilwell feels strongly that one should treat their customer the way
						he or she would like to be treated. She adds, &quot;never
						underestimate the customer&apos;s knowledge of your products&quot;.
						She tells her business owners that being certified as a MBE or WBE
						is important, and it is a business decision, but not the answer to
						everything. She adds, business owners still have to know their
						products, know their industry, and be able to develop other
						customers in order to grow.
					</p>
				</div>
			</Section>
			{/* <div className='columns-3 gap-x-8 [&>p]:indent-8 [&>p]:text-justify leading-relaxed'>
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
			</Section> */}
		</main>
	);
}
