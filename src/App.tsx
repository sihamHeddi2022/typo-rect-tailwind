import Advanced from "./components/Advanced"
import Children from "./components/Children"
import ChildrenReact from "./components/ChildrenReact"
import Simple from "./components/Simple"


function App() {
  const persons = [{
    name:"djd djdj"
  },
  {
    name:"keejejrejerjjerj"
  }
]
  return (
    <>
     <Simple message="dkkddkdkkd" category="info"/>
       <Advanced persons={persons} />
       <Children>
         jejdjjdsjds djdsjjsd
       </Children>
       <ChildrenReact>
        <p>jsjjsjsj</p>
       </ChildrenReact>
    </>
  )
}

export default App
