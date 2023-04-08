import { Outlet } from 'react-router-dom'
import Slider from './slider'
import Header from './header'
import Footer from './footer'

const UserLayout = () => {
    return <div>
        <Header/>
        {/* <Slider/> */}
        {/* Content */}
        <Outlet />
        <Footer/>
    </div>
}

export default UserLayout