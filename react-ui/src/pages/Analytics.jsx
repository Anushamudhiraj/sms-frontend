import React, { useState } from 'react';
import Layout from '../components/Layout';

const Analytics = () => {
  const [filter, setFilter] = useState('30');

  const statsData = {
    '30': {
      engagement: '1.2M', reach: '5.4M', followers: '+45K', ctr: '3.4%', posts: '128',
      platforms: [75, 50, 37.5, 29, 21, 12.5],
      counts: [18, 12, 9, 7, 5, 3]
    },
    '90': {
      engagement: '3.8M', reach: '16.2M', followers: '+142K', ctr: '3.1%', posts: '412',
      platforms: [85, 65, 45, 35, 30, 20],
      counts: [56, 42, 31, 24, 18, 12]
    },
    '1y': {
      engagement: '14.5M', reach: '68.1M', followers: '+580K', ctr: '2.9%', posts: '1,540',
      platforms: [95, 80, 60, 50, 45, 35],
      counts: [210, 180, 145, 110, 85, 60]
    }
  };

  const data = statsData[filter];

  const platforms = [
    { name: 'Instagram', icon: 'camera_alt', color: '#E1306C' },
    { name: 'Facebook', icon: 'facebook', color: '#1877F2' },
    { name: 'Twitter/X', icon: 'close', color: '#000000' },
    { name: 'LinkedIn', icon: 'work', color: '#0A66C2' },
    { name: 'YouTube', icon: 'play_circle', color: '#FF0000' },
    { name: 'Pinterest', icon: 'push_pin', color: '#E60023' },
  ];

  return (
    <Layout title="Analytics" subtitle="Detailed performance insights across all managed accounts">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-xl gap-md">
        <div className="flex bg-surface-container-high rounded-lg p-xs">
          <button 
            onClick={() => setFilter('30')}
            className={`px-md py-xs text-label-bold font-label-bold rounded shadow-sm transition-all ${filter === '30' ? 'bg-primary text-white' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Last 30 Days
          </button>
          <button 
            onClick={() => setFilter('90')}
            className={`px-md py-xs text-label-bold font-label-bold rounded shadow-sm transition-all ${filter === '90' ? 'bg-primary text-white' : 'text-on-surface-variant hover:text-primary'}`}
          >
            90 Days
          </button>
          <button 
            onClick={() => setFilter('1y')}
            className={`px-md py-xs text-label-bold font-label-bold rounded shadow-sm transition-all ${filter === '1y' ? 'bg-primary text-white' : 'text-on-surface-variant hover:text-primary'}`}
          >
            1 Year
          </button>
        </div>
        <button className="flex items-center gap-sm bg-primary text-on-primary px-lg py-sm rounded-lg font-label-bold text-label-bold hover:bg-primary-container transition-colors shadow-sm">
          <span className="material-symbols-outlined text-[18px]">download</span>
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-md mb-xl">
        <MetricCard label="Total Engagement" value={data.engagement} change="+12%" />
        <MetricCard label="Reach" value={data.reach} change="+8%" />
        <MetricCard label="Followers Growth" value={data.followers} icon="trending_up" iconColor="text-teal-600" />
        <MetricCard label="CTR" value={data.ctr} sublabel="Avg" />
        <MetricCard label="Published Posts" value={data.posts} icon="post_add" />
      </div>

      <div className="bg-surface-container-lowest p-lg rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-surface-container mb-xl">
        <h3 className="font-headline-md text-headline-md text-primary mb-lg">Connected Platforms Overview</h3>
        <div className="space-y-lg py-md">
          {platforms.map((platform, idx) => (
            <div key={platform.name} className="flex items-center gap-md">
              <div className="w-32 flex items-center gap-sm">
                <span className="material-symbols-outlined" style={{ color: platform.color }}>{platform.icon}</span>
                <span className="font-body-md text-primary font-semibold">{platform.name}</span>
              </div>
              <div className="flex-grow bg-surface-container-low h-8 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full transition-all duration-700 ease-out" style={{ width: `${data.platforms[idx]}%` }}></div>
              </div>
              <div className="w-12 text-right">
                <span className="font-stat-lg text-primary text-[20px]">{data.counts[idx]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-surface-container overflow-hidden">
        <div className="p-lg border-b border-surface-container flex justify-between items-center">
          <h3 className="font-headline-md text-headline-md text-primary">Best Performing Content</h3>
          <button className="text-primary font-label-bold text-label-bold hover:underline flex items-center gap-xs">
            View Full Content Library
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="p-md font-label-bold text-label-bold text-on-surface-variant">Content Thumbnail</th>
                <th className="p-md font-label-bold text-label-bold text-on-surface-variant">Platform</th>
                <th className="p-md font-label-bold text-label-bold text-on-surface-variant">Eng. Rate</th>
                <th className="p-md font-label-bold text-label-bold text-on-surface-variant">Impressions</th>
                <th className="p-md font-label-bold text-label-bold text-on-surface-variant">Shares</th>
                <th className="p-md font-label-bold text-label-bold text-on-surface-variant">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              <ContentRow 
                title="Q4 Strategy Reveal" 
                platform="LinkedIn" 
                icon="work" 
                iconColor="#0A66C2" 
                rate="8.4%" 
                impressions="245,000" 
                shares="1,240" 
                thumbnail="https://lh3.googleusercontent.com/aida-public/AB6AXuA0ZxQEghkShOAVVgkrpR6i1R5gQRElCg-_mq_meE33eTRYoWUaJnmNRTsw9vgNkMaT235qO2RE6KUGK_qb8vh5TJZGsiHp9S6ObPomCy7F8CysLitpgj_xjFqWhCV9wxK6-QYYQxEdbSM_DPhyiGm6t0jl9trAq1ClRBD8G96IZtX_Zfh9RFRkKfZtncoN4D_agly3uHwtVS1HWvsDbgdoAUQaqtMm1YqUviTbRPN5Ox3VwfGiFDbAU9Qgwkseg8dKNQhereYG3zug"
              />
              <ContentRow 
                title="Team Spotlight" 
                platform="Instagram" 
                icon="camera_alt" 
                iconColor="#E1306C" 
                rate="7.9%" 
                impressions="182,300" 
                shares="3,450" 
                thumbnail="https://lh3.googleusercontent.com/aida-public/AB6AXuBbdrJbVIiXa4SCTcuy7fhHuRwqGjzQqBqIIYJlsa0khq6MHfk1DVma1P29q-nn1CMhMdLhMYahUOiB8V7BAXFozbi4sr2BIglujDlvVzzsuHuNfpKKOP3mQKyImNSBCZr0TxxOoXF1sNxH_SQgksneZU85msMxGhfnOrHFhK2n0FBgY6TJ2-N1MA-3-c0NaRrtOzn8b9tY7rBxlMjrdzG46hK1e2HGsSQu-Kx2S-bA_msNU_fdNgncF1FEdVP9BP4Z7jSexZyoVQfM"
              />
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

const MetricCard = ({ label, value, change, sublabel, icon, iconColor }) => (
  <div className="bg-surface-container-lowest p-lg rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-surface-container">
    <div className="flex justify-between items-start mb-sm">
      <span className="text-on-surface-variant font-label-bold text-label-bold">{label}</span>
      {change && <span className="text-teal-600 bg-teal-50 px-xs rounded text-[10px] font-bold">{change}</span>}
      {sublabel && <span className="text-on-surface-variant opacity-50 font-label-bold text-label-bold">{sublabel}</span>}
      {icon && <span className={`material-symbols-outlined ${iconColor || 'text-on-surface-variant'} text-[18px]`}>{icon}</span>}
    </div>
    <div className="font-stat-lg text-stat-lg text-primary">{value}</div>
  </div>
);

const ContentRow = ({ title, platform, icon, iconColor, rate, impressions, shares, thumbnail }) => (
  <tr className="hover:bg-surface-container-low/50 transition-colors">
    <td className="p-md">
      <div className="flex items-center gap-md">
        <div className="w-12 h-12 bg-surface-container rounded overflow-hidden">
          <img alt="Post Thumbnail" className="w-full h-full object-cover" src={thumbnail} />
        </div>
        <span className="font-body-md text-primary font-semibold">{title}</span>
      </div>
    </td>
    <td className="p-md">
      <div className="flex items-center gap-sm">
        <span className="material-symbols-outlined" style={{ color: iconColor }}>{icon}</span>
        <span className="text-body-md">{platform}</span>
      </div>
    </td>
    <td className="p-md font-label-bold text-primary">{rate}</td>
    <td className="p-md text-body-md">{impressions}</td>
    <td className="p-md text-body-md">{shares}</td>
    <td className="p-md">
      <span className="bg-teal-100 text-teal-800 px-sm py-xs rounded-full text-[10px] font-bold uppercase tracking-wider">Top Performing</span>
    </td>
  </tr>
);

export default Analytics;
