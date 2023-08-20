import React from 'react';
import Image from 'next/image';
export const ThirdSection = () => {
	return (
		<div className='grid w-full gap-[32px] bg-[#F8F8F8] px-[20px] py-[76px] md:px-[90px]'>
			<div className='text-[30px] font-semibold leading-snug text-[#424557] md:text-[56px]'>
				Bize Katıl ve yeni bir topluluğun parçası ol. Pick’lemeye başla!
			</div>
			<div className='text-2xl font-normal text-[#424557]'>
				Uygulamayı Hemen İndir
			</div>
			<div className='flex gap-4'>
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
	);
};
