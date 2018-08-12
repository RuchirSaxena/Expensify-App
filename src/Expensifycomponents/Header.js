import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <h1>Expensify App</h1>
            <NavLink to="/" activeClassName="isactive" exact={true} >Go To Dashbaard</NavLink><br />
            <NavLink to="/create" activeClassName="isactive">Add Expense</NavLink><br />
            <NavLink to="/edit" activeClassName="isactive">Edit Expense</NavLink><br />
            <NavLink to="/help" activeClassName="isactive">Help </NavLink><br /> <br /><br />
        </header>
    );
};

export default Header;
