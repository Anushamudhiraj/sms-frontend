import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';


const Clients = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = 6;

  const clientsData = [
    { name: 'Luxe Hotels Group', status: 'Active', platforms: [{name: 'Instagram', icon: 'camera_alt', color: '#E4405F', value: '450K'}, {name: 'Facebook', icon: 'social_leaderboard', color: '#1877F2', value: '750K'}], posts: '4 Posts', initials: 'LH', logoType: 'initials' },
    { name: 'SwiftEats Delivery', status: 'Pending', platforms: [{name: 'Instagram', icon: 'camera_alt', color: '#E4405F', value: '220K'}, {name: 'Twitter', icon: 'chat', color: '#1DA1F2', value: '230K'}], posts: '0 Posts', initials: 'SE', logoType: 'initials' },
    { name: 'TechCore Solutions', status: 'Active', platforms: [{name: 'LinkedIn', icon: 'person_add', color: '#0A66C2', value: '1.2M'}, {name: 'Facebook', icon: 'social_leaderboard', color: '#1877F2', value: '1.6M'}], posts: '12 Posts', initials: 'TC', logoType: 'initials' },
    { name: 'Eco-Ware Solutions', status: 'Active', platforms: [{name: 'Instagram', icon: 'camera_alt', color: '#E4405F', value: '120K'}, {name: 'Twitter', icon: 'chat', color: '#1DA1F2', value: '80K'}], posts: '15 Posts', initials: 'EW', logoType: 'initials' },
    { name: 'Peak Fitness', status: 'Active', platforms: [{name: 'Instagram', icon: 'camera_alt', color: '#E4405F', value: '310K'}, {name: 'Facebook', icon: 'social_leaderboard', color: '#1877F2', value: '200K'}], posts: '42 Posts', initials: 'PF', logoType: 'initials' },
    { name: 'Global Logistics', status: 'Pending', platforms: [{name: 'LinkedIn', icon: 'person_add', color: '#0A66C2', value: '500K'}, {name: 'Twitter', icon: 'chat', color: '#1DA1F2', value: '150K'}], posts: '8 Posts', initials: 'GL', logoType: 'initials' },
    ...Array.from({ length: 12 }, (_, i) => ({
      name: `Client Alpha ${i + 7}`,
      status: i % 2 === 0 ? 'Active' : 'Pending',
      platforms: [{name: 'Instagram', icon: 'camera_alt', color: '#E4405F', value: '100K'}, {name: 'Facebook', icon: 'social_leaderboard', color: '#1877F2', value: '100K'}],
      posts: '10 Posts',
      initials: 'CA',
      logoType: 'initials'
    }))
  ];

  const currentClients = clientsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <Layout title="Client Management" subtitle="Manage your agency clients and their social reach">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
        <div>
          <h1 className="font-headline-xl text-headline-xl text-on-surface">Client Management</h1>
        </div>
        <div className="flex items-center gap-md">
          <div className="flex bg-surface-container-high rounded-lg p-unit">
            <button className="px-md py-xs bg-surface-container-lowest shadow-sm rounded-md font-label-bold text-label-bold text-on-surface">Grid View</button>
            <button className="px-md py-xs text-outline font-label-bold text-label-bold hover:text-on-surface transition-colors">List View</button>
          </div>
          <button className="flex items-center gap-sm px-md py-xs border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            <span className="font-label-bold text-label-bold">Filter</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xl">
        <StatCard label="Total Combined Reach" value="8.4M" change="+12%" trend="up" />
        <StatCard label="Active Posts" value="42" badge="8 STARTING SOON" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
        {currentClients.map((client, idx) => (
          <ClientCard key={idx} client={client} />
        ))}
      </div>

      <div className="mt-xl flex flex-col items-center gap-md py-lg">
        <div className="flex items-center gap-xs">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-sm rounded hover:bg-surface-container-high transition-colors text-outline disabled:opacity-50"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 rounded font-bold text-sm ${currentPage === i + 1 ? 'bg-primary text-on-primary' : 'hover:bg-surface-container-high text-on-surface'}`}
            >
              {i + 1}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-sm rounded hover:bg-surface-container-high transition-colors text-outline disabled:opacity-50"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
        <p className="text-body-md text-outline">
          Showing <span className="font-bold text-on-surface">{(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, 24)}</span> of <span className="font-bold text-on-surface">24</span> clients
        </p>
      </div>
    </Layout>
  );
};

const StatCard = ({ label, value, change, trend, badge }) => (
  <div className="bg-surface-container-lowest p-lg rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-surface-container-high flex flex-col justify-between h-[120px]">
    <span className="text-outline font-label-bold text-[11px] uppercase tracking-wider">{label}</span>
    <div className="flex items-end justify-between">
      <span className="font-stat-lg text-stat-lg text-primary">{value}</span>
      {change && (
        <span className="text-teal-600 font-label-bold text-xs flex items-center">
          {change} <span className="material-symbols-outlined text-[14px]">{trend === 'up' ? 'trending_up' : 'trending_down'}</span>
        </span>
      )}
      {badge && (
        <span className="bg-secondary-container px-sm py-unit rounded text-[10px] font-bold">{badge}</span>
      )}
    </div>
  </div>
);

const ClientCard = ({ client }) => {
  const statusClass = client.status === 'Active' 
    ? 'bg-teal-50 text-teal-700 border-teal-100' 
    : 'bg-tertiary-fixed text-on-tertiary-fixed border-transparent';

  return (
    <div className="bg-surface-container-lowest rounded-xl border border-surface-container-high shadow-[0px_4px_12px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col transition-transform hover:-translate-y-1">
      <div className="p-lg">
        <div className="flex justify-between items-start mb-md">
          <div className="flex items-center gap-md">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-surface-container flex items-center justify-center bg-primary text-on-primary font-bold">
              {client.initials}
            </div>
            <div>
              <h3 className="font-headline-md text-[16px] text-on-surface">{client.name}</h3>
              <p className="text-[12px] text-outline">Connected to different platforms</p>
            </div>
          </div>
          <span className={`${statusClass} text-[10px] px-sm py-unit rounded font-bold border uppercase tracking-tighter`}>{client.status}</span>
        </div>
        <div className="flex flex-col gap-sm mb-lg">
          {client.platforms.map((p, idx) => (
            <div key={idx} className="flex items-center justify-between text-[12px]">
              <div className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-[16px]" style={{ color: p.color }}>{p.icon}</span>
                <span className="text-outline">{p.name}</span>
              </div>
              <span className="font-bold">{p.value}</span>
            </div>
          ))}
        </div>
        <div className="pt-sm border-t border-surface-container">
          <p className="text-[10px] text-outline font-bold uppercase tracking-tight">Total Posts</p>
          <p className="font-label-bold text-primary">{client.posts}</p>
        </div>
      </div>
      <div className="mt-auto border-t border-surface-variant px-lg py-md flex items-center justify-center bg-surface-bright">
        <Link 
          to="/client/dashboard"
          className="w-full bg-surface-container hover:bg-surface-container-high text-on-surface text-label-bold font-label-bold px-md py-sm rounded-md transition-colors text-center"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};


export default Clients;
