import { useEffect, useState } from 'react'

export default function App() {
  const [msg, setMsg] = useState('…')

  useEffect(() => {
    fetch('/api/health')
      .then(r => r.json())
      .then((d) => setMsg(d.message))
      .catch(() => setMsg('Backend not reachable'))
  }, [])

  return (
    <div style={{ fontFamily: 'system-ui', padding: 24 }}>
      <h1>nexo</h1>
      <p>Backend says: {msg}</p>
    </div>
  )
}