"use client"

export function FloatingBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10" />
      
      {/* Animated gradient glow blob 1 - Top left */}
      <div
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full animate-float-slow opacity-30"
        style={{
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Animated gradient glow blob 2 - Top right */}
      <div
        className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full animate-float-delayed opacity-25"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      
      {/* Animated gradient glow blob 3 - Middle left */}
      <div
        className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full animate-float opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDelay: '2s',
        }}
      />
      
      {/* Animated gradient glow blob 4 - Bottom center */}
      <div
        className="absolute -bottom-32 left-1/3 w-[550px] h-[550px] rounded-full animate-float-slow opacity-25"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          filter: 'blur(90px)',
          animationDelay: '4s',
        }}
      />
      
      {/* Animated gradient glow blob 5 - Bottom right */}
      <div
        className="absolute bottom-1/4 -right-20 w-[350px] h-[350px] rounded-full animate-float opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animationDelay: '1s',
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />
      
      {/* Soft vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, var(--background) 80%)',
          opacity: 0.4
        }}
      />
    </div>
  )
}
