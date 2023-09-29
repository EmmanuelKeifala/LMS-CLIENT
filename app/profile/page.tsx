'use client';
import React, {FC, useState} from 'react';
import Protected from '../hooks/useProtected';
import Heading from '../utils/Heading';
import Header from '../components/Header';

type Props = {};

const Page: FC<Props> = props => {
  const [open, setOpen] = useState(false);
  const [activeItem, setactiveItem] = useState(0);
  const [route, setRoute] = useState('Login');
  return (
    <div>
      <Protected>
        <Heading
          title="ELearning"
          description="This is a platform for students to learn and develop skills"
          keywords="learning, math, physics, chemistry, money, calculus"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
      </Protected>
    </div>
  );
};

export default Page;
