import React from 'react';
import {useSelector} from 'react-redux';

export default function UserAuth() {
  const {user} = useSelector((state: any) => state.auth);
  console.log(user);
  return user ? true : false;
}
