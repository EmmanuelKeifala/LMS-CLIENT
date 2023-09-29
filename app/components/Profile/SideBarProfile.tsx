import Image from 'next/image';
import React, {FC} from 'react';
import avatarDefault from '../../../public/assets/avatar.png';
import {RiLockPasswordLine} from 'react-icons/ri';
import {SiCoursera} from 'react-icons/si';
import {AiOutlineLogout} from 'react-icons/ai';

type Props = {
  user: any;
  active: number;
  setActive: (active: number) => void;
  logOutHandler: any;
  avatar: string | null;
};

const SideBarProfile: FC<Props> = ({
  user,
  active,
  setActive,
  logOutHandler,
  avatar,
}) => {
  return (
    <div className="w-full">
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 1 ? 'dark:bg-slate-800 bg-white' : 'bg-transparent'
        }`}
        onClick={() => setActive(1)}>
        <Image
          src={user.avatar || avatar ? user.avatar.url : avatarDefault}
          width={30}
          height={30}
          alt="avatar"
          className="w-[30px] h-[30px] 800px:h-[30px] cursor-pointer rounded-full object-fill"
        />
        <h5 className="pl-2 800px:block hidden dark:text-white font-Poppins text-black">
          My Account
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 2 ? 'dark:bg-slate-800 bg-white' : 'bg-transparent'
        }`}
        onClick={() => setActive(2)}>
        <RiLockPasswordLine size={25} className="text-black dark:text-white" />
        <h5 className="pl-2 800px:block hidden dark:text-white font-Poppins text-black">
          Change Password
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 3 ? 'dark:bg-slate-800 bg-white' : 'bg-transparent'
        }`}
        onClick={() => setActive(3)}>
        <SiCoursera size={25} className="text-black dark:text-white" />
        <h5 className="pl-2 800px:block hidden dark:text-white font-Poppins text-black">
          Enrolled Courses
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 4 ? 'dark:bg-slate-800 bg-white' : 'bg-transparent'
        }`}
        onClick={() => logOutHandler()}>
        <AiOutlineLogout size={25} className="text-black dark:text-white" />
        <h5 className="pl-2 800px:block hidden dark:text-white font-Poppins text-black">
          Log Out
        </h5>
      </div>
    </div>
  );
};

export default SideBarProfile;
