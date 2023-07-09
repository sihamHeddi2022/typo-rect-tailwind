

type ArrayOfObjects = {
  persons:{
     name:string
  }[]
}



export default function Advanced(props:ArrayOfObjects) {
  return (
    <div>
        {
            props.persons.map(p=><p>{p.name}</p>)
        }
    </div>
  )
}
