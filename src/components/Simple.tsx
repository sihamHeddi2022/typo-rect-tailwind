
type TYPE = "info" | "warning" | "error"


type HelloProps = {
    message:string,
    category: TYPE,
    counter?:number
}

export default function Simple(props:HelloProps) {
  const {category,counter=0} = props 
   if (category=="info") {
     return <><p> counter : {counter} here is an info {props.message}</p></>
   } else {
    return <>{props.message}</>

   }

}
