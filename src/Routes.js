import React from 'react'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Show from './context/Show'
import DataFetch from './hooks/DataFetch'
import Increment from './hooks/Increment'
import Main from './hooks/Main'
import Test from './hooks/Test'
import AdminDashboard from './pages/auth/AdminDashboard'
import AdminRoute from './pages/auth/AdminRoute'
import UserDashboard from './pages/auth/UserDashboard'
import PrivateRoute from './pages/auth/PrivateRoute'
import Confirm from './pages/auth/Confirm'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import Deals from './pages/Deals'
import Home from './pages/Home'
import FormValidation from './validation/FormValidation'



const Routes = () => {
    return (
        <>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/deals" component={Deals}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/signin" component={Signin}/>
                <Route exact path="/email/confirmation/:token" component={Confirm}/>

            {/* admin */}
            <AdminRoute exact path="/admin/dashboard" component={AdminDashboard}/>




            <PrivateRoute exact path="/user/dashboard" component={UserDashboard}/>



             {/* hooks */}
             <Route exact  path="/hooks/increment" component={Increment}/>
             <Route exact path="/hooks/useEffect" component={Test}/>
             <Route exact path="/api/data" component={DataFetch}/>
             <Route exact path="/main" component={Main}/>
             {/* context api */}
             <Route exact path="/contextapi" component={Show}/>
             <Route exact path="/form/register" component={FormValidation}/>
               
            </Switch>
        </Router>
            
        </>
    )
}

export default Routes
