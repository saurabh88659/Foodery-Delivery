import {BASE_URL, Instance, headerConfig} from '../Const';

export const _getProfile = async () => {
  const header = await headerConfig();
  console.log('header--DG->>', header);
  try {
    const result = await Instance(
      'GET',
      BASE_URL + '/getMyProfileDeliveryBoy',
      header,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _signUp = async data => {
  const header = await headerConfig();
  try {
    const result = await Instance(
      'PUT',
      BASE_URL + '/signUpDeliveryApp',
      header,
      data,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _signdeliveryBoyDocs = async data => {
  const header = await headerConfig();
  header['Content-type'] = 'multipart/form-data';

  try {
    const result = await Instance(
      'PUT',
      BASE_URL + '/deliveryBoyDocs',
      header,
      data,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _VehicleDetails = async data => {
  const header = await headerConfig();
  header['Content-type'] = 'multipart/form-data';

  try {
    const result = await Instance(
      'PUT',
      BASE_URL + '/uploadVehicleDetails',
      header,
      data,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _BankDetails = async data => {
  const header = await headerConfig();
  try {
    const result = await Instance(
      'PUT',
      BASE_URL + '/addBankAccountDeliveryBoy',
      header,
      data,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _countOrder = async data => {
  const header = await headerConfig();
  try {
    const result = await Instance(
      'GET',
      BASE_URL + '/getCountOrderData',
      header,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _getOrderHistory = async data => {
  const header = await headerConfig();
  try {
    const result = await Instance(
      'GET',
      BASE_URL + '/getAllOrderHistory',
      header,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _getUploadProfilePic = async data => {
  const header = await headerConfig();
  header['Content-type'] = 'multipart/form-data';
  try {
    const result = await Instance(
      'PUT',
      BASE_URL + '/updateSelfie1',
      header,
      data,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _getallBokking = async data => {
  const header = await headerConfig();

  try {
    const result = await Instance(
      'GET',
      BASE_URL + '/getAllMyBooking',
      header,
      // data,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _viewDetailsByid = async id => {
  const header = await headerConfig();
  try {
    const result = await Instance(
      'GET',
      BASE_URL + '/getdeliveryBoyDetailsOrder' + id,
      header,
      // data,
    );
    return result;
  } catch (e) {
    return e;
  }
};
