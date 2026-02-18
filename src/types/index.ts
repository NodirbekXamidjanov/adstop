// Foydalanuvchi rollari
export type Role = 'advertiser' | 'blogger'

// Auth context uchun user tipi
export interface User {
  id: string
  role: Role
  firstName: string
  lastName: string
  email: string
  // Advertiser uchun
  companyName?: string
  companyCategory?: string
  // Blogger uchun
  platform?: string
  accountUrl?: string
  followers?: number
  username?: string
}

// Blogger (AI tavsiya / qidiruvda ko'rinadigan)
export interface Blogger {
  id: number
  name: string
  initials: string
  handle: string
  platform: 'Instagram' | 'TikTok' | 'YouTube'
  followers: string
  engagement: string
  niche: string
  matchScore: number
  country: string
  bio: string
}

// Kampaniya
export interface Campaign {
  id: number
  name: string
  emoji: string
  budget: string
  status: 'active' | 'draft' | 'completed'
  bloggersCount: number
  reach: string
  goal: string
  niche: string
  platform: string
  createdAt: string
}

// Taklif (offer) - reklama beruvchidan bloggerga
export interface Offer {
  id: number
  title: string
  brand: string
  brandType: string
  emoji: string
  budget: string
  platform: string
  description: string
  requirements: string[]
  deadline: string
  status: 'new' | 'accepted' | 'declined' | 'completed'
}

// To'lov
export interface Payment {
  id: string
  campaign: string
  counterpart: string   // blogger nomi yoki brand nomi
  amount: string
  date: string
  status: 'paid' | 'pending' | 'failed'
}

// Kampaniya yaratish formasi uchun
export interface CreateCampaignForm {
  name: string
  productType: string
  goal: string
  platform: string
  budget: string
  targetCountry: string
  ageMin: string
  ageMax: string
  gender: string
  keywords: string[]
}
