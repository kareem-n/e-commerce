import { AiOutlineCaretDown } from "react-icons/ai";
import { BiHomeAlt, BiSolidHot } from "react-icons/bi";
import { Link } from "react-router-dom"
import { setSideBarToggleState } from "../../redux/slices/GlobalStatues";
import { useDispatch, useSelector } from "react-redux";

function NavLinks() {

    const { sideBarToggleState } = useSelector(state => state.global)

    const dispatch = useDispatch();

    const handleNavClick = (e) => {

        Array.from(e.target.parentElement.parentElement.children)
            .map(item => {
                item.classList.remove("active");
            })

        e.target.parentElement.classList.add("active");
        dispatch(setSideBarToggleState(false));
    }


    return (
        <ul
            className="flex flex-col md:flex-row p-2 gap-y-3 md:gap-y-0 md:gap-x-3 navLinks">
            <li
                onClick={handleNavClick}
                className={` ${sideBarToggleState ? ' text-white ' : ' theme-text-color '} active border theme-border-color  rounded-md`}>
                <Link
                    className="flex items-center px-5 py-1">
                    <BiHomeAlt className="mr-1" />
                    Home
                </Link>
            </li>
            <li
                onClick={handleNavClick}
                className={` ${sideBarToggleState ? ' text-white border-white' : ' theme-text-color theme-border-color'}  border   rounded-md`}>
                <Link
                    className="flex items-center px-5 py-1">
                    <BiSolidHot className="mr-1" />
                    Hot sales
                </Link>
            </li>
            <li
                onClick={handleNavClick}
                className={` ${sideBarToggleState ? ' text-white border-white' : ' theme-text-color theme-border-color'}  border   rounded-md`}>
                <Link
                    className="flex items-center px-5 py-1">
                    <AiOutlineCaretDown className="mr-2" />
                    Category
                </Link>
            </li>




        </ul>
    )
}

export default NavLinks