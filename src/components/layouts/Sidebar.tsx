// Sidebar — advertiser va blogger uchun umumiy layout
// Role ga qarab turli navigatsiya linklari ko'rsatiladi

import { useNavigate, useLocation } from 'react-router-dom'
import Logo from '../ui/Logo'
import Avatar from '../ui/Avatar'
import type { User } from '../../types'
import { BriefcaseBusinessIcon, LayoutDashboard, Megaphone, Settings, UsersIcon, Wallet } from 'lucide-react'
import type { ReactNode } from 'react'
import { mockBloggers } from '@/data/mock'

interface NavLink {
  path: string
  icon: ReactNode
  label: string
}

// Advertiser navigatsiyasi
const ADVERTISER_LINKS: NavLink[] = [
  { path: '/advertiser', icon: <LayoutDashboard />, label: 'Dashboard' },
  { path: '/advertiser/campaigns', icon: <Megaphone />, label: 'Campaigns' },
  { path: '/advertiser/bloggers', icon: <UsersIcon />, label: 'Bloggers' },
  { path: '/advertiser/payments', icon: <Wallet />, label: 'Payments' },
  { path: '/advertiser/settings', icon: <Settings />, label: 'Settings' },
]

// Blogger navigatsiyasi
const BLOGGER_LINKS: NavLink[] = [
  { path: '/blogger', icon: <LayoutDashboard />, label: 'Dashboard' },
  { path: '/blogger/offers', icon: <BriefcaseBusinessIcon />, label: 'Offers' },
  { path: '/blogger/payments', icon: <Wallet />, label: 'Payments' },
  { path: '/blogger/settings', icon: <Settings />, label: 'Settings' },
]

interface SidebarProps {
  user: User
  onLogout: () => void
}

export default function Sidebar({ user, onLogout }: SidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const links = user.role === 'advertiser' ? ADVERTISER_LINKS : BLOGGER_LINKS

  // Aktiv link tekshirish
  const isActive = (path: string) => {
    if (path === '/advertiser' || path === '/blogger') {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  return (
    <aside className="fixed top-0 left-0 h-screen w-57.5 bg-white border-r border-zinc-100
                       flex flex-col px-3 py-5 z-20">
      {/* Logo */}
      <div className="px-2 mb-7 cursor-pointer" onClick={() => navigate("/")}>
        <Logo />
      </div>

      {/* Nav links */}
      <nav className="flex-1">
        {links.map((link) => (
          <div
            key={link.path}
            className={`nav-item flex gap-4 ${isActive(link.path) ? 'active' : ''}`}
            onClick={() => navigate(link.path)}
          >
            <span className="w-5 text-center text-base">{link.icon}</span>
            {link.label}
          </div>
        ))}
      </nav>

      {/* User + Logout */}
      <div className="border-t border-zinc-100 pt-3 mt-3">
        <div className="flex items-center gap-2.5 px-2 py-2 rounded-xl hover:bg-zinc-50 cursor-pointer mb-1">
          <Avatar initials={`${mockBloggers[1].name[0]}`} size="sm" />
          <div>
            <div className="text-sm font-semibold">{mockBloggers[1].name} </div>
            <div className="text-xs text-zinc-400 capitalize">{user.role}</div>
          </div>
        </div>
        <div
          className="nav-item text-red-500 hover:text-red-600! hover:bg-red-50!"
          onClick={onLogout}
        >
          <span className="w-5 text-center">→</span>
          Chiqish
        </div>
      </div>
    </aside>
  )
}
