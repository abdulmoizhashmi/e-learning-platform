import { describe, expect, it } from 'vitest'
import { demoUsers, getDemoUserByEmail, roleHome } from '../src/services/authService.js'

describe('demo authentication service', () => {
  it('returns the correct demo user by email', () => {
    expect(getDemoUserByEmail('teacher@example.com')?.role).toBe('teacher')
  })

  it('maps roles to protected home routes', () => {
    expect(roleHome('admin')).toBe('/admin/dashboard')
    expect(roleHome('student')).toBe('/student/dashboard')
  })

  it('ships all three development demo accounts', () => {
    expect(demoUsers).toHaveLength(3)
  })
})
