import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Toast from '../../components/ui/Toast'
import { useToast } from '../../hooks/useToast'
import { mockOffers } from '../../data/mock'
import type { Offer } from '../../types'
import OfferCard from './OfferCard'
import { ListFilter, SortDesc } from 'lucide-react'

export default function BloggerDashboardPage() {
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
    <div className="min-h-screen bg-[#f7f7f7] dark:bg-[#191919]">
      {message && <Toast message={message} onClose={hideToast} />}

      <div className="max-w-250 mx-auto pb-24">

        {/* Page Heading & Welcome */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-white mb-2">
              Good morning, Alex
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg">Here's what's happening today.</p>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-4 md:gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">85%</span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">Profile Complete</span>
            </div>
            <div className="w-px bg-neutral-200 dark:bg-neutral-700 h-12" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">$12,450</span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">Total Earned</span>
            </div>
          </div>
        </header>


        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Incoming Offers</h3>
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              title="Filter"
            >
              <span className="material-symbols-outlined"><ListFilter /></span>
            </button>
            <button
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              title="Sort"
            >
              <span className="material-symbols-outlined"><SortDesc className='w-7.5 h-7.5' /></span>
            </button>
            <button
              className="ml-2 h-9 px-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-semibold hover:opacity-90 transition-opacity"
              onClick={() => navigate('/blogger/offers')}
            >
              Hammasini ko'rish →
            </button>
          </div>
        </div>

        {/* Offers Feed */}
        <div className="flex flex-col gap-8">
          {offers.slice(0, 3).map(offer => (
            <OfferCard
              key={offer.id}
              offer={offer}
              onAccept={() => handleAccept(offer.id)}
              onDecline={() => handleDecline(offer.id)}
              onView={() => navigate(`/blogger/offers/${offer.id}`)}
            />
          ))}
        </div>

      </div>
    </div>
  )
}