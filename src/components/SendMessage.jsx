import React, { useState } from 'react'
import {auth , db} from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
const SendMessage = ({scroll}) => {

    const [input , setInput] = useState('');
    
    const sendMsg = async (e) =>{
        e.preventDefault();
        if(input === ''){
            alert("please enter valid message")
            return
        }
        const {uid , displayName} = auth.currentUser
        await addDoc(collection(db , 'messages') , {
            text : input , 
            name :displayName,
            uid , 
            timestamp : serverTimestamp()
        })
        setInput('')
        scroll.current.scrollIntoView({behavior : 'smooth'})
    }

  return (  
    <form onSubmit={sendMsg} 
    className='h-14 w-full max-w-[728px] flex text-xl absolute bottom-0'>
        <input type='text'
            placeholder='Message'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='w-full text-xl p-3 bg-gray-900 text-white outline-none
                border-none'
        />
        <button type='submit' 
        className='w-[20%] bg-green-500'
        >Send</button>
    </form>
  )
}

export default SendMessage
