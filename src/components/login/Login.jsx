import LoginForm from './Form';
import side from './side.jpg';
function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center ">

      <div className="container px-10 grid grid-cols-6 mt-10">
        <div className="col-span-2 col-start-2 flex items-center justify-center rounded-tl-lg rounded-bl-lg bg-neutral-100 p-10">
          <div className=" w-full">
            <h1 className='text-center text-4xl'>Welcome again
              <br />
              <span className='text-xl'>
                Ready for <span className='theme-text-color'>shopping!
                </span>
              </span>


            </h1>

            <LoginForm />
          </div>

        </div>
        <img src={side} className='col-span-2 rounded-tr-lg rounded-br-lg' alt="" />

      </div>

    </div>
  )
}

export default Login