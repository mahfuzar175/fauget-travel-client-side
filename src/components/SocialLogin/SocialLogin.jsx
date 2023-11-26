import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoggleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                photo: result.user?.photoURL
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
        })
        .catch(error => {
            console.error(error);
        });
    }

    return (
        <div className="p-4">
          <div className="divider">Or</div>
          <div className="flex justify-center items-center">
            <button onClick={handleGoggleSignIn} className="btn normal-case"> 
              <FaGoogle className="mr-2"></FaGoogle>
                Sign up with Google
            </button>
          </div>
        </div>
      );
    };
    
export default SocialLogin;