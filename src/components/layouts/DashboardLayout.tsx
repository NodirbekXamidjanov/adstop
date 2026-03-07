// Dashboard wrapper — Sidebar + asosiy kontent

import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import type { User } from '../../types'

interface DashboardLayoutProps {
  user: User
  onLogout: () => void
}

export default function DashboardLayout({ user, onLogout }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#f7f7f7]">
      <Sidebar user={user} onLogout={onLogout} />

      {/* Main content — sidebar kengligiga qarab margin */}
      <main className="ml-57.5 flex-1 p-8 max-w-[calc(100vw-230px)]">
        <Outlet />
      </main>
    </div>
  )
}
