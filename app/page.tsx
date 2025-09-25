'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users')
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  const addUser = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      })
      if (response.ok) {
        setName('')
        setEmail('')
        fetchUsers()
      }
    } catch (error) {
      console.error('Error adding user:', error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Next.js Boilerplate</h1>

      <div style={{ marginBottom: '2rem' }}>
        <h2>Add User</h2>
        <form onSubmit={addUser} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#007acc', color: 'white', border: 'none', borderRadius: '4px' }}>
            Add User
          </button>
        </form>
      </div>

      <div>
        <h2>Users</h2>
        {users.length === 0 ? (
          <p>No users found. Add some users above!</p>
        ) : (
          <ul>
            {users.map((user: any) => (
              <li key={user.id} style={{ marginBottom: '0.5rem' }}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}