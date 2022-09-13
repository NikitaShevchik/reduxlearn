// const defState = {
//     customers: [],
// }

// const ADD_CUSTOMER = "ADD_CUSTOMER";
// const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
// const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";

// export const customerReducer = (state = defState, action) => {
//     switch (action.type) {
//         case ADD_MANY_CUSTOMERS:
//             return { ...state, customers: [...state.customers, ...action.payload] }
//         case ADD_CUSTOMER:
//             return { ...state, customers: [...state.customers, action.payload] }
//         case REMOVE_CUSTOMER:
//             return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) }
//         default:
//             return state
//     }
// }

// export const addManyCustomersAction = (payload) => ({ type: ADD_MANY_CUSTOMERS, payload })
// export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload })
// export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload })


const defaultState = {
    users: []
}

export const SET_USERS = "SET_USERS";
export const FETCH_USERS = "FETCH_USERS"

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload }
        default:
            return state
    }
}

export const setUsers = payload => ({ type: SET_USERS, payload })
export const fetchUsers = () => ({ type: FETCH_USERS })
