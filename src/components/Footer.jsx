import React from "react";
import call from "../assets/call-gold.png";
import location from "../assets/location-gold.png";
import mail from "../assets/mail-open.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className='flex bg-[#000000]/[.9] text-white justify-around py-[4rem] px-[3rem]'>
      <div>
        <img className='w-[4rem]' src={logo} alt='Logo of the brand'/>
      </div>
      <div className='text-left'>
        <h2 className="font-[Poppins] font-[700] text-[32px] leading-[48px] pb-[1rem]">Company</h2>
        <p className="font-[Poppins] font-[500] text-[20px] leading-[30px] py-[1rem]">Home</p>
        <p className="font-[Poppins] font-[500] text-[20px] leading-[30px] py-[1rem]">Why Choose Us</p>
        <p className="font-[Poppins] font-[500] text-[20px] leading-[30px] py-[1rem]">Counseling</p>
        <p className="font-[Poppins] font-[500] text-[20px] leading-[30px] py-[1rem]">FAQs</p>
      </div>
      <div className='text-left'>
        <h2 className="font-[Poppins] font-[700] text-[32px] leading-[48px] pb-[1rem]">Practice Area</h2>
        <p className="font-[Poppins] font-[500] text-[20px] leading-[30px] py-[1rem]">Finance Law</p>
        <p className="font-[Poppins] font-[500] text-[20px] leading-[30px] py-[1rem]">Business Law</p>
        <p className="font-[Poppins] font-[500] text-[20px] leading-[30px] py-[1rem]">Family Law</p>
        <p className="font-[Poppins] font-[500] text-[20px] leading-[30px] py-[1rem]">Divorce Law</p>
        <p className="font-[Poppins] font-[500] text-[20px] leading-[30px] py-[1rem]">Real-Estate Law</p>
      </div>
      <div className='text-left'>
        <h2 className="font-[Poppins] font-[700] text-[32px] leading-[48px] pb-[1rem]">Contact Us</h2>
        <div className="flex  flex-row items-center text-left gap-[2rem] py-[10px]">
          <img className="w-[1rem] h-[1rem]" src={call} alt="call" />
          <div>
            <p className="font-[Poppins] font-[500] text-[20px] leading-[30px] text-[#CC9615]">
              +2347890456734
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center text-left gap-[2rem] py-[10px]">
          <img className="w-[1rem] h-[1rem]" src={location} alt="location" />
          <div>
            <p className="font-[Poppins] font-[500] text-[20px] leading-[30px] text-[#CC9615]">
              Unit 5, Montego Sunrise Estate,
              <br />
              Modupe Adebayo Off Tunde Laitan/
              <br />
              Freedom Way, Lekki Phase 1
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center text-left gap-[2rem] py-[10px]">
          <img className="w-[1rem] h-[1rem]" src={mail} alt="mail" />
          <div>
            <p className="font-[Poppins] font-[500] text-[20px] leading-[30px] text-[#CC9615]">
              example@mail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
