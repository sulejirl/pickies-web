import { Divider } from 'app/common';
import React from 'react';
import Image from 'next/image';

export const Footer = () => {
	return (
		<div className='grid w-full gap-4 px-[90px] py-[70px]'>
			<div className='mx-8 flex justify-between'>
				<div>
					<Image
						src='/images/logoDark.png'
						alt='logoDark'
						width={136}
						height={47}
					/>
				</div>
				<div className='flex items-center justify-center gap-8 '>
					<Image
						src='/images/youtube.png'
						alt='youtube'
						width={24}
						height={24}
					/>
					<Image
						src='/images/twitter.png'
						alt='twitter'
						width={24}
						height={24}
					/>
					<Image src='/images/insta.png' alt='insta' width={24} height={24} />
					<Image
						src='/images/facebook.png'
						alt='facebook'
						width={13}
						height={24}
					/>
				</div>
			</div>
			<Divider />
			<div className='mx-8 flex items-center justify-between  py-4'>
				<div className='flex gap-[35px]'>
					<div className='text-sm'>İŞLETMELER</div>
					<div className='text-sm'>SSS</div>
					<div className='text-sm'>YARDIM</div>
					<div className='text-sm'>ŞARTLAR</div>
					<div className='text-sm'>GİZLİLİK</div>
					<div className='text-sm'>İLETİŞİM</div>
				</div>
				<div>
					<div className='flex gap-8'>
						<div>
							<Image
								src='/images/applestore.png'
								width={133}
								height={40}
								alt='applestore'
							/>
						</div>
						<div>
							<Image
								src='/images/playstore.png'
								width={133}
								height={40}
								alt='playstore'
							/>
						</div>
					</div>
				</div>
			</div>
			<Divider />
			<div className='flex justify-between'>
				<div>© 2023 Pickies Ltd</div>
				<div>All rights reserved</div>
			</div>
		</div>
	);
};
