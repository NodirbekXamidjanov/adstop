// Taklif detail sahifasi — to'liq ma'lumot va accept/decline

import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { mockOffers } from '../../data/mock'
import Toast from '../../components/ui/Toast'
import { useToast } from '../../hooks/useToast'

export default function OfferDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { message, showToast, hideToast } = useToast()
  const [accepted, setAccepted] = useState(false)

  // ID bo'yicha offer topamiz
  const offer = mockOffers.find(o => o.id === Number(id))

  if (!offer) {
    return (
      <div className="text-center py-20 text-zinc-400">
        <div className="text-4xl mb-3">🔍</div>
        <p>Taklif topilmadi</p>
        <button className="btn btn-secondary btn-md mt-4" onClick={() => navigate('/blogger/offers')}>
          ← Orqaga
        </button>
      </div>
    )
  }

  function handleAccept() {
    setAccepted(true)
    showToast(" Taklif qabul qilindi! Brand siz bilan bog'lanadi 🎉")
  }

  function handleDecline() {
    navigate('/blogger/offers')
  }

  return (
    <div>
      {message && <Toast message={message} onClose={hideToast} />}

      {/* Breadcrumb */}
      <div
        className="flex items-center gap-2 text-sm text-zinc-400 mb-6 cursor-pointer hover:text-zinc-700 transition-colors w-fit"
        onClick={() => navigate('/blogger/offers')}
      >
        <span>←</span>
        <span>Offers</span>
        <span>/</span>
        <span className="text-zinc-700 font-medium">{offer.title}</span>
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-[1fr_340px] gap-6">

        {/* LEFT: Asosiy ma'lumot */}
        <div>
          {/* Hero image area */}
          <div className="w-full h-[180px] rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200
                          flex items-center justify-center text-6xl mb-5">
            {offer.emoji}
          </div>

          {/* Badges */}
          <div className="flex items-center gap-2 mb-3">
            <span className="badge badge-blue">{offer.brandType}</span>
            <span className="badge badge-black">Featured Campaign</span>
          </div>

          <h2 className="text-2xl font-bold mb-1">{offer.title}</h2>
          <p className="text-sm text-zinc-500 mb-5">by {offer.brand}</p>

          <div className="divider" />

          {/* Description */}
          <h3 className="font-semibold mb-3">Campaign Notes</h3>
          <p className="text-sm text-zinc-600 leading-relaxed mb-5">{offer.description}</p>

          <div className="divider" />

          {/* Requirements */}
          <h3 className="font-semibold mb-3">Requirements</h3>
          <div className="space-y-0">
            {offer.requirements.map((req, i) => (
              <div key={i} className="flex items-start gap-3 py-3 border-b border-zinc-100 last:border-none">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                <span className="text-sm text-zinc-700">{req}</span>
              </div>
            ))}
          </div>

          <div className="divider" />

          {/* Meta info */}
          <div className="flex gap-6 text-sm text-zinc-500">
            <span>📅 Deadline: <strong className="text-zinc-900">{offer.deadline}</strong></span>
            <span>📱 Platform: <strong className="text-zinc-900">{offer.platform}</strong></span>
            <span>🏢 Brand: <strong className="text-zinc-900">{offer.brand}</strong></span>
          </div>
        </div>

        {/* RIGHT: Narx va actions (sticky) */}
        <div>
          <div className="card sticky top-6">
            <div className="text-xs text-zinc-500 mb-1">Compensation</div>
            <div className="text-4xl font-bold mb-2">{offer.budget}</div>
            <span className="badge badge-green mb-5">+ Free product</span>

            {!accepted ? (
              <div className="space-y-2">
                <button
                  className="btn btn-primary btn-lg w-full"
                  onClick={handleAccept}
                >
                  Accept Offer →
                </button>
                <button
                  className="btn btn-danger btn-md w-full"
                  onClick={handleDecline}
                >
                  Decline
                </button>
              </div>
            ) : (
              <div className="text-center py-5">
                <div className="text-4xl mb-3">🎉</div>
                <div className="font-semibold mb-1">Qabul qilindi!</div>
                <p className="text-sm text-zinc-500">Brand siz bilan tez orada bog'lanadi</p>
              </div>
            )}

            <div className="divider" />

            {/* Deal summary */}
            <div className="space-y-0">
              {[
                { key: 'Platform', val: offer.platform  },
                { key: 'Brand',    val: offer.brand     },
                { key: 'Deadline', val: offer.deadline  },
              ].map(row => (
                <div key={row.key} className="flex items-center justify-between py-2.5 border-b border-zinc-100 last:border-none text-sm">
                  <span className="text-zinc-500">{row.key}</span>
                  <span className="font-medium">{row.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
