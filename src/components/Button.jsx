import React from 'react';
import arrowright from '../assets/arrow-right-white.png'

const Button = ({text}) => {
  return (
       <div className='border-2 border-[#CC9615] p-[5px] cursor-pointer rounded w-[197px] border-dashed h-[4rem] items-center flex'>
                <div className='flex bg-[#CC9615] items-center border border-[#CC9615] px-[10px]  w-[197px] rounded justify-around h-[3rem]'>
                <button className='text-[18px] font-[Inter] text-[white] font-[600] leading-[21.78px]'>{text}</button>
<img src={arrowright} className='w-[2rem] h-[2rem]' alt='arrow'/>
                </div>
         </div>
  );
}

export default Button;
