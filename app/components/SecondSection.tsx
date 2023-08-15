import React from 'react';
import Image from 'next/image';

export const SecondSection = () => {
	return (
		<div className='my-[50px] h-auto w-full md:my-[130px]'>
			<div className='mx-[20px] md:mx-[90px]'>
				<div className='row-span-2 grid gap-[75px] '>
					<div className='text-center text-4xl font-semibold text-[#424557]'>
						Neler Yapabilirsin?
					</div>
					<div className='flex flex-col justify-around gap-[80px] md:flex-row'>
						<div className='row-span-2 grid'>
							<div className='place-self-center'>
								<Image
									src='/images/isletmeler.png'
									width={100}
									height={100}
									alt='isletmeler'
								/>
							</div>
							<div className='mt-6 place-self-center text-2xl font-semibold'>
								İşletmelere Göz At
							</div>
						</div>
						<div className='row-span-2 grid'>
							<div className='place-self-center'>
								<Image
									src='/images/phone.png'
									width={100}
									height={100}
									alt='phone'
								/>
							</div>
							<div className='mt-6 place-self-center text-2xl font-semibold'>
								Hızla Sipariş Ver
							</div>
						</div>
						<div className='row-span-2 grid'>
							<div className='place-self-center'>
								<Image
									src='/images/take.png'
									width={100}
									height={100}
									alt='take'
								/>
							</div>
							<div className='mt-6 place-self-center text-2xl font-semibold'>
								Siparişini Teslim Al
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
