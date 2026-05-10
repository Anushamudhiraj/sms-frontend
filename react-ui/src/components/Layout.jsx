import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Layout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Sidebar />
      <main className="ml-[240px] min-h-screen">
        <TopBar title={title} subtitle={subtitle} />
        <div className="pt-[112px] px-xl pb-xl max-w-[1600px] mx-auto space-y-xl">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
