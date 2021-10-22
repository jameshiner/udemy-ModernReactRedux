console.clear();

// ACTIONS

const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name,
      amount,
    },
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name,
    },
  };
};

const createClaim = (name, amount) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name,
      amount,
    },
  };
};

// REDUCERS

const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // we care about this action type, add claim to list of claims and return
    return [...oldListOfClaims, action.payload];
  }
  // we dont care about action type
  return oldListOfClaims;
};

const accounting = (currentMoney = 1000, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return currentMoney - action.payload.amount;
  } else if (action.type === 'CREATE_POLICY') {
    return currentMoney + action.payload.amount;
  }
  return currentMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter((name) => name !== action.payload.name);
  }
  return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

// adds properties to the state object, can rename based on preference
// giving the accounting reducer a key of totalMoney changes the key in the created state
// by convention the state keys should be related to the reducer name
const ourDepartments = combineReducers({
  claimsHistory,
  totalMoney: accounting,
  policies,
});

// can never modify the store manually
// the only way to change the store values is with actions/reducers
const store = createStore(ourDepartments);

store.dispatch(createPolicy('James', 500)); // policies + james, money (1000 default) + 500
store.dispatch(createPolicy('Catherine', 800)); // policies + catherine, money (1500) + 800
store.dispatch(createPolicy('Hippo', 200)); // policies + hippo, money (2300) + 200
store.dispatch(deletePolicy('James')); // policies - james
store.dispatch(createClaim('Catherine', 300)); // claims + {catherine,300}, money (2500) - 300
console.log(store.getState());
