import React from 'react';

const TopBar = ({ title, subtitle }) => {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-240px)] z-40 bg-surface h-[80px] px-xl flex items-center justify-between border-b border-surface-variant">
      <div className="flex items-center gap-lg">
        <div className="text-left">
          <h1 className="font-headline-md text-on-surface">{title}</h1>
          <p className="text-on-surface-variant text-label-bold">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-xl">
        <div className="flex items-center gap-lg">
          <button className="relative p-sm hover:bg-surface-container-high rounded-full transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FF914D] rounded-full border-2 border-surface"></span>
          </button>
          <div className="h-8 w-[1px] bg-surface-variant mx-sm"></div>
          <div className="flex items-center gap-md cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold group-hover:ring-4 group-hover:ring-primary/10 transition-all">SR</div>
            <span className="material-symbols-outlined text-outline">expand_more</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
