"use client"

export function Grain() {
  return (
    <div 
      className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay"
      style={{
        backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
        backgroundSize: '200px 200px',
      }}
    />
  )
}
