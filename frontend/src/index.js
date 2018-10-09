import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

import App from './App';
import FullWidthGrid from './FullWidthGrid';
import ComplexGrid from './ComplexGrid';
import InteractiveGrid from "./InteractiveGrid";
import AutoGridNoWrap from "./AutoGridNoWrap";
import TextFields from './TextFields';
import Signin from './Signin';

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb, arg1) {
        this.isAuthenticated=true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);



class Hello extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Hello</h1>
                </header>
            </div>
        );
    }
}


ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route exact path='/hello' component={Hello} />
            <Route exact path='/grid' component={FullWidthGrid} />
            <Route exact path='/comp' component={ComplexGrid} />
            <Route exact path='/int' component={InteractiveGrid} />
            <Route exact path='/auto' component={AutoGridNoWrap} />
            <Route exact path='/text' component={TextFields} />
            <Route exact path='/signin' component={Signin} />
            {/*
            <Route path="/edit" render={(props) => <Edit {...props}/>}/>
            <Route path="/public" render={(props) => <Public {...props}/>}/>
            <PrivateRoute path="/protected" component={Protected} />
            */}
        </div>
    </Router>,
    document.getElementById('root')
);