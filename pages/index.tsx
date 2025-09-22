import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to newth.ai
    window.location.href = 'https://newth.ai'
  }, [])

  return (
    <div style={{
      background: '#000',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: 'monospace'
    }}>
      <div style={{ textAlign: 'center' }}>
        <p>Redirecting to newth.ai...</p>
      </div>
    </div>
  )
}
