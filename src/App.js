
import { useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const[question,setQuestion]= useState('');
  const [response,setResponse]= useState('');

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(question)
    axios.post('https://twinteract-teal.vercel.app/getResponse',{
      question:question
    })
    .then(res=>{
      console.log(res.data.response);
      setResponse(res.data.response);
    })
    .catch(err=>{
      console.log(err)
    })

  }
  const speakHandler = ()=>{
    const a = new SpeechSynthesisUtterance(response);
    window.speechSynthesis.speak(a);

  }
  return (
    <div className="App">
      <div className='box'>
           <div className='dp'>
            <img className='profile' alt='profilepic' src={require('../src/assets/rdj.jpg')}></img>
          
           </div>
           <p className='label'>My Question...Your Response?</p>

          <textarea onChange={(e)=>{setQuestion(e.target.value)}}/>
          <button onClick={submitHandler}>Launch!!</button>
      </div>
    <div className='box'>
                    <div className='dp'>
            <img className='profile' alt='profilepic' src={require('../src/assets/machime.jpg')}></img>
           </div>
           
           <p className='label'>Your Question...My Response</p>
          <textarea value={response}/>
          <button onClick={speakHandler}>Zara Bol Bhi Do</button>
    </div>
     
    </div>
  );
}

export default App;
