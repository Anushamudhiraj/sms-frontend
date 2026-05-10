import React from 'react';
import Layout from '../components/Layout';

const Scheduler = () => {
  const posts = [
    {
      id: 1,
      title: 'Unlocking Creative Potential: Our New Agency Framework',
      content: 'We are excited to announce our newest initiative for Q4 content strategy...',
      status: 'SCHEDULED',
      platform: 'facebook',
      platformIcon: 'social_leaderboard',
      date: 'Oct 24, 2023',
      time: '09:15 AM',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfI79OC8Wjlbbsu4cJJ-2YO98O4u3SpR5kdu-6slYDzC05EIz8Pf2-HFSGk3QMfyJ_8gZwP6TJL7e3YFHQKeAyVEG-CQI0fiUirX0bB4W9X-K4K9sQ_MROL_Lg8aIdo2MPZ055I5x3z-UCTCgxBOZjHgTHyzOT12JSH91W3UaY_vn-XtARnZUfAsW7cS7NB-FkwIfN_5ONsVsjp0KEacP54y30Yex9a9b9MVkKJzWr5AEkcV7SEKkydz8IZMJeMSX65JmlE1MB1C8a'
    },
    {
      id: 2,
      title: 'The Secret to Viral Instagram Reels in 2024',
      content: 'Watch our latest breakdown of the algorithm changes happening this week...',
      status: 'POSTED',
      platform: 'instagram',
      platformIcon: 'photo_camera',
      date: 'Oct 23, 2023',
      time: '05:30 PM',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAM9QcAwR31KoXtBhJs7qHN1JdeXNgLJWdf5F9WehVc1ts5-5VcW_Ui-swMD5YxVk8xHbNwMTvjOj8mPDk4sQa5qk5bWXA8FVDFHew5SiUoMrir5chZocsLP8yGBD_BRMeeRIPe3vmnoD8KAbINBEr25g8kHl6MTGakuPx7SDrIayJ7dXCjmTvbvzE4OBU5helfqwDI1KNl6-bilKDVVHbK_KyTwZtKcBoY-HE9PWdGDnpokwl4tPPSvsc07Fh5N42b15oZZ_Ioaq4n'
    },
    {
      id: 3,
      title: 'Building Trust in the Digital Era: A B2B Perspective',
      content: 'Our CEO shares insights on professional networking and brand authority on LinkedIn...',
      status: 'SCHEDULED',
      platform: 'linkedin',
      platformIcon: 'group',
      date: 'Oct 25, 2023',
      time: '10:00 AM',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvv4SWxsey-qTnQ7gXvIBG7GOEDrVljjG6VDNtiof8FL_nQPNHEpM5eGtlY_Y_XMtws7MBdJ8-lymqbJKYS7Ik1tv51ORaGt_OTQoIp3kVjRo7YKHL5Oy92KtbE9nBdtc787ng1DhUv5lmKso_qjhTIn-TMh2Y1SfXNV5KBsqfMNfUps-bRda1L_lrR1_CjS3aZqDFl6n4sJi38FIQANRaxjjgmCv72tPBspGRhG3swPbQ58gZAIx6R4LEmUsdIRawfVQbgQ6eWJAY'
    }
  ];

  return (
    <Layout title="Scheduler" subtitle="Manage your cross-platform content timeline and campaign distribution">
      <div className="flex items-end justify-between mb-xl">
        <div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-2">Timeline</h2>
        </div>
        <button className="bg-primary text-white font-label-bold px-lg py-sm rounded-lg flex items-center gap-2 hover:bg-primary-container transition-all">
          <span className="material-symbols-outlined text-[20px]">add</span>
          Add Post
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] overflow-hidden border border-surface-container-highest">
        <div className="px-lg py-md border-b border-surface-container-highest flex justify-between items-center">
          <h3 className="font-headline-md text-headline-md text-on-surface">Recent & Scheduled Posts</h3>
          <span className="bg-primary-fixed text-on-primary-fixed text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">12 Pending</span>
        </div>
        <div className="divide-y divide-surface-container">
          {posts.map(post => (
            <div key={post.id} className="p-lg hover:bg-surface-container-low transition-colors group flex items-start gap-md">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container relative">
                <img alt="Social Media Preview" className="w-full h-full object-cover" src={post.thumbnail} />
                <div className={`absolute bottom-1 right-1 p-0.5 rounded shadow ${
                  post.platform === 'facebook' ? 'bg-[#1877F2]' : 
                  post.platform === 'instagram' ? 'bg-gradient-to-tr from-[#fdf497] via-[#fd5949] to-[#285AEB]' : 
                  'bg-[#0077B5]'
                }`}>
                  <span className="material-symbols-outlined text-white text-[12px]">{post.platformIcon}</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-sm mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">{post.date} • {post.time}</span>
                  <div className="flex items-center gap-1 ml-auto">
                    <span className={`${post.status === 'SCHEDULED' ? 'bg-tertiary-fixed text-on-tertiary-fixed-variant' : 'bg-primary-fixed text-on-primary-fixed'} px-2 py-0.5 rounded-full font-label-bold text-[10px]`}>
                      {post.status}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${post.status === 'SCHEDULED' ? 'bg-orange-400' : 'bg-emerald-500'}`}></div>
                  </div>
                </div>
                <h4 className="font-label-bold text-on-surface truncate">{post.title}</h4>
                <p className="text-body-md text-on-surface-variant truncate">{post.content}</p>
              </div>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-surface-container-high rounded-full">
                <span className="material-symbols-outlined text-on-surface-variant">
                  {post.status === 'POSTED' ? 'analytics' : 'more_vert'}
                </span>
              </button>
            </div>
          ))}
        </div>
        <div className="bg-surface-container-low p-md flex justify-center">
          <button className="text-primary font-label-bold flex items-center gap-2 hover:underline">
            View Full Content Calendar
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-surface-container-highest p-lg">
        <h4 className="font-headline-md text-headline-md text-on-surface mb-md">Campaign Distribution</h4>
        <div className="space-y-md">
          <DistributionBar label="Instagram" percentage={45} color="#ee2a7b" />
          <DistributionBar label="Facebook" percentage={30} color="#1877F2" />
          <DistributionBar label="LinkedIn" percentage={25} color="#0077B5" />
        </div>
      </div>
    </Layout>
  );
};

const DistributionBar = ({ label, percentage, color }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-xs font-bold text-on-surface-variant uppercase">
      <span>{label}</span>
      <span>{percentage}%</span>
    </div>
    <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
      <div className="h-full" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
    </div>
  </div>
);

export default Scheduler;
