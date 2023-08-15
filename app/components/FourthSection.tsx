import React from 'react';
import Image from 'next/image';
import { Divider } from '../common/Divider';
import { Button } from '../common/Button';
export const FourthSection = () => {
	return (
		<div className='grid w-full grid-cols-2 gap-[21px] px-[90px] py-[130px]'>
			<div className='col-span-1'>
				<Image
					src='/images/illustration4.png'
					width={489}
					height={566}
					alt='illustration4'
				/>
			</div>
			<div className='col-span-1 place-self-center'>
				<div className='grid gap-6'>
					<div className='text-4xl font-semibold  text-[#424557]'>
						Sıra beklemeden sipariş ver
					</div>
					<Divider />
					<div className='text-xl font-normal text-[#424557]'>
						Sadece tek tıkla bulunduğun bölgedeki üye işletmelerin menülerine
						ulaş, siparişini oluştur ve Pickies teslim noktasından sıra
						beklemeden siparişini teslim al.
					</div>
				</div>
				<div className='mt-[70px]'>
					<Button>HEMEN İNDİR</Button>
				</div>
			</div>
		</div>
	);
};
