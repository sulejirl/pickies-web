import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const SeventhSection = () => {
	return (
		<div className='grid w-full gap-8 bg-[#F8F8F8] px-[20px] py-[104px] md:px-[90px]'>
			<div className='text-[30px] font-semibold leading-[60px] text-[#424557] md:text-[56px]'>
				Bize Ulaşın
			</div>
			<div className='text-[21px] md:text-2xl'>
				Her türlü soru, destek ve görüşleriniz için bizimle iletişime
				geçebilirsin!
			</div>
			<Link href='mailto:info@pickiesapp.com'>
				<div className='flex gap-4  md:text-lg'>
					<Image
						src='/images/mailIcon.png'
						width={33}
						height={23}
						alt='playstoregreen'
					/>
					info@pickiesapp.com
				</div>
			</Link>
		</div>
	);
};
