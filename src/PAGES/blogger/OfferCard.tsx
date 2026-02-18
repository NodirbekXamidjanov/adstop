// OfferCard — alohida komponent fayli
// DashboardPage va OffersPage ikkalasi ham shu yerdan import qiladi

import type { Offer } from '../../types'

interface OfferCardProps {
  offer: Offer
  onAccept: () => void
  onDecline: () => void
  onView: () => void
}

export default function OfferCard({ offer, onAccept, onDecline, onView }: OfferCardProps) {
  return (
    <div
      className="bg-white border border-zinc-100 rounded-2xl p-4 flex gap-4
                 hover:border-zinc-300 transition-all cursor-pointer"
      onClick={onView}
    >
      {/* Emoji box */}
      <div className="w-[72px] h-[72px] rounded-xl bg-zinc-50 flex items-center justify-center text-3xl flex-shrink-0">
        {offer.emoji}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="badge badge-blue">{offer.brandType}</span>
          {offer.status === 'new' && <span className="badge badge-black">New</span>}
        </div>
        <div className="font-semibold text-sm mb-0.5">{offer.title}</div>
        <div className="text-xs text-zinc-500 mb-2">{offer.brand} · {offer.platform}</div>
        <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">{offer.description}</p>
      </div>

      {/* Narx + tugmalar */}
      <div className="flex flex-col items-end justify-between flex-shrink-0">
        <div className="font-bold text-lg">{offer.budget}</div>
        <div className="flex gap-2" onClick={e => e.stopPropagation()}>
          {offer.status === 'accepted' ? (
            <span className="badge badge-green">✓ Accepted</span>
          ) : (
            <>
              <button className="btn btn-danger btn-sm" onClick={onDecline}>Reject</button>
              <button className="btn btn-success btn-sm" onClick={onAccept}>Accept</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}