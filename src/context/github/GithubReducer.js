const githubReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "FETCH_USER_DATA":
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case "SET_LOADING":
      return { ...state, loading: true };
    case "CLEAR_USERS":
      return { ...state, users: [] };
    default:
      return true;
  }
};

export default githubReducer;
