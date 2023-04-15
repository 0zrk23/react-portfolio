import "./layout.scss"
import { Home } from "../Home/Home";
import { Work } from "../Work/Work";
import { About } from "../About/About";

export function Layout(){
    // console.log(workData)
    return (<div className='layout'>
        <Home/>
        <Work/>
        <About/>
    </div>)
}