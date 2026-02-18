interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ size = 'md' }: LogoProps) {
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg'
  const boxSize  = size === 'sm' ? 'text-sm px-2 py-0.5' : 'text-sm px-2.5 py-1'

  return (
    <div className={`flex items-center gap-2 font-bold ${textSize} text-zinc-900`}>
      <span className={`bg-zinc-900 text-white rounded-lg ${boxSize}`}>Ads</span>
      Top
    </div>
  )
}