// Register sahifasi — multi-step form
// Step 0: Role tanlash
// Step 1 (advertiser): Barcha ma'lumotlar
// Step 1 (blogger): Platform tanlash + URL
// Step 2 (blogger): Shaxsiy ma'lumotlar

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../components/ui/Logo'
import type { Role } from '../../types'

interface RegisterPageProps {
  onRegister: (role: Role) => void
}

// Advertiser form fields
interface AdvertiserFields {
  firstName: string
  lastName: string
  companyName: string
  companyCategory: string
  email: string
  phone: string
  password: string
}

// Blogger form fields
interface BloggerFields {
  firstName: string
  lastName: string
  username: string
  followers: string
  email: string
  phone: string
  password: string
  audienceInfo: string
}

const PLATFORMS = [
  { key: 'Instagram', icon: '📸' },
  { key: 'TikTok',    icon: '🎵' },
  { key: 'YouTube',   icon: '🎬' },
]

const CATEGORIES = ['Electronics', 'Fashion & Beauty', 'Food & Beverage', 'Health & Fitness', 'Travel', 'Tech & Software', 'Other']

export default function RegisterPage({ onRegister }: RegisterPageProps) {
  const navigate = useNavigate()

  const [step,     setStep]     = useState(0)
  const [role,     setRole]     = useState<Role | ''>('')
  const [platform, setPlatform] = useState('')
  const [accountUrl, setAccountUrl] = useState('')

  // Advertiser formi
  const advForm = useForm<AdvertiserFields>()
  // Blogger formi
  const blgForm = useForm<BloggerFields>()

  // Progress hisoblash
  const totalSteps = role === 'blogger' ? 3 : 2
  const progress   = ((step + 1) / totalSteps) * 100

  function nextStep() { setStep(s => s + 1) }
  function prevStep() { setStep(s => s - 1) }

  function finishRegister() {
    // Backend tayyor bo'lganda:
    //   await axios.post('/api/auth/register', { role, platform, ...formData })
    onRegister(role as Role)
    navigate(role === 'blogger' ? '/blogger' : '/advertiser')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-start px-6 pt-20 pb-10">

      {/* Topbar */}
      <div className="absolute top-5 left-6">
        <Logo />
      </div>
      <div className="absolute top-5 right-6 text-sm text-zinc-500">
        Already have an account?{' '}
        <Link to="/login" className="text-zinc-900 font-semibold hover:underline">Log in</Link>
      </div>

      {/* Progress bar */}
      <div className="w-[200px] mx-auto mb-10">
        <div className="h-0.5 bg-zinc-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-zinc-900 rounded-full transition-all duration-500"
            style={{ width: progress + '%' }}
          />
        </div>
      </div>

      {/* Form */}
      <div className="w-full max-w-[460px] mx-auto animate-[fadeIn_0.3s_ease]">

        {/* ── STEP 0: Role tanlash ── */}
        {step === 0 && (
          <div>
            <h1 className="text-2xl font-bold text-center mb-1">Get started with AdsTop</h1>
            <p className="text-sm text-zinc-500 text-center mb-8">Choose how you want to use AdsTop</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div
                className={`border-2 rounded-2xl p-6 text-center cursor-pointer transition-all
                  ${role === 'advertiser' ? 'border-zinc-900 bg-zinc-50' : 'border-zinc-200 hover:border-zinc-400'}`}
                onClick={() => setRole('advertiser')}
              >
                <div className="text-3xl mb-2.5">📢</div>
                <div className="font-semibold text-sm mb-1">I'm an Advertiser</div>
                <div className="text-xs text-zinc-500">Want to promote my product</div>
              </div>
              <div
                className={`border-2 rounded-2xl p-6 text-center cursor-pointer transition-all
                  ${role === 'blogger' ? 'border-zinc-900 bg-zinc-50' : 'border-zinc-200 hover:border-zinc-400'}`}
                onClick={() => setRole('blogger')}
              >
                <div className="text-3xl mb-2.5">✍️</div>
                <div className="font-semibold text-sm mb-1">I'm an Influencer</div>
                <div className="text-xs text-zinc-500">Want to collaborate with brands</div>
              </div>
            </div>

            <button
              className="btn btn-primary btn-lg w-full"
              disabled={!role}
              onClick={nextStep}
            >
              Continue →
            </button>
          </div>
        )}

        {/* ── STEP 1 (advertiser): Hamma ma'lumotlar ── */}
        {step === 1 && role === 'advertiser' && (
          <form onSubmit={advForm.handleSubmit(finishRegister)}>
            <p className="text-xs text-zinc-400 mb-2">STEP 1 OF 1</p>
            <h2 className="text-xl font-bold mb-1">Create your advertiser account</h2>
            <p className="text-sm text-zinc-500 mb-6">Tell us about your business to get matched with the right influencers</p>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">First Name</label>
                <input className="input" placeholder="Ali" {...advForm.register('firstName', { required: true })} />
              </div>
              <div>
                <label className="label">Last Name</label>
                <input className="input" placeholder="Valiyev" {...advForm.register('lastName', { required: true })} />
              </div>
            </div>

            <div className="mt-3">
              <label className="label">Company / Brand Name</label>
              <input className="input" placeholder="e.g. Acme Corp" {...advForm.register('companyName', { required: true })} />
            </div>

            <div className="mt-3">
              <label className="label">Business Category</label>
              <select className="input" {...advForm.register('companyCategory', { required: true })}>
                <option value="">Select a category</option>
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>

            <div className="mt-3">
              <label className="label">Work Email</label>
              <input className="input" type="email" placeholder="work@company.com" {...advForm.register('email', { required: true })} />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <label className="label">Phone</label>
                <input className="input" type="tel" placeholder="+998 90 ..." {...advForm.register('phone')} />
              </div>
              <div>
                <label className="label">Password</label>
                <input className="input" type="password" placeholder="••••••••" {...advForm.register('password', { required: true })} />
              </div>
            </div>

            <p className="text-xs text-zinc-400 mt-4 mb-4">
              I agree to the <u className="cursor-pointer">Terms of Service</u> and <u className="cursor-pointer">Privacy Policy</u>
            </p>

            <div className="flex gap-2">
              <button type="button" className="btn btn-secondary btn-md flex-1" onClick={prevStep}>← Back</button>
              <button type="submit" className="btn btn-primary btn-md flex-1">Create account →</button>
            </div>
          </form>
        )}

        {/* ── STEP 1 (blogger): Platform tanlash ── */}
        {step === 1 && role === 'blogger' && (
          <div>
            <p className="text-xs text-zinc-400 mb-2">STEP 1 OF 2</p>
            <h2 className="text-xl font-bold mb-1">Connect your platform</h2>
            <p className="text-sm text-zinc-500 mb-7">Select the primary platform you want to monetize</p>

            <div className="flex flex-col gap-3 mb-6">
              {PLATFORMS.map(p => (
                <div
                  key={p.key}
                  className={`flex items-center gap-3 border-2 rounded-2xl px-5 py-4 cursor-pointer transition-all
                    ${platform === p.key
                      ? 'border-zinc-900 bg-zinc-900 text-white'
                      : 'border-zinc-200 hover:border-zinc-400'}`}
                  onClick={() => setPlatform(p.key)}
                >
                  <span className="text-xl">{p.icon}</span>
                  <span className="font-medium">{p.key}</span>
                  {platform === p.key && <span className="ml-auto">✓</span>}
                </div>
              ))}
            </div>

            <div className="mb-6">
              <label className="label">Account URL</label>
              <input
                className="input"
                type="url"
                placeholder="https://instagram.com/username"
                value={accountUrl}
                onChange={e => setAccountUrl(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <button className="btn btn-secondary btn-md flex-1" onClick={prevStep}>← Back</button>
              <button className="btn btn-primary btn-md flex-1" disabled={!platform} onClick={nextStep}>
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 2 (blogger): Shaxsiy ma'lumotlar ── */}
        {step === 2 && role === 'blogger' && (
          <form onSubmit={blgForm.handleSubmit(finishRegister)}>
            <p className="text-xs text-zinc-400 mb-2">STEP 2 OF 2</p>
            <h2 className="text-xl font-bold mb-1">Your profile details</h2>
            <p className="text-sm text-zinc-500 mb-6">Complete your creator profile</p>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">First Name</label>
                <input className="input" placeholder="Aziza" {...blgForm.register('firstName', { required: true })} />
              </div>
              <div>
                <label className="label">Last Name</label>
                <input className="input" placeholder="Karimova" {...blgForm.register('lastName', { required: true })} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <label className="label">Username</label>
                <input className="input" placeholder="@username" {...blgForm.register('username', { required: true })} />
              </div>
              <div>
                <label className="label">Followers</label>
                <input className="input" type="number" placeholder="50000" {...blgForm.register('followers', { required: true })} />
              </div>
            </div>

            <div className="mt-3">
              <label className="label">Email</label>
              <input className="input" type="email" placeholder="email@example.com" {...blgForm.register('email', { required: true })} />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <label className="label">Phone</label>
                <input className="input" type="tel" placeholder="+998 90 ..." {...blgForm.register('phone')} />
              </div>
              <div>
                <label className="label">Password</label>
                <input className="input" type="password" placeholder="••••••••" {...blgForm.register('password', { required: true })} />
              </div>
            </div>

            <div className="mt-3">
              <label className="label">Audience description</label>
              <textarea
                className="input"
                rows={2}
                placeholder="Asosan kimlar kuzatadi? (yosh, qiziqishlar...)"
                {...blgForm.register('audienceInfo')}
              />
            </div>

            <div className="flex gap-2 mt-5">
              <button type="button" className="btn btn-secondary btn-md flex-1" onClick={prevStep}>← Back</button>
              <button type="submit" className="btn btn-primary btn-md flex-1">Create account →</button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
