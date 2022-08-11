const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "GET_REPOS":
      return { ...state, loading: false, repos: action.payload };
    case "SET_LOADING":
      return { ...state, loading: true };
    case "CLEAR_USERS":
      return { ...state, users: [] };
    default:
      return true;
  }
};

export default githubReducer;
