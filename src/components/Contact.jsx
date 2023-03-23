import React from "react";
import call from "../assets/phone-grey.png";
import location from "../assets/location-grey.png";
import mail from "../assets/mail-grey.png";
import clock from "../assets/clock-grey.png";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-row items-center text-left gap-[2rem] py-[2rem]">
        <img className='w-[2rem] h-[2rem]' src={call} alt="call" />
        <div>
          <h2 className="text-[#CC9615] font-[Poppins] font-[600] text-[24px] leading-[36px]">
            Hotlines
          </h2>
          <p className="font-[Poppins] font-[500] text-[16px] leading-[24px] text-[#2E2E2E]">
            +2347890456734
          </p>
          <p className="font-[Poppins] font-[500] text-[16px] leading-[24px] text-[#2E2E2E]">
            +2347890456734
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center text-left gap-[1rem] py-[2rem]">
        <img className='w-[2rem] h-[2rem]' src={location} alt="location" />
        <div>
          <h2 className="text-[#CC9615] font-[Poppins] font-[600] text-[24px] leading-[36px]">
            Main Chamber
          </h2>
          <p className="font-[Poppins] font-[500] text-[16px] leading-[24px] text-[#2E2E2E]">
            Unit 5, Montego Sunrise Estate,
            <br />
            Modupe Adebayo Off Tunde Laitan/Freedom Way,
            <br />
            Lekki Phase 1
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center text-left gap-[1rem] py-[2rem]">
        <img className='w-[2rem] h-[2rem]' src={mail} alt="mail" />
        <div>
          <h2 className="text-[#CC9615] font-[Poppins] font-[600] text-[24px] leading-[36px]">
          Email
          </h2>
          <p className="font-[Poppins] font-[500] text-[16px] leading-[24px] text-[#2E2E2E]">
          example@mail.com
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center text-left gap-[1rem] py-[2rem]">
        <img className='w-[2rem] h-[2rem]' src={clock} alt="clock" />
        <div>
          <h2 className="text-[#CC9615] font-[Poppins] font-[600] text-[24px] leading-[36px]">
          Working Time
          </h2>
          <p className="font-[Poppins] font-[500] text-[16px] leading-[24px] text-[#2E2E2E]">
          Mon - Fri : 10am - 6pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
