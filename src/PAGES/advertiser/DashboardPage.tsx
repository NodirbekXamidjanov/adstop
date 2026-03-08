import { useState } from 'react'
import Avatar from '../../components/ui/Avatar'
import Toast from '../../components/ui/Toast'
import { useToast } from '../../hooks/useToast'
import { mockBloggers } from '../../data/mock'
import type { Blogger } from '../../types'
import CreateCampaignModal from './CreateCampaignModal'
import { ArrowRight, Check, CreditCard, Eye, Megaphone, Plus, Search, Sparkles } from 'lucide-react'

export default function AdvertiserDashboardPage() {
  const { message, showToast, hideToast } = useToast()
  const [showModal, setShowModal] = useState(false)
  const [invitedIds, setInvitedIds] = useState<number[]>([])

  function handleInvite(blogger: Blogger) {
    setInvitedIds(prev => [...prev, blogger.id])
    showToast(`${blogger.name} ga taklif yuborildi!`)
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] dark:bg-[#191919]">
      {message && <Toast message={message} onClose={hideToast} />}

      {/* Sticky Header */}
      <header className="sticky top-0 z-20 w-full px-8 py-5 flex items-center justify-between bg-[#f7f7f7]/80 dark:bg-[#191919]/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Dashboard</h2>
          <p className="text-sm text-neutral-500 mt-0.5">Welcome back, Nike Inc.</p>
        </div>
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:block group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-neutral-400 group-focus-within:text-neutral-900" style={{ fontSize: 20 }}><Search /></span>
            </div>
            <input
              className="block w-64 lg:w-80 pl-10 pr-3 py-2.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-sm placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition-all shadow-sm"
              placeholder="Search influencers, tags..."
              type="text"
            />
          </div>
          {/* Create Campaign */}
          <button
            className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full hover:opacity-90 transition-opacity shadow-lg text-sm font-bold"
            onClick={() => setShowModal(true)}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}><Plus /></span>
            Create Campaign
          </button>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="p-8 w-full max-w-[1600px] mx-auto flex flex-col gap-10 pb-20">

        {/* Stats Row */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { label: 'Active Campaigns', value: '12', sub: '↑ 2 this month', icon: <Megaphone /> },
            { label: 'Total Spend', value: '$45,200', sub: '↑ 18% vs last month', icon: <CreditCard /> },
            { label: 'Total Impressions', value: '2.4M', sub: 'Across all campaigns', icon: <Eye /> },
          ].map(stat => (
            <div
              key={stat.label}
              className="bg-white dark:bg-neutral-800 p-6 rounded-lg border border-neutral-100 dark:border-neutral-700 shadow-sm flex items-center justify-between group hover:border-neutral-300 dark:hover:border-neutral-500 transition-colors cursor-default"
            >
              <div className="flex flex-col gap-1">
                <span className="text-neutral-500 text-sm font-medium">{stat.label}</span>
                <span className="text-neutral-900 dark:text-white text-3xl font-bold tracking-tight">{stat.value}</span>
                <span className="text-xs text-neutral-400">{stat.sub}</span>
              </div>
              <div className="size-12 rounded-full bg-neutral-50 dark:bg-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-900 transition-colors">
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
            </div>
          ))}
        </section>

        {/* AI Recommendations */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[50%] text-white">
                <span className="material-symbols-outlined block" style={{ fontSize: 20 }}><Sparkles /></span>
              </div>
              <h3 className="text-neutral-900 dark:text-white text-xl font-bold">AI Recommendations</h3>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
                Filter
              </button>
              <button className="px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
                Sort by Match
              </button>
            </div>
          </div>

          {/* Blogger Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockBloggers.map(blogger => (
              <BloggerCard
                key={blogger.id}
                blogger={blogger}
                invited={invitedIds.includes(blogger.id)}
                onInvite={() => handleInvite(blogger)}
              />
            ))}
          </div>
        </section>

      </div>

      {/* Create Campaign Modal */}
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
  const isHighMatch = blogger.matchScore >= 90

  return (
    <article className="bg-white dark:bg-neutral-800 rounded-lg p-5 border border-neutral-200 dark:border-neutral-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5 group cursor-pointer">

      {/* Top: Avatar + name + match badge */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="size-14 rounded-full bg-neutral-100 dark:bg-neutral-700 border border-neutral-100 dark:border-neutral-600 flex items-center justify-center shrink-0">
            <Avatar initials={blogger.initials} size="md" />
          </div>
          <div>
            <h3 className="font-bold text-neutral-900 dark:text-white leading-tight">{blogger.name}</h3>
            <p className="text-xs text-neutral-500 font-medium">{blogger.handle}</p>
          </div>
        </div>
        <div className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border
          ${isHighMatch
            ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-100 dark:border-green-800'
            : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-300 border-neutral-200 dark:border-neutral-600'
          }`}
        >
          {blogger.matchScore}% Match
        </div>
      </div>

      {/* Niche tags */}
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs rounded-full font-medium">
          {blogger.niche}
        </span>
        <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs rounded-full font-medium">
          {blogger.platform}
        </span>
      </div>

      {/* Stats + Invite button */}
      <div className="pt-4 border-t border-neutral-100 dark:border-neutral-700 flex items-center justify-between mt-auto">
        <div className="flex flex-col">
          <span className="text-xs text-neutral-400">Followers</span>
          <span className="text-sm font-bold text-neutral-900 dark:text-white">{blogger.followers}</span>
        </div>
        <div className="w-px h-8 bg-neutral-100 dark:bg-neutral-700" />
        <div className="flex flex-col">
          <span className="text-xs text-neutral-400">Engagement</span>
          <span className="text-sm font-bold text-neutral-900 dark:text-white">{blogger.engagement}</span>
        </div>

        {/* Invite button — hover da chiqadi */}
        <button
          className={`size-8 rounded-full flex items-center justify-center transition-all
            ${invited
              ? 'bg-green-500 text-white opacity-100'
              : 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 opacity-0 group-hover:opacity-100'
            }`}
          onClick={(e) => { e.stopPropagation(); onInvite() }}
          disabled={invited}
          title={invited ? 'Invited' : 'Invite'}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
            {invited ? <Check /> : <ArrowRight />}
          </span>
        </button>
      </div>
    </article>
  )
}