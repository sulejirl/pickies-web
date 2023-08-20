import React from 'react';
import Image from 'next/image';

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
					<Image
						src='/images/applestoregreen.png'
						width={133}
						height={40}
						alt='applestoregreen'
					/>
				</div>
				<div>
					<Image
						src='/images/playstoregreen.png'
						width={133}
						height={40}
						alt='playstoregreen'
					/>
				</div>
			</div>
		</div>
	);
};
