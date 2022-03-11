import React, {useState} from 'react'

function LoginForm({Login, error}) {
  const [details, setDetails] = useState({name: "", email: "", password: ""});

  const submitHandler = event => {
    event.preventDefault();
    Login(details);
  }


  return (
   <form onSubmit={submitHandler}>
       <div className='form-inner'>
           <h2>Login</h2>
           {(error !== "") ? (<p className="error">{error}</p>) : ""}
           <div className="form-group">
               <label htmlfor="name">Name:</label>
               <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className="form-group">
               <label htmlfor="email">employeeID:</label>
               <input type="email" name="email" id="email" />
            </div>
            <div className="form-group">
               <label htmlfor="password">Password:</label>
               <input type="password" name="password" id="password" />
            </div>
            <input type="submit" value="Login" />
       </div>
       
    </form>
  )
}

export default LoginForm;