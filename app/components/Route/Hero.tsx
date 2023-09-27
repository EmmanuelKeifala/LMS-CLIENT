import Image from 'next/image';
import Link from 'next/link';
import React, {FC} from 'react';
import {BiSearch} from 'react-icons/bi';

type Props = {};

const Hero: FC<Props> = props => {
  return (
    <div className="relative h-[50vh] w-full lg:h-[700px] lg:w-full md:h-[600px] md:w-full flex flex-col lg:flex-row items-center justify-center hero-animation">
      <div className="lg:w-[40%] md:w-[40%] w-[70%] flex items-center justify-center lg:pt-[70px] md:pt-[70px] pt-[20px] z-10">
        <div className="rounded-full h-[700px] w-[700px] flex items-center justify-center">
          <Image
            src={require('../../../public/assets/banner-img-1.png')}
            className="object-contain max-w-[90%] w-[90%] h-auto z-10"
            alt="Banner Image"
          />
        </div>
      </div>
      <div className="lg:w-[60%] md:w-[60%] w-[90%] flex flex-col items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0 mx-6">
        <h2 className="dark:text-white text-[20px] lg:text-[60px] font-semibold font-Josefin py-2 text-center lg:text-left">
          Improve Your Online Learning Experience With Elearning
        </h2>
        <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-semibold text-[18px] lg:w-[75%] xl:w-[60%] text-center lg:text-left mt-4">
          We have 48k+ Online courses & 500K+ Online registered students. Find
          your desired Courses from them
        </p>
        <div className="lg:w-[75%] xl:w-[60%] w-[90%] h-[50px] bg-transparent relative mt-4 flex items-center">
          <input
            type="search"
            placeholder="Search for courses"
            className="bg-transparent border border-solid border-[#000000ac] dark:border-[#ffffffdd] dark:bg-[#575757] dark:placeholder-text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-Josefin"
          />
          <div className="absolute flex items-center justify-center cursor-pointer h-full right-0 bg-[#39c1f3] rounded-r-[5px]">
            <BiSearch className="text-white" size={30} />
          </div>
        </div>
        <br />
        <br />
        <div className="1500px:w-[55%] 1100px:w-[78%] flex items-center">
          <Image
            src={require('../../../public/assets/client-1.jpeg')}
            className="rounded-full"
            alt="Client Image 1"
          />
          <Image
            src={require('../../../public/assets/client-2.jpeg')}
            className="rounded-full ml-[-20px]"
            alt="Client Image 2"
          />
          <Image
            src={require('../../../public/assets/client-3.jpeg')}
            className="rounded-full ml-[-20px]"
            alt="Client Image 3"
          />
          <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
            500k+ People have alreadey trusted us{' '}
            <Link
              href={'/courses'}
              className="dark:text-[#46e256] text-[crimson]">
              View Courses
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
