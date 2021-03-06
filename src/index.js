import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './view/login';
import Dashboard from './view/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';
import Mykiipbox from './view/mykiipbox';
import Signup from './view/sign-up';
import Template from './view/template';
import TemplateResponse from "./view/TemplateResponse";
import Plan from "./view/plan";
import UpgradePlan from "./view/upgradePlan";
import MyDocument from './view/myDocument';
import ReferAfriend from './view/referAfriend';
import CreateAkiipbox from './view/createAkiipbox';
import Account from './view/account';
import Setting from './view/setting';
import PaymentMethod from './view/paymentMethod';
import Invocie from './view/invoice';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/mykiipbox" component={Mykiipbox} />
            <Route path="/signup" component={Signup} />
            <Route path="/template" component={Template} />
            <Route path="/template_response" component={TemplateResponse} />
            <Route path="/plan" component={Plan} />
            <Route path="/upgradePlan" component={UpgradePlan} />
            <Route path="/myDocument" component={MyDocument} />
            <Route path="/referAfriend" component={ReferAfriend} />
            <Route path="/createAkiipbox" component={CreateAkiipbox} />
            <Route path="/account" component={Account} />
            <Route path="/setting" component={Setting} />
            <Route path="/paymentMethod" component={PaymentMethod} />
            <Route path="/invoice" component={Invocie} />
            <Redirect from="/" to="/login" />
        </Switch>
    </BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
