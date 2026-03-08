
import { useState } from 'react'
import { mockCampaigns } from '../../data/mock'
import type { Campaign } from '../../types'
import Toast from '../../components/ui/Toast'
import { useToast } from '../../hooks/useToast'
import CreateCampaignModal from './CreateCampaignModal'
import { ArrowRight, CalendarDays, CircleDollarSign, Eye, Goal, Users } from 'lucide-react'

export default function CampaignsPage() {
  const { message, showToast, hideToast } = useToast()
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns)
  const [showModal, setShowModal] = useState(false)

  function handleCreated(name: string) {
    const newCampaign: Campaign = {
      id: Date.now(),
      name,
      emoji: '🆕',
      budget: '$0',
      status: 'draft',
      bloggersCount: 0,
      reach: '—',
      goal: 'Brand Awareness',
      niche: 'Other',
      platform: 'Instagram',
      createdAt: new Date().toLocaleDateString('uz-UZ'),
    }
    setCampaigns(prev => [newCampaign, ...prev])
    showToast(`"${name}" kampaniyasi yaratildi! 🎉`)
    setShowModal(false)
  }

  return (
    <div>
      {message && <Toast message={message} onClose={hideToast} />}

      {/* Header */}
      <div className="flex items-start justify-between mb-7">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Campaigns</h2>
          <p className="text-sm text-neutral-500 mt-0.5">{campaigns.length} ta kampaniya mavjud</p>
        </div>
        <button
          className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full hover:opacity-90 transition-opacity shadow-lg text-sm font-bold"
          onClick={() => setShowModal(true)}
        >
          <span className="text-lg leading-none">＋</span>
          Create Campaign
        </button>
      </div>

      {/* Campaign list */}
      <div className="flex flex-col gap-3">
        {campaigns.map(c => (
          <CampaignRow key={c.id} campaign={c} />
        ))}
      </div>

      {showModal && (
        <CreateCampaignModal onClose={() => setShowModal(false)} onCreated={handleCreated} />
      )}
    </div>
  )
}

function CampaignRow({ campaign: c }: { campaign: Campaign }) {
  const isActive = c.status === 'active'

  return (
    <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-6 py-5 flex items-center gap-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">

      {/* Emoji icon */}
      <div className="w-28 h-28 rounded-xl bg-neutral-100 dark:bg-neutral-700 flex-shrink-0 overflow-hidden">
        <img src={c.emoji} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>

      {/* Name + meta */}
      <div className="flex-1 min-w-0">
        <div className="font-bold text-neutral-900 dark:text-white text-base mb-2.5">{c.name}</div>
        <div className="flex flex-wrap gap-3">
          {[
            { des: "price", icon: <CircleDollarSign />, val: c.budget },
            { des: "users", icon: <Users />, val: `${c.bloggersCount} bloggers` },
            { des: "views", icon: <Eye />, val: c.reach },
            { des: "goal", icon: <Goal />, val: c.goal },
            { des: "calendar", icon: <CalendarDays />, val: c.createdAt },
          ].map(item => (
            <span
              key={item.des}
              className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700 px-2.5 py-1 rounded-full"
            >
              {item.icon} {item.val}
            </span>
          ))}
        </div>
      </div>

      {/* Platform + niche tags */}
      <div className="hidden lg:flex items-center gap-2 shrink-0">
        <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs rounded-full font-medium">
          {c.platform}
        </span>
        <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs rounded-full font-medium">
          {c.niche}
        </span>
      </div>

      {/* Status badge */}
      <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border shrink-0
        ${isActive
          ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-100 dark:border-green-800'
          : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 border-neutral-200 dark:border-neutral-600'
        }`}
      >
        {isActive && (
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        )}
        {isActive ? 'Active' : 'Draft'}
      </div>

      {/* Arrow — hover da chiqadi */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
        <div className="size-8 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center">
          <span className="material-symbols-outlined text-white dark:text-neutral-900" style={{ fontSize: 18 }}>
            <ArrowRight />
          </span>
        </div>
      </div>

    </div>
  )
}