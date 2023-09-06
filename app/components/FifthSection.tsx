import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const FifthSection = () => {
	return (
		<div className='grid w-full gap-8 bg-[#F8F8F8] px-[20px] py-[90px] md:px-[90px]'>
			<div className='text-[30px] font-semibold leading-snug text-[#424557] md:text-[56px]'>
				Kolay. Hızlı. Eğlenceli.
			</div>
			<div className='text-[20px] font-normal text-[#424557] md:text-2xl'>
				Uygulamayı Hemen İndir
			</div>
			<div className='flex gap-4'>
				<div>
					<Link
						href='https://apps.apple.com/tr/app/pickies/id1660462435'
						target='_blank'
					>
						<Image
							src='/images/applestoregreen.png'
							width={133}
							height={40}
							alt='applestoregreen'
						/>
					</Link>
				</div>
				<div>
					<Link
						href='https://play.google.com/store/apps/details?id=com.pickies'
						target='_blank'
					>
						<Image
							src='/images/playstoregreen.png'
							width={133}
							height={40}
							alt='playstoregreen'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
