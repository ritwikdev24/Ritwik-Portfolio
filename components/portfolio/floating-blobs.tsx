"use client"

export function FloatingBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Floating blob 1 */}
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"
      />
      
      {/* Floating blob 2 */}
      <div
        className="absolute top-1/3 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed"
      />
      
      {/* Floating blob 3 */}
      <div
        className="absolute bottom-20 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      
      {/* Floating blob 4 */}
      <div
        className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/8 rounded-full blur-3xl animate-float-delayed"
        style={{ animationDelay: "4s" }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  )
}
