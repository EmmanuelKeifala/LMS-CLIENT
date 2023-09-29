'use client';
import React from 'react';
import Heading from '../utils/Heading';
import AdminSidebar from '../components/Admin/Sidebar/AdminSidebar';
import AdminProtected from '../hooks/adminProtected';
type Props = {};

const page = (props: Props) => {
  return (
    <>
      <AdminProtected>
        <Heading
          title={`Elearnin Admin`}
          description="This is a platform for students to learn and develop skills"
          keywords="learning, math, physics, chemistry, money, calculus"
        />
        <div className="flex h-[200vh]">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          {/* <div className="1500px:w-[84%] w-4/5"><AdminContent /></div> */}
        </div>
      </AdminProtected>
    </>
  );
};

export default page;
