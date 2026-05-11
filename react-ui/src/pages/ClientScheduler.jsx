import ClientLayout from '../components/ClientLayout';

export default function ClientScheduler() {
  return (
    <ClientLayout>
      {/* Page Header Section */}
      <div className="flex justify-between items-end mb-xl px-xs">
        <div>
          <h2 className="font-headline-xl text-headline-xl text-primary">Scheduler</h2>
          <p className="text-on-surface-variant font-body-lg">Manage and organize your scheduled social media content.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container-lowest border border-primary text-primary px-6 py-2 rounded-lg font-label-bold flex items-center gap-2 hover:bg-surface-container-high transition-all">
            <span className="material-symbols-outlined text-sm">description</span>
            Save Draft
          </button>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-bold flex items-center gap-2 shadow-sm hover:opacity-90 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-sm">add</span>
            Add Post
          </button>
        </div>
      </div>

      {/* Dashboard Grid Layout */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Section 1: Upcoming Scheduled Posts */}
        <div className="col-span-12 lg:col-span-9 space-y-md">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-md text-headline-md">Upcoming Scheduled Posts</h3>
            <button className="text-primary text-sm font-semibold hover:underline">View Calendar</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {[
              { 
                platform: 'Instagram', 
                type: 'Reel Publication', 
                content: '"Behind the scenes of our latest product launch! We\'re so excited to finally show you what we\'ve been working on..."',
                date: 'May 12',
                time: '10:30 AM',
                prediction: 'High Engagement Predicted',
                gradient: 'from-yellow-400 via-pink-500 to-purple-600',
                icon: 'camera'
              },
              { 
                platform: 'Facebook', 
                type: 'Page Update', 
                content: '"Join our community webinar this Friday to learn how to master social media analytics with our new tools."',
                date: 'May 14',
                time: '02:00 PM',
                prediction: 'Stable Reach Prediction',
                bg: 'bg-[#1877F2]',
                icon: 'facebook'
              },
              { 
                platform: 'Twitter/X', 
                type: 'Thread', 
                content: '"1/5 Why small businesses are failing at social media engagement and how to fix it in 3 easy steps. 🧵"',
                date: 'May 15',
                time: '09:00 AM',
                prediction: 'Viral Potential Detected',
                bg: 'bg-black',
                icon: 'close'
              },
              { 
                platform: 'LinkedIn', 
                type: 'Thought Leadership', 
                content: '"Deep dive into the 2026 Digital Marketing Trends report. Here are the 5 things you need to know today."',
                date: 'May 18',
                time: '11:15 AM',
                prediction: 'B2B Network Priority',
                bg: 'bg-[#0077B5]',
                icon: 'groups'
              },
            ].map((post, idx) => (
              <div key={idx} className="bg-white p-lg rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all flex flex-col gap-4 group">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${post.gradient ? `bg-gradient-to-tr ${post.gradient}` : post.bg} flex items-center justify-center text-white`}>
                      <span className="material-symbols-outlined">{post.icon}</span>
                    </div>
                    <div>
                      <p className="font-label-bold">{post.platform}</p>
                      <p className="text-xs text-on-surface-variant">{post.type}</p>
                    </div>
                  </div>
                  <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Scheduled</span>
                </div>
                <p className="text-body-md text-on-surface-variant line-clamp-2">{post.content}</p>
                <div className="flex items-center gap-4 py-2 border-y border-outline-variant/20 text-xs font-semibold text-on-surface">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_today</span> {post.date}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> {post.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-on-tertiary-container bg-tertiary-fixed/30 px-2 py-1 rounded">
                    <span className="material-symbols-outlined text-xs">trending_up</span>
                    <span className="text-[10px] font-bold">{post.prediction}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">edit</span></button>
                    <button className="p-2 text-on-surface-variant hover:text-error transition-colors"><span className="material-symbols-outlined">delete</span></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar Container */}
        <div className="col-span-12 lg:col-span-3 space-y-xl">
          <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden">
            <div className="p-md border-b border-outline-variant/20">
              <h3 className="font-headline-md text-sm font-bold uppercase tracking-wide text-on-surface-variant">Connected Platforms</h3>
            </div>
            <div className="divide-y divide-outline-variant/10">
              {[
                { name: 'Instagram', stats: '12.4k followers', color: 'text-pink-600', icon: 'camera', status: 'check_circle' },
                { name: 'Facebook', stats: '8.9k likes', color: 'text-blue-600', icon: 'facebook', status: 'check_circle' },
                { name: 'Twitter/X', stats: '42.1k followers', color: 'text-black', icon: 'close', status: 'check_circle' },
                { name: 'LinkedIn', stats: '156 Connections', color: 'text-[#0077B5]', icon: 'groups', status: 'pending' },
              ].map((p, idx) => (
                <div key={idx} className="px-md py-4 flex items-center justify-between hover:bg-surface-container-low transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${p.status === 'check_circle' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-orange-400'}`}></div>
                    <span className={`material-symbols-outlined ${p.color}`}>{p.icon}</span>
                    <div>
                      <p className="text-sm font-bold">{p.name}</p>
                      <p className="text-[10px] text-on-surface-variant">{p.stats}</p>
                    </div>
                  </div>
                  <span className={`material-symbols-outlined text-sm ${p.status === 'check_circle' ? 'text-on-surface-variant' : 'text-on-surface-variant'}`} style={{ fontVariationSettings: p.status === 'check_circle' ? "'FILL' 1" : "'FILL' 0" }}>{p.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Posts This Week */}
        <div className="col-span-12">
          <div className="bg-white p-lg rounded-xl border border-outline-variant/30 shadow-sm">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="font-headline-md text-headline-md">Posts This Week</h3>
                <p className="text-on-surface-variant text-sm">Distribution of content types across the week</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-primary"></div>
                  <span className="text-xs font-semibold">Published</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-inverse-primary"></div>
                  <span className="text-xs font-semibold">Scheduled</span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between h-48 px-4 relative">
              {[
                { day: 'MON', p: 60, s: 30 },
                { day: 'TUE', p: 45, s: 15 },
                { day: 'WED', p: 80, s: 10 },
                { day: 'THU', p: 55, s: 40 },
                { day: 'FRI', p: 90, s: 10 },
                { day: 'SAT', p: 20, s: 60 },
                { day: 'SUN', p: 10, s: 75 },
              ].map((d, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 flex-1 group">
                  <div className="w-full max-w-[48px] flex items-end gap-1 px-1 h-full">
                    <div className="flex-1 bg-primary rounded-t-sm group-hover:opacity-80 transition-all" style={{ height: `${d.p}%` }}></div>
                    <div className="flex-1 bg-inverse-primary rounded-t-sm group-hover:opacity-80 transition-all" style={{ height: `${d.s}%` }}></div>
                  </div>
                  <span className="text-xs font-label-bold text-on-surface-variant">{d.day}</span>
                </div>
              ))}
              <div className="absolute inset-0 pointer-events-none -z-10 flex flex-col justify-between pt-0 pb-6 opacity-10">
                <div className="w-full border-t border-on-surface-variant"></div>
                <div className="w-full border-t border-on-surface-variant"></div>
                <div className="w-full border-t border-on-surface-variant"></div>
                <div className="w-full border-t border-on-surface-variant"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
