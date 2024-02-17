import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import LeftNavMenuItems from './LeftNavMenuItems'
import { categories } from '../utils/Constant'
import { Context } from '../context/ContextAPI'




const LeftNav = () => {
  const {selectCategory,setselectCategory} = useContext(Context);
  const clickhandler = (name,type) => {
    switch (key) {
        case 'category':
            return setselectCategory(name)
            case 'home':
                return setselectCategory(name)
            case 'menu':
                return false;
    
        default:
            break;
    }
  }
  const navigate = useNavigate();
  return (
    <div className='md:block w-[240px] overflow-y-auto h-full py-20 bg-black absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all'>

     <div className="flex px-5 flex-col">
        {
            categories.map((items)=>{
               return (
                <React.Fragment>
                    <LeftNavMenuItems  
                    text={items.type === 'home'? 'Home': items.name } icon={items.icon} action={()=>{clickhandler(items.name,items.type);navigate("/");}} className={`${selectCategory==items.name ? 'bg-white/[0.15]' : ''}`}/>
                    {
                        items.divider &&  (
                            <hr  className='my-5 border-white/[0.21]'/>
                        )
                    }
                </React.Fragment>
               ); 
            })
        }
        <hr className='my-5 border-white/[0.2]'/>
        <div className='text-white/[0.5] text-[12px]'>
            Clone by: DataMind

        </div>
     </div>

    </div>
  )
}

export default LeftNav