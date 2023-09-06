import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
					<Link
						href='https://apps.apple.com/tr/app/pickies/id1660462435'
						target='_blank'
					>
						<Image
							src='/images/applestore.png'
							width={133}
							height={40}
							alt='applestore'
						/>
					</Link>
				</div>
				<div>
					<Link
						href='https://play.google.com/store/apps/details?id=com.pickies'
						target='_blank'
					>
						<Image
							src='/images/playstore.png'
							width={133}
							height={40}
							alt='playstore'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
