// import { Typography } from '@mui/material';
import WorkCard from '../../Components/WorkCard/WorkCard';
import workData from './../../data';
import './work.scss'


export const Work = () => {
  return (
      <div className='work-container' id='Work'>
            {workData.map((work,index) => (<WorkCard key={index} work={work}/>))}
      </div>
  )
}
