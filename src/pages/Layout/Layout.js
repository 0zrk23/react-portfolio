import "./layout.scss"
import { Home } from "../Home/Home";
import { Work } from "../Work/Work";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";

export function Layout(){
    // console.log(workData)
    return (<div className='layout'>
        <Home/>
        <Work/>
        <About/>
        <Contact/>
    </div>)
}