import React from "react";
import Button from './Button'
import Contact from './Contact'
const Form = () => {
  return (
    <div className="flex flex-row justify-around border border-[#e5e7eb] m-auto py-[5rem] px-[4rem]  rounded max-w-[100%] w-[100%] h-[fit] bg-[#e5e7eb]">
      <div className="max-w-[50%] w-[40%]">
        <div className="flex flex-col text-left py-[1rem]">
          <label className="font-[Poppins] font-[500] text-[24px] leading-[36px] pb-[10px] text-[#2E2E2E]">Your Name</label>
          <input className="font-[Poppins] border-4 h-[3rem] pl-[1rem] rounded-lg outline-none border-[#CC9615]/[.26] font-[500] text-[16px] leading-[24px] placeholder:text-[#2E2E2E]" type="text" placeholder="Your name" />
        </div>
        <div className="flex flex-col text-left py-[1rem]">
          <label className="font-[Poppins] font-[500] text-[24px] leading-[36px] pb-[10px] text-[#2E2E2E]">Email Address</label>
          <input className="font-[Poppins] border-4 h-[3rem] pl-[1rem] outline-none rounded-lg border-[#CC9615]/[.26]  font-[500] text-[16px] leading-[24px] placeholder:text-[#2E2E2E]" type="email" placeholder="Email" />
        </div>
        <div className="flex flex-col text-left py-[1rem]">
          <label className="font-[Poppins] font-[500] text-[24px] leading-[36px] pb-[10px] text-[#2E2E2E]">Subject</label>
          <input className="font-[Poppins] border-4 h-[3rem] pl-[1rem] outline-none rounded-lg border-[#CC9615]/[.26]  font-[500] text-[16px] leading-[24px] placeholder:text-[#2E2E2E]" type="text" placeholder="Subject" />
        </div>
        <div className="flex flex-col text-left py-[1rem]">
          <label className="font-[Poppins] font-[500] text-[24px] leading-[36px] pb-[10px] text-[#2E2E2E]">Message</label>
          <textarea className="font-[Poppins] border-4 pt-[10px] pl-[1rem] outline-none rounded-lg border-[#CC9615]/[.26]  font-[500] text-[16px] leading-[24px] h-[10rem] placeholder:text-[#2E2E2E]" type="text" placeholder="Input Message" ></textarea>
        </div>
        <Button text={'Send Message'}/>
      </div>

      <div className="flex flex-col max-w-[50%] w-[40%] items-center">
        <Contact/>
      </div>

    </div>
  );
};

export default Form;
