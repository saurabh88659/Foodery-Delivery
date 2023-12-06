import {BASE_URL, Instance, headerConfig} from '../Const';

/**
 * The function `_postphone` is an asynchronous function that makes a POST request to a login endpoint
 * with the provided data.
 * @returns the result of the API call if it is successful, and returning the error object if there is
 * an error.
 */
export const _postphone = async data => {
  try {
    const result = await Instance(
      'POST',
      BASE_URL + '/loginDeliveryApp',
      null,
      data,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _postOtp = async data => {
  try {
    const result = await Instance(
      'POST',
      BASE_URL + '/verifyOTPDeliveryApp',
      null,
      data,
    );
    return result;
  } catch (e) {
    return e;
  }
};

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

export const _getOrderHistory1 = async data => {
  const header = await headerConfig();
  try {
    const result = await Instance(
      'GET',
      BASE_URL + '/getAllOrderHistory1',
      header,
    );
    return result;
  } catch (e) {
    s;
    return e;
  }
};

export const _getOrderHistory2 = async data => {
  const header = await headerConfig();
  try {
    const result = await Instance(
      'GET',
      BASE_URL + '/getAllOrderHistory2',
      header,
    );
    return result;
  } catch (e) {
    s;
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

export const _putVerifyselfie = async data => {
  const header = await headerConfig();
  header['Content-type'] = 'multipart/form-data';
  console.log('data', data?.formData?._parts);

  try {
    const result = await Instance(
      'PUT',
      BASE_URL + '/updateDeliveryBoyImage/' + data?.orderId,
      header,
      data?.formData,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _getpickupdetails = async data => {
  const header = await headerConfig();
  try {
    const result = await Instance(
      'GET',
      BASE_URL + '/getVendorandUserData',
      header,
      // data,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _postOrderHistorbyid = async data => {
  const header = await headerConfig();

  try {
    const result = await Instance(
      'POST',
      BASE_URL + '/getAllOrderHistoryOne',
      header,
      data,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _putcoordinates = async data => {
  const header = await headerConfig();
  try {
    const result = await Instance(
      'PUT',
      BASE_URL + '/updateCoordinates',
      header,
      data,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _getNotifications = async data => {
  const header = await headerConfig();
  try {
    const result = await Instance(
      'GET',
      BASE_URL + '/getAllNotifications',
      header,
      data,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _getWallet = async data => {
  const header = await headerConfig();
  try {
    const result = await Instance(
      'GET',
      BASE_URL + '/getwalletData',
      header,
      data,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _getTransactionapi = async data => {
  const header = await headerConfig();
  try {
    const result = await Instance(
      'GET',
      BASE_URL + '/transaction',
      header,
      data,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _getTransitionDetails = async data => {
  const header = await headerConfig();
  try {
    const result = await Instance(
      'GET',
      BASE_URL + '/getTransitionDetails',
      header,
      // data,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _getOrderNotifications = async _id => {
  const header = await headerConfig();
  try {
    const result = await Instance(
      'GET',
      BASE_URL + '/getNotificationOrder/' + _id,
      header,
      // data,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _putaccept = async data => {
  const header = await headerConfig();
  try {
    const result = await Instance(
      'PUT',
      BASE_URL + '/deliveryBoyAccepted',
      header,
      data,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _putReject = async _id => {
  const header = await headerConfig();
  try {
    const result = await Instance(
      'PUT',
      BASE_URL + '/deliveryBoyRejected/' + _id,
      header,
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const _handlePickUp = async data => {
  console.log('dat====', data);
  const header = await headerConfig();
  try {
    const result = await Instance(
      'GET',
      BASE_URL + '/pickUpOrder/' + data,
      header,
    );
    return result;
  } catch (e) {
    return e;
  }
};
