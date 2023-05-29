
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import { signup } from '../../api/auth';
export const signupSchema = Yup.object({
  firstName: Yup.string().required("trường dữ liệu không được bỏ trống"),
  lastName: Yup.string().required("trường dữ liệu không được bỏ trống"),
  email: Yup.string().email("email ko đúng định dạng").required("trường dữ liệu không được bỏ trống"),
  password: Yup.string().min(6).required("trường dữ liệu không được bỏ trống"),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')],"trường dữ liệu không được bỏ trống"),
})
export type SignupForm= Yup.InferType<typeof signupSchema>
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignupForm>({
        resolver: yupResolver(signupSchema)
    })

    const navigate = useNavigate()



    const onSubmit = async(data: SignupForm) => {
        try {
            const response = await signup(data)
            console.log(response);
            navigate('/admin/signin')
            
        }catch(err) {
            console.log(err);
            
        }
        console.log(data);
        

    }
    return (
    
    <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <main
                aria-label="Main"
                className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
            >
                <div className="max-w-xl lg:max-w-3xl">
                    <a className="block text-blue-600" href="/">
                       
                    </a>

                   
                
                    <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="FirstName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                First Name
                            </label>

                            <input
                                {...register('firstName')}
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                            <p className='text-red-600 text-[10px]'>
                                {errors.firstName && errors.firstName.message}
                            </p>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="LastName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Last Name
                            </label>

                            <input
                                {...register('lastName')}
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                            <p className='text-red-600 text-[10px]'>

                                {errors.lastName && errors.lastName.message}
                            </p>
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>

                            <input
                                {...register('email')}
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                            <p className='text-red-600 text-[10px]'>

                                {errors.email && errors.email.message}
                            </p>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="Password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>

                            <input
                                type="password"
                                {...register('password')}
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                            <p className='text-red-600 text-[10px]'>

                              {errors.password && errors.password.message}
                          </p>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                          <label
                                htmlFor="PasswordConfirmation"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password Confirmation
                            </label>

                            <input
                                type="password"
                                {...register('confirmPassword')}
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                            <p className='text-red-600 text-[10px]'>

                                {errors.confirmPassword && errors.confirmPassword.message}
                            </p>
                        </div>
                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <button
                                className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                            >
                                Create an account
                          </button>

                          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                              Already have an account?
                              <a href="#" className="text-gray-700 underline">Log in</a>.
                          </p>
                      </div>
                  </form>
              </div>
          </main>
      </div>
  </section>
  
)
}

export default Signup

