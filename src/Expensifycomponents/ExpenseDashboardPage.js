import React from "react";
import ExpenseListData from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";

 const ExpenseDashboardPage = () => {
    return (
        <div>
            This is form Dashbooard Component
            <ExpenseListFilter />
            <ExpenseListData/>
          
        </div>
    );
}

export default ExpenseDashboardPage;