import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { GlobalStateContext } from "../Global/GlobalContext";
import { auth } from "../firebase.config";
import toast from "react-hot-toast";
import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { register : regis, setUser, logout } = useContext(GlobalStateContext);
    const [error, setError] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const form = location?.state || '/';
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const handleProvider = (provider) => {

        return signInWithPopup(auth, provider).then(result => {
            if (result.user) {

                toast.success('Login Successfully');
                navigate(form);
            }
        }).catch(error => {
            console.log(error);
        })
    }

    
    const onSubmit = (data) => {
        const {name, email, password, photoURL} = data;
        console.log(name, email, password, photoURL);

        if(password.length <6){
            return setError('Password should be at least 6 characters')
        }
        if (!/[A-Z]/.test(password)){
            return setError('Must have an UPPERCASE letter in the password')
        }
        if (!/[a-z]/.test(password)){
            return setError('Must have an lowercase letter in the password')
        }
        reset();
        regis(email, password).then((result) => {

            const user = result.user;
            setUser(user);
            logout()
            navigate('/login')
            

            updateProfile(auth.currentUser, {

                displayName: name,
                photoURL: photoURL

            }).then(() => {
                toast.success('Register Successfully');

            }).catch((error) => {

                setError(error.message)
            });

        })
            .catch((error) => {
                console.log(error);
                setError(error.message)

            });

    }



    return (
        <div className="bg-white dark:bg-themeColor">
            <div className="flex flex-row-reverse justify-center h-[95vh]">
                <div className="relative h-[95vh] overflow-y-auto bg-center bg-no-repeat bg-fixed hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: "url(https://images.pexels.com/photos/2728557/pexels-photo-2728557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}>
                    <div className="flex justify-end items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div className="text-right">
                            <h1 className='text-3xl text-white font-poppins font-black mb-4'>Event<span className='text-pmColor'>X</span></h1>
                            <p className="max-w-xl mt-3 text-gray-300">
                            Join our community of event enthusiasts! Register now to create your account and start planning unforgettable occasions. Gain access to exclusive features and tools to make your event management experience seamless.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex justify-center mx-auto">
                                <h1 className='text-3xl dark:text-white dark:text-opacity-80 text-black text-opacity-70 font-poppins font-black mb-3'>Event<span className='text-pmColor'>X</span></h1>

                            </div>
                            <p className=" text-gray-500 dark:text-gray-300">Sign up to access your features</p>
                        </div>
                        <div className="mt-8">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label htmlFor="name" className="mb-2 text-sm text-gray-600 dark:text-gray-200 flex items-center gap-2">Your Name <FaStarOfLife className="text-red-500 text-[8px]" /></label>
                                    <input {...register("name", { required: true })}
                                    type="text" name="name" id="name" placeholder="Your Full Name" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-pmColor focus:ring-pmColor focus:outline-none focus:ring focus:ring-opacity-40" />
                                     {errors.email && <span className="text-xs text-red-500">This Name field is required</span>}
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="email" className=" mb-2 text-sm text-gray-600 dark:text-gray-200 flex items-center gap-2">Email Address <FaStarOfLife className="text-red-500 text-[8px]" /></label>
                                    <input {...register("email", { required: true })}
                                    type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-pmColor focus:ring-pmColor focus:outline-none focus:ring focus:ring-opacity-40" />
                                    {errors.email && <span className="text-xs text-red-500">This Email field is required</span>}
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="photo" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your PhotoURL</label>
                                    <input {...register('photoURL')}
                                    type="text" name="photoURL" id="photo" placeholder="Your PhotoURL" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-pmColor focus:ring-pmColor focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200 flex items-center gap-2">Password <FaStarOfLife className="text-red-500 text-[8px]" /></label>
                                    </div>
                                    <div className=" relative">
                                        <input {...register("password", { required: true })}
                                        type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:border-gray-700 focus:border-pmColor dark:focus:border-pmColor focus:ring-pmColor focus:outline-none focus:ring focus:ring-opacity-40" />
                                        {showPassword ? <FaEye onClick={() => setShowPassword(!showPassword)} className="w-5 h-5 absolute top-[50%] translate-y-[-50%] right-3" src="https://i.ibb.co/3fxNPxp/view.png" alt="" /> : <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className="w-5 h-5 absolute top-[50%] translate-y-[-50%] right-3" src="https://i.ibb.co/pj04qyJ/hide.png" alt="" />}
                                    </div>
                                        {errors.password && <span className="text-xs text-red-500">This Password field is required</span>}
                                </div>

                                  <span className="text-xs text-red-500">{error}</span>
                                <div className="mt-6">
                                    <button className="group relative inline-flex w-full text-center mx-auto text-sm text-nowrap py-2 items-center justify-center overflow-hidden rounded-md bg-pmColor px-5 font-medium text-neutral-200">
                                        <span>Sign Up</span>
                                        <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg>
                                        </div>
                                    </button>
                                </div>
                            </form>
                            <a onClick={() => handleProvider(googleProvider)} className="flex items-center justify-center px-6 py-3 mt-5 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                    <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                </svg>

                                <span className="mx-2">Sign in with Google</span>
                            </a>
                            <p className="mt-6 text-sm text-center text-gray-400">Already have an account? <Link to="/login" className="text-pmColor focus:outline-none focus:underline hover:underline">Sign in</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;