export function historyReducer(state, action) {
  switch (action.type) {
    case 'REQ PARAMS':
      return { ...state, requestParams: action.payload };
    case 'LOADING':
      return { ...state, loading: action.payload };
    case 'CREATE DATA':
      return { ...state, data: action.payload };
    case 'HISTORY UPDATE':
      return { ...state, history: [...state.history, action.payload] }
    default:
      return state;
  }
}
