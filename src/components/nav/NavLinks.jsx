import { AiOutlineCaretDown } from "react-icons/ai";
import { BiHomeAlt, BiSolidHot } from "react-icons/bi";
import { Link } from "react-router-dom"
import { setNavbarCategoryToggle, setSideBarToggleState } from "../../redux/slices/GlobalStatues";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

function NavLinks() {

    const { sideBarToggleState, NavbarCategoryToggle } = useSelector(state => state.global)

    const dispatch = useDispatch();

    const ToggleBtn = useRef();
    const box = useRef();

    const handleNavClick = (e) => {

        const elements = ToggleBtn.current.parentElement.parentElement.children;
        for (const element of elements) {
            element.classList.remove("active");
            if (element.contains(e.target)) {
                element.classList.add("active");
            }
        }
        dispatch(setSideBarToggleState(false));
    }


    const trackClick = (e) => {


        if (ToggleBtn.current.contains(e.target)) {
            dispatch(setNavbarCategoryToggle(true));
            return;
        }

        if (!box.current) return;

        if (!box.current.contains(e.target)) {
            dispatch(setNavbarCategoryToggle(false));
        }
    }


    useEffect(() => {
        window.addEventListener("click", trackClick);

        return () => {
            window.removeEventListener("click", trackClick);
        }
    }, [])



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
                className={` ${sideBarToggleState ? ' text-white border-white' : ' theme-text-color theme-border-color'}  border relative rounded-md`}>
                <Link
                    ref={ToggleBtn}
                    className="flex items-center px-5 py-1">
                    <AiOutlineCaretDown className="mr-2" />
                    Category
                </Link>
                {
                    NavbarCategoryToggle && <div ref={box} className="absolute text-red-500 p-5 bg-neutral-50 shadow-2xl top-full right-0 mt-3 rounded-lg">
                        kareem
                        <p>test

                            <span>inner test</span>
                        </p>
                    </div>
                }
            </li>





        </ul>
    )
}

export default NavLinks