import React, {useState} from 'react'
import axios from 'axios'
import '../components/signinup/SignInUp.css'
import { useNavigate } from 'react-router-dom'

const SignINUPPage = () => {

  const history = useNavigate();

  const [isSignUp, setIsSignUp] = useState(true);
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const clearForm = () => { 
    setSignInEmail(""); 
    setSignInPassword(""); 
    setSignUpName(""); 
    setSignUpPassword(""); 
  }; 

  async function handleSignInSubmit(e){
    e.preventDefault();
    try{
      await axios.post("http://localhost:3000/signin",{
        signInEmail,signInPassword
      })
      .then(res=>{
        if(res.data="exist"){
           history("/")
        }
        else if(res.data="notexist"){
          alert("User not found.")
        }
      })
    }
    catch(e){
      console.log(e);
    }
    console.log(`Sign in with ${signInEmail} and ${signInPassword}`);
    clearForm();
  };

  async function handleSignUpSubmit(e){
    e.preventDefault();
    try{
      await axios.post("http://localhost:3000/signup",{
        signUpName,signUpPassword,signUpEmail
      })
      .then(res=>{
        if(res.data="exist"){
          alert("User already exists")
        }
        else if(res.data="notexist"){
          alert("/")
        }
      })
      .catch((e)=>{
        alert("wrong details")
        console.log(e);
      })
    }
    catch(e){
      console.log(e);
    }
    clearForm();
    console.log(`Sign up with ${signUpName}, ${signUpEmail}, and ${signUpPassword}`);
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="form-toggle">
          <button onClick={() => setIsSignUp(true)}>Sign Up</button>
          <button onClick={() => setIsSignUp(false)}>Sign In</button>
        </div>
        {isSignUp ? (
          <form className='form-section' onSubmit={handleSignUpSubmit}>
              <input type="text" placeholder='Name' value={signUpName} onChange={(e) => setSignUpName(e.target.value)} />
              <input type="email" placeholder='E-Mail' value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} />
              <input type="password" placeholder='Password' value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} />
            
            <button type="submit">Sign Up</button>
          </form>
        ) : (
          <form className='form-section' onSubmit={handleSignInSubmit}>
              <input type="email" placeholder='E-Mail' value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} />
              <input type="password" placeholder='Password' value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} />
            
            <button type="submit">Sign In</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default SignINUPPage