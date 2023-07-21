
import './App.css';
import { BrowserRouter, Route,Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import SeeMore from './components/SeeMore';

function App() {
  return (
  <>
  <BrowserRouter>
     <Routes>
       <Route path="/login"
         element={
           <PrivateRouteForLogin>
              <Login/>
           </PrivateRouteForLogin>

         } />
       <Route path="/"
         element={ 
             <PrivateRoute>
               <Home/>
             </PrivateRoute> 
          } />


        <Route path="/blog/:id"
           element={ 
             <PrivateRoute>
               <SeeMore/>
             </PrivateRoute> 
          } />

     </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;

 const PrivateRoute = ({ children }) => {

  const authToken = localStorage.getItem("authToken");

  if (authToken) {

     return children;

   } else {

    return <Navigate to={"/login"} />;

   }

 };

const PrivateRouteForLogin = ({ children }) => {

  const authToken = localStorage.getItem("authToken");

  if (!authToken) {

    return children;

  } else {

    return <Navigate to={"/"} />;

  }

};
