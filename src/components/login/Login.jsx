import LoginForm from './Form';
import side from './side.jpg';
function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center ">

      <div className="container px-5 md:px-10 grid grid-cols-6 mt-10">
        <div className="md:col-span-2 col-span-full md:col-start-2 flex items-center justify-center md:rounded-tl-lg md:rounded-bl-lg rounded-lg md:rounded-none bg-neutral-100 px-5 py-10">
          <div className="w-full">
            <h1 className='text-center text-4xl'>Welcome again
              <br />
              <span className='text-lg'>
                Ready for <span className='theme-text-color font-bold'>shopping!
                </span>
              </span>

            </h1>

            <LoginForm />
          </div>

        </div>
        <img src={side} className='col-span-2 hidden md:block rounded-tr-lg rounded-br-lg' alt="" />

      </div>

    </div>
  )
}

export default Login