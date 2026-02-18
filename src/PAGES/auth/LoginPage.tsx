// Login sahifasi

import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../components/ui/Logo'
import type { Role } from '../../types'

interface LoginForm {
  email: string
  password: string
}

interface LoginPageProps {
  onLogin: (role: Role) => void
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<LoginForm>()

  function onSubmit(data: LoginForm) {
    // Demo: email ichida "blogger" bo'lsa → blogger, aks holda advertiser
    // Backend tayyor bo'lganda:
    //   const res = await axios.post('/api/auth/login', data)
    //   onLogin(res.data.user.role)
    const role: Role = data.email.toLowerCase().includes('blogger') ? 'blogger' : 'advertiser'
    onLogin(role)
    navigate(role === 'blogger' ? '/blogger' : '/advertiser')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      {/* Topbar */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2">
        <Logo />
      </div>

      {/* Form box */}
      <div className="w-full max-w-[400px] animate-[fadeIn_0.3s_ease]">
        <h1 className="text-2xl font-bold mb-1">Welcome back</h1>
        <p className="text-sm text-zinc-500 mb-7">Sign in to AdsTop</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              placeholder="email@example.com"
              {...register('email', { required: true })}
            />
          </div>

          <div>
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              placeholder="••••••••"
              {...register('password', { required: true })}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-zinc-500">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" className="w-auto" /> Remember me
            </label>
            <span className="cursor-pointer hover:underline">Forgot password?</span>
          </div>

          <button type="submit" className="btn btn-primary btn-lg w-full">
            Continue →
          </button>
        </form>

        <div className="divider" />

        <p className="text-center text-sm text-zinc-500">
          Don't have an account?{' '}
          <Link to="/register" className="text-zinc-900 font-semibold hover:underline">
            Sign up
          </Link>
        </p>

        {/* Demo hint */}
        <div className="mt-5 p-3 bg-zinc-50 rounded-xl text-xs text-zinc-400 leading-5">
          <strong className="text-zinc-600">Demo:</strong><br />
          <span>blogger@demo.com → Blogger dashboard</span><br />
          <span>Boshqa istalgan email → Advertiser dashboard</span>
        </div>
      </div>
    </div>
  )
}
