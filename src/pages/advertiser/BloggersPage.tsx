// Bloggerlar ro'yxati sahifasi — qidiruv va filter bilan

import { useState, useMemo } from 'react'
import { mockBloggers } from '../../data/mock'
import Avatar from '../../components/ui/Avatar'
import Toast from '../../components/ui/Toast'
import { useToast } from '../../hooks/useToast'
import type { Blogger } from '../../types'

const PLATFORMS = ['All', 'Instagram', 'TikTok', 'YouTube']

export default function BloggersPage() {
  const { message, showToast, hideToast } = useToast()
  const [search, setSearch] = useState('')
  const [platform, setPlatform] = useState('All')
  const [invitedIds, setInvitedIds] = useState<number[]>([])

  // Qidiruv va filter logikasi
  const filtered = useMemo(() => {
    return mockBloggers.filter(b => {
      const matchSearch =
        b.name.toLowerCase().includes(search.toLowerCase()) ||
        b.niche.toLowerCase().includes(search.toLowerCase()) ||
        b.handle.toLowerCase().includes(search.toLowerCase())
      const matchPlatform = platform === 'All' || b.platform === platform
      return matchSearch && matchPlatform
    })
  }, [search, platform])

  function handleInvite(blogger: Blogger) {
    setInvitedIds(prev => [...prev, blogger.id])
    showToast(`${blogger.name} ga taklif yuborildi!`)
  }

  return (
    <div>
      {message && <Toast message={message} onClose={hideToast} />}

      <div className="mb-7">
        <h2 className="text-xl font-bold">Bloggers</h2>
        <p className="text-sm text-zinc-500 mt-0.5">Kampaniyangizga mos kreatorlarni toping</p>
      </div>

      {/* Filter row */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <input
          className="input max-w-65"
          placeholder="🔍 Ism, niche yoki handle..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="flex gap-2">
          {PLATFORMS.map(p => (
            <button
              key={p}
              className={`btn btn-sm ${platform === p ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setPlatform(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs text-zinc-400 mb-4">{filtered.length} ta blogger topildi</p>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-4">
        {filtered.map(blogger => (
          <BloggerCard
            key={blogger.id}
            blogger={blogger}
            invited={invitedIds.includes(blogger.id)}
            onInvite={() => handleInvite(blogger)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-zinc-400">
          <div className="text-4xl mb-3">🔍</div>
          <p>Hech qanday blogger topilmadi</p>
        </div>
      )}
    </div>
  )
}

function BloggerCard({ blogger, invited, onInvite }: { blogger: Blogger; invited: boolean; onInvite: () => void }) {
  const isHighMatch = blogger.matchScore >= 90

  return (
    <article className="bg-white dark:bg-neutral-800 rounded-lg p-5 border border-neutral-200 dark:border-neutral-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 group cursor-pointer">

      {/* Top: Avatar + name + match badge */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="size-14 rounded-full bg-neutral-100 dark:bg-neutral-700 border border-neutral-100 dark:border-neutral-600 flex items-center justify-center shrink-0">
            <Avatar initials={blogger.initials} size="md" />
          </div>
          <div>
            <div className="font-bold text-neutral-900 dark:text-white leading-tight">{blogger.name}</div>
            <div className="text-xs text-neutral-500 font-medium">{blogger.handle}</div>
          </div>
        </div>
        <div className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border shrink-0
          ${isHighMatch
            ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-100 dark:border-green-800'
            : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-300 border-neutral-200 dark:border-neutral-600'
          }`}
        >
          {blogger.matchScore}% Match
        </div>
      </div>

      {/* Niche + platform tags */}
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs rounded-full font-medium">
          {blogger.niche}
        </span>
        <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs rounded-full font-medium">
          {blogger.platform}
        </span>
      </div>

      {/* Bio */}
      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2">
        {blogger.bio}
      </p>

      {/* Stats + invite */}
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

        {/* Invite button */}
        <button
          className={`h-8 rounded-full px-4 text-xs font-bold transition-all flex items-center gap-1.5
            ${invited
              ? 'bg-green-500 text-white cursor-default'
              : 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 opacity-0 group-hover:opacity-100 hover:opacity-90 active:scale-95'
            }`}
          onClick={(e) => { e.stopPropagation(); onInvite() }}
          disabled={invited}
        >
          {invited ? '✓ Invited' : 'Invite →'}
        </button>
      </div>

    </article>
  )
}