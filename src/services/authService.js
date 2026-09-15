export const demoUsers = [
  { id: 'u-admin', name: 'Olivia Carter', email: 'admin@example.com', role: 'admin', title: 'Platform Administrator', avatar: 'OC' },
  { id: 'u-teacher', name: 'Ahmed Khan', email: 'teacher@example.com', role: 'teacher', title: 'Senior MERN Instructor', avatar: 'AK' },
  { id: 'u-student', name: 'Moiz Hashmi', email: 'student@example.com', role: 'student', title: 'MERN Batch 01 Student', avatar: 'MH' }
]
export const getDemoUserByEmail = (email) => demoUsers.find((u) => u.email.toLowerCase() === email.trim().toLowerCase())
export const roleHome = (role) => ({ admin:'/admin/dashboard', teacher:'/teacher/dashboard', student:'/student/dashboard' })[role] || '/login'
const KEY='learnflow-session'
export const authService={
  async login(email,password){ const user=getDemoUserByEmail(email); if(!user || password !== 'demo123') throw Object.assign(new Error('Invalid demo credentials'),{status:401}); localStorage.setItem(KEY,JSON.stringify(user)); return user },
  async logout(){ localStorage.removeItem(KEY) },
  getCurrentUser(){ try{return JSON.parse(localStorage.getItem(KEY))}catch{return null} }
}
