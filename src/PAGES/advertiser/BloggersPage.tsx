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
  return (
    <div className="card hover:border-zinc-300 hover:-translate-y-0.5 hover:shadow-sm transition-all cursor-pointer">
      <div className="flex items-center gap-2.5 mb-4">
        <Avatar initials={blogger.initials} size="md" />
        <div>
          <div className="font-semibold text-sm">{blogger.name}</div>
          <div className="text-xs text-zinc-400">{blogger.handle}</div>
        </div>
      </div>

      <div className="flex gap-4 mb-3">
        <div>
          <div className="font-bold text-sm">{blogger.followers}</div>
          <div className="text-[11px] text-zinc-400">Followers</div>
        </div>
        <div>
          <div className="font-bold text-sm">{blogger.engagement}</div>
          <div className="text-[11px] text-zinc-400">Engagement</div>
        </div>
      </div>

      <p className="text-xs text-zinc-500 leading-relaxed mb-3 line-clamp-2">{blogger.bio}</p>

      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
          ✦ {blogger.matchScore}% match
        </span>
        <span className="badge badge-gray">{blogger.niche}</span>
      </div>

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
