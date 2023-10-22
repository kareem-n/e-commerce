import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai'
import NavLinks from './NavLinks';

function NavBar() {
  return <>
    <nav
      className="bg-white px-10 py-3 "
    >
      <div className="flex items-center m-0 md:mb-2">
        {/* logo */}
        <Link className="text-2xl text-blue-600">
          LOGO
        </Link>

        {/* search field */}
        <div className="mx-5 relative overflow-hidden flex-grow">
          <input
            placeholder="Wish..."
            className="py-2 w-full px-4 border bg-gray-100 border-blue-500 rounded-full outline-none placeholder:text-blue-400"
            type="text"
          />
          <div
            className="absolute m-1 top-0 bottom-0 flex items-center right-0 overflow-hidden py-2 px-6 rounded-full bg-blue-500 text-white"
          >
            <AiOutlineSearch size={22} />
          </div>
        </div>

        <div className="flex gap-x-2">
          <button className="bg-blue-500 border text-white px-4 py-1 rounded-lg">Login</button>
          <button className="border border-blue-600 text-blue-600 rounded-lg px-4 py-1">Register</button>
        </div>
      </div>
      

      <div className="hidden md:block">
        <hr />
        {/* <NavLinks /> */}
        <hr />
        <hr />
        <hr />
        <hr />
      </div>

    </nav>
  </>
}

export default NavBar