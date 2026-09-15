import {createContext,useContext,useMemo,useState} from 'react'
import {authService} from '../services/authService'
const AuthContext=createContext(null)
export function AuthProvider({children}){const [user,setUser]=useState(authService.getCurrentUser()); const login=async(...a)=>{const u=await authService.login(...a);setUser(u);return u}; const logout=async()=>{await authService.logout();setUser(null)}; const value=useMemo(()=>({user,login,logout}),[user]); return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>}
export const useAuth=()=>useContext(AuthContext)
