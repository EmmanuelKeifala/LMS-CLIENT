'use client';
import React, {FC, useState} from 'react';
import Heading from './utils/Heading';
import Header from './components/Header';
import Hero from './components/Route/Hero';

interface Props {}
const Page: FC<Props> = props => {
  const [open, setOpen] = useState(false);
  const [activeItem, setactiveItem] = useState(0);
  return (
    <div>
      <Heading
        title="ELearning"
        description="This is a platform for students to learn and develop skills"
        keywords="learning, math, physics, chemistry, money, calculus"
      />
      <Header open={open} setOpen={setOpen} activeItem={activeItem} />
      <Hero />
    </div>
  );
};

export default Page;
