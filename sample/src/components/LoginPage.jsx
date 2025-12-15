import React from 'react'

function LoginPage() {
    const [formData,setformData]=useStste({
        email:"",
        password:"",
    });
  return (
    <div>
        <h1>Login</h1>
        <form>
            <div>
                <label htmlFor=''>Email :</label>
    </div>
  );
}

export default LoginPage