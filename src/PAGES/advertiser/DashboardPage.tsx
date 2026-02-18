// Advertiser Dashboard sahifasi

import { useState } from 'react'
import StatCard from '../../components/ui/StatCard'
import Avatar from '../../components/ui/Avatar'
import Toast from '../../components/ui/Toast'
import { useToast } from '../../hooks/useToast'
import { mockBloggers } from '../../data/mock'
import type { Blogger } from '../../types'
import CreateCampaignModal from './CreateCampaignModal'

export default function AdvertiserDashboardPage() {
  const { message, showToast, hideToast } = useToast()
  const [showModal, setShowModal] = useState(false)
  const [invitedIds, setInvitedIds] = useState<number[]>([])

  function handleInvite(blogger: Blogger) {
    setInvitedIds(prev => [...prev, blogger.id])
    showToast(`${blogger.name} ga taklif yuborildi!`)
  }

  return (
    <div>
      {message && <Toast message={message} onClose={hideToast} />}

      {/* Page header */}
      <div className="flex items-start justify-between mb-7">
        <div>
          <h2 className="text-xl font-bold">Dashboard</h2>
          <p className="text-sm text-zinc-500 mt-0.5">Welcome back, Alex 👋</p>
        </div>
        <button className="btn btn-primary btn-md" onClick={() => setShowModal(true)}>
          ＋ Create Campaign
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-7">
        <StatCard label="Active Campaigns" value="12"      sub="↑ 2 this month"           icon="📋" />
        <StatCard label="Total Spend"      value="$45,200" sub="↑ 18% vs last month"       icon="💰" />
        <StatCard label="Total Reach"      value="2.4M"    sub="Across all campaigns"       icon="👁" />
      </div>

      {/* AI Recommendations */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">⭐ AI Recommendations</h3>
        <div className="flex gap-2">
          <button className="btn btn-secondary btn-sm">Filter</button>
          <button className="btn btn-secondary btn-sm">Sort by Match</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {mockBloggers.map(blogger => (
          <BloggerCard
            key={blogger.id}
            blogger={blogger}
            invited={invitedIds.includes(blogger.id)}
            onInvite={() => handleInvite(blogger)}
          />
        ))}
      </div>

      {/* Create campaign modal */}
      {showModal && (
        <CreateCampaignModal
          onClose={() => setShowModal(false)}
          onCreated={(name) => {
            showToast(`"${name}" kampaniyasi yaratildi! 🎉`)
            setShowModal(false)
          }}
        />
      )}
    </div>
  )
}

// ─── Blogger kartochkasi ───
interface BloggerCardProps {
  blogger: Blogger
  invited: boolean
  onInvite: () => void
}

function BloggerCard({ blogger, invited, onInvite }: BloggerCardProps) {
  return (
    <div className="card hover:border-zinc-300 hover:-translate-y-0.5 hover:shadow-sm transition-all cursor-pointer">
      {/* Top */}
      <div className="flex items-center gap-2.5 mb-4">
        <Avatar initials={blogger.initials} size="md" />
        <div>
          <div className="font-semibold text-sm">{blogger.name}</div>
          <div className="text-xs text-zinc-400">{blogger.handle}</div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-4 mb-3">
        <div>
          <div className="font-bold text-sm">{blogger.followers}</div>
          <div className="text-[11px] text-zinc-400">Followers</div>
        </div>
        <div>
          <div className="font-bold text-sm">{blogger.engagement}</div>
          <div className="text-[11px] text-zinc-400">Engagement</div>
        </div>
        <div>
          <div className="font-bold text-sm">{blogger.platform}</div>
          <div className="text-[11px] text-zinc-400">Platform</div>
        </div>
      </div>

      {/* Match + niche */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
          ✦ {blogger.matchScore}% match
        </span>
        <span className="badge badge-gray">{blogger.niche}</span>
      </div>

      {/* Invite button */}
      <button
        className={`btn btn-sm w-full ${invited ? 'btn-success' : 'btn-primary'}`}
        onClick={onInvite}
        disabled={invited}
      >
        {invited ? '✓ Invited' : 'Invite →'}
      </button>
    </div>
  )
}
