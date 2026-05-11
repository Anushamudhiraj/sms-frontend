import { Link } from 'react-router-dom';

export default function SignUp() {
  const platforms = [
    { name: 'Instagram', icon: 'photo_camera' },
    { name: 'Facebook', icon: 'groups' },
    { name: 'LinkedIn', icon: 'work' },
    { name: 'Twitter/X', icon: 'terminal' },
    { name: 'YouTube', icon: 'play_circle' },
    { name: 'Pinterest', icon: 'keep' },
  ];

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center">
      {/* Top Navigation Bar */}
      <header className="w-full flex justify-between items-center px-lg h-[64px] bg-surface z-40 sticky top-0 shadow-sm">
        <div className="flex items-center gap-sm">
          <span className="material-symbols-outlined text-primary">hub</span>
          <h1 className="font-headline-xl text-primary text-[24px]">SocialManager Pro</h1>
        </div>
        <Link to="/sign-in" className="font-label-bold text-label-bold text-primary hover:bg-surface-container p-sm rounded-lg transition-colors">
          Log In
        </Link>
      </header>

      <main className="w-full max-w-md px-lg py-xl flex flex-col gap-xl">
        {/* Hero Section */}
        <section className="flex flex-col gap-md text-center">
          <div className="relative w-full h-48 rounded-xl overflow-hidden mb-sm shadow-md">
            <img
              alt="Social workspace"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/ADBb0ujLIo2tXXOSmsvcPByJg4RmDdJCtaUS19xFpDcM1D4WOF_6fK-e8zAAdFwr5OQa3PBM9aItSY9ZihrjEaTVHYf6H1H9Fw22UqTZvTIrpo5BWGiwuoPg_y0G7bxp5CXAEwCy9k9_0exfDPZUOtFuBVcyB4awS2IaSxQYNwMJUVuP58AGaCGvewf0GhQ2ejmDOAZQi8JXHln78s3kRuLLi14nKKbRPC6qvyf_IIlE131rW_KrgQjdSi1bDxOGYTKHG12YjfTreIisozA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-background">Start your agency journey</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Join 5,000+ managers streamlining their social workflow with SocialManager Pro.
          </p>
        </section>

        {/* Registration Form */}
        <section className="bg-surface-container-lowest rounded-xl p-lg shadow-sm border border-surface-variant">
          <form className="flex flex-col gap-lg" onSubmit={(e) => e.preventDefault()}>
            {/* Inputs */}
            <div className="flex flex-col gap-md">
              <div className="flex flex-col gap-xs">
                <label className="font-label-bold text-label-bold text-on-surface" htmlFor="full_name">
                  Full Name
                </label>
                <input
                  className="w-full h-12 px-md bg-surface border border-outline-variant rounded-lg font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  id="full_name"
                  placeholder="Enter your legal name"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-bold text-label-bold text-on-surface" htmlFor="email">
                  Work Email
                </label>
                <input
                  className="w-full h-12 px-md bg-surface border border-outline-variant rounded-lg font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  id="email"
                  placeholder="name@company.com"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-bold text-label-bold text-on-surface" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    className="w-full h-12 px-md bg-surface border border-outline-variant rounded-lg font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    id="password"
                    placeholder="Create a strong password"
                    type="password"
                  />
                  <button className="absolute right-md top-1/2 -translate-y-1/2 text-outline" type="button">
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Platform Selection */}
            <div className="flex flex-col gap-md">
              <div className="flex justify-between items-end">
                <h3 className="font-label-bold text-label-bold text-on-surface">Select platforms</h3>
                <span className="text-[10px] text-outline font-label-bold uppercase tracking-wider">
                  Multi-select enabled
                </span>
              </div>
              <div className="grid grid-cols-3 gap-sm">
                {platforms.map((platform) => (
                  <button
                    key={platform.name}
                    className="flex flex-col items-center justify-center gap-xs p-sm bg-surface border border-outline-variant rounded-lg hover:border-primary hover:bg-primary-container/5 transition-all group"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">
                      {platform.icon}
                    </span>
                    <span className="font-label-bold text-[11px] text-on-surface-variant group-hover:text-primary">
                      {platform.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Action */}
            <div className="pt-sm flex flex-col gap-md">
              <Link
                to="/dashboard"
                className="w-full h-14 bg-primary text-on-primary rounded-xl font-label-bold text-body-lg shadow-lg active:scale-[0.98] transition-transform flex items-center justify-center"
              >
                Create Account
              </Link>
              <p className="text-center font-body-md text-body-md text-on-surface-variant">
                By signing up, you agree to our{' '}
                <a className="text-primary font-semibold underline decoration-primary-container/30" href="#">
                  Terms
                </a>{' '}
                and{' '}
                <a className="text-primary font-semibold underline decoration-primary-container/30" href="#">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </form>
        </section>

        {/* Social Proof */}
        <section className="grid grid-cols-2 gap-md">
          <div className="col-span-2 bg-primary-container/5 rounded-xl p-md border border-primary-container/10 flex items-center gap-md">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-primary flex-shrink-0">
              <img
                alt="Sarah K."
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/ADBb0uiyDTxLulY7CukQTwM8-mLnxlzTnvYp78oUmWUPR5uaFksQWMfwL70VtiAXNX1Uzv_mxHse1c8WC7hRBMvwF-1DE3f07HnEko_0OjSmydCstYlKTwezwb7_0ylf3nmseUbLWIHIhKbIwflmxmct8nAC048wtTXy0HhXMZ9X295R9JaiDpMNeOC-Ipfi2IavvXFEKobHqNIITZC-GE7ccMNboECUFRQG4mh_l17AFzBd3UkltNJ393TSv93buaRTE5EJ6wbYTjv2ByY"
              />
            </div>
            <div>
              <p className="font-body-md text-body-md text-on-surface italic">
                "The automated scheduling saved our agency 20 hours a week."
              </p>
              <p className="font-label-bold text-label-bold text-primary mt-xs">— Sarah K., Creative Director</p>
            </div>
          </div>
          <div className="bg-surface border border-surface-variant p-md rounded-xl flex flex-col items-center text-center gap-sm">
            <span className="material-symbols-outlined text-primary text-[32px]">verified_user</span>
            <span className="font-label-bold text-label-bold text-on-surface">SOC2 Certified</span>
          </div>
          <div className="bg-surface border border-surface-variant p-md rounded-xl flex flex-col items-center text-center gap-sm">
            <span className="material-symbols-outlined text-primary text-[32px]">support_agent</span>
            <span className="font-label-bold text-label-bold text-on-surface">24/7 Priority</span>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-lg border-t border-surface-variant/30 flex flex-col items-center gap-md">
          <div className="flex gap-lg text-outline">
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">language</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">help</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">info</span>
          </div>
          <p className="font-label-bold text-label-bold text-outline uppercase tracking-widest text-[10px]">
            © 2024 SocialManager Pro
          </p>
        </footer>
      </main>

      {/* Background Decorative Element */}
      <div className="fixed top-0 right-0 -z-10 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full"></div>
      <div className="fixed bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full"></div>
    </div>
  );
}
