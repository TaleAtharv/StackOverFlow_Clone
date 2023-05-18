import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import Navbar from './components/navbar/navbar';
import AllRoutes from './AllRoutes';
import { useEffect } from 'react';
import { fetchAllQuestions } from './actions/question'
import { useDispatch } from 'react-redux'
import Chat from './components/ChatBot/Chat';
import { fetchAllUsers } from './actions/users';


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (

    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
        <Chat />
      </Router>
    </div>

  );
}

export default App;
