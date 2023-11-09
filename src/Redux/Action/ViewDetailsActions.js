const VIEW_DETAILS = 'ViewDetails';

export const ViewDetailsActions = data => {
  return {
    type: VIEW_DETAILS,
    payload: {data: data},
  };
};
