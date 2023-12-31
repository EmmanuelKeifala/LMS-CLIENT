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
import {useRegisterMutation} from '@/redux/features/auth/authApi';
import toast from 'react-hot-toast';

type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
  password: Yup.string().required('Please enter your password').min(8),
});

const SignUp: FC<Props> = ({setRoute}) => {
  const [show, setShow] = useState(false);
  const [register, {data, error, isSuccess}] = useRegisterMutation();
  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || 'Registration successful';
      toast.success(message);
      setRoute('Verification');
    }
    if (error) {
      if ('data' in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: async ({email, password, name}) => {
      const data = {
        name,
        email,
        password,
      };
      await register(data);
    },
  });

  const {errors, touched, handleSubmit, values, handleChange} = formik;
  return (
    <div className="w-full">
      <h1 className={`${styles.title}`}>Create an account with us </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className={`${styles.label}`} htmlFor="name">
            Enter your name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
            id="name"
            placeholder="John Doe or Jane Doe"
            className={`${styles.input} ${
              errors.name && touched.name && 'border-red-500'
            }`}
          />
          {errors.name && touched.name && (
            <span className="text-red-500">{errors.name}</span>
          )}
        </div>
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
          <input type="submit" value={'Sign Up'} className={`${styles.btn}`} />
        </div>
        <br />
        <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
          Or Join with
        </h5>
        <div className="flex items-center justify-center my-3">
          <FcGoogle size={30} className="cursor-pointer mr-2" />
          <AiFillGithub size={30} className="cursor-pointer" />
        </div>
        <h5 className="dark:text-white text-slate-950text-center pt-4 font-Poppins text-[14px]">
          Already have an account?{' '}
          <span
            className="text-[#2190ff] cursor-pointer pl-1"
            onClick={() => setRoute('Login')}>
            Sign In
          </span>
        </h5>
        <br />
      </form>
    </div>
  );
};

export default SignUp;
