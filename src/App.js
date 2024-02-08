import { useDispatch, useSelector } from "react-redux"
import { fetchTodos } from "./redux/slice/todo"


const App=()=>{
  const dispatch=useDispatch()
  const state=useSelector((state)=>state)
  console.log(state,"boi")
  return(
    <>
      <button onClick={(e)=>dispatch(fetchTodos())} >Fetch TODOS</button>
    </>
  )
}

export default App