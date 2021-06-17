import React from 'react'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import Deals from './pages/Deals'
import Home from './pages/Home'



const Routes = () => {
    return (
        <>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/deals" component={Deals}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/signin" component={Signin}/>
               
            </Switch>
        </Router>
            
        </>
    )
}

export default Routes
