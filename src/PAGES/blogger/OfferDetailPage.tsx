// Taklif detail sahifasi — yangi UI, barcha funksionallik saqlanган

import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { mockOffers } from '../../data/mock'
import Toast from '../../components/ui/Toast'
import { useToast } from '../../hooks/useToast'
import { ArrowLeft, ArrowRight, Building2, Calendar, Camera, CheckCircle2, FileTextIcon, FolderOpen, PlayCircle, PlusCircle, Smartphone, X } from 'lucide-react'

export default function OfferDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { message, showToast, hideToast } = useToast()
  const [accepted, setAccepted] = useState(false)

  const offer = mockOffers.find(o => o.id === Number(id))

  if (!offer) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-neutral-400">
        <span className="material-symbols-outlined text-5xl mb-3">search</span>
        <p className="text-base font-medium">Taklif topilmadi</p>
        <button
          className="mt-5 h-10 px-5 rounded-full border border-neutral-200 dark:border-neutral-700 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors flex items-center gap-2"
          onClick={() => navigate('/blogger/offers')}
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Orqaga
        </button>
      </div>
    )
  }

  function handleAccept() {
    setAccepted(true)
    showToast('Taklif qabul qilindi! Brand siz bilan bog\'lanadi 🎉')
  }

  function handleDecline() {
    navigate('/blogger/offers')
  }

  return (
    <div className=" bg-[#f7f7f7] dark:bg-[#191919] font-sans">
      {message && <Toast message={message} onClose={hideToast} />}

      <div className="max-w-7xl mx-auto px-6 py-8 lg:px-10 lg:py-12">

        {/* Breadcrumb */}
        <div className="flex gap-2 mb-8 text-sm">
          <button
            className="flex text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors gap-1"
            onClick={() => navigate('/blogger/offers')}
          >
            <span className="material-symbols-outlined text-lg"><ArrowLeft /></span>
            Back to Offers
          </button>
          <span className="text-neutral-300 dark:text-neutral-600">/</span>
          <span className="text-neutral-500 dark:text-neutral-400">{offer.brandType}</span>
          <span className="text-neutral-300 dark:text-neutral-600">/</span>
          <span className="font-medium text-neutral-900 dark:text-white">{offer.title}</span>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">

          {/* LEFT: Visual + description + requirements */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Hero image */}
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-white dark:bg-white/5 shadow-sm group flex items-center justify-center text-8xl select-none">
              <span className="transition-transform duration-500 group-hover:scale-110 inline-block">
                <img src={offer.emoji} alt="" />
              </span>
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-sm"><Camera /></span>
                <span className="text-xs font-semibold uppercase tracking-wider">PRODUCT SHOT</span>
              </div>
            </div>

            {/* Thumbnail placeholders */}
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-video rounded-xl overflow-hidden bg-neutral-100 dark:bg-white/5 flex items-center justify-center text-3xl cursor-pointer hover:opacity-80 transition-opacity">
                <img src={offer.emoji} alt="" />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-neutral-100 dark:bg-white/5 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity relative group">
                <span className="text-3xl opacity-60"><img src={offer.emoji} alt="" /></span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white drop-shadow-md text-3xl"><PlayCircle /></span>
                </div>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-neutral-50 dark:bg-white/5 flex items-center justify-center text-neutral-400 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors cursor-pointer border border-dashed border-neutral-300 dark:border-neutral-700">
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined"><FolderOpen /></span>
                  <span className="text-xs font-medium">View Brief PDF</span>
                </div>
              </div>
            </div>

            {/* Campaign Notes */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-neutral-100 dark:border-white/5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <h3 className="text-base font-semibold mb-3 flex items-center gap-2 text-neutral-900 dark:text-white">
                <span className="material-symbols-outlined text-neutral-400"><FileTextIcon /></span>
                Campaign Notes
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {offer.description}
              </p>
            </div>

            {/* Requirements */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-neutral-100 dark:border-white/5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <h3 className="text-base font-semibold mb-4 text-neutral-900 dark:text-white">Requirements</h3>
              <ul className="space-y-3">
                {offer.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 text-lg mt-0.5 shrink-0"><CheckCircle2 /></span>
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap gap-6 text-sm text-neutral-500 dark:text-neutral-400 px-1">
              <span className='flex items-center gap-1'><Calendar /> Deadline: <strong className="text-neutral-900 dark:text-white">{offer.deadline}</strong></span>
              <span className='flex items-center gap-1'><Smartphone /> Platform: <strong className="text-neutral-900 dark:text-white">{offer.platform}</strong></span>
              <span className='flex items-center gap-1'><Building2 /> Brand: <strong className="text-neutral-900 dark:text-white">{offer.brand}</strong></span>
            </div>
          </div>

          {/* RIGHT: Price + actions (sticky) */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="sticky top-6 flex flex-col gap-5">

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center rounded-full bg-neutral-200 dark:bg-neutral-800 px-3 py-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                    {offer.brandType}
                  </span>
                </span>
                <span className="flex items-center rounded-full bg-orange-100 dark:bg-orange-900/30 px-3 py-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-300">
                    Featured Campaign
                  </span>
                </span>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight mb-2">
                  {offer.title}
                </h1>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg">
                  by <span className="text-neutral-900 dark:text-white font-medium">{offer.brand}</span>
                </p>
              </div>

              {/* Price block */}
              <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-neutral-100 dark:border-white/5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1 uppercase tracking-widest">Compensation</div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">{offer.budget}</span>
                </div>
                <p className="text-sm font-medium text-green-600 dark:text-green-400 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm"><PlusCircle /></span>
                  Plus Free Product
                </p>
              </div>

              {/* Accept / Decline */}
              {!accepted ? (
                <div className="bg-white/80 dark:bg-neutral-900/90 backdrop-blur-xl p-1.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-neutral-100 dark:border-neutral-700 flex gap-2">
                  <button
                    className="flex-1 h-14 rounded-full border border-neutral-200 dark:border-neutral-600 bg-transparent hover:bg-neutral-50 dark:hover:bg-white/5 text-neutral-900 dark:text-white font-medium text-base transition-all flex items-center justify-center gap-2 group"
                    onClick={handleDecline}
                  >
                    <span className="material-symbols-outlined text-neutral-400 group-hover:text-red-500 transition-colors"><X /></span>
                    Decline
                  </button>
                  <button
                    className="flex-2 h-14 rounded-full bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-white/90 text-white dark:text-neutral-900 font-semibold text-base transition-all shadow-lg flex items-center justify-center gap-2 active:scale-[0.98]"
                    onClick={handleAccept}
                  >
                    Accept Offer
                    <span className="material-symbols-outlined text-xl"><ArrowRight /></span>
                  </button>
                </div>
              ) : (
                
                <div className="text-center py-8 bg-white dark:bg-white/5 rounded-2xl border border-neutral-100 dark:border-white/5">
                  <div className="text-5xl mb-3">🎉</div>
                  <div className="font-semibold text-neutral-900 dark:text-white mb-1">Qabul qilindi!</div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Brand siz bilan tez orada bog'lanadi</p>
                </div>
              )}

              <p className="text-center text-xs text-neutral-400">
                Offer expires in 23 hours
              </p>

              {/* Deal summary */}
              <div className="bg-white dark:bg-white/5 rounded-2xl border border-neutral-100 dark:border-white/5 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                {[
                  { key: 'Platform', val: offer.platform },
                  { key: 'Brand', val: offer.brand },
                  { key: 'Deadline', val: offer.deadline },
                ].map(row => (
                  <div
                    key={row.key}
                    className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-100 dark:border-white/5 last:border-none text-sm"
                  >
                    <span className="text-neutral-500 dark:text-neutral-400">{row.key}</span>
                    <span className="font-medium text-neutral-900 dark:text-white">{row.val}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}