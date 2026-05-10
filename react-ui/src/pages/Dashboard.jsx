import React from 'react';
import Layout from '../components/Layout';

const Dashboard = () => {
  const stats = [
    { label: 'Active clients', value: '8', change: '12%', icon: 'groups', trend: 'up' },
    { label: 'Posts published today', value: '34', change: '5%', icon: 'send', trend: 'up' },
    { label: 'Posts scheduled', value: '47', change: '8', icon: 'event', trend: 'none' },
    { label: 'Total reach', value: '2.1M', change: '24%', icon: 'visibility', trend: 'up' },
  ];

  const chartData = [
    { day: 'Mon', published: 40, scheduled: 30 },
    { day: 'Tue', published: 25, scheduled: 45 },
    { day: 'Wed', published: 60, scheduled: 20 },
    { day: 'Thu', published: 35, scheduled: 55 },
    { day: 'Fri', published: 50, scheduled: 40 },
    { day: 'Sat', published: 10, scheduled: 15 },
    { day: 'Sun', published: 15, scheduled: 25 },
  ];

  return (
    <Layout title="Handler overview" subtitle="All clients and platform activity — May 6, 2026">
      {/* Section 1: Top Level Analytics */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-surface-container-lowest p-lg rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-surface-container-high">
            <div className="flex justify-between items-start mb-md">
              <p className="text-on-surface-variant font-label-bold">{stat.label}</p>
              <span className="p-xs bg-primary/5 rounded-lg text-primary">
                <span className="material-symbols-outlined text-[20px]">{stat.icon}</span>
              </span>
            </div>
            <div className="flex items-baseline gap-sm">
              <span className="font-stat-lg text-on-background">{stat.value}</span>
              <span className={`font-label-bold text-xs flex items-center gap-[2px] ${stat.trend === 'up' ? 'text-emerald-600' : 'text-emerald-600'}`}>
                <span className="material-symbols-outlined text-[14px]">
                  {stat.trend === 'up' ? 'trending_up' : stat.trend === 'none' ? 'add' : 'trending_down'}
                </span>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Section 2: Publishing Analytics & Alerts */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        <div className="lg:col-span-2 bg-surface-container-lowest p-lg rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-surface-container-high">
          <div className="flex justify-between items-center mb-xl">
            <h2 className="font-headline-md text-on-surface">Posts published vs scheduled — last 7 days</h2>
            <div className="flex items-center gap-md">
              <div className="flex items-center gap-xs">
                <span className="w-3 h-3 rounded-sm bg-primary"></span>
                <span className="text-label-bold text-on-surface-variant">Published</span>
              </div>
              <div className="flex items-center gap-xs">
                <span className="w-3 h-3 rounded-sm bg-primary-fixed-dim"></span>
                <span className="text-label-bold text-on-surface-variant">Scheduled</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] flex items-end justify-between px-md gap-sm">
            {chartData.map((data) => (
              <div key={data.day} className="flex-1 flex flex-col justify-end gap-xs h-full">
                <div className="bg-primary-fixed-dim rounded-t w-full" style={{ height: `${data.scheduled}%` }}></div>
                <div className="bg-primary rounded-t w-full" style={{ height: `${data.published}%` }}></div>
                <span className="text-[10px] text-center mt-xs text-outline uppercase font-bold">{data.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-lowest p-lg rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-surface-container-high">
          <h2 className="font-headline-md text-on-surface mb-lg">Alerts & notifications</h2>
          <div className="space-y-md">
            <AlertItem 
              type="warning" 
              title="API Token Expiring" 
              message="Instagram token for 'Luxe Hotels' expires in 2 days." 
              color="orange"
            />
            <AlertItem 
              type="info" 
              title="New Campaign" 
              message="'TechNova' added 12 new assets to the library." 
              color="blue"
            />
            <AlertItem 
              type="check_circle" 
              title="Queue Cleared" 
              message="All morning posts for 'Cafe Bloom' successfully out." 
              color="emerald"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Platform Reach Breakdown */}
      <section className="bg-surface-container-lowest p-lg rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-surface-container-high">
        <div className="flex justify-between items-center mb-xl">
          <h2 className="font-headline-md text-on-surface">Platform reach breakdown — all clients</h2>
          <a className="text-primary font-label-bold flex items-center gap-xs hover:underline" href="#">
            Full analytics
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          <div className="space-y-lg">
            <PlatformProgress icon="camera" name="Instagram" value="264.3K" percentage="85" color="#E1306C" />
            <PlatformProgress icon="social_leaderboard" name="Facebook" value="96.2K" percentage="45" color="#1877F2" />
            <PlatformProgress icon="close" name="Twitter / X" value="71.1K" percentage="32" color="#000000" />
          </div>
          <div className="space-y-lg">
            <PlatformProgress icon="work" name="LinkedIn" value="31.2K" percentage="18" color="#0077B5" />
            <PlatformProgress icon="push_pin" name="Pinterest" value="19.7K" percentage="12" color="#BD081C" />
            <PlatformProgress icon="play_circle" name="YouTube" value="8.4K" percentage="8" color="#FF0000" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

const AlertItem = ({ type, title, message, color }) => {
  const colorClasses = {
    orange: 'bg-orange-50 border-orange-400 text-orange-900 icon:text-orange-600',
    blue: 'bg-blue-50 border-blue-400 text-blue-900 icon:text-blue-600',
    emerald: 'bg-emerald-50 border-emerald-400 text-emerald-900 icon:text-emerald-600',
  };
  
  return (
    <div className={`p-md border-l-4 rounded-lg flex gap-md items-start ${colorClasses[color].split(' icon:')[0]}`}>
      <span className={`material-symbols-outlined ${colorClasses[color].split('icon:')[1]}`}>{type}</span>
      <div>
        <p className="text-body-md font-bold">{title}</p>
        <p className="text-xs">{message}</p>
      </div>
    </div>
  );
};

const PlatformProgress = ({ icon, name, value, percentage, color }) => (
  <div>
    <div className="flex justify-between items-center mb-xs">
      <div className="flex items-center gap-sm">
        <div className="w-8 h-8 flex items-center justify-center rounded-lg" style={{ backgroundColor: `${color}1A`, color: color }}>
          <span className="material-symbols-outlined text-[20px]">{icon}</span>
        </div>
        <span className="font-bold text-on-surface">{name}</span>
      </div>
      <span className="text-on-surface font-bold">{value}</span>
    </div>
    <div className="w-full bg-surface-container rounded-full h-2">
      <div className="bg-primary h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

export default Dashboard;
