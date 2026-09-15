import {createContext,useContext,useEffect,useMemo,useState} from 'react'
const AppContext=createContext(null)
export function AppProvider({children}){const [dark,setDark]=useState(localStorage.getItem('learnflow-theme')==='dark');const [toast,setToast]=useState(null);useEffect(()=>{document.documentElement.classList.toggle('dark',dark);localStorage.setItem('learnflow-theme',dark?'dark':'light')},[dark]);const notify=(message,type='success')=>{setToast({message,type});setTimeout(()=>setToast(null),3000)};const value=useMemo(()=>({dark,setDark,notify}),[dark]);return <AppContext.Provider value={value}>{children}{toast&&<div className={`toast toast-${toast.type}`}>{toast.message}</div>}</AppContext.Provider>}
export const useApp=()=>useContext(AppContext)
