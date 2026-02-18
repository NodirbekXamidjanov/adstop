// Avatar komponenti — foydalanuvchi initials bilan

interface AvatarProps {
  initials: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-13 h-13 text-base',
}

export default function Avatar({ initials, size = 'md', className = '' }: AvatarProps) {
  return (
    <div
      className={`rounded-full bg-zinc-100 flex items-center justify-center
                  font-semibold text-zinc-600 flex-shrink-0
                  ${sizeMap[size]} ${className}`}
    >
      {initials}
    </div>
  )
}
