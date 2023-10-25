import { Link } from "react-router-dom";
import { AiFillCloseSquare, AiOutlineLeft, AiOutlineShoppingCart } from 'react-icons/ai'
import { BiMenuAltLeft, BiSearchAlt } from 'react-icons/bi';
import NavLinks from './NavLinks';
import { useDispatch, useSelector } from "react-redux";
import { setSearchToggle, setSideBarToggleState } from "../../redux/slices/GlobalStatues";
import Search from "./Search";
import { MdFavoriteBorder } from 'react-icons/md';

function NavBar() {

  const { sideBarToggleState, searchToggle } = useSelector(state => state.global);
  console.log(searchToggle);
  const dispatch = useDispatch();

  return <>
    {/* 
      ---- navbar is fixed with the top layer all
      ---- 
   */}
    <nav
      className="bg-white fixed z-50 w-full px-5 md:px-10 py-2"
    >
      <div className="flex items-center">
        {/* 
          logo

        */}

        {
          sideBarToggleState ?
            // nav links mobile close icon
            (<div className="flex-grow theme-text-color">
              <AiFillCloseSquare
                onClick={() => dispatch(setSideBarToggleState(false))}
                size={30}
              />
            </div>) :
            // searchBar mobile back icon
            searchToggle === true ?
              (<div className={`flex-grow ${searchToggle && 'text-white'} relative z-50`}>
                <AiOutlineLeft onClick={() => dispatch(setSearchToggle(false))} size={30} className="cursor-pointer" />
              </div>) :
              // default navbar logo + mobile menu list
              (<div
                className="theme-text-color flex items-center md:block flex-grow md:flex-grow-0"
              >
                <BiMenuAltLeft onClick={() => dispatch(setSideBarToggleState(!sideBarToggleState))} className="mr-1 md:hidden cursor-pointer" size={29} />
                <Link className="text-2xl uppercase font-bold">
                  tagger
                </Link>
              </div>)
        }

        {/* search field */}
        <div className="hidden md:block ml-5">
          <NavLinks />
        </div>
        {
          searchToggle ?
            <div
              onClick={(e) => {
                if (e.target.classList.contains("bg-opacity-70")) {
                  dispatch(setSearchToggle(false))
                }
              }}
              className="bg-black bg-opacity-70 flex items-start fixed z-40 inset-0 mt-0"
            >
              <Search searchToggle={searchToggle} />
            </div> : <div className="hidden md:block flex-grow">
              <Search />
            </div>
        }


        {
          sideBarToggleState && <div
            onClick={(e) => {
              if (e.target.classList.contains("bg-opacity-70")) {
                dispatch(setSideBarToggleState(false))
              }
            }}
            className="fixed z-50 bg-black bg-opacity-70 backdrop-blur-sm top-14 md:hidden inset-0">
            <NavLinks />
          </div>
        }


        <div className="flex items-center gap-x-2">
          <BiSearchAlt onClick={() => dispatch(setSearchToggle(true))} className="theme-text-color cursor-pointer md:hidden" size={30} />
          <div className=" relative">
            <MdFavoriteBorder size={27} className="theme-text-color cursor-pointer" />
            <span className="absolute -top-1 right-0 rounded-full  bg-white theme-text-color">0</span>
          </div>
          <div className="relative">
            <AiOutlineShoppingCart size={27} className="theme-text-color cursor-pointer" />
            <span className="absolute -top-1 right-0 rounded-full bg-white theme-text-color">0</span>
          </div>
          <Link to={'/login'} className="theme-bg-color border text-white px-4 py-2 rounded-lg">Login</Link>
          <button className="border theme-border-color theme-text-color rounded-lg px-4 py-2">Register</button>
        </div>
      </div>

    </nav>
  </>
}

export default NavBar