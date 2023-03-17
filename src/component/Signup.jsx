import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Signup = () => {
  
  const [user, setUser] = useState({
    name: "", email:"", password:"", cpassword:""
  })
  let name, value;
  const handleInputs = (e)=>{
  console.log(e)
  name=e.target.name;
  value=e.target.value;

  setUser({...user,[name]:value})
  }

  const PostData = async (e)=>{
    e.preventDefault();
    const {name,email,password,cpassword} = user;
    let res = await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,email,password,cpassword
      })
    });

    res = await res.json();
    const navigate = useNavigate();
    if(data.status===422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
    else{
      window.alert("Registration Successful")
      console.log("Succesful Registration");
      navigate("../login", { replace: true });
    }
  }

  return (
    <div className="bg-primary">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
      <div>
        <h2 className="text-3xl font-extrabold text-green-500 sm:text-4xl">
        Sign Up
        </h2>
        <div className="mt-8 sm:max-w-lg">
          <form className="space-y-6" method='POST'>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-green-500" aria-setsize={6}>
                Full name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  value={user.name}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-green-500">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={user.email}
                  onChange={handleInputs}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-green-500">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={user.password}
                  onChange={handleInputs}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-green-500">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="cpassword"
                  name="cpassword"
                  type="password"
                  autoComplete="current-password"
                  value={user.cpassword}
                  onChange={handleInputs}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <input
                type="submit"
                value='Signup'
                onClick={PostData}
                className="inline-flex items-center px-5 py-2 border border-transparent text-base font-semibold rounded-full text-black bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Signup