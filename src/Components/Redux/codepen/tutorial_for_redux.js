// People dropping off a form (action creator)
// plain js object that returns which is refered to by action
const createPolicy = (name, amount) => {
  return {
    // action (a 'form' in insurance analogy)
    type: "CREATE_POLICY",
    payload: {
      // this is passed down as itself char
      name,
      amount,
    },
  };
};
const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name,
    },
  };
};
const createClaim = (money, name) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name,
      money,
    },
  };
};

// Reducers -> like insurance departments
// look at policies if action is add then add, else return unchanged list
//' oldListOfClaims=[] ' for coping with non data, -> first setup
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    // I think this should append action payload at the end of oldListOfClaims
    // in reality it will create new list, and adds new action.payload at the end

    // When changing something in Redux always return a new array with new values
    // For compatibility or using characteristics of redux

    return [...oldListOfClaims, action.payload];
  }
  return oldListOfClaims;
};
const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amount;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};
const policyDepartment = (listOfPolicies = [], action) => {
  if ((action.type = "CREATE_POLICY")) {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    // filter js function (build in fc)
    //! produces new array
    return listOfPolicies.filter((name) => name !== action.payload.name);
  }
  return listOfPolicies;
};


// now working with Redux
const {createStore,combineReducers}=Redux;
const ourDepartments = combineReducers(
  {
    accounting:accounting,
    claimsHistory:claimsHistory,
    policyDepartment:policyDepartment,
  }
),
const store = createStore(ourDepartments)
const action = createPolicy('Alex',20 )

// absolute overkill -> when working with data just pre-create functions that will do 
// something and then it will store states of the app

// this will pass data to according parts of app
store.dispatch(action)
console.log(store.getState())