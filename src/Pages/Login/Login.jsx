import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import pic from '../../assets/login/authentication2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state);

    useEffect(() =>{
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "User Login Successfull",
              showConfirmButton: false,
              timer: 1500
            });
            navigate(from, {replace: true});
        })
    }

    const handleValidedCapthcha = (e) =>{
        const user_captcha_alue = e.target.value;
        if(validateCaptcha(user_captcha_alue)){
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }
    }

  return (
    <>
      <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex flex-col justify-center items-center text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold mb-4">Login now!</h1>
          <img src={pic} alt="" />
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
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
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
               onBlur={handleValidedCapthcha}
                type="type"
                name="captcha"
                placeholder="type the captcha above"
                className="input input-bordered"
                required
              />
            </div>
            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
          </form>
          <p className='text-center font-medium'><small>New Here? <Link className='text-blue-600' to='/signup'>Create an account!!!</Link></small></p>
          {/* <SocialLogin></SocialLogin> */}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Login;
