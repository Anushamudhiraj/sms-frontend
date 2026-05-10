import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const isClientPortal = location.pathname.startsWith('/client');

  const agencyNavGroups = [
    {
      title: 'Workspace',
      items: [
        { name: 'Dashboard', icon: 'dashboard', path: '/smh-dashboard' },
        { name: 'Clients', icon: 'group', path: '/clients' },
        { name: 'Content queue', icon: 'schedule', path: '/content-queue' },
        { name: 'Scheduler', icon: 'calendar_month', path: '/scheduler' },
      ],
    },
    {
      title: 'Tools',
      items: [
        { name: 'Analytics', icon: 'analytics', path: '/analytics' },
        { name: 'AI Caption Studio', icon: 'auto_awesome', path: '/ai-studio' },
      ],
    },
    {
      title: 'Settings',
      items: [
        { name: 'Settings', icon: 'settings', path: '/settings' },
      ],
    },
  ];

  const clientNavGroups = [
    {
      title: 'Client Portal',
      items: [
        { name: 'Dashboard', icon: 'dashboard', path: '/client/dashboard' },
        { name: 'Scheduler', icon: 'calendar_today', path: '/client/scheduler' },
        { name: 'Analytics', icon: 'monitoring', path: '/client/analytics' },
        { name: 'AI Insights', icon: 'auto_awesome', path: '/client/ai-insights' },
      ],
    },
    {
      title: 'Support',
      items: [
        { name: 'Settings', icon: 'settings', path: '/settings' },
        { name: 'Help', icon: 'help', path: '/help' },
      ],
    },
  ];

  const navGroups = isClientPortal ? clientNavGroups : agencyNavGroups;

  return (
    <aside className="w-[240px] h-full fixed left-0 top-0 bg-primary z-50 flex flex-col py-xl border-r border-outline-variant/10">
      <div className="px-lg mb-lg">
        <h1 className="text-on-primary font-headline-xl tracking-tight">
          {isClientPortal ? 'Client Portal' : 'SMH Dashboard'}
        </h1>
      </div>
      
      <nav className="flex-1 space-y-xl overflow-y-auto">
        {navGroups.map((group) => (
          <div key={group.title}>
            <p className="px-lg mb-sm text-on-primary-container font-label-bold opacity-50 uppercase tracking-widest text-[10px]">
              {group.title}
            </p>
            <ul className="space-y-xs">
              {group.items.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-md px-lg py-md transition-colors duration-200 ${
                        isActive
                          ? 'sidebar-active text-on-primary'
                          : 'text-on-primary/70 hover:text-on-primary hover:bg-on-primary/5'
                      }`
                    }
                  >
                    <span className="material-symbols-outlined">{item.icon}</span>
                    <span className="font-label-bold">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="mt-auto px-lg pt-lg border-t border-on-primary/10 flex items-center gap-md">
        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary text-xs font-bold">SR</div>
        <div>
          <p className="text-on-primary font-label-bold text-[12px]">Sarah Rogers</p>
          <div className="flex items-center gap-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
            <span className="text-on-primary-container text-[10px]">Online</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

