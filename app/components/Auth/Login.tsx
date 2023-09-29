import React, {FC, useEffect, useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
import {styles} from '../styles/style';
import {useLoginMutation} from '@/redux/features/auth/authApi';
import toast from 'react-hot-toast';
import {signIn} from 'next-auth/react';

type Props = {
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
  password: Yup.string().required('Please enter your password').min(8),
});

const Login: FC<Props> = ({setRoute, setOpen}) => {
  const [show, setShow] = useState(false);
  const [login, {isSuccess, isError, data, error}] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: async ({email, password}) => await login({email, password}),
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success('Login successful');
      setOpen(false);
    }
    if (error) {
      if ('data' in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, isError, error, setOpen]);

  const {errors, touched, handleSubmit, values, handleChange} = formik;
  return (
    <div className="w-full">
      <h1 className={`${styles.title}`}>Login to your account to continue.</h1>
      <form onSubmit={handleSubmit}>
        <label className={`${styles.label}`} htmlFor="email">
          Enter your email
        </label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          id="email"
          placeholder="login@gmail.com"
          className={`${styles.input} ${
            errors.email && touched.email && 'border-red-500'
          }`}
        />
        {errors.email && touched.email && (
          <span className="text-red-500">{errors.email}</span>
        )}
        <div className="w-full mt-5 relative mb-1">
          <label className={`${styles.label}`} htmlFor="email">
            Enter your password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            id="password"
            placeholder="********"
            className={`${styles.input} ${
              errors.password && touched.password && 'border-red-500'
            }`}
          />
          {!show ? (
            <AiOutlineEye
              size={20}
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEyeInvisible
              size={20}
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              onClick={() => setShow(false)}
            />
          )}
          {errors.password && touched.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
        </div>
        <div className="w-full mt-5">
          <input type="submit" value={'Login'} className={`${styles.btn}`} />
        </div>
        <br />
        <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
          Or Join with
        </h5>
        <div className="flex items-center justify-center my-3">
          <FcGoogle
            size={30}
            className="cursor-pointer mr-2"
            onClick={() => signIn('google')}
          />
          <AiFillGithub
            size={30}
            className="cursor-pointer"
            onClick={() => signIn('github')}
          />
        </div>
        <h5 className="dark:text-white text-center pt-4 font-Poppins text-[14px]">
          Dont have an account?{' '}
          <span
            className="text-[#2190ff] cursor-pointer pl-1"
            onClick={() => setRoute('Sign-Up')}>
            Sign Up
          </span>
        </h5>
        <br />
      </form>
    </div>
  );
};

export default Login;
