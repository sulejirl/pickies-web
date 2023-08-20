import React from 'react';
import Image from 'next/image';
import { Divider } from '../common/Divider';
import { Button } from '../common/Button';
export const FourthSection = () => {
	return (
		<div className='grid w-full grid-rows-2 gap-[21px] px-[20px] py-[130px] md:grid-cols-2 md:grid-rows-1 md:px-[90px] '>
			<div className='row-span-1 md:col-span-1'>
				<div className='relative h-[300px] w-[350px] md:h-[566px] md:w-[489px]'>
					<Image src='/images/illustration4.png' fill alt='illustration4' />
				</div>
			</div>
			<div className='row-span-1 place-self-center md:col-span-1'>
				<div className='grid gap-6'>
					<div className='text-center text-[22px] font-semibold text-[#424557] md:text-left  md:text-4xl'>
						Sıra beklemeden sipariş ver
					</div>
					<Divider />
					<div className='items-stretch px-[20px] text-[16px] font-normal text-[#424557] md:px-0 md:text-left md:text-xl'>
						Sadece tek tıkla bulunduğun bölgedeki üye işletmelerin menülerine
						ulaş, siparişini oluştur ve Pickies teslim noktasından sıra
						beklemeden siparişini teslim al.
					</div>
				</div>
				<div className='mt-5 flex justify-center md:mt-[70px] md:justify-start'>
					<Button>HEMEN İNDİR</Button>
				</div>
			</div>
		</div>
	);
};
