const UPDATE_GEOLOCATION = 'update_geolocation';

export const updateGeolocation = (latitude, longitude) => {
  console.log('latitude, longitude ++++++++++DG', latitude, longitude);
  return {
    type: UPDATE_GEOLOCATION,
    payload: {latitude, longitude},
  };
};
