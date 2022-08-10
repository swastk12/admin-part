import Sidebar from '../../components/sidebar/Sidebar'
import './single.css'
import SingPost from '../../components/singlepost/SingPost'

export default function Single() {
  return (
    <div className='single'>
       <SingPost />
      <Sidebar/>
    </div>
  )
}



