

type Eventy = {
    onclick:(event:React.MouseEvent<HTMLBaseElement>)=>void
    input?:{
        value:string,
        onchange:(event:React.ChangeEvent<HTMLInputElement>)=>void

    },
    css:React.CSSProperties
}


function Event(props:Eventy) {
  return (
    <div>



    </div>
  )
}

export default Event