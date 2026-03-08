// App.tsx — asosiy router va auth logikasi
// Foydalanuvchi login qilganda role ga qarab yo'naltiriladi

import { Routes, Route, Navigate } from 'react-router-dom'

// Auth page

// Layout
import DashboardLayout from './components/layouts/DashboardLayout'

// Advertiser page
import AdvertiserDashboardPage from './pages/advertiser/DashboardPage'
import CampaignsPage from './pages/advertiser/CampaignsPage'
import BloggersPage from './pages/advertiser/BloggersPage'
import AdvertiserPaymentsPage from './pages/advertiser/PaymentsPage'
import AdvertiserSettingsPage from './pages/advertiser/SettingsPage'

// Blogger page
import BloggerDashboardPage from './pages/blogger/DashboardPage'
import BloggerOffersPage from './pages/blogger/OffersPage'
import OfferDetailPage from './pages/blogger/OfferDetailPage'
import BloggerPaymentsPage from './pages/blogger/PaymentsPage'
import BloggerSettingsPage from './pages/blogger/SettingsPage'
import { useAuth } from './context/authContext/registerContext'
import { Home } from './pages/Landing'
import { CreateAdvAccount, CreateInfAccount, FinishSetupInfRegister, Login, Register } from './pages/auth'

export default function App() {
  
  const { user, logout } = useAuth()

  return (

      <Routes>
        <Route path="*" element={<Home />} />

        {/* ── AUTH ROUTES ── */}
        <Route path="/login" element={<Login />} ></Route>

        <Route path="/register" element={<Register />} />
        <Route path="/register/advertiser" element={<CreateAdvAccount />} />
        <Route path="/register/influncer" element={<CreateInfAccount />} />
        <Route path="/register/influncer/finish-setup" element={<FinishSetupInfRegister />} />


        {/* ── ADVERTISER ROUTES ── */}
        <Route
          path="/advertiser"
          element={
            user?.role === 'advertiser'
              ? <DashboardLayout user={user} onLogout={logout} />
              : <Navigate to="/login" replace />
          }
        >
          <Route index element={<AdvertiserDashboardPage />} />
          <Route path="campaigns" element={<CampaignsPage />} />
          <Route path="bloggers" element={<BloggersPage />} />
          <Route path="payments" element={<AdvertiserPaymentsPage />} />
          <Route path="settings" element={<AdvertiserSettingsPage />} />
        </Route>

        {/* ── BLOGGER ROUTES ── */}
        <Route
          path="/blogger"
          element={
            user?.role === 'influncer'
              ? <DashboardLayout user={user} onLogout={logout} />
              : <Navigate to="/login" replace />
          }
        >
          <Route index element={<BloggerDashboardPage />} />
          <Route path="offers" element={<BloggerOffersPage />} />
          <Route path="offers/:id" element={<OfferDetailPage />} />
          <Route path="payments" element={<BloggerPaymentsPage />} />
          <Route path="settings" element={<BloggerSettingsPage />} />
        </Route>

        {/* ── DEFAULT REDIRECT ── */}
        <Route
          path="*"
          element={
            <Navigate
              to={
                user
                  ? user.role === 'influncer' ? '/blogger' : '/advertiser'
                  : '/login'
              }
              replace
            />
          }
        />
      </Routes>
  )
}
