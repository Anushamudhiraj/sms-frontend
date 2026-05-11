import { useState } from 'react';
import ClientLayout from '../components/ClientLayout';

export default function ClientSettings() {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'General' },
    { id: 'security', label: 'Security' },
    { id: 'team', label: 'Team' },
    { id: 'notifications', label: 'Notifications' },
  ];

  return (
    <ClientLayout>
      <header className="mb-xl px-xs">
        <h2 className="font-headline-xl text-headline-xl text-primary font-bold">Settings</h2>
        <p className="text-on-surface-variant text-body-md">Manage your account and notification preferences.</p>
      </header>

      {/* Horizontal Settings Navigation */}
      <div className="flex border-b border-outline-variant mb-xl gap-xl px-xs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-md text-on-surface-variant hover:text-primary transition-colors ${
              activeTab === tab.id ? 'text-primary font-bold border-b-2 border-primary' : ''
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      {activeTab === 'general' && (
        <div className="space-y-xl animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
            <div className="lg:col-span-8">
              <section className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-sm h-full">
                <div className="flex items-center justify-between mb-lg">
                  <h3 className="font-headline-md text-headline-md text-on-surface">Profile Information</h3>
                  <span className="material-symbols-outlined text-primary/40">person</span>
                </div>
                <div className="flex flex-col md:flex-row items-start gap-xl">
                  <div className="relative group cursor-pointer shrink-0">
                    <img alt="Upload" className="w-24 h-24 rounded-xl object-cover ring-4 ring-surface-container shadow-md" src="https://lh3.googleusercontent.com/aida/ADBb0uiyDTxLulY7CukQTwM8-mLnxlzTnvYp78oUmWUPR5uaFksQWMfwL70VtiAXNX1Uzv_mxHse1c8WC7hRBMvwF-1DE3f07HnEko_0OjSmydCstYlKTwezwb7_0ylf3nmseUbLWIHIhKbIwflmxmct8nAC048wtTXy0HhXMZ9X295R9JaiDpMNeOC-Ipfi2IavvXFEKobHqNIITZC-GE7ccMNboECUFRQG4mh_l17AFzBd3UkltNJ393TSv93buaRTE5EJ6wbYTjv2ByY" />
                    <div className="absolute inset-0 bg-primary/40 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-on-primary">photo_camera</span>
                    </div>
                  </div>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-md w-full">
                    <div className="space-y-xs">
                      <label className="font-label-bold text-label-bold text-on-surface-variant">Full Name</label>
                      <input className="w-full border-outline-variant border rounded-lg bg-surface focus:border-primary focus:ring-1 focus:ring-primary py-sm px-md text-body-md" type="text" defaultValue="Alex Chen" />
                    </div>
                    <div className="space-y-xs">
                      <label className="font-label-bold text-label-bold text-on-surface-variant">Email Address</label>
                      <input className="w-full border-outline-variant border rounded-lg bg-surface focus:border-primary focus:ring-1 focus:ring-primary py-sm px-md text-body-md" type="email" defaultValue="alex@socialpro.io" />
                    </div>
                    <div className="md:col-span-2 space-y-xs">
                      <label className="font-label-bold text-label-bold text-on-surface-variant">Bio / Role</label>
                      <textarea className="w-full border-outline-variant border rounded-lg bg-surface focus:border-primary focus:ring-1 focus:ring-primary py-sm px-md text-body-md resize-none" rows="3" defaultValue="Brand Manager overseeing digital strategy and content approvals. Focused on maintaining consistent visual identity across channels."></textarea>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="lg:col-span-4">
              <section className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-sm h-full">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-lg">Connected Accounts</h3>
                <div className="space-y-md">
                  {[
                    { name: 'Instagram', status: 'Connected', color: '#E1306C', icon: 'photo_camera' },
                    { name: 'Facebook', status: 'Connected', color: '#1877F2', icon: 'groups' },
                    { name: 'LinkedIn', status: 'Connected', color: '#0A66C2', icon: 'business_center' },
                  ].map((account, idx) => (
                    <div key={idx} className="flex items-center justify-between p-sm border border-outline-variant rounded-lg bg-surface-container-low/20">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${account.color}1A` }}>
                          <span className="material-symbols-outlined text-[20px]" style={{ color: account.color }}>{account.icon}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-bold leading-tight">{account.name}</span>
                          <span className="text-[10px] text-green-600 font-bold uppercase">{account.status}</span>
                        </div>
                      </div>
                      <button className="text-error text-[11px] font-bold hover:underline">Disconnect</button>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}

      {/* Simplified for other tabs */}
      {activeTab !== 'general' && (
        <div className="bg-surface-container-lowest p-xl rounded-xl border border-outline-variant h-64 flex items-center justify-center italic text-on-surface-variant animate-in fade-in duration-300">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} settings content
        </div>
      )}
    </ClientLayout>
  );
}
