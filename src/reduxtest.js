import { access } from "fs";

// action creator
const createPolicy = (name, amount) => {
    return {
        type : "CREATE_POLICY",
        payload : {
            name : name,
            amount : amount
        }
    };
};

const createClaim = (name, amountToCollect) => {
    return {
        type : "CREATE_CLAIM",
        payload : {
            name,
            amountToCollect
        }
    };
};

const deletePolicy = (name) => {
    return {
        type : "DELETE_POLICY",
        payload : {
            name : name
        }
    };
};


// reducers for current policy
const policies = (listOfCurrentPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfCurrentPolicies, action.payload.name]
    }
    else if (action.type === 'DELETE_POLICY') {
        return listOfCurrentPolicies.filter(
            policy => policies != action.payload.name
    )}
    return listOfCurrentPolicies;
};

// reducers for claim history
const claimHistory = (oldListOfClaims= [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        return [...oldListOfClaims, action.payload]
    }
    return oldListOfClaims;
};

// reducers for accounting
const accounting= (bagOfMoney= 100, action) => {
    if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount
    }
    else if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountToCollect;
    }
    return bagOfMoney;
};

const { createStore, combineReducers } = Redux;
const ourDepartments = combineReducers ({
    accounting : accounting,
    policies : policies,
    claimHistory : claimHistory
});

const store = createStore (ourDepartments);
