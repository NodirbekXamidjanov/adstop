// Sidebar — advertiser va blogger uchun umumiy layout
// Role ga qarab turli navigatsiya linklari ko'rsatiladi

import { useNavigate, useLocation } from 'react-router-dom'
import Logo from '../ui/Logo'
import Avatar from '../ui/Avatar'
import type { User } from '../../types'

interface NavLink {
  path: string
  icon: string
  label: string
}

// Advertiser navigatsiyasi
const ADVERTISER_LINKS: NavLink[] = [
  { path: '/advertiser',           icon: '⊞',  label: 'Dashboard'  },
  { path: '/advertiser/campaigns', icon: '📋', label: 'Campaigns'  },
  { path: '/advertiser/bloggers',  icon: '👥', label: 'Bloggers'   },
  { path: '/advertiser/payments',  icon: '💳', label: 'Payments'   },
  { path: '/advertiser/settings',  icon: '⚙️', label: 'Settings'   },
]

// Blogger navigatsiyasi
const BLOGGER_LINKS: NavLink[] = [
  { path: '/blogger',          icon: '⊞',  label: 'Dashboard' },
  { path: '/blogger/offers',   icon: '📨', label: 'Offers'    },
  { path: '/blogger/payments', icon: '💳', label: 'Payments'  },
  { path: '/blogger/settings', icon: '⚙️', label: 'Settings'  },
]

interface SidebarProps {
  user: User
  onLogout: () => void
}

export default function Sidebar({ user, onLogout }: SidebarProps) {
  const navigate  = useNavigate()
  const location  = useLocation()

  const links = user.role === 'advertiser' ? ADVERTISER_LINKS : BLOGGER_LINKS

  // Aktiv link tekshirish
  const isActive = (path: string) => {
    if (path === '/advertiser' || path === '/blogger') {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  return (
    <aside className="fixed top-0 left-0 h-screen w-[230px] bg-white border-r border-zinc-100
                       flex flex-col px-3 py-5 z-20">
      {/* Logo */}
      <div className="px-2 mb-7">
        <Logo />
      </div>

      {/* Nav links */}
      <nav className="flex-1">
        {links.map((link) => (
          <div
            key={link.path}
            className={`nav-item ${isActive(link.path) ? 'active' : ''}`}
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
          <Avatar initials={`${user.firstName[0]}${user.lastName[0]}`} size="sm" />
          <div>
            <div className="text-sm font-semibold">{user.firstName} {user.lastName}</div>
            <div className="text-xs text-zinc-400 capitalize">{user.role}</div>
          </div>
        </div>
        <div
          className="nav-item text-red-500 hover:!text-red-600 hover:!bg-red-50"
          onClick={onLogout}
        >
          <span className="w-5 text-center">→</span>
          Chiqish
        </div>
      </div>
    </aside>
  )
}
