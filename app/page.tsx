'use client';
import React, {FC, useState} from 'react';
import Heading from './utils/Heading';

interface Props {}
const Page: FC<Props> = props => {
  return (
    <div>
      <Heading
        title="ELearning"
        description="This is a platform for students to learn and develop skills"
        keywords="learning, math, physics, chemistry, money, calculus"
      />
    </div>
  );
};

export default Page;
