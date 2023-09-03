'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const SwiperComponent = ({ children, ...rest }: any) => {
	console.log(rest);
	return (
		<Swiper
			{...rest}
			direction={'vertical'}
			loop={true}
			spaceBetween={30}
			slidesPerView={1}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			modules={[Autoplay, Pagination, Navigation]}
			className='h-[550px] md:h-[700px]'
		>
			{children.map((child: any) => {
				return <SwiperSlide className='!h-auto'>{child}</SwiperSlide>;
			})}
		</Swiper>
	);
};
