


type ch = {
    children : React.ReactNode
}



export default function ChildrenReact(props:ch) {
  return (
    <div>
        {props.children}
    </div>
  )
}
