// App.tsx — asosiy router va auth logikasi
// Foydalanuvchi login qilganda role ga qarab yo'naltiriladi

import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import type { Role } from './types'

// Auth page
import LoginPage    from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'

// Layout
import DashboardLayout from './components/layouts/DashboardLayout'

// Advertiser page
import AdvertiserDashboardPage from './pages/advertiser/DashboardPage'
import CampaignsPage           from './pages/advertiser/CampaignsPage'
import BloggersPage            from './pages/advertiser/BloggersPage'
import AdvertiserPaymentsPage  from './pages/advertiser/PaymentsPage'
import AdvertiserSettingsPage  from './pages/advertiser/SettingsPage'

// Blogger page
import BloggerDashboardPage from './pages/blogger/DashboardPage'
import BloggerOffersPage    from './pages/blogger/OffersPage'
import OfferDetailPage      from './pages/blogger/OfferDetailPage'
import BloggerPaymentsPage  from './pages/blogger/PaymentsPage'
import BloggerSettingsPage  from './pages/blogger/SettingsPage'

export default function App() {
  const { user, login, register, logout } = useAuth()

  function handleLogin(role: Role) {
    login(role)
  }

  function handleRegister(role: Role) {
    register(role)
  }

  return (
    <Routes>
      {/* ── AUTH ROUTES ── */}
      <Route
        path="/login"
        element={
          user
            ? <Navigate to={user.role === 'blogger' ? '/blogger' : '/advertiser'} replace />
            : <LoginPage onLogin={handleLogin} />
        }
      />
      <Route
        path="/register"
        element={
          user
            ? <Navigate to={user.role === 'blogger' ? '/blogger' : '/advertiser'} replace />
            : <RegisterPage onRegister={handleRegister} />
        }
      />

      {/* ── ADVERTISER ROUTES ── */}
      <Route
        path="/advertiser"
        element={
          user?.role === 'advertiser'
            ? <DashboardLayout user={user} onLogout={logout} />
            : <Navigate to="/login" replace />
        }
      >
        <Route index                element={<AdvertiserDashboardPage />} />
        <Route path="campaigns"     element={<CampaignsPage />}           />
        <Route path="bloggers"      element={<BloggersPage />}            />
        <Route path="payments"      element={<AdvertiserPaymentsPage />}  />
        <Route path="settings"      element={<AdvertiserSettingsPage />}  />
      </Route>

      {/* ── BLOGGER ROUTES ── */}
      <Route
        path="/blogger"
        element={
          user?.role === 'blogger'
            ? <DashboardLayout user={user} onLogout={logout} />
            : <Navigate to="/login" replace />
        }
      >
        <Route index              element={<BloggerDashboardPage />} />
        <Route path="offers"      element={<BloggerOffersPage />}    />
        <Route path="offers/:id"  element={<OfferDetailPage />}      />
        <Route path="payments"    element={<BloggerPaymentsPage />}  />
        <Route path="settings"    element={<BloggerSettingsPage />}  />
      </Route>

      {/* ── DEFAULT REDIRECT ── */}
      <Route
        path="*"
        element={
          <Navigate
            to={
              user
                ? user.role === 'blogger' ? '/blogger' : '/advertiser'
                : '/login'
            }
            replace
          />
        }
      />
    </Routes>
  )
}
