import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-slate-49 via-white to-slate-150">
      {/* Animated background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      </div>

      {/* Badge */}
      <div className="relative mb-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 shadow-sm">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-slate-700">
            AI Matching Engine v2.0 Live
          </span>
        </div>
      </div>

      {/* Main heading */}
      <h1 className="relative text-center max-w-5xl mb-6 animate-slide-up">
        <span className="block text-6xl md:text-7xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
          Find the right influencers.
        </span>
        <span className="block text-6xl md:text-7xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 bg-clip-text text-transparent leading-[1.1]">
          Instantly.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="relative text-center max-w-2xl mb-10 text-lg md:text-xl text-slate-600 leading-relaxed animate-slide-up"
         style={{ animationDelay: '0.2s' }}>
        Our proprietary AI analyzes millions of data points to match your brand with the perfect voice. 
        No guesswork, just results.
      </p>

      {/* CTA Buttons */}
      <div className="relative flex flex-col sm:flex-row gap-4 mb-28 animate-slide-up"
           style={{ animationDelay: '0.4s' }}>
        <Button 
          size="lg" 
          className="bg-black hover:bg-black/89 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          I'm an Advertiser
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
        >
          I'm an Influencer
        </Button>
      </div>

      {/* Influencer Cards */}
      <div className="relative w-full max-w-auto grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up"
           style={{ animationDelay: '0.6s' }}>
        {/* Card 1 - Beauty */}
        <div className="group relative aspect-[3/3.5] rounded-3xl overflow-hidden bg-gradient-to-br from-pink-100 to-rose-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="font-semibold text-lg mb-1">Sarah Jenkins</h3>
            <p className="text-sm text-white/80 flex items-center gap-1">
              <span>Beauty</span>
              <span>•</span>
              <span>1.4M</span>
            </p>
          </div>
        </div>

        {/* Card 2 - Tech */}
        <div className="group relative aspect-[3/3.5] top-15 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="font-semibold text-lg mb-1">TechDaily</h3>
            <p className="text-sm text-white/80 flex items-center gap-1">
              <span>Technology</span>
              <span>•</span>
              <span>890K</span>
            </p>
          </div>
        </div>

        {/* Card 3 - Food */}
        <div className="group relative aspect-[3/3.5] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-700 to-orange-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="font-semibold text-lg mb-1">The Foodie</h3>
            <p className="text-sm text-white/80 flex items-center gap-1">
              <span>Culinary</span>
              <span>•</span>
              <span>2.5M</span>
            </p>
          </div>
        </div>

        {/* Card 4 - Fitness */}
        <div className="group relative aspect-[3/3.5] top-15 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="font-semibold text-lg mb-1">Urban Fit</h3>
            <p className="text-sm text-white/80 flex items-center gap-1">
              <span>Fitness</span>
              <span>•</span>
              <span>3.2M</span>
            </p>
          </div>
        </div>
      </div>

      {/* Trusted by brands */}
      <div className="relative mt-32 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <p className="text-sm text-slate-500 mb-6 text-center tracking-wider uppercase">
          Trusted by Innovative Brands
        </p>
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-40">
          <div className="text-2xl font-bold tracking-tight text-slate-700">All Brands Soon</div>
        </div>
      </div>
    </section>
  );
}