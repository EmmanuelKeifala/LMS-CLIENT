import React from 'react';
import {useSelector} from 'react-redux';

export default function userAuth() {
  const user = useSelector((state: any) => state.user);
  if (user) {
    return true;
  } else {
    return false;
  }
}
