import {teachers,students,classes,lectures,summaries,notifications,byId} from '../data/mockData'
const clone=(x)=>JSON.parse(JSON.stringify(x))
const service=(items)=>({ list:async()=>clone(items), get:async(id)=>clone(byId(items,id)), create:async(payload)=>({ ...payload,id:`mock-${Date.now()}`}), update:async(id,payload)=>({ ...byId(items,id),...payload,id }), remove:async(id)=>({id,success:true}) })
export const teacherService=service(teachers)
export const studentService=service(students)
export const classService=service(classes)
export const lectureService=service(lectures)
export const summaryService={...service(summaries), getByLecture:async(id)=>clone(summaries.find(s=>s.lectureId===id)), download:async(id)=>clone(byId(summaries,id))}
export const notificationService={list:async()=>clone(notifications),markRead:async(id)=>({id,read:true})}
export const zoomService={createMeeting:async(lecture)=>({id:`zoom-${lecture.id}`,joinUrl:'https://zoom.us/j/demo',status:'Ready'}),startMeeting:async(id)=>({id,status:'Live'}),endMeeting:async(id)=>({id,status:'Processing'}),getRecording:async(id)=>({id,url:'#'})}
export const analyticsService={getOverview:async()=>({lectures:[22,28,31,36,42,38,49],enrollment:[64,72,81,96,108,121],teacherActivity:[18,23,19,28,25]})}
