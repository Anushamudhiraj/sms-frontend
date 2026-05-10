import React, { useState } from 'react';
import Layout from '../components/Layout';

const ContentQueue = () => {
  const [filter, setFilter] = useState('all');

  const posts = [
    {
      id: 1,
      status: 'scheduled',
      client: 'Lumina Tech Solutions',
      content: "Excited to announce our new partnership with Global Innovations! 🚀 Stay tuned for what's coming next in the world of decentralized architecture... #TechPartnership #Innovation",
      platforms: [{ name: 'LinkedIn', icon: 'work' }, { name: 'Twitter', icon: 'flutter_dash' }],
      date: 'Oct 24, 2023',
      time: '10:30 AM',
      thumbnail: 'https://lh3.googleusercontent.com/aida/ADBb0ujKwsanRkXbzZCQusaDz-_CSHISAe6etTFauis1hwR7LCfLX2w7FhlibgvuvJJD1YdbOEw06R_jz673DTK3i2mI1EmFKQtLcx3eIZRUN1To9apWENwOYyjOfm9PDG6x9yT2MwwRr_BW4rl8ILysYNoCbIo1_JiJV3QNItoX0-c8n8V_VBikY904NU-ZLWSAT_mZXVB-0YhIFngMIKZJCBNkaeY5EIepGlzWq7TkYpGDQNXUneW38oVKFC5mMgWRzH_lg7p0bRriG8s'
    },
    {
      id: 2,
      status: 'published',
      client: 'GreenPulse Agency',
      content: "Monday morning essentials. How do you start your week for maximum focus? ☕️🌿 #MondayMotivation #WorkLifeBalance",
      platforms: [{ name: 'Instagram', icon: 'photo_camera' }],
      date: 'Oct 23, 2023',
      time: '09:00 AM',
      reach: '4.2k people',
      thumbnail: 'https://lh3.googleusercontent.com/aida/ADBb0ugqfWogcGLE4ojN81MmozfsXsQdbJEltA9F6c0fQnKtQ0IVSCdECvH93geqtGoZQdvHRSRXS3vVaauBPaTKnGGOMfvx6hR8-SbaDWxXKk8aoLMzFR-QQIhq-sc-PZf6bxOqMiTB0lNKASZFJqGjVKgWcz5pfrS_2cvtQs9KNljNnApETKpM7Xvit5DHIutTvro1BOrdVo9ldEn3jOgMn92J2wqn_YYlL54tkdRLOmQ2PcNuwpnCDQhMSzIk8a4FQHE0NtM-ZiyHvzE'
    },
    {
      id: 3,
      status: 'failed',
      client: 'Creative Flux Co.',
      content: "Behind the scenes of our latest brainstorm session. Great ideas are brewing! 🧠✨ #Teamwork #CreativeProcess",
      platforms: [{ name: 'Facebook', icon: 'thumb_up' }],
      error: 'API Authentication Error',
      thumbnail: 'https://lh3.googleusercontent.com/aida/ADBb0ujLIo2tXXOSmsvcPByJg4RmDdJCtaUS19xFpDcM1D4WOF_6fK-e8zAAdFwr5OQa3PBM9aItSY9ZihrjEaTVHYf6H1H9Fw22UqTZvTIrpo5BWGiwuoPg_y0G7bxp5CXAEwCy9k9_0exfDPZUOtFuBVcyB4awS2IaSxQYNwMJUVuP58AGaCGvewf0GhQ2ejmDOAZQi8JXHln78s3kRuLLi14nKKbRPC6qvyf_IIlE131rW_KrgQjdSi1bDxOGYTKHG12YjfTreIisozA'
    },
    {
      id: 4,
      status: 'draft',
      client: 'Internal Campaign',
      content: "No caption added yet...",
      platforms: [{ name: 'Instagram', icon: 'photo_camera' }],
      lastEdited: '2 hours ago',
      isDraft: true
    }
  ];

  const filteredPosts = filter === 'all' ? posts : posts.filter(p => p.status === filter);

  return (
    <Layout title="Content Queue" subtitle="Manage and schedule your social media presence across all platforms">
      <div className="flex items-center gap-sm mb-lg">
        <FilterButton label="All" active={filter === 'all'} onClick={() => setFilter('all')} />
        <FilterButton label="Scheduled" color="primary" active={filter === 'scheduled'} onClick={() => setFilter('scheduled')} />
        <FilterButton label="Published" color="#4CAF50" active={filter === 'published'} onClick={() => setFilter('published')} />
        <FilterButton label="Draft" color="outline-variant" active={filter === 'draft'} onClick={() => setFilter('draft')} />
        <FilterButton label="Failed" color="error" active={filter === 'failed'} onClick={() => setFilter('failed')} />
      </div>

      <div className="space-y-md">
        {filteredPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  );
};

const FilterButton = ({ label, color, active, onClick }) => (
  <button 
    className={`px-4 py-1.5 rounded-full border transition-all font-label-bold text-label-bold flex items-center gap-2 ${
      active 
        ? 'bg-primary text-white border-primary' 
        : 'bg-surface-container-lowest text-on-surface-variant border-outline-variant hover:bg-surface-container-high'
    }`}
    onClick={onClick}
  >
    {color && <span className={`w-2 h-2 rounded-full`} style={{ backgroundColor: color === 'primary' ? '#031635' : color === 'error' ? '#ba1a1a' : color === 'outline-variant' ? '#c5c6cf' : color }}></span>}
    <span>{label}</span>
  </button>
);

const PostCard = ({ post }) => {
  const statusConfig = {
    scheduled: { label: 'SCHEDULED', bg: 'bg-primary-fixed-dim/20', text: 'text-primary-container', dot: 'bg-primary' },
    published: { label: 'PUBLISHED', bg: 'bg-secondary-container', text: 'text-on-secondary-container', dot: 'bg-[#4CAF50]' },
    failed: { label: 'FAILED', bg: 'bg-error-container', text: 'text-on-error-container', dot: 'bg-error' },
    draft: { label: 'DRAFT', bg: 'bg-surface-container-high', text: 'text-on-surface-variant', dot: 'bg-outline-variant' },
  };

  const config = statusConfig[post.status];

  return (
    <article className={`bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-[0px_2px_8px_rgba(0,0,0,0.04)] flex gap-lg group hover:border-primary/20 transition-all ${post.status === 'draft' ? 'opacity-70' : ''}`}>
      <div className="w-48 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container relative">
        {post.thumbnail ? (
          <img alt="Post Thumbnail" className={`w-full h-full object-cover ${post.status === 'failed' ? 'grayscale opacity-50' : ''}`} src={post.thumbnail} />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="material-symbols-outlined text-outline-variant text-[40px]">image</span>
          </div>
        )}
        {post.status === 'failed' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-error text-[32px]">error</span>
          </div>
        )}
      </div>
      
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-sm mb-xs">
              <span className="font-label-bold text-label-bold text-on-surface-variant">{post.client}</span>
              <span className="text-outline-variant text-[10px]">•</span>
              <span className={`${config.bg} ${config.text} px-sm py-[2px] rounded-full font-label-bold text-label-bold text-[10px] flex items-center gap-xs`}>
                <span className={`w-2 h-2 rounded-full ${config.dot}`}></span>
                {config.label}
              </span>
            </div>
            <p className={`font-body-md text-on-surface ${post.isDraft ? 'italic' : ''}`}>{post.content}</p>
          </div>
          <div className="flex gap-2">
            {post.platforms.map((p, idx) => (
              <div key={idx} className="w-8 h-8 flex items-center justify-center bg-surface-container-high rounded-lg text-on-surface-variant" title={p.name}>
                <span className="material-symbols-outlined text-[18px]">{p.icon}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-md">
          <div className="flex items-center gap-xl">
            {post.date && (
              <>
                <div className="flex items-center gap-xs text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  <span className="text-body-md">{post.date}</span>
                </div>
                <div className="flex items-center gap-xs text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  <span className="text-body-md">{post.time}</span>
                </div>
              </>
            )}
            {post.lastEdited && <span className="text-body-md text-on-surface-variant">Last edited {post.lastEdited}</span>}
            {post.error && (
              <div className="flex items-center gap-xs text-error">
                <span className="material-symbols-outlined text-[18px]">warning</span>
                <span className="text-body-md font-label-bold">{post.error}</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-sm">
            <div className="flex gap-xs mr-md">
              <button className="p-sm text-on-surface-variant hover:bg-surface-container hover:text-primary rounded-lg transition-colors"><span className="material-symbols-outlined text-[20px]">edit</span></button>
              <button className="p-sm text-on-surface-variant hover:bg-error-container hover:text-error rounded-lg transition-colors"><span className="material-symbols-outlined text-[20px]">delete</span></button>
            </div>
            {post.status === 'scheduled' && (
              <button className="px-md py-sm border border-primary text-primary font-label-bold text-label-bold rounded-lg hover:bg-primary hover:text-on-primary transition-colors">
                Publish now
              </button>
            )}
            {post.status === 'published' && (
              <>
                <span className="text-on-surface-variant font-label-bold text-label-bold mr-md">Reached {post.reach}</span>
                <button className="px-md py-sm text-on-surface-variant font-label-bold text-label-bold rounded-lg hover:bg-surface-container transition-colors">
                  View Analytics
                </button>
              </>
            )}
            {post.status === 'failed' && (
              <button className="px-md py-sm bg-error text-on-error font-label-bold text-label-bold rounded-lg hover:opacity-90 transition-opacity">
                Retry Post
              </button>
            )}
            {post.status === 'draft' && (
              <button className="px-md py-sm bg-surface-container-high text-on-surface font-label-bold text-label-bold rounded-lg hover:bg-surface-container transition-colors">
                Complete Draft
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContentQueue;
