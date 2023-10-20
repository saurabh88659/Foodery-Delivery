const UPDATE_GEOLOCATION = 'update_geolocation';

const initialState = {
  latitude: null,
  longitude: null,
};

const LocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GEOLOCATION:
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };

    default:
      return state;
  }
};

export default LocationReducer;
