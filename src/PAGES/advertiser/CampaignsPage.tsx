// Advertiser Campaigns sahifasi

import { useState } from 'react'
import { mockCampaigns } from '../../data/mock'
import type { Campaign } from '../../types'
import Toast from '../../components/ui/Toast'
import { useToast } from '../../hooks/useToast'
import CreateCampaignModal from './CreateCampaignModal'

export default function CampaignsPage() {
  const { message, showToast, hideToast } = useToast()
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns)
  const [showModal, setShowModal] = useState(false)

  function handleCreated(name: string) {
    // Yangi kampaniyani ro'yxatga qo'shamiz
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

      <div className="flex items-start justify-between mb-7">
        <div>
          <h2 className="text-xl font-bold">Campaigns</h2>
          <p className="text-sm text-zinc-500 mt-0.5">{campaigns.length} ta kampaniya mavjud</p>
        </div>
        <button className="btn btn-primary btn-md" onClick={() => setShowModal(true)}>
          ＋ Create Campaign
        </button>
      </div>

      <div className="space-y-2.5">
        {campaigns.map(c => (
          <CampaignRow key={c.id} campaign={c} />
        ))}
      </div>

      {showModal && <CreateCampaignModal onClose={() => setShowModal(false)} onCreated={handleCreated} />}
    </div>
  )
}

function CampaignRow({ campaign: c }: { campaign: Campaign }) {
  return (
    <div className="bg-white border border-zinc-100 rounded-2xl px-5 py-4
                    flex items-center gap-4 hover:border-zinc-300 cursor-pointer transition-all">
      {/* Emoji icon */}
      <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-2xl flex-shrink-0">
        {c.emoji}
      </div>

      {/* Info */}
      <div className="flex-1">
        <div className="font-semibold text-sm mb-1">{c.name}</div>
        <div className="flex gap-4 text-xs text-zinc-500">
          <span>💰 {c.budget}</span>
          <span>👥 {c.bloggersCount} bloggers</span>
          <span>👁 {c.reach}</span>
          <span>🎯 {c.goal}</span>
          <span>📅 {c.createdAt}</span>
        </div>
      </div>

      {/* Status badge */}
      <span className={`badge ${c.status === 'active' ? 'badge-green' : 'badge-gray'}`}>
        {c.status === 'active' ? '● Active' : 'Draft'}
      </span>
    </div>
  )
}
