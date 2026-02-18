// Dashboard statistika kartochkasi

interface StatCardProps {
  label: string
  value: string
  sub?: string
  icon?: string
}

export default function StatCard({ label, value, sub, icon }: StatCardProps) {
  return (
    <div className="card">
      <div className="flex items-center justify-between text-sm text-zinc-500 mb-2">
        <span>{label}</span>
        {icon && <span>{icon}</span>}
      </div>
      <div className="text-2xl font-bold tracking-tight text-zinc-900">{value}</div>
      {sub && <div className="text-xs text-zinc-400 mt-1">{sub}</div>}
    </div>
  )
}
