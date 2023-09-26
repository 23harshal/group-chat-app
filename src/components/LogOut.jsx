import {auth} from '../firebase'

const LogOut = () =>{

    const signOut = () =>{
        signOut(auth);
    }
    return(
        <button
        onClick={() => auth.signOut()} 
        className="bg-gray-200 px-4 hover:bg-gray-100"
        >
            Logout
        </button>
    )
}

export default LogOut;