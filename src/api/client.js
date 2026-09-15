import axios from 'axios'
export const apiClient=axios.create({baseURL:import.meta.env.VITE_API_BASE_URL||'/api',timeout:10000,headers:{'Content-Type':'application/json'}})
apiClient.interceptors.request.use((config)=>{const raw=localStorage.getItem('learnflow-jwt');if(raw)config.headers.Authorization=`Bearer ${raw}`;return config})
apiClient.interceptors.response.use(r=>r,e=>Promise.reject(e))
