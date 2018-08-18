// 1.SET_TEXT_FILTER
export const setTextFilter = (text = '') => {
    return {
        type: "SET_TEXT_FILTER",
        text
    }

};



// 2.SORT_BY_DATE
export const sortByDate = (date = '') => {
    return {
        type: "SORT_BY_DATE",
        date
    }
};


// 3.SORT_BY_AMOUNT
export const sortByAmount = () => {
    return {
        type: "SORT_BY_AMOUNT"
       
    }
};


// 4.SET_START_DATE
export const setStartDate = (startDate = '') => {
    return {
        type: 'SET_START_DATE'
    }
}


// 5.SET_END_DATE
export const setEndDate = (endDate = '') => {
      
    return {
        type: 'SET_END_DATE',
        endDate
    }
}






