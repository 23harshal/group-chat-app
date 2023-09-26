import Chat from "./components/Chat";
import Navbar from "./components/Navbar"
import { auth } from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth"

function App() {
    const [user] = useAuthState(auth);

  return (
    <div className="max-w-[728px] mx-auto text-center">
      <section className="flex flex-col h-[90vh] mt-10 shadow-xl
       bg-gray-100 border relative"  >
        <Navbar />
       {user ? <Chat /> : null}
      </section>


    </div>
  )
}

export default App
