'use client';
import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
	onClick: () => void;
	children: React.ReactNode | string;
	variant?: string;
}

export const Button = (props: ButtonProps) => {
	const { children, onClick, variant } = props;

	const className = classNames({
		'rounded-full md:px-6 md:py-3 hover:scale-105 transition px-4 py-3': true,
		'bg-[#FFF]': variant === 'light',
		'bg-[#8195FE] text-white': variant === 'secondary',
		'bg-[#F9B96B] text-white': variant === 'primary',
	});
	return (
		<button
			className={`${className} `}
			onClick={() => {
				console.log('yoyo');
			}}
		>
			<div className='text-[12px] font-semibold tracking-wider md:text-[14px]'>
				{children}
			</div>
		</button>
	);
};

Button.defaultProps = {
	variant: 'primary',
	children: 'Button',
	onClick: () => {},
};
