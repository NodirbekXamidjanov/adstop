// ─────────────────────────────────────────────────────
// MOCK DATA
// Backend tayyor bo'lganda bu yerdan API chaqiruvlarga
// o'tkaziladi. Masalan:
//   const { data } = await axios.get('/api/bloggers')
// ─────────────────────────────────────────────────────

import type { Blogger, Campaign, Offer, Payment } from '../types'

export const mockBloggers: Blogger[] = [
  {
    id: 1,
    name: 'Zara Karimova',
    initials: 'ZK',
    handle: '@zarabeauty',
    platform: 'Instagram',
    followers: '248K',
    engagement: '5.2%',
    niche: 'Beauty',
    matchScore: 97,
    country: "O'zbekiston",
    bio: "Beauty va lifestyle kontenti. Asosiy auditoriya: 18-28 yoshdagi qizlar.",
  },
  {
    id: 2,
    name: 'Marcus Chen',
    initials: 'MC',
    handle: '@marcustech',
    platform: 'YouTube',
    followers: '185K',
    engagement: '8.1%',
    niche: 'Tech',
    matchScore: 91,
    country: "Qozog'iston",
    bio: 'Tech review va gadget unboxing. Yoshlar va texnologiyaga qiziquvchilar.',
  },
  {
    id: 3,
    name: 'Fiona Nazarova',
    initials: 'FN',
    handle: '@fionalife',
    platform: 'TikTok',
    followers: '520K',
    engagement: '12.4%',
    niche: 'Lifestyle',
    matchScore: 88,
    country: "O'zbekiston",
    bio: 'Kundalik hayot, travel va food. Gen Z auditoriyasi.',
  },
  {
    id: 4,
    name: 'David Kim',
    initials: 'DK',
    handle: '@davidfood',
    platform: 'Instagram',
    followers: '93K',
    engagement: '6.5%',
    niche: 'Food',
    matchScore: 82,
    country: "O'zbekiston",
    bio: 'Restoran sharhlari va retseptlar. Oziq-ovqat sanoatiga qiziqqanlar.',
  },
  {
    id: 5,
    name: 'Jessica Lee',
    initials: 'JL',
    handle: '@jessfit',
    platform: 'Instagram',
    followers: '312K',
    engagement: '5.8%',
    niche: 'Fitness',
    matchScore: 79,
    country: 'Rossiya',
    bio: "Fitness va sog'lom turmush tarzi. Asosan ayollar auditoriyasi.",
  },
  {
    id: 6,
    name: 'Alex Mirzayev',
    initials: 'AM',
    handle: '@alexstyle',
    platform: 'TikTok',
    followers: '90K',
    engagement: '7.2%',
    niche: 'Fashion',
    matchScore: 74,
    country: "O'zbekiston",
    bio: "Moda va stil bo'yicha kontentlar. 16-25 yoshdagi tomoshabinlar.",
  },
]

export const mockCampaigns: Campaign[] = [
  {
    id: 1,
    name: 'Lumina Smart Lamp',
    emoji: '💡',
    budget: '$2,500',
    status: 'active',
    bloggersCount: 3,
    reach: '540K',
    goal: 'Brand Awareness',
    niche: 'Tech',
    platform: 'Instagram',
    createdAt: '1 Feb 2026',
  },
  {
    id: 2,
    name: 'FitPro Watch Campaign',
    emoji: '⌚',
    budget: '$4,000',
    status: 'active',
    bloggersCount: 5,
    reach: '1.2M',
    goal: 'Drive Sales',
    niche: 'Fitness',
    platform: 'YouTube',
    createdAt: '5 Feb 2026',
  },
  {
    id: 3,
    name: 'EcoBottle Summer Launch',
    emoji: '💧',
    budget: '$1,200',
    status: 'draft',
    bloggersCount: 0,
    reach: '—',
    goal: 'Brand Awareness',
    niche: 'Lifestyle',
    platform: 'TikTok',
    createdAt: '10 Feb 2026',
  },
]

export const mockOffers: Offer[] = [
  {
    id: 1,
    title: 'Organic Skincare Promo',
    brand: 'NaturGlow',
    brandType: 'Beauty',
    emoji: '/image.png',
    budget: '$500',
    platform: 'Instagram',
    description:
      "Yangi organik tarkibli krem liniyasini targ'ib qilish. Mahsulot haqida fikr bildirish va unboxing video talab qilinadi. Asosiy auditoriya: 18-28 yoshdagi ayollar.",
    requirements: [
      '60 soniyalik Instagram Reel',
      '3 ta Story (mahsulot bilan)',
      '@naturglow mention qilish',
      'Bio linkda mahsulot havolasi',
    ],
    deadline: '15 Mart 2026',
    status: 'new',
  },
  {
    id: 2,
    title: 'Noise Cancelling Headphones',
    brand: 'SonicTech',
    brandType: 'Electronics',
    emoji: '/headphone.png',
    budget: '$1,200',
    platform: 'YouTube',
    description:
      "ProSound X1 quloqchinlarini review qilish. Chuqur texnik tahlil, real foydalanish tajribasi ko'rsatilishi lozim. In-depth format afzal.",
    requirements: [
      '15+ daqiqalik YouTube review',
      'Mahsulot havolasi tavsifda',
      '10 balldan kamida 8 baholash',
      '#sonictech hashtag',
    ],
    deadline: '20 Mart 2026',
    status: 'new',
  },
  {
    id: 3,
    title: 'Lumina Smart Lamp',
    brand: 'Lumina Inc',
    brandType: 'Home & Tech',
    emoji: '/tech.png',
    budget: '$450',
    platform: 'TikTok',
    description:
      "Aqlli chiroqni uy muhitida ko'rsatish. Xona bezatish va estetik muxit kontenti sifatida taqdim qilish. Aesthetic content prioritet.",
    requirements: [
      '1 ta TikTok video (30-60 sek)',
      '1 ta Instagram Reel',
      'Mahsulot havolasi profilda',
    ],
    deadline: '25 Mart 2026',
    status: 'new',
  },
]

export const mockAdvertiserPayments: Payment[] = [
  { id: '#1023', campaign: 'Lumina Smart Lamp', counterpart: 'Zara Karimova', amount: '$500', date: '5 Feb', status: 'paid' },
  { id: '#1024', campaign: 'FitPro Watch', counterpart: 'Marcus Chen', amount: '$1,200', date: '8 Feb', status: 'paid' },
  { id: '#1025', campaign: 'FitPro Watch', counterpart: 'Jessica Lee', amount: '$800', date: '12 Feb', status: 'pending' },
  { id: '#1026', campaign: 'EcoBottle Launch', counterpart: 'Alex Mirzayev', amount: '$300', date: '18 Feb', status: 'pending' },
]

export const mockBloggerPayments: Payment[] = [
  { id: '#2011', campaign: 'Organic Skincare Promo', counterpart: 'NaturGlow', amount: '$500', date: '5 Feb', status: 'paid' },
  { id: '#2012', campaign: 'Noise Cancelling Promo', counterpart: 'SonicTech', amount: '$1,200', date: '12 Feb', status: 'paid' },
  { id: '#2013', campaign: 'Lumina Smart Lamp', counterpart: 'Lumina Inc', amount: '$450', date: '18 Feb', status: 'pending' },
]
