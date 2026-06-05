function StatCard({ className = '', delay = '0s', label, value }) {
  return (
    <div className={`glass min-w-36 rounded-[8px] p-4 ${className}`} style={{ animation: `floatCard 4.2s ease-in-out ${delay} infinite` }}>
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-rr-muted">{label}</p>
      <p className="mt-1 font-display text-2xl uppercase text-white">{value}</p>
    </div>
  )
}

export default StatCard
