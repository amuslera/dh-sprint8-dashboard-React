import './dashboard.css'
import TotalsData from '../../components/totalsData/TotalsData'
import LastUserData from '../../components/lastUserData/LastUserData'
import LastProductData from '../../components/lastProductData/LastProductData'


export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className='totalsDataContainer'>
        <TotalsData/>
      </div>
      <div className='lastDataContainer'>
        <LastUserData /> 
        <LastProductData/>  
      </div>
    </div>
  )
}
