import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function GET() {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM users ORDER BY id DESC')
    client.release()

    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json()

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    const client = await pool.connect()
    const result = await client.query(
      'INSERT INTO users (name, email, created_at) VALUES ($1, $2, NOW()) RETURNING *',
      [name, email]
    )
    client.release()

    return NextResponse.json(result.rows[0], { status: 201 })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
  }
}