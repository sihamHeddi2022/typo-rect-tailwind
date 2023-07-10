import React,{useRef} from 'react'

export default function Ref() {
    const h = useRef<HTMLInputElement| null>(null)
    return (
    <div>
        <input type="number" ref={h} />
        <button onClick={()=> h.current?.focus()}>
            click me
        </button>
    </div>
  )
}
