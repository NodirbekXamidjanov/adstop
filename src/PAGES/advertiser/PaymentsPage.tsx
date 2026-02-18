import StatCard from '../../components/ui/StatCard'
import { mockAdvertiserPayments } from '../../data/mock'

export default function AdvertiserPaymentsPage() {
  return (
    <div>
      <div className="mb-7">
        <h2 className="text-xl font-bold">Payments</h2>
        <p className="text-sm text-zinc-500 mt-0.5">To'lovlar tarixi va holati</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-7">
        <StatCard label="Total Spent"  value="$45,200" sub="Barcha kampaniyalar" />
        <StatCard label="This Month"   value="$2,800"  sub="Fevral 2026"         />
        <StatCard label="Pending"      value="$1,100"  sub="Kutilmoqda"           />
      </div>

      <div className="card">
        <h3 className="font-semibold mb-4">Transaction History</h3>
        {mockAdvertiserPayments.map((p, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-3.5 border-b border-zinc-100 last:border-none"
          >
            <div>
              <div className="font-medium text-sm">{p.campaign}</div>
              <div className="text-xs text-zinc-400 mt-0.5">{p.counterpart} · {p.date}</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold">{p.amount}</span>
              <span className={`badge ${p.status === 'paid' ? 'badge-green' : 'badge-gray'}`}>
                {p.status === 'paid' ? '✓ Paid' : 'Pending'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
