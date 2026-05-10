import React from 'react';
import Layout from '../components/Layout';

const AIStudio = () => {
  return (
    <Layout title="AI Caption Studio" subtitle="Generate AI-powered captions and social media creatives instantly">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-lg mb-xl">
        <div></div>
        <div className="flex items-center gap-md">
          <button className="px-lg py-sm border border-primary text-primary font-bold rounded-lg hover:bg-surface-container-high transition-colors">
            Saved Projects
          </button>
          <button className="px-lg py-sm bg-primary text-on-primary font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-sm">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Generate Content
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-xl items-start">
        {/* Left Column: Content Generator */}
        <section className="flex flex-col gap-lg">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-sm mb-lg">
              <span className="material-symbols-outlined text-primary">edit_note</span>
              <h3 className="font-headline-md text-headline-md text-primary">Content Generator</h3>
            </div>
            <div className="space-y-xl">
              <div>
                <label className="font-label-bold text-label-bold text-on-surface-variant block mb-sm uppercase tracking-wider text-[10px]">Target Platform</label>
                <div className="grid grid-cols-3 gap-sm">
                  <PlatformIcon icon="photo_camera" label="Instagram" activeColor="#E1306C" />
                  <PlatformIcon icon="social_leaderboard" label="Facebook" activeColor="#1877F2" />
                  <PlatformIcon icon="close" label="Twitter/X" activeColor="#000000" />
                  <PlatformIcon icon="business" label="LinkedIn" activeColor="#0A66C2" />
                  <PlatformIcon icon="play_circle" label="YouTube" activeColor="#FF0000" />
                  <PlatformIcon icon="push_pin" label="Pinterest" activeColor="#BD081C" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-md">
                <SelectField label="Tone of Voice" options={['Professional', 'Casual', 'Witty', 'Promotional']} />
                <SelectField label="Length" options={['Short', 'Medium', 'Long']} />
              </div>

              <InputField label="Target Audience" placeholder="e.g. Tech Entrepreneurs, Small Business Owners" />
              <TextAreaField label="Keywords / Topic" placeholder="What is this post about?" rows={3} />
              <TextAreaField label="Image Prompt (Optional)" placeholder="Describe the image you want AI to generate..." rows={2} italic />

              <div>
                <label className="font-label-bold text-label-bold text-on-surface-variant block mb-sm uppercase tracking-wider text-[10px]">Content Type</label>
                <div className="flex flex-wrap gap-xs">
                  {['Promotional Post', 'Product Launch', 'Story Post', 'Event Campaign', 'Brand Awareness'].map((type, i) => (
                    <span key={type} className={`px-sm py-xs text-[11px] font-bold rounded-full cursor-pointer transition-colors ${i === 0 ? 'bg-primary-fixed text-on-primary-fixed' : 'bg-surface-container-high text-on-surface-variant hover:bg-primary-fixed'}`}>
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full py-md bg-primary text-on-primary font-bold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-md">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                Generate AI Content
              </button>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
            <div className="flex items-center justify-between mb-md">
              <h4 className="font-label-bold text-label-bold text-primary uppercase tracking-wider text-[10px]">Trending Hashtags</h4>
              <span className="material-symbols-outlined text-sm text-on-surface-variant">trending_up</span>
            </div>
            <div className="flex flex-wrap gap-sm">
              {['#Marketing', '#AIContent', '#GrowthStrategy', '#SocialMedia', '#BrandAwareness'].map(tag => (
                <span key={tag} className="px-sm py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant text-[12px] font-bold rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Right Column: Results */}
        <section className="flex flex-col gap-lg">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-md text-headline-md text-primary">Generated Content Results</h3>
            <div className="flex items-center gap-sm">
              <span className="text-on-surface-variant text-body-md">Showing 3 variations</span>
              <button className="p-2 hover:bg-surface-container-high rounded-full"><span className="material-symbols-outlined">sort</span></button>
            </div>
          </div>

          <VariationCard 
            id="A" 
            score="92%" 
            scoreColor="text-emerald-600" 
            dotColor="bg-emerald-500"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCY3hPZd9GMTmZUrBfRIXYCP55KYqioQFbVIPhXoggfl9D4CsV6SCNA03ZaIn28knV2gUS4kRjQMXYZECSoMTFn7ZpBenBzXH9BUDTNxjAbs7CPhOcyzMueUxVVGvxIicCgJ2GErRfEHvp80uyZbHjuD8dCTTQs92ChLPmlinLb0NJRdPkGB7bbDpdc_AE35z1J9RpIDLWtJBtf05f8YFVTp9PglBiLjS9NvJwTpPkhQUS18t64Plw-q43SXWJKFus5eTDeiCg7hHrz"
            content="Transform your morning routine into a high-performance ritual. ☕️ ✨ Our new AI tools are designed to streamline your workflow so you can focus on what truly matters: creativity and growth. Ready to level up?"
            tags="#Marketing #AIContent #GrowthStrategy #SocialMedia #BrandAwareness"
          />

          <VariationCard 
            id="B" 
            score="85%" 
            scoreColor="text-orange-600" 
            dotColor="bg-orange-500"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDcr9IFcdAyQGtJHC6WomFgIEIl8L-cglPeXRiDjjOySdlTllyJ0cn9iZRslpNEjolw8UQG8wszu8NFCIwytgo0eM4XIaodX3PMmrulUVjhLbKWB7m19wQWZUMjrM97iE4bcxQgVZ4bqd76MKcr_mYl-2aLHtEwWMZNA1YyhznX6AkeYMRNYGi3yu6MubNLkKZ2zTQzFuo-20iVud2YsekRsIJKU0REHhHVOemw8XC7h0PPbWs-k7pWPfoOH1STOLznsQBiBJnJvFjA"
            content="Stop guessing and start growing. 🚀 The secret to viral social media content isn't luck—it's data-driven strategy. Our AI Caption Studio analyzes trending topics in real-time to ensure your brand stays ahead of the curve."
            tags="#DigitalStrategy #ContentMarketing #Innovation #SMH #FutureOfWork"
          />
        </section>
      </div>
    </Layout>
  );
};

const PlatformIcon = ({ icon, label, activeColor }) => (
  <button className="flex flex-col items-center justify-center p-sm border border-outline-variant rounded-lg transition-all group hover:bg-surface-container-low" style={{ '--hover-color': activeColor }}>
    <span className="material-symbols-outlined text-[24px] text-on-surface-variant group-hover:text-[var(--hover-color)]">{icon}</span>
    <span className="text-[10px] font-bold mt-1">{label}</span>
  </button>
);

const SelectField = ({ label, options }) => (
  <div>
    <label className="font-label-bold text-label-bold text-on-surface-variant block mb-sm uppercase tracking-wider text-[10px]">{label}</label>
    <select className="w-full bg-surface-container border border-outline-variant rounded-lg text-body-md focus:ring-primary p-2">
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
  </div>
);

const InputField = ({ label, placeholder }) => (
  <div>
    <label className="font-label-bold text-label-bold text-on-surface-variant block mb-sm uppercase tracking-wider text-[10px]">{label}</label>
    <input className="w-full bg-surface-container border border-outline-variant rounded-lg text-body-md focus:ring-primary p-2" placeholder={placeholder} type="text" />
  </div>
);

const TextAreaField = ({ label, placeholder, rows, italic }) => (
  <div>
    <label className="font-label-bold text-label-bold text-on-surface-variant block mb-sm uppercase tracking-wider text-[10px]">{label}</label>
    <textarea className={`w-full bg-surface-container border border-outline-variant rounded-lg text-body-md focus:ring-primary p-2 ${italic ? 'italic' : ''}`} placeholder={placeholder} rows={rows}></textarea>
  </div>
);

const VariationCard = ({ id, score, scoreColor, dotColor, image, content, tags }) => (
  <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
    <div className="flex flex-col md:flex-row gap-lg">
      <div className="md:w-1/2">
        <img alt="AI Preview" className="w-full aspect-square object-cover rounded-xl shadow-sm" src={image} />
      </div>
      <div className="md:w-1/2 flex flex-col">
        <div className="flex justify-between items-start mb-md">
          <span className="px-sm py-xs bg-primary-fixed text-on-primary-fixed text-[11px] font-bold rounded uppercase tracking-wider">Variation {id}</span>
          <div className="flex items-center gap-xs">
            <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
            <span className={`font-label-bold text-label-bold ${scoreColor}`}>{score} Engagement Score</span>
          </div>
        </div>
        <div className="bg-surface-container-low p-md rounded-lg mb-md flex-grow">
          <p className="text-body-md text-on-surface leading-relaxed">
            {content}
            <br/><br/>
            <span className="text-on-primary-container font-bold">{tags}</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-sm">
          <ActionButton icon="content_copy" label="Copy" />
          <ActionButton icon="download" label="Image" />
          <ActionButton icon="refresh" label="Re-Gen" />
          <ActionButton icon="save" label="Save" primary />
        </div>
      </div>
    </div>
  </div>
);

const ActionButton = ({ icon, label, primary }) => (
  <button className={`flex items-center justify-center gap-xs py-sm rounded-lg font-bold text-sm transition-all ${primary ? 'bg-primary text-on-primary hover:opacity-90' : 'border border-outline-variant hover:bg-surface-container-high'}`}>
    <span className="material-symbols-outlined text-[18px]">{icon}</span> {label}
  </button>
);

export default AIStudio;
