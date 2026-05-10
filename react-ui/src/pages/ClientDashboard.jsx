import React from 'react';
import Layout from '../components/Layout';

const ClientDashboard = () => {
  return (
    <Layout title="Client Dashboard" subtitle="Your social media overview — May 6, 2026">
      {/* ANALYTICS ROW */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        <StatCard label="Posts this month" value="24" change="+12%" trend="up" />
        <StatCard label="Total likes" value="1.7K" change="+8%" trend="up" />
        <StatCard label="Total reach (30d)" value="15.2K" change="-2%" trend="down" />
        <StatCard label="Scheduled posts" value="5" badge="On track" />
      </section>

      {/* SEARCH BAR AREA */}
      <section className="max-w-none">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">search</span>
          <input 
            className="w-full bg-surface-container-low border border-outline-variant rounded-full pl-xl pr-md py-md focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-body-md text-body-md shadow-sm" 
            placeholder="Search posts, platforms, analytics..." 
            type="text"
          />
        </div>
      </section>

      {/* PLATFORMS & ANALYTICS VISUALIZATION ROW */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-lg items-start">
        {/* Posts Weekly Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-outline-variant/30 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] p-lg">
          <div className="flex justify-between items-center mb-xl">
            <h3 className="font-headline-md text-headline-md text-primary">Posts this week</h3>
            <div className="flex gap-md">
              <div className="flex items-center gap-xs">
                <span className="w-3 h-3 bg-primary rounded-xs"></span>
                <span className="font-label-bold text-label-bold text-on-surface-variant">Posted</span>
              </div>
              <div className="flex items-center gap-xs">
                <span className="w-3 h-3 bg-primary-fixed-dim rounded-xs"></span>
                <span className="font-label-bold text-label-bold text-on-surface-variant">Scheduled</span>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between h-56 gap-sm px-md">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
              <div key={day} className="flex-1 flex flex-col items-center gap-sm h-full">
                <div className="w-full flex items-end gap-1 h-full">
                  <div className="flex-1 bg-primary rounded-t-sm" style={{ height: `${[60, 80, 40, 90, 70, 20, 10][idx]}%` }}></div>
                  <div className="flex-1 bg-primary-fixed-dim rounded-t-sm" style={{ height: `${[20, 10, 40, 0, 30, 60, 40][idx]}%` }}></div>
                </div>
                <span className="font-label-bold text-label-bold text-on-surface-variant">{day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Connected Platforms */}
        <div className="bg-white rounded-lg border border-outline-variant/30 shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
          <div className="p-lg border-b border-outline-variant/30">
            <h3 className="font-headline-md text-headline-md text-primary">Connected Platforms</h3>
          </div>
          <div className="p-lg space-y-md">
            <PlatformItem name="Instagram" followers="12.4K followers" icon="photo_camera" color="#E4405F" bgColor="bg-pink-50" />
            <PlatformItem name="X (Twitter)" followers="8.2K followers" icon="close" color="#1DA1F2" bgColor="bg-slate-100" />
            <PlatformItem name="LinkedIn" followers="3.5K connections" icon="business" color="#0077B5" bgColor="bg-blue-50" />
            <PlatformItem name="Facebook" followers="5.1K likes" icon="social_leaderboard" color="#1877F2" bgColor="bg-blue-100" />
          </div>
        </div>
      </section>

      {/* PLATFORM REACH BREAKDOWN ROW */}
      <section>
        <div className="bg-white rounded-lg border border-outline-variant/30 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] p-lg">
          <h3 className="font-headline-md text-headline-md text-primary mb-xl">Platform Reach Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-xl gap-y-lg">
            <ReachItem name="Instagram" value="8,400 (55%)" percentage={55} color="#E4405F" icon="photo_camera" />
            <ReachItem name="LinkedIn" value="3,200 (21%)" percentage={21} color="#0077B5" icon="business" />
            <ReachItem name="Facebook" value="2,100 (14%)" percentage={14} color="#1877F2" icon="social_leaderboard" />
            <ReachItem name="Twitter / X" value="1,500 (10%)" percentage={10} color="#000000" icon="close" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

const StatCard = ({ label, value, change, trend, badge }) => (
  <div className="bg-white p-lg rounded-lg border border-outline-variant/30 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] flex flex-col gap-sm">
    <span className="font-label-bold text-label-bold text-on-surface-variant">{label}</span>
    <div className="flex items-end justify-between">
      <span className="font-stat-lg text-stat-lg text-primary">{value}</span>
      {change && (
        <span className={`font-label-bold text-label-bold flex items-center ${trend === 'up' ? 'text-teal-600' : 'text-error'}`}>
          {change} <span className="material-symbols-outlined text-[14px]">{trend === 'up' ? 'trending_up' : 'trending_down'}</span>
        </span>
      )}
      {badge && <span className="font-label-bold text-label-bold text-primary-fixed-dim">{badge}</span>}
    </div>
  </div>
);

const PlatformItem = ({ name, followers, icon, color, bgColor }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-md">
      <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center`} style={{ color }}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <p className="font-label-bold text-label-bold text-primary">{name}</p>
        <p className="font-body-md text-body-md text-on-surface-variant">{followers}</p>
      </div>
    </div>
    <span className="w-2 h-2 bg-teal-500 rounded-full" title="Active"></span>
  </div>
);

const ReachItem = ({ name, value, percentage, color, icon }) => (
  <div>
    <div className="flex justify-between items-center mb-sm">
      <div className="flex items-center gap-sm">
        <span className="material-symbols-outlined text-[18px]" style={{ color }}>{icon}</span>
        <span className="font-label-bold text-label-bold text-primary">{name}</span>
      </div>
      <span className="font-label-bold text-label-bold text-on-surface-variant">{value}</span>
    </div>
    <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
      <div className="h-full rounded-full" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
    </div>
  </div>
);

export default ClientDashboard;
