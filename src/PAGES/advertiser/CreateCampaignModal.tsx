// Kampaniya yaratish modali — 3 ta wizard step
// Step 0: Details (nom + product type)
// Step 1: Budget + Platform
// Step 2: Goals & Targeting

import { useState } from 'react'
import type { CreateCampaignForm } from '../../types'
import { Clapperboard, Globe, Megaphone, ShoppingCart, Smartphone, Store } from 'lucide-react'

interface Props {
  onClose: () => void
  onCreated: (name: string) => void
}

const PRODUCT_TYPES = [
  { key: 'Website', icon: <Globe />, sub: 'Drive traffic to site' },
  { key: 'Mobile App', icon: <Smartphone />, sub: 'Increase app installs' },
  { key: 'Social Profile', icon: <Megaphone />, sub: 'Grow your audience' },
  { key: 'Physical Store', icon: <Store />, sub: 'Foot traffic' },
]

const GOALS = [
  { key: 'Brand Awareness', icon: <Megaphone /> },
  { key: 'Drive Sales', icon: <ShoppingCart /> },
  { key: 'Content Creation', icon: <Clapperboard /> },
]

const KEYWORDS = ['Fashion', 'Beauty', 'Tech', 'Food', 'Fitness', 'Lifestyle', 'Gaming', 'Travel']
const BUDGET_PRESETS = ['500', '1000', '2500', '5000']

const TABS = ['Details', 'Budget', 'Goals & Targeting']

const initialForm: CreateCampaignForm = {
  name: '', productType: 'Website',
  goal: '', platform: 'Instagram',
  budget: '', targetCountry: 'Uzbekistan',
  ageMin: '18', ageMax: '34',
  gender: 'All Genders', keywords: [],
}

export default function CreateCampaignModal({ onClose, onCreated }: Props) {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<CreateCampaignForm>(initialForm)

  // Generic field updater
  function upd<K extends keyof CreateCampaignForm>(key: K, value: CreateCampaignForm[K]) {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  // Keyword toggle qilish
  function toggleKeyword(kw: string) {
    setForm(prev => ({
      ...prev,
      keywords: prev.keywords.includes(kw)
        ? prev.keywords.filter(k => k !== kw)
        : [...prev.keywords, kw],
    }))
  }

  function handleCreate() {
    // Backend tayyor bo'lganda:
    //   await axios.post('/api/campaigns', form)
    onCreated(form.name || 'Yangi kampaniya')
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6
                 bg-black/35 backdrop-blur-sm"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl p-7 w-full max-w-[560px] max-h-[88vh]
                      overflow-y-auto animate-[fadeIn_0.2s_ease]">

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold">
              {step === 0 ? 'What are you promoting?'
                : step === 1 ? 'Set your budget'
                  : 'Goals & Targeting'}
            </h3>
            <p className="text-sm text-zinc-500 mt-0.5">
              {step === 0 ? "Let's start with the basics of your campaign."
                : step === 1 ? 'Define how much you want to spend.'
                  : "We'll find the right creators for you."}
            </p>
          </div>
          <button
            className="w-8 h-8 rounded-lg bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-sm flex-shrink-0"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Wizard tabs */}
        <div className="flex border-b border-zinc-100 mb-6">
          {TABS.map((tab, i) => (
            <div
              key={tab}
              className={`px-4 py-2.5 text-xs font-medium border-b-2 -mb-px transition-colors
                ${i === step
                  ? 'text-zinc-900 border-zinc-900'
                  : i < step
                    ? 'text-zinc-400 border-transparent'
                    : 'text-zinc-300 border-transparent'}`}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* ── STEP 0: Campaign name + product type ── */}
        {step === 0 && (
          <div>
            <div className="mb-5">
              <label className="label">Campaign Name</label>
              <input
                className="input"
                placeholder="New Campaign #024"
                value={form.name}
                onChange={e => upd('name', e.target.value)}
              />
            </div>
            <label className="label mb-3">Product Type</label>
            <div className="grid grid-cols-2 gap-3">
              {PRODUCT_TYPES.map(pt => (
                <div
                  key={pt.key}
                  className={`flex items-center gap-3 border-2 rounded-xl p-4 cursor-pointer transition-all relative
                    ${form.productType === pt.key
                      ? 'border-neutral-900 bg-neutral-50'
                      : 'border-neutral-200 hover:border-neutral-400'
                    }`}
                  onClick={() => upd('productType', pt.key)}
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-xl">
                    {pt.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-neutral-900">{pt.key}</div>
                    <div className="text-xs text-neutral-400 mt-0.5">{pt.sub}</div>
                  </div>

                  {/* Check badge */}
                  {form.productType === pt.key && (
                    <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── STEP 1: Budget ── */}
        {step === 1 && (
          <div>
            <p className="text-sm text-zinc-500 text-center mb-5">Kampaniyangiz uchun umumiy byudjet</p>

            {/* Budget input */}
            <div className="relative max-w-[200px] mx-auto mb-4">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-lg text-zinc-400">$</span>
              <input
                className="input text-center text-2xl font-bold pl-9 h-14"
                type="number"
                placeholder="0"
                value={form.budget}
                onChange={e => upd('budget', e.target.value)}
              />
            </div>

            {/* Preset tugmalar */}
            <div className="flex gap-2 justify-center mb-6 flex-wrap">
              {BUDGET_PRESETS.map(v => (
                <button
                  key={v}
                  className={`btn btn-sm ${form.budget === v ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => upd('budget', v)}
                >
                  ${v}
                </button>
              ))}
            </div>

            {/* Platform */}
            <div>
              <label className="label">Platform</label>
              <div className="flex gap-2 flex-wrap">
                {['Instagram', 'TikTok', 'YouTube', 'All'].map(p => (
                  <button
                    key={p}
                    className={`btn btn-sm ${form.platform === p ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => upd('platform', p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── STEP 2: Goals & Targeting ── */}
        {step === 2 && (
          <div>
            <label className="label mb-3">What's the main goal?</label>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {GOALS.map(g => (
                <div
                  key={g.key}
                  className={`flex items-center gap-3 border-2 rounded-xl p-3 cursor-pointer transition-all relative
                    ${form.goal === g.key
                      ? 'border-neutral-900 bg-neutral-50'
                      : 'border-neutral-200 hover:border-neutral-400'
                    }`}
                  onClick={() => upd('goal', g.key)}
                >
                  {/* Icon */}
                  <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-lg">
                    {g.icon}
                  </div>

                  {/* Text */}
                  <div className="text-xs font-bold text-neutral-900 leading-tight">{g.key}</div>

                  {/* Check badge */}
                  {form.goal === g.key && (
                    <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-neutral-900 flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="divider" />

            <label className="label">Define your audience</label>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <label className="label">Target Country</label>
                <select className="input" value={form.targetCountry} onChange={e => upd('targetCountry', e.target.value)}>
                  <option>Uzbekistan</option>
                  <option>Kazakhstan</option>
                  <option>Russia</option>
                  <option>Global</option>
                </select>
              </div>
              <div>
                <label className="label">Gender</label>
                <select className="input" value={form.gender} onChange={e => upd('gender', e.target.value)}>
                  <option>All Genders</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <label className="label">Age Min</label>
                <input className="input" type="number" value={form.ageMin} onChange={e => upd('ageMin', e.target.value)} />
              </div>
              <div>
                <label className="label">Age Max</label>
                <input className="input" type="number" value={form.ageMax} onChange={e => upd('ageMax', e.target.value)} />
              </div>
            </div>

            <div className="mt-3">
              <label className="label">Niche & Interests</label>
              <div className="flex gap-2 flex-wrap mt-2">
                {KEYWORDS.map(kw => (
                  <button
                    key={kw}
                    className={`btn btn-sm ${form.keywords.includes(kw) ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => toggleKeyword(kw)}
                  >
                    {kw}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Navigation footer */}
        <div className="flex items-center justify-between mt-6 pt-5 border-t border-zinc-100">
          <div>
            {step > 0 && (
              <button className="btn btn-secondary btn-md" onClick={() => setStep(s => s - 1)}>
                ← Back
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <button className="btn btn-secondary btn-md" onClick={onClose}>Save Draft</button>
            {step < 2
              ? (
                <button className="btn btn-primary btn-md" onClick={() => setStep(s => s + 1)}>
                  Next Step →
                </button>
              ) : (
                <button
                  className="btn btn-primary btn-md"
                  disabled={!form.goal}
                  onClick={handleCreate}
                >
                  ✓ Create Campaign
                </button>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
