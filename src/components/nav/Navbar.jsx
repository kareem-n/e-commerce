import { Link } from "react-router-dom";
import { AiFillCloseSquare, AiOutlineLeft, AiOutlineShoppingCart } from 'react-icons/ai'
import { BiMenuAltLeft, BiSearchAlt } from 'react-icons/bi';
import NavLinks from './NavLinks';
import { useDispatch, useSelector } from "react-redux";
import { setSearchToggle, setSideBarToggleState } from "../../redux/slices/GlobalStatues";
import Toggle from "./Toggle";
import Search from "./Search";
import { MdFavoriteBorder } from 'react-icons/md';

function NavBar() {

  const { sideBarToggleState, searchToggle } = useSelector(state => state.global);
  const dispatch = useDispatch();

  return <>
    <nav
      className="bg-white fixed  w-full px-5 md:px-10 py-2"
    >
      <div className="flex items-center">
        {/* logo */}

        {
          sideBarToggleState ? <div className="flex-grow theme-text-color">
            <AiFillCloseSquare
              onClick={() => dispatch(setSideBarToggleState(false))}
              size={30}
            />
          </div> : <div className="theme-text-color flex items-center md:block flex-grow md:flex-grow-0">
            <BiMenuAltLeft onClick={() => dispatch(setSideBarToggleState(!sideBarToggleState))} className="mr-1 md:hidden cursor-pointer" size={29} />
            <Link className="text-2xl uppercase">
              tagger
            </Link>
          </div>
        }

        <div className="hidden md:block ml-5">
          <NavLinks />
        </div>


        {/* search field */}
        {
          searchToggle ? <div className="bg-gray-700 flex items-start fixed z-10 inset-0">
            <AiOutlineLeft onClick={() => dispatch(setSearchToggle(false))} size={30} className="text-white mx-2 mt-1 cursor-pointer" />
            <Search searchToggle={searchToggle} />
          </div> : <div className="hidden md:block flex-grow">
            <Search />
          </div>
        }


        <div className="flex items-center gap-x-2">
          <BiSearchAlt onClick={() => dispatch(setSearchToggle(true))} className="theme-text-color md:hidden" size={30} />
          <div className=" relative">
            <MdFavoriteBorder size={27} className="theme-text-color" />
            <span className="absolute -top-1 right-0 rounded-full bg-white theme-text-color">0</span>
          </div>
          <div className="relative">
            <AiOutlineShoppingCart size={27} className="theme-text-color" />
            <span className="absolute -top-1 right-0 rounded-full bg-white theme-text-color">0</span>
          </div>
          <Link to={'/login'} className="theme-bg-color border text-white px-4 py-2 rounded-lg">Login</Link>
          <button className="border theme-border-color theme-text-color rounded-lg px-4 py-2">Register</button>
        </div>

      </div>



      {
        sideBarToggleState && <div
          onClick={(e) => {
            if (e.target.classList.contains("bg-opacity-50")) {
              console.log(0)
              dispatch(setSideBarToggleState(false))
            }
          }}
          className="fixed bg-black bg-opacity-50 backdrop-blur-sm top-14 md:hidden inset-0">
          <NavLinks />
        </div>
      }


    </nav>
  </>
}

export default NavBar