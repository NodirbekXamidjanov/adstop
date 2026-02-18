// useAuth hook — foydalanuvchi holati va auth funksiyalarini boshqaradi
// Backend tayyor bo'lganda localStorage o'rniga API token ishlatiladi

import { useState } from 'react'
import type { User, Role } from '../types'

// Demo uchun default userlar
const DEMO_ADVERTISER: User = {
  id: 'adv-1',
  role: 'advertiser',
  firstName: 'Alex',
  lastName: 'Valiyev',
  email: 'alex@company.com',
  companyName: 'TechCorp',
  companyCategory: 'Electronics',
}

const DEMO_BLOGGER: User = {
  id: 'blg-1',
  role: 'blogger',
  firstName: 'Aziza',
  lastName: 'Karimova',
  email: 'aziza@gmail.com',
  platform: 'Instagram',
  accountUrl: 'https://instagram.com/azizabeauty',
  followers: 248000,
  username: '@azizabeauty',
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)

  // Login funksiyasi
  // Backend tayyor bo'lganda:
  //   const { data } = await axios.post('/api/auth/login', { email, password })
  //   localStorage.setItem('token', data.token)
  //   setUser(data.user)
  function login(role: Role) {
    setUser(role === 'blogger' ? DEMO_BLOGGER : DEMO_ADVERTISER)
  }

  // Register funksiyasi
  // Backend tayyor bo'lganda:
  //   const { data } = await axios.post('/api/auth/register', formData)
  //   setUser(data.user)
  function register(role: Role) {
    setUser(role === 'blogger' ? DEMO_BLOGGER : DEMO_ADVERTISER)
  }

  function logout() {
    // localStorage.removeItem('token')
    setUser(null)
  }

  return { user, login, register, logout }
}
