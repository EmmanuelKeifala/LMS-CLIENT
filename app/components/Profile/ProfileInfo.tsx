import Image from 'next/image';
import React, {FC, useState, useEffect} from 'react';
import avatarDefault from '../../../public/assets/avatar.png';
import {AiOutlineCamera} from 'react-icons/ai';
import {styles} from '../styles/style';
import {useUpdateAvatarMutation} from '@/redux/features/user/user.api';
import {useLoadUserQuery} from '@/redux/features/api/apiSlice';

type Props = {
  avatar: string | null;
  user: any;
};
const ProfileInfo: FC<Props> = ({avatar, user}) => {
  console.log('User: ', user);
  const [name, setName] = useState(user.name);
  const [updateAvatar, {isSuccess, error}] = useUpdateAvatarMutation();
  const [loadUser, setLoadUser] = useState(false);
  const {} = useLoadUserQuery(undefined, {
    skip: loadUser ? false : true,
  });
  const imageHandler = async (e: any) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        const avatar = fileReader.result;
        updateAvatar(avatar);
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };
  const handleSubmit = async (e: any) => {
    console.log('second');
  };

  useEffect(() => {
    if (isSuccess) {
      setLoadUser(true);
    }
    if (error) {
      console.log(error);
    }
  }, [isSuccess, error]);
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="relative">
          <Image
            width={120}
            height={120}
            src={user.avatar || avatar ? user.avatar.url : avatarDefault}
            className="w-[120px] h-[120px] border-[3px] border-[#37a39a] cursor-pointer rounded-full"
            alt="avatar"
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="avatar"
            onChange={imageHandler}
          />
          <label htmlFor="avatar">
            <div className="w-[30px] h-[30px] bg-slate-900 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer">
              <AiOutlineCamera size={20} className="z-1 text-white" />
            </div>
          </label>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full pl-6 800px:pl-10">
        <form onSubmit={handleSubmit}>
          <div className="800px:w-[50%] m-auto block pb-4">
            <div className="w-[100%]">
              <label className="block pb-2 dark:text-white">Full Name</label>
              <input
                type="text"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="w-[100%] pt-6">
              <label className="block pb-2 dark:text-white">
                Email Address
              </label>
              <input
                type="email"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                readOnly
                value={user?.email}
              />
            </div>
            <input
              type="submit"
              className={`w-full 800px:w-[250px] h-[40px] border border-[#37a39a] text-center dark:text-[#fff] text-black rounded-[3px] mt-8 cursor-pointer`}
              value="Update"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileInfo;
