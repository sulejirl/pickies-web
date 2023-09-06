import { Divider } from 'app/common';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
	return (
		<div className='grid w-full gap-4 px-[40px] py-[70px] md:px-[90px]'>
			<div className='flex flex-col justify-start gap-7 md:mx-8 md:flex-row md:justify-between md:gap-0'>
				<div>
					<Image
						src='/images/logoDark.png'
						alt='logoDark'
						width={136}
						height={47}
					/>
				</div>
				<div className='flex gap-8 md:items-center md:justify-center '>
					<Image
						src='/images/youtube.png'
						alt='youtube'
						width={24}
						height={24}
					/>
					<Link href={'https://twitter.com/pickiesapp'} target='_blank'>
						<Image
							src='/images/twitter.png'
							alt='twitter'
							width={24}
							height={24}
						/>
					</Link>

					<Link href='https://www.instagram.com/pickiesapp/' target='_blank'>
						<Image src='/images/insta.png' alt='insta' width={24} height={24} />
					</Link>

					<Image
						src='/images/facebook.png'
						alt='facebook'
						width={13}
						height={24}
					/>
				</div>
			</div>
			<Divider />
			<div className='flex flex-col items-center py-4  md:mx-8 md:flex-row md:justify-between'>
				<div className='flex flex-col gap-[35px] md:flex-row'>
					<Link href='/yayinlanma-kriterleri' className='text-sm'>
						SSS
					</Link>
					<div className='text-sm'>YARDIM</div>
					<div className='text-sm'>ŞARTLAR</div>
					<div className='text-sm'>GİZLİLİK</div>
					<div className='text-sm'>İLETİŞİM</div>
				</div>
				<div className='mt-7 md:mt-0'>
					<div className='flex gap-8'>
						<div>
							<Link
								href='https://apps.apple.com/tr/app/pickies/id1660462435'
								target='_blank'
							>
								<Image
									src='/images/applestore.png'
									width={133}
									height={40}
									alt='applestore'
								/>
							</Link>
						</div>
						<div>
							<Link
								href='https://play.google.com/store/apps/details?id=com.pickies'
								target='_blank'
							>
								<Image
									src='/images/playstore.png'
									width={133}
									height={40}
									alt='playstore'
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Divider />
			<div className='flex justify-between'>
				<div>© 2023 Pickies</div>
				<div>All rights reserved</div>
			</div>
		</div>
	);
};
