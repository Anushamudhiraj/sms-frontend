import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center p-lg font-body-md text-body-md bg-background">
      <main className="w-full max-w-[400px] flex flex-col gap-xl">
        {/* Header / Logo Area */}
        <div className="flex flex-col items-center text-center gap-sm">
          <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-md shadow-lg">
            <span className="material-symbols-outlined text-on-primary text-[32px]">dashboard</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">SocialManager Pro</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Sign in to manage your agency accounts</p>
        </div>

        {/* Sign-In Card */}
        <div className="bg-surface-container-lowest login-card-shadow rounded-xl p-lg border border-surface-variant/50">
          <form className="flex flex-col gap-lg" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-bold text-label-bold text-on-surface ml-xs" htmlFor="email">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline text-[20px]">mail</span>
                </div>
                <input
                  className="w-full pl-[44px] pr-md py-md bg-surface border border-outline-variant rounded-lg font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline/60"
                  id="email"
                  name="email"
                  placeholder="name@agency.com"
                  type="email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-xs">
              <div className="flex justify-between items-center px-xs">
                <label className="font-label-bold text-label-bold text-on-surface" htmlFor="password">
                  Password
                </label>
                <a className="font-label-bold text-label-bold text-primary hover:underline text-xs" href="#">
                  Forgot?
                </a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline text-[20px]">lock</span>
                </div>
                <input
                  className="w-full pl-[44px] pr-[44px] py-md bg-surface border border-outline-variant rounded-lg font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline/60"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                />
                <button
                  className="absolute inset-y-0 right-0 pr-md flex items-center text-outline hover:text-on-surface"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-sm px-xs">
              <input
                className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer"
                id="remember"
                type="checkbox"
              />
              <label className="font-body-md text-body-md text-on-surface-variant cursor-pointer" htmlFor="remember">
                Stay signed in for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <Link
              to="/dashboard"
              className="w-full bg-primary text-on-primary py-md rounded-lg font-label-bold text-body-lg hover:bg-primary-container transition-colors shadow-sm active:scale-[0.98] text-center"
            >
              Sign In
            </Link>
          </form>

          {/* Social Provider Splitter */}
          <div className="relative my-xl flex items-center">
            <div className="flex-grow border-t border-outline-variant"></div>
            <span className="flex-shrink mx-md font-label-bold text-label-bold text-outline uppercase tracking-widest text-[10px]">
              or continue with
            </span>
            <div className="flex-grow border-t border-outline-variant"></div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-md">
            <button className="flex items-center justify-center gap-sm py-md border border-outline-variant rounded-lg bg-surface hover:bg-surface-container-low transition-colors">
              <img
                className="w-5 h-5 object-contain"
                alt="Google logo"
                src="https://lh3.googleusercontent.com/aida/ADBb0ujLIo2tXXOSmsvcPByJg4RmDdJCtaUS19xFpDcM1D4WOF_6fK-e8zAAdFwr5OQa3PBM9aItSY9ZihrjEaTVHYf6H1H9Fw22UqTZvTIrpo5BWGiwuoPg_y0G7bxp5CXAEwCy9k9_0exfDPZUOtFuBVcyB4awS2IaSxQYNwMJUVuP58AGaCGvewf0GhQ2ejmDOAZQi8JXHln78s3kRuLLi14nKKbRPC6qvyf_IIlE131rW_KrgQjdSi1bDxOGYTKHG12YjfTreIisozA"
              />
              <span className="font-label-bold text-label-bold text-on-surface">Google</span>
            </button>
            <button className="flex items-center justify-center gap-sm py-md border border-outline-variant rounded-lg bg-surface hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-[20px] text-on-surface">account_circle</span>
              <span className="font-label-bold text-label-bold text-on-surface">Apple</span>
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Don't have an agency account?
            <Link className="font-label-bold text-label-bold text-primary hover:underline ml-xs" to="/sign-up">
              Sign Up
            </Link>
          </p>
        </div>
      </main>

      {/* Decorative Background Element */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 -z-10 opacity-10 pointer-events-none">
        <img
          className="w-full h-full object-cover"
          alt="Decorative background"
          src="https://lh3.googleusercontent.com/aida/ADBb0ujKwsanRkXbzZCQusaDz-_CSHISAe6etTFauis1hwR7LCfLX2w7FhlibgvuvJJD1YdbOEw06R_jz673DTK3i2mI1EmFKQtLcx3eIZRUN1To9apWENwOYyjOfm9PDG6x9yT2MwwRr_BW4rl8ILysYNoCbIo1_JiJV3QNItoX0-c8n8V_VBikY904NU-ZLWSAT_mZXVB-0YhIFngMIKZJCBNkaeY5EIepGlzWq7TkYpGDQNXUneW38oVKFC5mMgWRzH_lg7p0bRriG8s"
        />
      </div>
    </div>
  );
}
