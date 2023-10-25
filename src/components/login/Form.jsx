import { Link } from "react-router-dom";

function LoginForm() {


  const handleFocus = (e) => {
    e.target.parentElement.classList.add("theme-border-color");
    e.target.nextElementSibling.classList.add("text-xs", "top-1/3");

  }
  const handleBlur = (e) => {
    e.target.parentElement.classList.remove("theme-border-color");

    e.target.nextElementSibling.classList.remove("text-xs", "top-1/3");

  }

  return (
    <div className="md:px-10 flex items-center flex-col relative z-0 mt-7">

      <div className="w-full bg-white relative rounded-lg shadow-lg border">
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
          className="w-full bg-transparent pt-6 relative z-10 py-2 px-5  outline-none"
        />
        <label
          className="absolute text-gray-400 left-5 top-1/2 transition-all -translate-y-1/2" htmlFor="">
          Email
        </label>
      </div>
      <div className="w-full mt-4 bg-white relative rounded-lg shadow-lg border">
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
          className="w-full bg-transparent pt-6 relative z-10 py-2 px-5  outline-none"
        />
        <label
          className="absolute text-gray-400 left-5 top-1/2 transition-all -translate-y-1/2" htmlFor="">
          Password
        </label>
      </div>
      <div className="w-full flex items-center mt-3">
        <input id="rem" type="checkbox" className="mr-2 mt-1" />
        <label htmlFor="rem">
          remember me
        </label>
      </div>

      <button className="mt-3 theme-bg-color w-full py-2 text-white opacity-80 hover:opacity-100">
        Login
      </button>

      <div className="w-full mt-3 text-sm text-center">
        Create an account? <Link className="text-blue-500">Register...</Link> 
      </div>

    </div>
  )
}

export default LoginForm