import { Target, Sparkles, Rocket, ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-[#f5f5f7]">
      <div className="px-12">
        <div className="grid lg:grid-cols-[400px_1fr] gap-56 items-center">
          {/* Left side - Header */}
          <div>
            <h2 className="text-6xl font-bold text-black mb-6">
              How it Works
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              We've simplified the complex process of influencer marketing into three intuitive steps.
            </p>
            <button className="flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all">
              Learn more about our AI
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right side - Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Define */}
            <div className="bg-white h-77 w-60 rounded-[50PX] p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-black" />
              </div>
              <h3 className="work-text1">
                1. Define
              </h3>
              <p className="text-gray-500">
                Set your budget, target audience, and campaign goals. Our system learns your brand voice instantly.
              </p>
            </div>

            {/* Card 2 - Match */}
            <div className="bg-white rounded-[50PX] h-77 w-60 p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <h3 className="work-text1">
                2. Match
              </h3>
              <p className="text-gray-500">
                Our AI algorithm scans millions of profiles to find the perfect influencer fit with highest ROI potential.
              </p>
            </div>

            {/* Card 3 - Launch */}
            <div className="bg-white rounded-[50PX] h-77 w-60 p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-black" />
              </div>
              <h3 className="work-text1">
                3. Launch
              </h3>
              <p className="text-gray-500">
                Automated contracts, secure payments, and real-time analytics dashboards. Scale with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}