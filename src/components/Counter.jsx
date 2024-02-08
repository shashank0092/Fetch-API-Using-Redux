import { useSelector } from "react-redux";
import {numberSelector} from "../redux/slice/NumberSlice.js"

const Counter=()=>{

    const count=useSelector(numberSelector)
    console.log(count,"this is count")
    return(
        <>
            <div>
                <h2>{count}</h2>
            </div>
        </>
    )
}

export default Counter;