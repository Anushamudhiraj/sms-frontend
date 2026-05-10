import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/client/dashboard');
  };


  return (
    <div className="flex items-center justify-center min-h-screen p-container-padding relative bg-background">
      <main className="w-full max-w-[440px] z-10">
        <div className="bg-surface-container-lowest rounded-xl p-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-surface-variant/50">
          <div className="mb-xl">
            <h1 className="font-headline-xl text-headline-xl text-primary mb-xs">Sign In</h1>
          </div>
          <form className="flex flex-col gap-lg" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-xs">
              <label className="font-label-bold text-label-bold text-on-surface-variant" htmlFor="email">Email</label>
              <input className="w-full px-md py-md rounded-lg border border-outline-variant bg-surface-bright text-body-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline/50" id="email" name="email" placeholder="name@company.com" required type="email" />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-bold text-label-bold text-on-surface-variant" htmlFor="password">Password</label>
              <input className="w-full px-md py-md rounded-lg border border-outline-variant bg-surface-bright text-body-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline/50" id="password" name="password" placeholder="••••••••" required type="password" />
            </div>
            <button className="w-full bg-primary text-on-primary font-label-bold text-body-lg py-md rounded-lg hover:opacity-90 active:scale-[0.98] transition-all duration-200 mt-md" type="submit">
              Sign In
            </button>
          </form>
          <div className="mt-xl text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Don’t have an account? 
              <Link className="text-primary font-label-bold hover:underline" to="/signup"> Sign Up</Link>
            </p>
          </div>
        </div>
      </main>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(#e4e2e5_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
    </div>
  );
};

export default Login;
