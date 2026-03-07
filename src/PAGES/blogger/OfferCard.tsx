import { CheckCircle2 } from 'lucide-react'
import type { Offer } from '../../types'

interface OfferCardProps {
  offer: Offer
  onAccept: () => void
  onDecline: () => void
  onView: () => void
}

export default function OfferCard({ offer, onAccept, onDecline, onView }: OfferCardProps) {
  const isAccepted = offer.status === 'accepted'

  return (
    <div
      className="group bg-white dark:bg-[#202020] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100 dark:border-neutral-800 cursor-pointer"
      onClick={onView}
    >
      <div className="flex flex-col md:flex-row gap-6">

        {/* Emoji / Image area */}
        <div className="w-full md:w-1/3 aspect-[4/3] md:aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden shrink-0 flex items-center justify-center text-6xl select-none">
          <span className="transition-transform duration-500 group-hover:scale-110 inline-block">
            <img src={offer.emoji} alt="" />
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 justify-between py-2">
          <div>
            {/* Badge + time */}
            <div className="flex justify-between items-start mb-2">
              <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-xs font-bold uppercase tracking-wider rounded-full text-neutral-700 dark:text-neutral-200">
                {offer.brandType}
              </span>
              <span className="text-sm text-neutral-400">{offer.deadline}</span>
            </div>

            <h4 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">{offer.title}</h4>
            <p className="text-lg font-medium text-neutral-600 dark:text-neutral-300 mb-4">{offer.brand}</p>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 line-clamp-2">
              {offer.description}
            </p>
          </div>

          {/* Price + Actions */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto"
            onClick={e => e.stopPropagation()}
          >
            <div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium uppercase tracking-wide">
                Offer Price
              </p>
              <p className="text-3xl font-black tracking-tight text-neutral-900 dark:text-white">
                {offer.budget}
              </p>
            </div>

            <div className="flex w-full sm:w-auto gap-3">
              {isAccepted ? (
                <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 font-bold text-sm border border-green-200 dark:border-green-800">
                  <span className="material-symbols-outlined text-base"><CheckCircle2 /></span>
                  Accepted
                </div>
              ) : (
                <>
                  <button
                    className="flex-1 sm:flex-none py-3 px-8 rounded-full border-2 border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white font-bold hover:border-neutral-900 dark:hover:border-white transition-colors"
                    onClick={onDecline}
                  >
                    Reject
                  </button>
                  <button
                    className="flex-1 sm:flex-none py-3 px-8 rounded-full bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black font-bold shadow-lg transition-all active:scale-95"
                    onClick={onAccept}
                  >
                    Accept
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}