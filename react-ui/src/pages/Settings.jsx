import React, { useState } from 'react';
import Layout from '../components/Layout';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <Layout title="Settings" subtitle="Manage your account preferences and connected services">
      <div className="flex border-b border-outline-variant mb-xl gap-xl">
        <TabButton id="general" label="General" activeTab={activeTab} onClick={setActiveTab} />
        <TabButton id="security" label="Security" activeTab={activeTab} onClick={setActiveTab} />
        <TabButton id="team" label="Team" activeTab={activeTab} onClick={setActiveTab} />
        <TabButton id="notifications" label="Notifications" activeTab={activeTab} onClick={setActiveTab} />
      </div>

      <div className="transition-opacity duration-200">
        {activeTab === 'general' && <GeneralTab />}
        {activeTab === 'security' && <SecurityTab />}
        {activeTab === 'team' && <TeamTab />}
        {activeTab === 'notifications' && <NotificationsTab />}
      </div>
    </Layout>
  );
};

const TabButton = ({ id, label, activeTab, onClick }) => (
  <button 
    onClick={() => onClick(id)}
    className={`pb-md text-on-surface-variant hover:text-primary transition-all ${activeTab === id ? 'text-primary font-bold border-b-2 border-primary' : ''}`}
  >
    {label}
  </button>
);

const GeneralTab = () => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
    <div className="lg:col-span-8">
      <section className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
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
            <InputField label="Full Name" value="Alex Chen" />
            <InputField label="Email Address" value="alex@socialpro.io" />
            <div className="md:col-span-2">
              <label className="font-label-bold text-label-bold text-on-surface-variant block mb-sm">Bio / Role</label>
              <textarea className="w-full border border-outline-variant rounded-lg bg-surface focus:border-primary focus:ring-1 focus:ring-primary py-sm px-md text-body-md resize-none" rows="3">Brand Manager overseeing digital strategy and content approvals. Focused on maintaining consistent visual identity across channels.</textarea>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="lg:col-span-4">
      <section className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-[0px_4px_12px_rgba(0,0,0,0.03)] h-full">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-lg">Connected Accounts</h3>
        <div className="space-y-md">
          <ConnectedAccount platform="Instagram" icon="photo_camera" color="#E1306C" connected />
          <ConnectedAccount platform="Facebook" icon="groups" color="#1877F2" connected />
          <ConnectedAccount platform="Twitter / X" icon="chat_bubble" color="#1DA1F2" />
          <ConnectedAccount platform="LinkedIn" icon="business_center" color="#0A66C2" connected />
        </div>
      </section>
    </div>
  </div>
);

const SecurityTab = () => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
    <div className="lg:col-span-8">
      <section className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
        <div className="flex items-center justify-between mb-lg">
          <h3 className="font-headline-md text-headline-md text-on-surface">Security & Privacy</h3>
          <span className="material-symbols-outlined text-primary/40">lock</span>
        </div>
        <div className="space-y-lg">
          <ToggleItem 
            icon="phonelink_lock" 
            title="Two-Factor Authentication" 
            desc="Protect your account with a secondary verification step." 
            active 
          />
          <div className="flex items-center justify-between p-md border border-outline-variant rounded-lg bg-surface-container-low/30">
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">password</span>
              </div>
              <div>
                <p className="font-label-bold text-on-surface">Password Change</p>
                <p className="text-on-surface-variant text-body-md">Last updated 4 months ago</p>
              </div>
            </div>
            <button className="text-primary font-label-bold px-md py-sm border border-primary rounded-lg hover:bg-primary/5 transition-colors">Update Password</button>
          </div>
          <div className="pt-lg border-t border-outline-variant">
            <h4 className="font-label-bold text-on-surface mb-md uppercase text-[10px] tracking-widest">Login Activity</h4>
            <div className="space-y-md">
              <ActivityRow icon="desktop_windows" label="Chrome on MacOS (London, UK)" status="Active Now" active />
              <ActivityRow icon="smartphone" label="iPhone 15 Pro" status="4 hours ago" />
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="lg:col-span-4">
      <section className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-[0px_4px_12px_rgba(0,0,0,0.03)] h-full">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-lg">Trusted Devices</h3>
        <div className="space-y-md">
          <DeviceRow icon="laptop" name="Alex's MacBook" />
          <DeviceRow icon="smartphone" name="iPhone 15 Pro" />
          <button className="w-full py-sm border border-primary text-primary rounded-lg font-label-bold text-[12px] hover:bg-primary/5 transition-colors mt-lg">Revoke All Sessions</button>
        </div>
      </section>
    </div>
  </div>
);

const TeamTab = () => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
    <div className="lg:col-span-8">
      <section className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-lg gap-md">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Team Members</h3>
            <p className="text-body-md text-on-surface-variant">Active collaborators on your client account.</p>
          </div>
          <button className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-bold flex items-center gap-sm transition-all hover:opacity-90">
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            Invite Member
          </button>
        </div>
        <div className="space-y-md">
          <MemberRow name="Jordan Day" email="jordan@clientbrand.com" role="Content Creator" initial="JD" color="bg-primary-fixed-dim" />
          <MemberRow name="Maria Lopez" email="m.lopez@clientbrand.com" role="Viewer" initial="ML" color="bg-tertiary-fixed-dim" />
          <MemberRow name="Robert Hunter" email="r.hunter@clientbrand.com" role="Editor" initial="RH" color="bg-surface-variant" />
        </div>
      </section>
    </div>
    <div className="lg:col-span-4">
      <section className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-[0px_4px_12px_rgba(0,0,0,0.03)] h-full">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-lg">Collaboration Roles</h3>
        <div className="space-y-lg">
          <RoleInfo role="Editor" desc="Full access to content creation, scheduling, and asset management." />
          <RoleInfo role="Content Creator" desc="Can draft posts and upload assets for review. Cannot publish directly." />
          <RoleInfo role="Viewer" desc="Read-only access to analytics, reports, and approved content." />
        </div>
      </section>
    </div>
  </div>
);

const NotificationsTab = () => (
  <section className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-[0px_4px_12px_rgba(0,0,0,0.03)] max-w-2xl">
    <div className="flex items-center justify-between mb-lg">
      <h3 className="font-headline-md text-headline-md text-on-surface">Notification Preferences</h3>
      <span className="material-symbols-outlined text-primary/40">notifications_active</span>
    </div>
    <div className="space-y-lg">
      <ToggleItem title="Post Reminders" desc="Alerts for upcoming scheduled posts that require final review." active />
      <ToggleItem title="Failed Post Alerts" desc="Immediate notification if a post fails to publish to any platform." active />
      <ToggleItem title="AI Completion Alerts" desc="Notification when the AI Studio finishes generating requested content." />
      <ToggleItem title="Engagement Alerts" desc="Get notified when your posts receive high interaction or mentions." active />
      <div className="pt-md border-t border-outline-variant space-y-md">
        <h4 className="font-label-bold text-[10px] uppercase tracking-widest text-on-surface-variant">Subscription & Reporting</h4>
        <SimpleToggle label="Weekly Analytics Summary" active />
        <SimpleToggle label="Monthly ROI Reports" active />
      </div>
    </div>
  </section>
);

const InputField = ({ label, value }) => (
  <div className="space-y-xs">
    <label className="font-label-bold text-label-bold text-on-surface-variant block">{label}</label>
    <input className="w-full border border-outline-variant rounded-lg bg-surface focus:border-primary focus:ring-1 focus:ring-primary py-sm px-md text-body-md" type="text" defaultValue={value} />
  </div>
);

const ConnectedAccount = ({ platform, icon, color, connected }) => (
  <div className="flex items-center justify-between p-sm border border-outline-variant rounded-lg bg-surface-container-low/20">
    <div className="flex items-center gap-sm">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${color}1A` }}>
        <span className="material-symbols-outlined text-[20px]" style={{ color }}>{icon}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-label-bold leading-tight">{platform}</span>
        <span className={`text-[10px] font-bold uppercase ${connected ? 'text-green-600' : 'text-on-surface-variant'}`}>{connected ? 'Connected' : 'Not Linked'}</span>
      </div>
    </div>
    <button className={`${connected ? 'text-error' : 'text-primary'} text-[11px] font-bold hover:underline`}>{connected ? 'Disconnect' : 'Connect'}</button>
  </div>
);

const ToggleItem = ({ icon, title, desc, active }) => (
  <div className="flex items-center justify-between p-md border border-outline-variant rounded-lg bg-surface-container-low/30">
    <div className="flex items-center gap-md">
      {icon && (
        <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">{icon}</span>
        </div>
      )}
      <div>
        <p className="font-label-bold text-on-surface">{title}</p>
        <p className="text-on-surface-variant text-body-md">{desc}</p>
      </div>
    </div>
    <div className={`w-11 h-6 rounded-full p-1 transition-colors cursor-pointer ${active ? 'bg-primary' : 'bg-surface-container-highest'}`}>
      <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform ${active ? 'translate-x-5' : 'translate-x-0'}`}></div>
    </div>
  </div>
);

const SimpleToggle = ({ label, active }) => (
  <div className="flex items-center justify-between">
    <span className="text-body-md text-on-surface">{label}</span>
    <div className={`w-10 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${active ? 'bg-primary' : 'bg-surface-container-highest'}`}>
      <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform ${active ? 'translate-x-5' : 'translate-x-0'}`}></div>
    </div>
  </div>
);

const ActivityRow = ({ icon, label, status, active }) => (
  <div className="flex items-center justify-between text-body-md">
    <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-on-surface-variant text-[18px]">{icon}</span>
      <span>{label}</span>
    </div>
    <span className={`font-bold text-[12px] ${active ? 'text-primary' : 'text-on-surface-variant'}`}>{status}</span>
  </div>
);

const DeviceRow = ({ icon, name }) => (
  <div className="p-sm border border-outline-variant rounded-lg flex items-center justify-between">
    <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary">{icon}</span>
      <span className="font-label-bold text-[12px]">{name}</span>
    </div>
    <button className="text-on-surface-variant hover:text-error transition-colors"><span className="material-symbols-outlined text-[18px]">logout</span></button>
  </div>
);

const MemberRow = ({ name, email, role, initial, color }) => (
  <div className="flex items-center justify-between p-sm hover:bg-surface-container-low/40 rounded-xl transition-colors border border-transparent hover:border-outline-variant">
    <div className="flex items-center gap-md">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-on-surface ${color}`}>{initial}</div>
      <div>
        <p className="font-label-bold text-on-surface">{name}</p>
        <p className="text-body-md text-on-surface-variant">{email}</p>
      </div>
    </div>
    <div className="flex items-center gap-xl">
      <span className="px-md py-xs bg-secondary-container text-on-secondary-container text-[11px] font-bold rounded-full uppercase tracking-wider">{role}</span>
      <button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
    </div>
  </div>
);

const RoleInfo = ({ role, desc }) => (
  <div className="pt-md border-t first:border-t-0 border-outline-variant first:pt-0">
    <h4 className="font-label-bold text-[12px] text-primary mb-xs">{role}</h4>
    <p className="text-body-md text-on-surface-variant">{desc}</p>
  </div>
);

export default Settings;
