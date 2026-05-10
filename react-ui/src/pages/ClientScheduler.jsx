import React from 'react';
import Layout from '../components/Layout';

const ClientScheduler = () => {
  return (
    <Layout title="Scheduler" subtitle="Manage your upcoming social media posts.">
      {/* Quick Actions */}
      <section className="flex flex-wrap gap-md">
        <button className="flex items-center gap-xs bg-primary text-on-primary px-lg py-md rounded-xl font-label-bold whitespace-nowrap shadow-sm active:scale-95 duration-150">
          <span className="material-symbols-outlined text-[20px]">add</span>
          Add Post
        </button>
        <button className="flex items-center gap-xs bg-surface-container-lowest border border-primary text-primary px-lg py-md rounded-xl font-label-bold whitespace-nowrap active:scale-95 duration-150">
          <span className="material-symbols-outlined text-[20px]">drafts</span>
          Save Draft
        </button>
        <button className="flex items-center gap-xs bg-surface-container-lowest border border-primary text-primary px-lg py-md rounded-xl font-label-bold whitespace-nowrap active:scale-95 duration-150">
          <span className="material-symbols-outlined text-[20px]">event_repeat</span>
          Reschedule Post
        </button>
      </section>

      {/* Upcoming Scheduled Posts */}
      <section>
        <div className="flex justify-between items-center mb-md">
          <h3 className="font-headline-md text-headline-md text-primary">Upcoming Posts</h3>
          <button className="text-on-primary-container font-label-bold">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <ScheduledPostCard 
            platform="Instagram" 
            time="Oct 24, 10:30 AM" 
            content='"Behind the scenes at our creative workshop today! Can&apos;t wait to share the final results... #Creativity #DesignLife"'
            icon="photo_camera"
            color="#E1306C"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAh_hcen__6-VNQ_3MJMZSa1nlAENhsjKZdM77_IjhC2pLHiD7TeJnQc7m7ppz-a817rGewGReATyhGaYyXmegz96pgQZQhASKyGNpkHVgiLGvts_Sa6vClNb2pBw7YvUkGtq-sEvuKwP6VOBOJO9NJNgVWbgVuYa-Z6Fv0EGwue11gbS-5e78hCW5K6JKyyfu9xzmM7nVa64ac6v0MNHnkU1gP6xy9BJS8CnwfCREftVGF6HNbhQqfKteQa3muHLBRVvs1iK9AFyS8"
          />
          <ScheduledPostCard 
            platform="LinkedIn" 
            time="Oct 25, 09:00 AM" 
            content='"Excited to announce our new partnership with GlobalTech! Together, we are redefining industry standards."'
            icon="work"
            color="#0077B5"
            fallbackIcon="article"
          />
        </div>
      </section>
    </Layout>
  );
};

const ScheduledPostCard = ({ platform, time, content, icon, color, image, fallbackIcon }) => (
  <div className="bg-surface-container-lowest p-lg rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-surface-container-low flex flex-col gap-md">
    <div className="flex justify-between items-start">
      <div className="flex items-center gap-sm">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${color}1A`, color }}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
        </div>
        <div>
          <p className="font-label-bold text-primary">{platform}</p>
          <p className="text-label-bold text-outline">{time}</p>
        </div>
      </div>
      <span className="bg-primary-fixed text-on-primary-fixed px-sm py-xs rounded-full text-[10px] font-bold uppercase tracking-wider">Scheduled</span>
    </div>
    <p className="font-body-md text-on-surface-variant line-clamp-2">{content}</p>
    <div className="flex justify-between items-center pt-sm border-t border-surface-container">
      <div className="flex gap-md">
        <button className="material-symbols-outlined text-outline hover:text-primary transition-colors text-[20px]">edit</button>
        <button className="material-symbols-outlined text-outline hover:text-error transition-colors text-[20px]">delete</button>
      </div>
      <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-surface-container">
        {image ? (
          <img src={image} alt="Post Preview" className="w-full h-full object-cover" />
        ) : (
          <span className="material-symbols-outlined text-outline">{fallbackIcon}</span>
        )}
      </div>
    </div>
  </div>
);

export default ClientScheduler;
