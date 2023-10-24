import { AiFillCloseSquare } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { setSideBarToggleState } from "../../redux/slices/GlobalStatues";
import NavLinks from './NavLinks';


function Toggle() {

    return (
        <div>
            <NavLinks />
        </div>
    )
}

export default Toggle