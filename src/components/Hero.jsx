import React from 'react';
import Nav from './Nav'
import vector from "../assets/Vector.png";
const Hero = () => {
  return (
    <div className='bg-custom h-[100vh] bg-cover'>
<Nav/>    
<div className='flex flex-col justify-between items-center text-center gap-[2rem] text-[white] pt-[11.7%]'>
    <p className='font-[Poppins] font-[600] leading-[30px] text-[20px]'>We are here to help!</p>
    <div className='flex flex-col items-center'>
    <p className='font-[Poppins] font-[700] leading-[84px] text-[56px]'>GOT SOME QUESTIONS?</p>
    <img src={vector} alt='vector'/>
</div>
    <p className='font-[Poppins] font-[500] leading-[30px] text-[20px]'>Don’t be a stranger, reach out to us and we will be sure <br/>
to reply you.</p>
    </div>
</div>
  );
}

export default Hero;
