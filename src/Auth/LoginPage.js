import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function LoginPage(){

        //define const to save come data from forms
        const[data, setData] = useState({
            name : "Enter Email...",
            password : "password"
        })


        // error msgs Vaildation save in constant and use ass variables here 
        const[errors , setError] = useState({
            nameError : "",
            passwordErr: ""
        })

        //hande regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        //function listen change 
       const changeData= (e) => {

           if(e.target.name =="name"){
            setData({ 
                ...data,
                name: e.target.value
            })
            setError({
                ...errors,
                nameError: e.target.value.length == 0 ? "this Field is Required" :
                 e.target.value.length < 3 ? "please enter a vaild email" :
                 !emailRegex.test(e.target.value) && "Invalid email address" 
                 
                })

           }else{
            setData({
                ...data,
                password : e.target.value
            })

            setError({
                ...errors,
                passwordErr: e.target.value.length == 0 ? "this Field is Required" :
                e.target.value.length < 8 && "Password must be at least 8 characters"

            })

           }
        } //end of function change with event


        //use effect to run page after check 
        const history = useHistory();

          useEffect(() => {
            // Check if email and password are in local storage and redirect to home page
            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');
    
            if (storedEmail && storedPassword) {
                history.push('/home'); 
            }
        }, [history]);

        
     // ------------- span of Not Found Email ------------//
     const [NotFoundEmail, setNotFoundMessage] = useState("");


        //function submit
        const submitData = (e) => {
            e.preventDefault()
            if(!errors.nameError && !errors.passwordErr){
            // Check if email and password are in local storage
            const storedEmail = sessionStorage.getItem('email');
            const storedPassword = sessionStorage.getItem('password');

            if (storedEmail === data.name && storedPassword === data.password) {
                // Redirect to home page after successful login
                localStorage.setItem('email', data.name);
                localStorage.setItem('password', data.password);
                
                 history.push('/home'); // Adjust the route based on your actual setup

            } else {
                // Handle incorrect email or password logic here
                setNotFoundMessage("Email not found or password is incorrect");

            }
        }
    }



    return(
        <>
        <div className="container">
             <h1 className="text-primary text-center">Login Form</h1>
             {/* Email Not Found */}
             {NotFoundEmail && (   <div className="alert alert-success mt-3" role="alert" style={{textAlign : 'center' , fontSize:'2rem'}}> {NotFoundEmail} </div>  )}

            <form onSubmit={(e) => submitData(e)}>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
            <input type="email" className="form-control" value={data.name} onChange={(e)=> changeData(e)} name="name"/>
            <p className="text-danger">{errors.nameError}</p>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" value={data.password}  onChange={(e)=> changeData(e)} onBlur={Formik.handleBlur} name="postition"/>
            <p className="text-danger">{errors.passwordErr}</p>
            </div>
            <button disabled={errors.nameError || errors.passwordErr} type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            </>
    )

}


export default LoginPage;