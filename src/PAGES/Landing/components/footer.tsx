export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto px-4 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">✕</span>
              </div>
              <span className="font-bold text-lg text-slate-900">AdsTap</span>
            </div>
            <p className="text-slate-600 text-sm mb-6 max-w-xs">
              The world's first AI-powered marketplace connecting premium brands with authentic voices instantly.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-slate-900 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-1.5 9-5.5 0-.25 0-.5 0-.75A7.5 7.5 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-6">Product</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition">Features</a></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition">Pricing</a></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition">Enterprise</a></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition">About</a></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition">Careers</a></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition">Blog</a></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition">Privacy</a></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition">Terms</a></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-600 text-sm mb-4 md:mb-0">© 2024 AdsTop Inc. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>System Status: Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}