import React, {FC, useState} from 'react';
import {toast} from 'react-toastify';
import {VscWorkspaceTrusted} from 'react-icons/vsc';
import {set} from 'zod';
import {styles} from '../styles/style';

type Props = {
  setRoute: (route: string) => void;
};
type VerifyNumber = {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
};

const Verification: FC<Props> = ({setRoute}) => {
  const [invalidError, setInvalidError] = useState<boolean>(false);
  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    0: '',
    1: '',
    2: '',
    3: '',
  });
  const inputRef = [
    React.useRef<HTMLInputElement>(null),
    React.useRef<HTMLInputElement>(null),
    React.useRef<HTMLInputElement>(null),
    React.useRef<HTMLInputElement>(null),
  ];
  const verificationHandler = async () => {
    setInvalidError(true);
  };
  const handleInputChange = (index: number, value: string) => {
    setInvalidError(false);
    const newVerifyNumber = {...verifyNumber, [index]: value};
    setVerifyNumber(newVerifyNumber);

    if (value === '' && index > 0) {
      inputRef[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      inputRef[index + 1].current?.focus();
    }
  };
  return (
    <div>
      <h1 className={`${styles.title}`}>Verify Your Account</h1>
      <br />
      <div className="w-full flex items-center justify-center mt-2">
        <div className="w-[80px] h-[80px] roundec-full bg-[#497DF2] flex items-center justify-center">
          <VscWorkspaceTrusted size={40} />
        </div>
      </div>
      <br />
      <br />
      <div className=" m-auto flex items-center justify-around">
        {Object.keys(verifyNumber).map((key, index) => (
          <input
            type="text"
            key={key}
            ref={inputRef[index]}
            className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex mr-5 items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center ${
              invalidError
                ? 'shake border-red-500'
                : 'dark:border-white border-[#0000004a]'
            } `}
            placeholder=""
            maxLength={1}
            value={verifyNumber[key as keyof VerifyNumber]}
            onChange={e => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <br />
      <br />
      <div className="w-full flex justify-center">
        <button className={`${styles.btn}`} onClick={verificationHandler}>
          Verify OTP
        </button>
      </div>
      <br />
      <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
        Go back to Sign In
        <span
          className="text-[#2190ff] pl-1 cursor-pointer"
          onClick={() => setRoute('Login')}>
          Sign In
        </span>
      </h5>
    </div>
  );
};

export default Verification;
