import { Link } from "react-router-dom";
import img from "../../assets/icons/login.svg"

const Login = () => {


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password}
        console.log(user);
    }



    return (
        <div className="mt-10 mb-10 text-center items-center">
        <div className="md:flex md:justify-center gap-32">
          <div>
            <img className="h-[60vh] mt-5 ml-20 mb-5 md:mb-0  md:ml-0" src={img} alt="" />
          </div>
          <div>
            <div className="hero ">
              <div className="hero-content flex-col border border-[#AA8453] py-3 px-5">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold text-[#AA8453]">Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm ">
                  <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                      />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn text-white bg-[#AA8453]">Login</button>
                      <p>or sign with <br />
                        <button className="btn w-full text-white bg-[#AA8453]" >Google</button>
                      </p>
                    </div>
                  </form>
                  <p>Don't have an account!!!! Please__ <Link className="text-green-800 font-bold" to='/register'>Register</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;