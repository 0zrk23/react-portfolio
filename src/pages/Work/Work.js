import WorkCard from '../../Components/WorkCard/WorkCard';
import workData from './../../data';
import './work.scss'

export const Work = () => {
  return (
    <div className='work-container'>
            {workData.map((work,index) => (<WorkCard key={index} work={work}/>))}
    </div>
  )
}
