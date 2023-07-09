import { useState } from 'react'

export default function State() {
   const [user,setuser]=useState<String | null>(null)

   const handle = ()=>{
      setuser("ejejdjd")
   }

  return (
    <div>
        state user {user}
       
       <button onClick={handle}>
         click me
       </button>
    
    </div>
  )
}
