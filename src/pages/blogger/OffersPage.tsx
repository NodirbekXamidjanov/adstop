// Blogger uchun barcha takliflar sahifasi

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { mockOffers } from '../../data/mock'
import OfferCard from './OfferCard'
import Toast from '../../components/ui/Toast'
import { useToast } from '../../hooks/useToast'
import type { Offer } from '../../types'

export default function BloggerOffersPage() {
  const navigate = useNavigate()
  const { message, showToast, hideToast } = useToast()
  const [offers, setOffers] = useState<Offer[]>(mockOffers)

  function handleAccept(id: number) {
    setOffers(prev => prev.map(o => o.id === id ? { ...o, status: 'accepted' } : o))
    showToast('Taklif qabul qilindi! 🎉')
  }

  function handleDecline(id: number) {
    setOffers(prev => prev.filter(o => o.id !== id))
    showToast('Taklif rad etildi.')
  }

  return (
    <div>
      {message && <Toast message={message} onClose={hideToast} />}

      <div className="mb-7">
        <h2 className="text-xl font-bold">Offers</h2>
        <p className="text-sm text-zinc-500 mt-0.5">Sizga kelgan barcha takliflar</p>
      </div>

      <div className="space-y-3">
        {offers.map(offer => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onAccept={() => handleAccept(offer.id)}
            onDecline={() => handleDecline(offer.id)}
            onView={() => navigate(`/blogger/offers/${offer.id}`)}
          />
        ))}
      </div>

      {offers.length === 0 && (
        <div className="text-center py-20 text-zinc-400">
          <div className="text-4xl mb-3">📭</div>
          <p>Hozircha taklif yo'q</p>
        </div>
      )}
    </div>
  )
}