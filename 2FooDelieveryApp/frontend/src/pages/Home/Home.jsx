import React ,{useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/ExploreMenu/Exploremenu';
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay';
import Appdownlod from '../../components/Appdownload/Appdownlod';


function Home() {

  const [category, setcategory] = useState('All')
  return (
    <div>
      <Header />
      <Exploremenu  category={category} setcategory={setcategory}/>
      <Fooddisplay category={category} />
      <Appdownlod />
    </div>
  )
}

export default Home