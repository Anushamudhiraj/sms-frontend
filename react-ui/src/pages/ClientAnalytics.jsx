import React from 'react';
import Layout from '../components/Layout';

const ClientAnalytics = () => {
  return (
    <Layout title="Analytics" subtitle="Track your social media performance.">
      {/* Overview Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-sm mb-xl">
        <StatCard label="Reach" value="12.4k" change="+4.2%" trend="up" />
        <StatCard label="Engagement Rate" value="5.8%" change="+1.1%" trend="up" />
        <StatCard label="Posts" value="48" badge="Live" />
      </section>

      {/* Weekly Engagement Chart */}
      <section className="bg-surface-container-lowest p-lg rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-surface-container mb-xl">
        <div className="flex justify-between mb-lg">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Post Performance Overview</h3>
            <p className="text-on-surface-variant text-[12px] mt-1">Track how your posts performed across the week.</p>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
        </div>
        <div className="flex items-end justify-between h-40 gap-xs pb-sm overflow-x-auto">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
            <div key={day} className="flex flex-col items-center gap-2 flex-1 min-w-[30px] h-full">
              <div className="w-full bg-primary-fixed rounded-t-sm" style={{ height: `${[30, 60, 40, 80, 50, 70, 35][idx]}%` }}></div>
              <span className={`text-[10px] font-label-bold text-on-surface-variant ${day === 'Thu' ? 'font-bold' : ''}`}>{day}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-md mt-md">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-[10px] text-on-surface-variant">Likes</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-primary-fixed"></span>
            <span className="text-[10px] text-on-surface-variant">Reach</span>
          </div>
        </div>
      </section>

      {/* Platform Reach Breakdown */}
      <section className="bg-surface-container-lowest p-lg rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-surface-container mb-xl">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-lg">Platform Reach</h3>
        <div className="space-y-lg">
          <PlatformReach name="Instagram" value="8.2k reach" percentage={75} change="+12%" />
          <PlatformReach name="Facebook" value="3.1k reach" percentage={45} change="+5%" />
          <PlatformReach name="Twitter/X" value="1.4k reach" percentage={30} change="-2%" isDown />
        </div>
      </section>
    </Layout>
  );
};

const StatCard = ({ label, value, change, trend, badge }) => (
  <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-surface-container">
    <p className="font-label-bold text-on-secondary-container text-[10px] uppercase mb-1">{label}</p>
    <p className="font-headline-md text-headline-md text-primary truncate">{value}</p>
    <div className="flex items-center gap-xs text-[10px] font-semibold mt-1">
      {change && (
        <span className={`flex items-center gap-xs ${trend === 'up' ? 'text-green-600' : 'text-error'}`}>
          <span className="material-symbols-outlined text-[12px]">{trend === 'up' ? 'trending_up' : 'trending_down'}</span>
          <span>{change}</span>
        </span>
      )}
      {badge && <span className="text-on-surface-variant">{badge}</span>}
    </div>
  </div>
);

const PlatformReach = ({ name, value, percentage, change, isDown }) => (
  <div className="space-y-xs">
    <div className="flex justify-between items-center text-on-surface">
      <div className="flex items-center gap-sm">
        <span className="font-label-bold">{name}</span>
      </div>
      <span className={`text-[10px] font-bold ${isDown ? 'text-error' : 'text-green-600'}`}>{change}</span>
    </div>
    <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
      <div className="h-full bg-primary rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
    <div className="text-[10px] text-on-surface-variant text-right">{value}</div>
  </div>
);

export default ClientAnalytics;
