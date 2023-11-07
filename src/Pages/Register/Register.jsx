import { Link } from "react-router-dom";
import img from "../../assets/icons/login.svg"


const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const img = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = {name, img, email, password}
        console.log(newUser);
    }



    return (
        <div className="w-11/12 mx-auto mt-10 mb-10 text-center items-center">
      <div className="md:flex justify-center gap-32">
        <div>
          <img className="h-[80vh] mt-5 mb-5 ml-10 md:mb-0 md:ml-0" src={img} alt="" />
        </div>
        <div>
          <div className="hero border border-[#AA8453]  ">
            <div className="hero-content flex-col border py-3 px-5">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-[#AA8453]">Register</h1>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm ">
                <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="url"
                      className="input input-bordered"
                      required
                    />
                  </div>
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
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn text-white bg-[#AA8453]">Register</button>
                    
                  </div>
                </form>
                <p>Have an account!!!! Please__ <Link className="text-green-800 font-bold" to='/login'>Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;