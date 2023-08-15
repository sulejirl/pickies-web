import React from 'react';
import Image from 'next/image';
import { Button } from '../common';
export const FirstSection = () => {
	return (
		<div className='w-full bg-[#FFBC59] px-[90px] py-[50px] bg-blend-color-burn md:py-[90px]'>
			<div>
				<Image src='/images/logo.png' width={210} height={75} alt='logo' />
			</div>
			<div className='flex flex-col justify-between md:flex-row'>
				<div>
					<div className='mt-20 max-w-[930px] text-[34px] font-bold leading-normal text-white md:text-[58px]'>
						Pickies ike siparişini oluştur sıra beklemeden teslim al
					</div>
					<div className='mt-14 flex gap-8'>
						<Button variant='light'>ÜYE İŞLETMEYİM</Button>
						<Button variant='secondary'>APP'İ İNDİR</Button>
					</div>
				</div>
				<div>
					<Image
						src='/images/coffee.png'
						alt='coffee'
						width={600}
						height={500}
					/>
				</div>
			</div>
		</div>
	);
};
