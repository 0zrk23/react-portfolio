import "./layout.scss"
import { Home } from "../Home/Home";
import { Work } from "../Work/Work";



// const works = ['','','','','','']

export function Layout(){
    // console.log(workData)
    return (<div className='layout'>
        <Home/>
        <Work/>
    </div>)
}