import instance from "./instance";
// import { SigninForm, SignupForm } from "../models";
import { SignupForm } from "../pages/admin/Signup";
// import { SigninForm } from "../pages/admin/Signin";
import { SigninForm } from "../pages/admin/signin";



export const signup = (data: SignupForm) => {
    return instance.post("users", data)
}


export const signin = (data: SigninForm) => {
    return instance.post("users", data)
}



