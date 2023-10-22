import { useRef } from "react";
import { Link } from "react-router-dom"

function NavLinks() {

    const LinksContainer = useRef();


    const handleNavClick = (e) => {

    }


    return (
        <ul
            ref={LinksContainer}
            className="flex p-2 gap-x-3">
            <li
                onClick={handleNavClick}
                className="active bg-blue-500 border text-white rounded-full">
                <Link
                    className="block px-5 py-1">
                    Category
                </Link>
            </li>
            <li
                onClick={handleNavClick}
                className="border border-blue-500 text-blue-500 rounded-full">
                <Link
                    className="block px-5 py-1">
                    Category
                </Link>
            </li>
            <li
                onClick={handleNavClick}
                className="border border-blue-500 text-blue-500 rounded-full">
                <Link
                    className="block px-5 py-1">
                    Category
                </Link>
            </li>
            <li
                onClick={handleNavClick}
                className="border border-blue-500 text-blue-500  rounded-full">
                <Link
                    className="block px-5 py-1">
                    Category
                </Link>
            </li>



        </ul>
    )
}

export default NavLinks