import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import PetsState from './context/Pets/PetsState';
import UsersState from './context/Users/UsersState';


import Register from './components/Auth/Register'
import Login from './components/Auth/Login'

import Auth from './routes/Auth'



function Router() {
  return (
    <>
      <PetsState>
      <UsersState>

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />

                {/* localhost:3000/registro */}
                <Route 
                  path="registro"
                  element={
                    <Auth component={Register} />
                  } 
                />

                {/* localhost:3000/login */}
                <Route 
                  path="login"
                  element={
                    <Auth component={Login} />
                  } 
                />                




            </Route>

          </Routes>
      </BrowserRouter>

      </UsersState>
      </PetsState>

    </>
  );
}

export default Router;