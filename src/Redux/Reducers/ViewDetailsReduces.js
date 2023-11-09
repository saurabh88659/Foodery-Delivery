const VIEW_DETAILS = 'ViewDetails';

const initialState = {
  data: null,
};

const ViewDetailsReduces = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_DETAILS:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
};

export default ViewDetailsReduces;
