import React from 'react';
import Image from 'next/image';
import { Button, Swiper } from '../common';
import Link from 'next/link';
export const FirstSection = () => {
	return (
		<div className='w-full bg-[#FFBC59] px-[20px] py-[50px] bg-blend-color-burn md:px-[90px] md:py-[90px]'>
			<div className='relative h-[36px] w-[101px] md:h-[75px] md:w-[210px]'>
				<Image src='/images/logoWhite.png' fill alt='logo' />
			</div>
			<div className='flex flex-col justify-between md:flex-row'>
				<div>
					<div className='mt-5 text-[34px] font-bold leading-normal text-white md:mt-20 md:max-w-[930px] md:text-[58px]'>
						Pickies ike siparişini oluştur sıra beklemeden teslim al
					</div>
					<div className='ml-4 mt-4 flex gap-4 md:ml-0 md:mt-14 md:gap-8'>
						<Link href='https://customer.pickiesapp.com/' target='_blank'>
							<Button variant='light'>ÜYE İŞLETMEYİM</Button>
						</Link>

						{/* <Button variant='secondary'>APP'İ İNDİR</Button> */}
					</div>
				</div>
				<div>
					<Swiper direction='vertical'>
						<div className='relative h-[550px] w-[370px] self-center md:h-[700px] md:w-[650px]'>
							<Image
								src='/images/coffee.svg'
								alt='coffee'
								fill
								objectFit='contain'
							/>
						</div>
						<div className='relative h-[550px] w-[370px] self-center md:h-[700px] md:w-[650px]'>
							<Image
								src='/images/drink.svg'
								alt='drink'
								fill
								objectFit='contain'
							/>
						</div>
						<div className='relative h-[550px] w-[370px] self-center md:h-[700px] md:w-[650px]'>
							<Image
								src='/images/burger.svg'
								alt='burger'
								fill
								objectFit='contain'
							/>
						</div>
						<div className='relative h-[550px] w-[370px] self-center md:h-[700px] md:w-[650px]'>
							<Image
								src='/images/pizza.svg'
								alt='pizza'
								fill
								objectFit='contain'
							/>
						</div>
						<div className='relative h-[550px] w-[370px] self-center md:h-[700px] md:w-[650px]'>
							<Image
								src='/images/sushi.svg'
								alt='sushi'
								fill
								objectFit='contain'
							/>
						</div>
					</Swiper>
				</div>
			</div>
		</div>
	);
};
