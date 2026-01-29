export function ServiceSection() {
  return (
    <section className="py-24 bg-white">
      {/* CENTERED CONTENT CONTAINER */}
      <div className="mx-auto max-w-7xl px-6">

        {/* Two Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">

          {/* Advertisers Card */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-80">
            <div>
              <p className="text-sm font-semibold text-slate-400 mb-4">FOR ADVERTISERS</p>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                10x ROI with data-driven partnerships.
              </h3>
              <p className="text-lg text-slate-300">
                Stop wasting budget on mismapped audiences. Get precision targeting at scale.
              </p>
            </div>
            <button className="bg-white text-slate-900 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition w-fit mt-8">
              Start Campaign
            </button>
          </div>

          {/* Influencers Card */}
          <div className="bg-slate-100 text-slate-900 rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-80">
            <div>
              <p className="text-sm font-semibold text-slate-500 mb-4">FOR INFLUENCERS</p>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Monetize your audience with premium brands.
              </h3>
              <p className="text-lg text-slate-600">
                Connect with brands that align with your values. Transparent payouts, zero hassle.
              </p>
            </div>
            <button className="bg-slate-900 text-white font-semibold px-8 py-3 rounded-full hover:bg-slate-800 transition w-fit mt-8">
              Join as Creator
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Ready to scale?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Join thousands of brands and creators maximizing their potential with AdsTop.
          </p>
          <button className="bg-slate-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-slate-800 transition text-lg">
            Get Started for Free
          </button>
        </div>

      </div>
    </section>
  );
}
