import './Navbar.css'
import SearchIcon from '../assets/searchIcon.png'
import notIcon from '../assets/notificatinIcon.png'
import ShoppingIcon from '../assets/Shopping.png'
import LoginIcon from '../assets/LogIn.png'
const Navbar = () => {
    return(<>
<div className="flex justify-between items-center bg-[#EBD7BF] h-[76px] w-full px-6 border border-[#EBD7BF] opacity-100 fixed top-0 z-10 ">
<img alt="" src="" className="h-12"/>
<ul className="flex space-x-8">
    <li><a href=""><h1 className="text-[24px] font-semibold text-gray-800 hover:text-gray-600  ">Home</h1></a></li>
    <li><a href=""><h1 className=" text-[24px] font-semibold text-gray-800 hover:text-gray-600 ">shop</h1></a></li>
    <li><a href=""><h1 className=" text-[24px] font-semibold text-gray-800 hover:text-gray-600  ">Contact us</h1></a></li>
</ul>
<ul className="flex space-x-6">
    <li><a href=""><img className="w-8 h-8" src={SearchIcon} alt=""/></a></li>
    <li><a href=""><img className="w-8 h-8" src={notIcon} alt=""/></a></li>
    <li><img className="w-8 h-8" src={ShoppingIcon} alt=""/></li>
    <li><a href=""><img className="w-8 h-8" src={LoginIcon} alt=""/></a></li>
</ul>
</div>
</>)
};
export default Navbar;