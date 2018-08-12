import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import React  from "react";
import Header from "../Expensifycomponents/Header";
import ExpenseDashboardPage from "../Expensifycomponents/ExpenseDashboardPage";
import EditExpense from "../Expensifycomponents/EditExpense";
import AddExpense from "../Expensifycomponents/AddExpense";
import HelpPage from "../Expensifycomponents/HelpPage";
import NotFoundPage from "../Expensifycomponents/NotFoundPage"

//#region "React Router"

const AppRouter = () =>  (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={ExpenseDashboardPage} exact={true} />
                    <Route path="/create" component={AddExpense} exact={true} />
                    <Route path='/edit/:id' component={EditExpense} />
                    <Route path='/help' component={HelpPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>

        </BrowserRouter>
    );


export default AppRouter;

//#endregion
