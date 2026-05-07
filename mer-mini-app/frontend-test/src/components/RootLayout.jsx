import Header from './Header'
import {Outlet} from 'react-router'
import ListOfEmps from './ListOfEmps'

function RootLayout() {
  return (
    <div>
      <Header />
      <div className='min-h-screen mx-20 p-20 bg-gray-100'>
        <Outlet />
      </div>
      {/* <ListOfEmps/> */}
    </div>
  )
}

export default RootLayout