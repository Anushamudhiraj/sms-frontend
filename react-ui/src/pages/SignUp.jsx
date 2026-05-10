import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: <InstagramIcon /> },
    { id: 'facebook', name: 'Facebook', icon: <FacebookIcon /> },
    { id: 'linkedin', name: 'LinkedIn', icon: <LinkedInIcon /> },
    { id: 'twitter', name: 'Twitter/X', icon: <TwitterIcon /> },
    { id: 'youtube', name: 'YouTube', icon: <YouTubeIcon /> },
    { id: 'pinterest', name: 'Pinterest', icon: <PinterestIcon /> },
  ];

  return (
    <div className="bg-background text-on-surface min-h-screen flex items-center justify-center p-md">
      <main className="w-full max-w-[440px]">
        <div className="bg-white rounded-xl shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)] border border-outline-variant p-xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2 className="font-headline text-[24px] font-bold text-primary">Sign Up</h2>
          </div>
          <form className="flex flex-col gap-lg" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-md">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-on-surface/80" htmlFor="fullname">Full name</label>
                <input className="w-full h-11 px-md border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary/5 focus:border-primary transition-all bg-white outline-none placeholder:text-slate-400" id="fullname" placeholder="John Doe" type="text" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-on-surface/80" htmlFor="email">Email</label>
                <input className="w-full h-11 px-md border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary/5 focus:border-primary transition-all bg-white outline-none placeholder:text-slate-400" id="email" placeholder="john@agency.com" type="email" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-on-surface/80" htmlFor="password">Password</label>
                <input className="w-full h-11 px-md border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary/5 focus:border-primary transition-all bg-white outline-none placeholder:text-slate-400" id="password" placeholder="••••••••" type="password" />
              </div>
            </div>
            <div className="flex flex-col gap-md">
              <h3 className="text-[13px] font-medium text-on-surface/80">Select platforms</h3>
              <div className="grid grid-cols-2 gap-sm">
                {platforms.map((platform) => (
                  <label key={platform.id} className="flex items-center gap-3 px-md py-sm border border-outline-variant rounded-lg hover:border-primary/30 hover:bg-slate-50 transition-all cursor-pointer relative group">
                    <input className="peer sr-only" name="platforms" type="checkbox" value={platform.id} />
                    <div className="w-5 h-5 rounded border border-outline-variant flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors">
                      <span className="material-symbols-outlined text-white text-[16px] hidden peer-checked:block">check</span>
                    </div>
                    {platform.icon}
                    <span className="text-[14px] font-medium text-on-surface/80">{platform.name}</span>
                  </label>
                ))}
              </div>
            </div>
            <button className="w-full bg-primary text-white h-12 rounded-lg text-[16px] font-semibold hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center" type="submit">
              Create Account
            </button>
          </form>
          <div className="pt-lg border-t border-slate-100 flex justify-center">
            <p className="text-[14px] text-slate-500">
              Already have an account? 
              <Link className="text-primary font-semibold hover:underline" to="/login"> Sign In</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

// SVG Icons
const InstagramIcon = () => (
  <svg className="w-[20px] h-[20px] ml-1" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path clipRule="evenodd" d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12C15.5 13.933 13.933 15.5 12 15.5Z" fill="url(#paint0_linear)" fillRule="evenodd" />
    <path clipRule="evenodd" d="M17.33 3H6.67C4.64 3 3 4.64 3 6.67V17.33C3 19.36 4.64 21 6.67 21H17.33C19.36 21 21 19.36 21 17.33V6.67C21 4.64 19.36 3 17.33 3ZM19 17.33C19 18.25 18.25 19 17.33 19H6.67C5.75 19 5 18.25 5 17.33V6.67C5 5.75 5.75 5 6.67 5H17.33C18.25 5 19 5.75 19 6.67V17.33Z" fill="url(#paint1_linear)" fillRule="evenodd" />
    <circle cx="17" cy="7" fill="url(#paint2_linear)" r="1" />
    <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="7" x2="17" y1="17" y2="7">
        <stop stopColor="#F58529" />
        <stop offset="0.5" stopColor="#DD2A7B" />
        <stop offset="1" stopColor="#8134AF" />
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear" x1="3" x2="21" y1="21" y2="3">
        <stop stopColor="#F58529" />
        <stop offset="0.5" stopColor="#DD2A7B" />
        <stop offset="1" stopColor="#8134AF" />
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear" x1="16" x2="18" y1="8" y2="6">
        <stop stopColor="#F58529" />
        <stop offset="0.5" stopColor="#DD2A7B" />
        <stop offset="1" stopColor="#8134AF" />
      </linearGradient>
    </defs>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-[20px] h-[20px] ml-1" fill="#1877F2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.791-4.668 4.532-4.668 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.49 0-1.955.925-1.955 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-[20px] h-[20px] ml-1" fill="#0A66C2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-[18px] h-[18px] ml-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.403Z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-[20px] h-[20px] ml-1" fill="#FF0000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const PinterestIcon = () => (
  <svg className="w-[20px] h-[20px] ml-1" fill="#BD081C" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.173-2.914 1.026 0 1.521.769 1.521 1.691 0 1.031-.657 2.573-.994 3.992-.285 1.196.6 2.174 1.78 2.174 2.135 0 3.778-2.249 3.778-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.259 7.927-7.259 4.162 0 7.394 2.967 7.394 6.929 0 4.135-2.607 7.462-6.223 7.462-1.214 0-2.354-.63-2.745-1.373l-.749 2.853c-.27 1.031-1.002 2.324-1.492 3.119C9.516 23.811 10.74 24 12.017 24c6.621 0 12-5.378 12-12S18.638 0 12.017 0z" />
  </svg>
);

export default SignUp;
