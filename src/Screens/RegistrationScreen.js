import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {CustomStatusBar, FontAwesome, SimpleToast} from '../utils/Const';
import MyHeader from '../Components/MyHeader';
import {COLORS} from '../utils/Colors';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Entypo';
import Toast from 'react-native-toast-message';
import Modal from 'react-native-modal';
import Lottie from 'lottie-react-native';

import {RadioButton} from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
// import axios from 'axios';
import {_getStorage} from '../utils/Storage';
import {
  _BankDetails,
  _VehicleDetails,
  _signUp,
  _signdeliveryBoyDocs,
} from '../utils/Controllers/EpicControllers';
import Routes from '../Navigation/Routes';
// import Routes from '../Navigation/Routes';

export default function RegistrationScreen({navigation, route}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  const [dateError, setDateError] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState('');

  const [workExperience, setWorkExperience] = useState('');
  const [emailId, setEmailId] = useState('');
  // const [mobileNo, setMobileNo] = useState('');
  const [alternateMobileNo, setalternateMobileNo] = useState('');
  const [emergencyMobile, setEmergencyMobile] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [stateOne, setStateOne] = useState('');
  const [cityOne, setCityOne] = useState('');
  const [pinCodeOne, setPinCodeOne] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [stateTwo, setStateTwo] = useState('');
  const [cityTwo, setCityTwo] = useState('');
  const [pinCodeTwo, setPinCodeTwo] = useState('');
  const [isError, setIsError] = useState(false);
  const [modalVisibleone, setModalVisibleone] = useState(false);
  const phoneNumber = route.params;
  const showDatePicker = () => {
    setDatePickerVisibility(true);
    AsyncStorage.getItem('Date').then(value => setDate(value));
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    const formattedDate = `${('0' + date.getDate()).slice(-2)}/${(
      '0' +
      (date.getMonth() + 1)
    ).slice(-2)}/${date.getFullYear()}`;

    setDate(formattedDate);

    hideDatePicker();
  };

  {
    /* ==============================Personal Details======================== */
  }
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [workExperienceError, setWorkExperienceError] = useState('');
  const [emailIdError, setEmailIdError] = useState('');
  const [mobileAlNoError, setAlMobileNoError] = useState('');
  const [emergencyMobileError, setEmergencyMobileError] = useState('');
  const [permanentAddressError, setPermanentAddressError] = useState('');
  const [stateOneError, setStateOneError] = useState('');
  const [cityOneError, setCityOneError] = useState('');
  const [pinCodeOneError, setPinCodeOneError] = useState('');
  const [currentAddressError, setCurrentAddressError] = useState('');
  const [stateTwoError, setStateTwoError] = useState('');
  const [cityTwoError, setCityTwoError] = useState('');
  const [pinCodeTwoError, setPinCodeTwoError] = useState('');

  const validdatebirth = () => {
    const namePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!namePattern.test(date)) {
      setDateError('Please Select a valid date Birth');
      return false;
    } else {
      setDateError('');
      return true;
    }
  };

  const validrediobutton = gender => {
    if (gender === '') {
      setGenderError('Please select a valid gender');
      SimpleToast({title: 'Please select a valid gender', isLong: true});
      return false;
    } else {
      setGenderError('');
      return true;
    }
  };

  const validateFirstNameChange = () => {
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(firstName)) {
      setFirstNameError('Please enter a valid first Name');
      return false;
    } else {
      setFirstNameError('');
      return true;
    }
  };

  const validateLastNameChange = () => {
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(lastName)) {
      setLastNameError('Please enter a valid last Name');
      return false;
    } else {
      setLastNameError('');
      return true;
    }
  };

  const validateWorkExChange = () => {
    const namePattern = /[a-zA-Z0-9]+/;
    if (!namePattern.test(workExperience)) {
      setWorkExperienceError('Please enter a valid Work Experience');
      return false;
    } else {
      setWorkExperienceError('');
      return true;
    }
  };

  const validateEmailIDChange = () => {
    const namePattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!namePattern.test(emailId)) {
      setEmailIdError('Please enter a valid Email');
      return false;
    } else {
      setEmailIdError('');
      return true;
    }
  };

  const validateAlMobileNoChange = () => {
    const namePattern = /^\d{10}$/;
    if (!namePattern.test(alternateMobileNo)) {
      setAlMobileNoError('Please enter a valid Alternate Mobile No');
      return false;
    } else {
      setAlMobileNoError('');
      return true;
    }
  };

  const validateEmMobileNoChange = () => {
    const namePattern = /^\d{10}$/;
    if (!namePattern.test(emergencyMobile)) {
      setEmergencyMobileError('Please enter a valid Emergency Mobile No');
      return false;
    } else {
      setEmergencyMobileError('');
      return true;
    }
  };

  const validatePermanentsAddressChange = () => {
    const namePattern = /[a-zA-Z0-9]+/;
    if (!namePattern.test(permanentAddress)) {
      setPermanentAddressError('Please enter a valid Permanent Address');
      return false;
    } else {
      setPermanentAddressError('');
      return true;
    }
  };

  const validateStateOneChange = () => {
    const namePattern = /^[a-zA-Z\s.-]+$/;
    if (!namePattern.test(stateOne)) {
      setStateOneError('Please enter a valid State');
      return false;
    } else {
      setStateOneError('');
      return true;
    }
  };

  const validateCityOneChange = () => {
    const namePattern = /^[a-zA-Z\s.-]+$/;
    if (!namePattern.test(cityOne)) {
      setCityOneError('Please enter a valid City');
      return false;
    } else {
      setCityOneError('');
      return true;
    }
  };

  const validatePincodeOneChange = () => {
    const namePattern = /^\d{6}$/;
    if (!namePattern.test(pinCodeOne)) {
      setPinCodeOneError('Please enter a valid Pincode');
      return false;
    } else {
      setPinCodeOneError('');
      return true;
    }
  };

  const validateCurrentAddressChange = () => {
    const namePattern = /[a-zA-Z0-9]+/;
    if (!namePattern.test(currentAddress)) {
      setCurrentAddressError('Please enter a valid Current Address');
      return false;
    } else {
      setCurrentAddressError('');
      return true;
    }
  };

  const validateStateTwoChange = () => {
    const namePattern = /^[a-zA-Z\s.-]+$/;
    if (!namePattern.test(stateTwo)) {
      setStateTwoError('Please enter a valid State');
      return false;
    } else {
      setStateTwoError('');
      return true;
    }
  };

  const validateCityTwoChange = () => {
    const namePattern = /^[a-zA-Z\s.-]+$/;
    if (!namePattern.test(cityTwo)) {
      setCityTwoError('Please enter a valid Current City');
      return false;
    } else {
      setCityTwoError('');
      return true;
    }
  };

  const validatePincodeTwoChange = () => {
    const namePattern = /^\d{6}$/;
    if (!namePattern.test(pinCodeTwo)) {
      setPinCodeTwoError('Please enter a valid Current Pincode');
      return false;
    } else {
      setPinCodeTwoError('');
      return true;
    }
  };

  const _PersonnalDetails = async () => {
    const isValidfirst = validateFirstNameChange(firstName);
    const isValidlast = validateLastNameChange(lastName);
    const isValidworkEx = validateWorkExChange(workExperience);
    const isEmailId = validateEmailIDChange(emailId);
    const isValidAlMobileNo = validateAlMobileNoChange(alternateMobileNo);
    const isValidEmMobileNo = validateEmMobileNoChange(emergencyMobile);
    const isValidPermanentAddress =
      validatePermanentsAddressChange(permanentAddress);
    const isValidStateOne = validateStateOneChange(stateOne);
    const isValidCityOne = validateCityOneChange(cityOne);
    const isValidPincodeOne = validatePincodeOneChange(pinCodeOne);
    const isValidCurrentAddress = validateCurrentAddressChange(currentAddress);
    const isValidStateTwo = validateStateTwoChange(stateTwo);
    const isValidCityTwo = validateCityTwoChange(cityTwo);
    const isValidPincodeTwo = validatePincodeTwoChange(pinCodeTwo);
    const isvalidate = validdatebirth(date);
    const isvaligender = validrediobutton(gender);

    if (
      !isValidfirst ||
      !isValidlast ||
      !isValidworkEx ||
      !isEmailId ||
      !isValidAlMobileNo ||
      !isValidEmMobileNo ||
      !isValidPermanentAddress ||
      !isValidStateOne ||
      !isValidCityOne ||
      !isValidPincodeOne ||
      !isValidCurrentAddress ||
      !isValidStateTwo ||
      !isValidCityTwo ||
      !isValidPincodeTwo ||
      !isvaligender ||
      !isvalidate
    ) {
      setIsError(true);
      return;
    }
    setIsError(false);

    const personalobj = {
      firstName: firstName,
      lastName: lastName,
      DOB: date,
      workExperience: workExperience,
      email: emailId,
      gender: gender,
      alternateNumber: alternateMobileNo,
      emergencyNumber: emergencyMobile,
      currentAddress: {
        address: currentAddress,
        city: cityTwo,
        pin: Number(pinCodeTwo),
        state: stateTwo,
      },
      permanentAddress: {
        address: permanentAddress,
        city: cityOne,
        pin: Number(pinCodeOne),
        state: stateOne,
      },
    };
    const result = await _signUp(personalobj);
    if (result?.data) {
      setIsError(false);
      console.log('response data sign up---------------', result?.data);
    } else {
      setIsError(false);
      console.log('catch error signup------>>', result);
      SimpleToast({title: result?.response?.data?.message, isLong: true});
    }
  };

  {
    /* ==============================Verification======================== */
  }

  const [isUploadFrontImage, setIsUploadFrontImage] = useState(null);
  const [isUploadBacktImage, setIsUploadBacktImage] = useState(null);
  const [isUploadPanCardImage, setIsUploadPanCardImage] = useState(null);
  const [isUploadSelfieOneImage, setIsUploadSelfieOneImage] = useState(null);
  const [isUploadSelfieTwoImage, setIsUploadSelfieTwoImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState('');

  const pickUploadFrontImage = () => {
    ImagePicker.openPicker({
      width: responsiveWidth(40),
      height: responsiveHeight(18),
      cropping: true,
    })
      .then(image => {
        setSelectedImages([...selectedImages, image]);
        // _UploadImagesUsingFetch(image);
        setIsUploadFrontImage(image);
        // _UploadFrontImage(image);
      })
      .catch(error => {
        console.log('Error selecting image: ', error);
      });
  };

  const pickUploadBacktImage = () => {
    ImagePicker.openPicker({
      width: responsiveWidth(40),
      height: responsiveHeight(18),
      cropping: true,
    })
      .then(image => {
        // setSelectedImages(image);
        setSelectedImages([...selectedImages, image]);
        // _UploadImagesUsingFetch(image);
        setIsUploadBacktImage(image);
      })
      .catch(error => {
        console.log('Error selecting image: ', error);
      });
  };

  const pickUploadPanCartImage = () => {
    ImagePicker.openPicker({
      width: responsiveWidth(40),
      height: responsiveHeight(18),
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setIsUploadPanCardImage(image);
        setSelectedImages([...selectedImages, image]);
      })
      .catch(error => {
        console.log('Error selecting image: ', error);
      });
  };

  const pickSelfieOne = () => {
    ImagePicker.openCamera({
      width: responsiveWidth(40),
      height: responsiveHeight(18),
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setIsUploadSelfieOneImage(image);
        setSelectedImages([...selectedImages, image]);
      })
      .catch(error => {
        console.log('Error selecting image: ', error);
      });
  };

  const pickSelfieTwo = () => {
    ImagePicker.openCamera({
      width: responsiveWidth(40),
      height: responsiveHeight(18),
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setIsUploadSelfieTwoImage(image);
        setSelectedImages([...selectedImages, image]);
      })
      .catch(error => {
        console.log('Error taking image: ', error);
      });
  };

  const _UploadImagesUsingFetch = async () => {
    const formData = new FormData();
    SimpleToast({title: 'Please wait....', isLong: true});

    formData.append('aadharFront', {
      uri:
        Platform.OS === 'android'
          ? isUploadFrontImage.path
          : isUploadFrontImage.path.replace('file://', ''),
      type: isUploadFrontImage.mime,
      name: isUploadFrontImage?.path?.replace(/^.*[\\\/]/, ''),
    });

    formData.append('aadharBack', {
      uri:
        Platform.OS === 'android'
          ? isUploadBacktImage.path
          : isUploadBacktImage.path.replace('file://', ''),
      type: isUploadBacktImage.mime,
      name: isUploadBacktImage?.path?.replace(/^.*[\\\/]/, ''),
    });

    formData.append('pancard', {
      uri:
        Platform.OS === 'android'
          ? isUploadPanCardImage.path
          : isUploadPanCardImage.path.replace('file://', ''),
      type: isUploadPanCardImage.mime,
      name: isUploadPanCardImage?.path?.replace(/^.*[\\\/]/, ''),
    });

    formData.append('selfie1', {
      uri:
        Platform.OS === 'android'
          ? isUploadSelfieOneImage.path
          : isUploadSelfieOneImage.path.replace('file://', ''),
      type: isUploadSelfieOneImage.mime,
      name: isUploadSelfieOneImage?.path?.replace(/^.*[\\\/]/, ''),
    });

    formData.append('selfie2', {
      uri:
        Platform.OS === 'android'
          ? isUploadSelfieTwoImage.path
          : isUploadSelfieTwoImage.path.replace('file://', ''),
      type: isUploadSelfieTwoImage.mime,
      name: isUploadSelfieTwoImage?.path?.replace(/^.*[\\\/]/, ''),
    });

    // if (
    //   !isUploadFrontImage ||
    //   !isUploadBacktImage ||
    //   !isUploadPanCardImage ||
    //   !isUploadSelfieOneImage ||
    //   !isUploadSelfieTwoImage ||
    //   !selectedImages
    // ) {

    // } else {
    //   console.log('hey');
    // }

    const result = await _signdeliveryBoyDocs(formData);
    if (result?.data) {
      SimpleToast({title: result?.data?.message, isLong: true});
      console.log('image response data=============>>>>>>', result?.data);
    } else {
      console.log('image catch error>>>>>>>', result);
      SimpleToast({title: result?.response?.data?.message, isLong: true});
    }
  };

  {
    /* ==============================certification======================== */
  }

  const [checked, setChecked] = React.useState('Yes');
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [selectedFssai, setSelectedFssai] = React.useState(null);
  const [isvalidDLError, setIsvalidDLError] = useState(false);
  const [vehicleNo, setVehicleNo] = React.useState('');
  const [drivingLicenseNo, setDrivingLicenseNo] = React.useState('');
  const [expiryDL, setExpiryDL] = React.useState('');
  const [vehicleNoError, setVehicleNoError] = React.useState('');
  const [drivingLicenseNoError, setDrivingLicenseNoError] = React.useState('');
  const [expiryDLError, setExpiryDLError] = React.useState('');

  // console.log('selectedFile', selectedFile?.name);

  const validateVehicalNoChange = () => {
    const namePattern = /^[A-Z]{2}\s[0-9]{2}\s[A-Z]{2}\s[0-9]{4}$/;
    if (!namePattern.test(vehicleNo)) {
      setVehicleNoError('Please enter a valid Vehical No');
      return false;
    } else {
      setVehicleNoError('');
      return true;
    }
  };

  const validateDrivingLicenseNoChange = () => {
    const namePattern = /^[0-3][0-9]{7}$/;
    if (!namePattern.test(drivingLicenseNo)) {
      setDrivingLicenseNoError('Please enter a valid Driving License No');
      return false;
    } else {
      setDrivingLicenseNoError('');
      return true;
    }
  };

  const validateExpiryDLChange = () => {
    const namePattern = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
    if (!namePattern.test(expiryDL)) {
      setExpiryDLError('Please enter a valid Expiry date of DL');
      return false;
    } else {
      setExpiryDLError('');
      return true;
    }
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedFile(result[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        console.log('Error selecting document:', err);
      }
    }
  };

  const _Handle_Vehicle = async () => {
    const isValidVehicaleNo = validateVehicalNoChange(vehicleNo);
    const isValidDrivingLicenseNo =
      validateDrivingLicenseNoChange(drivingLicenseNo);
    const isValidExpirydateDL = validateExpiryDLChange(expiryDL);
    if (
      !isValidVehicaleNo ||
      !isValidDrivingLicenseNo ||
      !isValidExpirydateDL
    ) {
      setIsvalidDLError(true);
      return;
    }
    setIsvalidDLError(false);

    const formData = new FormData();

    formData.append('vehicle_Number', vehicleNo);
    formData.append('license_Number', drivingLicenseNo);
    formData.append('expiry_Date', expiryDL);

    formData.append('image', {
      fileCopyUri: selectedFile?.fileCopyUri,
      uri: selectedFile?.uri,
      type: 'image/jpeg',
      size: selectedFile?.size,
      name: selectedFile?.name,
    });

    const result = await _VehicleDetails(formData);
    if (result?.data) {
      console.log('vehicle Details response---->>', result?.data?.message);
      SimpleToast({title: result?.data?.message, isLong: true});
    } else {
      console.log('vehicle catch error', result?.data);
    }
  };

  {
    /* ==============================Bank Details======================== */
  }

  const [onBankName, setOnBankName] = useState('');
  const [onBankNumber, setOnBankNumber] = useState('');
  const [onIfscCode, setOnIfscCode] = useState('');
  const [onAccountHolder, setOnAccountHolder] = useState('');
  const [onUpiId, setOnUpiId] = useState('');
  const [isBankError, setIsBankError] = useState('');
  const [onBankNameError, setOnBankNameError] = useState('');
  const [onBankNumberError, setOnBankNumberError] = useState('');
  const [onAccountHolderError, setOnAccountHolderError] = useState('');
  const [onIfscCodeError, setOnIfscCodeError] = useState('');
  const [onUpiIdError, setOnUpiIdError] = useState('');

  const validateBankNameChange = () => {
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(onBankName)) {
      setOnBankNameError('Please enter a valid Bank Name');
      return false;
    } else {
      setOnBankNameError('');
      return true;
    }
  };

  const validateBankNumberChange = () => {
    const namePattern = /^\d{12}$/;
    if (!namePattern.test(onBankNumber)) {
      setOnBankNumberError('Please enter a valid Bank Account No');
      return false;
    } else {
      setOnBankNumberError('');
      return true;
    }
  };

  const validateHolderNameChange = () => {
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(onAccountHolder)) {
      setOnAccountHolderError('Please enter a valid Bank Holder Name');
      return false;
    } else {
      setOnAccountHolderError('');
      return true;
    }
  };

  const validateIFSCCodeChange = () => {
    const namePattern = /[a-zA-Z0-9]+/;
    if (!namePattern.test(onIfscCode)) {
      setOnIfscCodeError('Please enter a valid IFSC Code');
      return false;
    } else {
      setOnIfscCodeError('');
      return true;
    }
  };

  const validateUpiIDChange = () => {
    const namePattern = /[a-zA-Z0-9]+/;
    if (!namePattern.test(onUpiId)) {
      setOnUpiIdError('Please enter a valid UPI ID');
      return false;
    } else {
      setOnUpiIdError('');
      return true;
    }
  };

  const _BankDetailsHandle = async () => {
    const isValidbankName = validateBankNameChange(onBankName);
    const isvalidbankNumber = validateBankNumberChange(onBankNumber);
    const isValidholdername = validateHolderNameChange(onAccountHolder);
    const isValidIfsccode = validateIFSCCodeChange(onIfscCode);
    const isValidUpiId = validateUpiIDChange(onUpiId);
    if (
      !isValidbankName ||
      !isvalidbankNumber ||
      !isValidholdername ||
      !isValidIfsccode ||
      !isValidUpiId
    ) {
      setIsBankError(true);
      return;
    }
    setIsBankError(false);

    const bankdetalsobj = {
      bankName: onBankName,
      accountNumber: onBankNumber,
      accountHolder: onAccountHolder,
      ifscCode: onIfscCode,
      upi: onUpiId,
    };

    const result = await _BankDetails(bankdetalsobj);
    if (result?.data) {
      AsyncStorage.removeItem('isNew');
      // navigation.navigate(Routes.BOTTOM_TAB_BAR);
      SimpleToast({title: result?.data?.message, isLong: true});
      setModalVisibleone(true);
    } else {
      console.log('back catch error:', result?.data);
      SimpleToast({title: result?.response?.data?.message, isLong: true});
    }
  };

  return (
    <SafeAreaView style={Styles.CONTAINERMAIN}>
      <CustomStatusBar />
      <MyHeader
        title={'Registration Details'}
        onPress={() => navigation.goBack()}
      />
      <Text style={Styles.HEADTITLE1}>
        Fill the details to complete your Profile
      </Text>
      <View style={{flex: 1}}>
        {/* ==============================Personal Details======================== */}
        <ProgressSteps
          {...progressStepsStyle}
          marginBottom={40}
          topOffset={20}
          labelFontSize={12}
          borderWidth={3}>
          <ProgressStep
            onNext={_PersonnalDetails}
            nextBtnStyle={Styles.btnstyles}
            nextBtnTextStyle={Styles.btntextstyles}
            errors={isError}
            previousBtnDisabled={false}
            label="Personal Details">
            <View style={{}}>
              <View style={Styles.TEXTMAINBOX}>
                <Text style={Styles.FIRSTNAMETITLE}>First Name</Text>
                <Text style={[Styles.FIRSTNAMETITLE, {right: widthPixel(95)}]}>
                  Last Name
                </Text>
              </View>

              <View style={Styles.TEXTMAINBOX}>
                <View style={{width: widthPixel(170)}}>
                  <TextInput
                    placeholder="First name"
                    placeholderTextColor={COLORS.GRAYDARK}
                    // style={Styles.INPUONE}
                    style={{
                      borderWidth: 1,
                      paddingHorizontal: 10,
                      borderRadius: 5,
                      color: COLORS.BLACK,
                    }}
                    value={firstName}
                    onChangeText={text => setFirstName(text)}
                  />
                  {firstNameError ? (
                    <Text style={Styles.ERRORTEXT}>{firstNameError}</Text>
                  ) : null}
                </View>

                <View style={{width: widthPixel(170)}}>
                  <TextInput
                    placeholder="Last name"
                    placeholderTextColor={COLORS.DARK_GRAY}
                    // style={Styles.INPUONE}
                    style={{
                      borderWidth: 1,
                      paddingHorizontal: 10,
                      borderRadius: 5,
                      color: COLORS.BLACK,
                    }}
                    value={lastName}
                    onChangeText={text => setLastName(text)}
                  />
                  {lastNameError ? (
                    <Text style={Styles.ERRORTEXT}>{lastNameError}</Text>
                  ) : null}
                </View>
              </View>

              <View style={{marginHorizontal: 20, marginTop: 5}}>
                <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
                  Date of Birth
                </Text>
                <View style={Styles.DATEOFBIRTHSTYL}>
                  <View style={Styles.DATEBOXROW}>
                    <Text style={{color: COLORS.BLACK}}>{date}</Text>
                    <TouchableOpacity
                      style={{alignItems: 'center', justifyContent: 'center'}}
                      onPress={showDatePicker}>
                      <FontAwesome
                        title={'calendar-alt'}
                        size={30}
                        IconColor={COLORS.PINK}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {dateError ? (
                  <Text style={Styles.ERRORTEXT}>{dateError}</Text>
                ) : null}
              </View>

              <View>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  maximumDate={new Date()}
                />
              </View>
              <View style={{marginHorizontal: 20, marginTop: 15}}>
                <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
                  Gender
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    onPress={() => setGender('male')}
                    style={{flexDirection: 'row'}}>
                    <RadioButton
                      name="male"
                      value="male"
                      status={gender === 'male' ? 'checked' : 'unchecked'}
                      onPress={() => setGender('male')}
                    />
                    <Text
                      style={{top: 10, fontWeight: '500', color: COLORS.BLACK}}>
                      Male
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setGender('female')}
                    style={{flexDirection: 'row'}}>
                    <RadioButton
                      name="female"
                      value="female"
                      status={gender === 'female' ? 'checked' : 'unchecked'}
                      onPress={() => setGender('female')}
                    />
                    <Text
                      style={{top: 10, fontWeight: '500', color: COLORS.BLACK}}>
                      Female
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{marginHorizontal: 20, marginTop: 15}}>
                <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
                  Work Experience
                </Text>
                <TextInput
                  placeholder="Work Experience"
                  placeholderTextColor={COLORS.GRAYDARK}
                  style={Styles.INPUTSTYLES}
                  value={workExperience}
                  onChangeText={text => setWorkExperience(text)}
                />
                {workExperienceError ? (
                  <Text style={Styles.ERRORTEXT}>{workExperienceError}</Text>
                ) : null}
              </View>
              <View style={{marginHorizontal: 20, marginTop: 15}}>
                <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
                  E-mail ID
                </Text>
                <TextInput
                  placeholder="E-mail ID"
                  placeholderTextColor={COLORS.GRAYDARK}
                  style={Styles.INPUTSTYLES}
                  value={emailId}
                  onChangeText={text => setEmailId(text)}
                />
                {emailIdError ? (
                  <Text style={Styles.ERRORTEXT}>{emailIdError}</Text>
                ) : null}
              </View>
              <View style={{marginHorizontal: 20, marginTop: 15}}>
                <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
                  Mobile Number
                </Text>
                {/* <TextInput
                  placeholder="Mobile Number"
                  placeholderTextColor={COLORS.GRAYDARK}
                  maxLength={10}
                  style={Styles.INPUTSTYLES}
                  value={mobileNo}
                  keyboardType="number-pad"
                  onChangeText={text => setMobileNo(text)}
                /> */}
                <View style={[Styles.INPUTSTYLES, {paddingVertical: 15}]}>
                  <Text
                    style={{
                      color: COLORS.BLACK,
                      fontWeight: 'bold',
                      letterSpacing: 0.6,
                    }}>
                    {phoneNumber}
                  </Text>
                </View>
              </View>
              <View style={{marginHorizontal: 20, marginTop: 15}}>
                <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
                  Alternate Mobile Number
                </Text>
                <TextInput
                  placeholder="Alternate Mobile Number"
                  placeholderTextColor={COLORS.GRAYDARK}
                  style={Styles.INPUTSTYLES}
                  value={alternateMobileNo}
                  maxLength={10}
                  keyboardType="number-pad"
                  onChangeText={text => setalternateMobileNo(text)}
                />
                {mobileAlNoError ? (
                  <Text style={Styles.ERRORTEXT}>{mobileAlNoError}</Text>
                ) : null}
              </View>
              <View style={{marginHorizontal: 20, marginTop: 15}}>
                <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
                  Emergency Mobile Number
                </Text>
                <TextInput
                  placeholder="Emergency Mobile Number"
                  placeholderTextColor={COLORS.GRAYDARK}
                  style={Styles.INPUTSTYLES}
                  value={emergencyMobile}
                  maxLength={10}
                  keyboardType="number-pad"
                  onChangeText={text => setEmergencyMobile(text)}
                />
                {emergencyMobileError ? (
                  <Text style={Styles.ERRORTEXT}>{emergencyMobileError}</Text>
                ) : null}
              </View>
              <View style={{marginHorizontal: 20, marginTop: 15}}>
                <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
                  Permanent Address
                </Text>
                <TextInput
                  placeholder="Permanent Address"
                  placeholderTextColor={COLORS.GRAYDARK}
                  style={Styles.INPUTSTYLES}
                  value={permanentAddress}
                  onChangeText={text => setPermanentAddress(text)}
                />
                {permanentAddressError ? (
                  <Text style={Styles.ERRORTEXT}>{permanentAddressError}</Text>
                ) : null}
              </View>
              <View style={{marginHorizontal: 20, marginTop: 15}}>
                <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
                  State
                </Text>
                <TextInput
                  placeholder="State"
                  placeholderTextColor={COLORS.GRAYDARK}
                  style={Styles.INPUTSTYLES}
                  value={stateOne}
                  onChangeText={text => setStateOne(text)}
                />
                {stateOneError ? (
                  <Text style={Styles.ERRORTEXT}>{stateOneError}</Text>
                ) : null}
              </View>
              <View style={Styles.TEXTMAINBOX}>
                <Text style={Styles.FIRSTNAMETITLE}>City</Text>
                <Text style={[Styles.FIRSTNAMETITLE, {right: widthPixel(95)}]}>
                  Pincode
                </Text>
              </View>
              <View style={Styles.TEXTMAINBOX}>
                <View style={{width: widthPixel(170)}}>
                  <TextInput
                    placeholder="City"
                    placeholderTextColor={COLORS.GRAYDARK}
                    // style={Styles.INPUONE}
                    style={{
                      borderWidth: 1,
                      paddingHorizontal: 10,
                      borderRadius: 5,
                      color: COLORS.BLACK,
                    }}
                    value={cityOne}
                    maxLength={6}
                    onChangeText={text => setCityOne(text)}
                  />
                  {cityOneError ? (
                    <Text style={Styles.ERRORTEXT}>{cityOneError}</Text>
                  ) : null}
                </View>
                <View style={{width: widthPixel(170)}}>
                  <TextInput
                    placeholder="Pincode"
                    placeholderTextColor={COLORS.DARK_GRAY}
                    // style={Styles.INPUONE}
                    style={{
                      borderWidth: 1,
                      paddingHorizontal: 10,
                      borderRadius: 5,
                      color: COLORS.BLACK,
                    }}
                    value={pinCodeOne}
                    maxLength={6}
                    keyboardType="number-pad"
                    onChangeText={text => setPinCodeOne(text)}
                  />
                  {pinCodeOneError ? (
                    <Text style={Styles.ERRORTEXT}>{pinCodeOneError}</Text>
                  ) : null}
                </View>
              </View>
              <View style={{marginHorizontal: 20, marginTop: 15}}>
                <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
                  Current Address
                </Text>
                <TextInput
                  placeholder="Current Address"
                  placeholderTextColor={COLORS.GRAYDARK}
                  style={Styles.INPUTSTYLES}
                  value={currentAddress}
                  onChangeText={text => setCurrentAddress(text)}
                />
                {currentAddressError ? (
                  <Text style={Styles.ERRORTEXT}>{currentAddressError}</Text>
                ) : null}
              </View>
              <View style={{marginHorizontal: 20, marginTop: 15}}>
                <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
                  State
                </Text>
                <TextInput
                  placeholder="State"
                  placeholderTextColor={COLORS.GRAYDARK}
                  style={Styles.INPUTSTYLES}
                  value={stateTwo}
                  onChangeText={text => setStateTwo(text)}
                />
                {stateTwoError ? (
                  <Text style={Styles.ERRORTEXT}>{stateTwoError}</Text>
                ) : null}
              </View>
              <View style={Styles.TEXTMAINBOX}>
                <Text style={Styles.FIRSTNAMETITLE}>City</Text>
                <Text style={[Styles.FIRSTNAMETITLE, {right: widthPixel(95)}]}>
                  Pincode
                </Text>
              </View>
              <View style={Styles.TEXTMAINBOX}>
                <View style={{width: widthPixel(170)}}>
                  <TextInput
                    placeholder="City"
                    placeholderTextColor={COLORS.GRAYDARK}
                    // style={Styles.INPUONE}
                    style={{
                      borderWidth: 1,
                      borderRadius: 5,
                      paddingHorizontal: 10,
                      color: COLORS.BLACK,
                    }}
                    value={cityTwo}
                    onChangeText={text => setCityTwo(text)}
                  />
                  {cityTwoError ? (
                    <Text style={Styles.ERRORTEXT}>{cityTwoError}</Text>
                  ) : null}
                </View>
                <View style={{width: widthPixel(170)}}>
                  <TextInput
                    placeholder="Pincode"
                    placeholderTextColor={COLORS.DARK_GRAY}
                    // style={Styles.INPUONE}
                    style={{
                      borderWidth: 1,
                      borderRadius: 5,
                      paddingHorizontal: 10,
                      color: COLORS.BLACK,
                    }}
                    value={pinCodeTwo}
                    maxLength={6}
                    keyboardType="number-pad"
                    onChangeText={text => setPinCodeTwo(text)}
                  />
                  {pinCodeTwoError ? (
                    <Text style={Styles.ERRORTEXT}>{pinCodeTwoError}</Text>
                  ) : null}
                </View>
              </View>
            </View>
          </ProgressStep>
          {/* ==============================Verification======================== */}
          <ProgressStep
            nextBtnStyle={Styles.btnstyles}
            nextBtnTextStyle={Styles.btntextstyles}
            previousBtnStyle={Styles.btnstyles}
            previousBtnTextStyle={Styles.btntextstyles}
            // previousBtnDisabled={true}
            onNext={_UploadImagesUsingFetch}
            label="Verification">
            <View>
              <Text style={Styles.UPLOADAADHARTEXT}>Upload Aadhar Card</Text>
              <View style={Styles.UPLOADROW}>
                <View>
                  {isUploadFrontImage ? (
                    <Image
                      source={{uri: isUploadFrontImage.path}}
                      style={Styles.image}
                    />
                  ) : (
                    <TouchableOpacity
                      onPress={pickUploadFrontImage}
                      style={Styles.CAMERABTN}>
                      <Icon color={'#000'} name="camera" size={40} />
                    </TouchableOpacity>
                  )}
                  <Text style={Styles.FONTIMAGETEXT}>Upload Front Image</Text>
                </View>
                <View>
                  {isUploadBacktImage ? (
                    <Image
                      source={{uri: isUploadBacktImage.path}}
                      style={Styles.image}
                    />
                  ) : (
                    <TouchableOpacity
                      onPress={pickUploadBacktImage}
                      style={Styles.CAMERABTN}>
                      <Icon color={'#000'} name="camera" size={40} />
                    </TouchableOpacity>
                  )}

                  <Text style={Styles.FONTIMAGETEXT}>Upload Back Image</Text>
                </View>
              </View>
              <Text
                style={[
                  Styles.UPLOADAADHARTEXT,
                  {marginBottom: 10, paddingHorizontal: 5},
                ]}>
                Upload Pan Card
              </Text>
              <View>
                {isUploadPanCardImage ? (
                  <Image
                    source={{uri: isUploadPanCardImage.path}}
                    style={Styles.image}
                  />
                ) : (
                  <TouchableOpacity
                    onPress={pickUploadPanCartImage}
                    style={[Styles.CAMERABTN, {marginHorizontal: 10}]}>
                    <Icon color={'#000'} name="camera" size={40} />
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={Styles.UPLOADAADHARTEXT}>Upload Selfie One</Text>
                <Text
                  style={[
                    Styles.UPLOADAADHARTEXT,
                    {marginRight: widthPixel(50)},
                  ]}>
                  Upload Selfie
                </Text>
              </View>
              <View style={Styles.UPLOADROW}>
                <View>
                  <View>
                    {isUploadSelfieOneImage ? (
                      <Image
                        source={{uri: isUploadSelfieOneImage.path}}
                        style={Styles.image}
                      />
                    ) : (
                      <TouchableOpacity
                        onPress={pickSelfieOne}
                        style={Styles.CAMERABTN}>
                        <Icon color={'#000'} name="camera" size={40} />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>

                <View>
                  {isUploadSelfieTwoImage ? (
                    <Image
                      source={{uri: isUploadSelfieTwoImage.path}}
                      style={Styles.image}
                    />
                  ) : (
                    <TouchableOpacity
                      onPress={pickSelfieTwo}
                      style={Styles.CAMERABTN}>
                      <Icon color={'#000'} name="camera" size={40} />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          </ProgressStep>
          {/* ==============================certification======================== */}
          <ProgressStep
            // onNext={
            //   checked == 'Yes'
            //     ? false
            //     : checked == 'No'
            //     ? true
            //     : checked == 'Yes'
            //     ? _Handle_Vehicle
            //     : null
            // }
            errors={isvalidDLError}
            onNext={_Handle_Vehicle}
            nextBtnStyle={Styles.btnstyles}
            nextBtnTextStyle={Styles.btntextstyles}
            previousBtnStyle={Styles.btnstyles}
            previousBtnTextStyle={Styles.btntextstyles}
            label="certification">
            <View style={{}}>
              <View style={{alignItems: 'center'}}>
                <Text style={Styles.HEADTITLE}>
                  Do you have your own vehicle?
                </Text>
              </View>

              <View style={Styles.MAINBOXHEAD}>
                <View style={Styles.BOXHEAD}>
                  <RadioButton
                    value="Yes"
                    status={checked === 'Yes' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('Yes')}
                  />
                  <Text
                    style={{
                      color: COLORS.BLACK,
                      fontSize: 16,
                      fontWeight: '500',
                    }}>
                    Yes
                  </Text>
                </View>
                <View style={Styles.RADIOBOX}>
                  <RadioButton
                    value="No"
                    status={checked === 'No' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('No')}
                  />
                  <Text
                    style={{
                      color: COLORS.BLACK,
                      fontSize: 16,
                      fontWeight: '500',
                    }}>
                    No
                  </Text>
                </View>
              </View>

              {checked === 'Yes' ? (
                <View>
                  <View style={{marginHorizontal: 20, marginTop: 15}}>
                    <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
                      Enter your Vehicle Number
                    </Text>
                    <TextInput
                      placeholder="Enter your Vehicle Number"
                      placeholderTextColor={COLORS.GRAYDARK}
                      style={Styles.TEXTINPUT}
                      maxLength={10}
                      keyboardType="number-pad"
                      value={vehicleNo}
                      onChangeText={text => setVehicleNo(text)}
                    />
                    {vehicleNoError ? (
                      <Text style={Styles.ERRORTEXT}>{vehicleNoError}</Text>
                    ) : null}
                  </View>
                  <View style={{marginHorizontal: 20, marginTop: 15}}>
                    <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
                      Driving License Number
                    </Text>
                    <TextInput
                      placeholder="Driving License Number"
                      placeholderTextColor={COLORS.GRAYDARK}
                      style={Styles.TEXTINPUT}
                      value={drivingLicenseNo}
                      maxLength={16}
                      onChangeText={text => setDrivingLicenseNo(text)}
                    />
                    {drivingLicenseNoError ? (
                      <Text style={Styles.ERRORTEXT}>
                        {drivingLicenseNoError}
                      </Text>
                    ) : null}
                  </View>
                  <Text style={Styles.uploadText}>Upload Driving Licens</Text>
                  <View style={Styles.DRIVINGBOX}>
                    <TouchableOpacity
                      onPress={pickDocument}
                      activeOpacity={0.6}
                      style={Styles.BTNCHOOSEFILE}>
                      <Text style={Styles.CHOOSETEXT}>Choose a File</Text>
                    </TouchableOpacity>
                    <Text
                      numberOfLines={1}
                      style={[
                        Styles.CHOOSETEXT,
                        {paddingLeft: 10, width: widthPixel(250)},
                      ]}>
                      {selectedFile?.name}
                    </Text>

                    {selectedFssai && (
                      <View style={Styles.FILENAMESTYL}>
                        <Text
                          style={{
                            fontSize: 16,
                          }}
                          numberOfLines={1}>
                          File Name: {selectedFssai.name}
                        </Text>
                      </View>
                    )}
                  </View>
                  <View style={{marginHorizontal: 20, marginTop: 15}}>
                    <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
                      Expiry Date of DL
                    </Text>
                    <TextInput
                      placeholder="Enter your Expiry Date of DL"
                      placeholderTextColor={COLORS.GRAYDARK}
                      style={Styles.TEXTINPUT}
                      value={expiryDL}
                      onChangeText={text => setExpiryDL(text)}
                    />
                    {expiryDLError ? (
                      <Text style={Styles.ERRORTEXT}>{expiryDLError}</Text>
                    ) : null}
                  </View>
                </View>
              ) : checked === 'No' ? (
                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: fontPixel(25),
                      color: COLORS.BLACK,
                    }}>
                    No
                  </Text>
                </View>
              ) : null}
              {/* -----------------------------Upload Driving Licens-------------------- */}
            </View>
          </ProgressStep>
          {/* ==============================Bank Details======================== */}
          <ProgressStep
            onSubmit={_BankDetailsHandle}
            nextBtnStyle={Styles.btnstyles}
            nextBtnTextStyle={Styles.btntextstyles}
            previousBtnStyle={Styles.btnstyles}
            previousBtnTextStyle={Styles.btntextstyles}
            errors={isBankError}
            label="Bank Details">
            <View style={{marginHorizontal: 5}}>
              <Text style={Styles.BANKTEXT}>Name of Bank</Text>
              <TextInput
                placeholder="Bank Name"
                placeholderTextColor={COLORS.GRAYDARK}
                style={Styles.BANKINPUT}
                onChangeText={text => setOnBankName(text)}
                value={onBankName}
              />
              {onBankNameError ? (
                <Text style={[Styles.ERRORTEXT, {paddingLeft: 10}]}>
                  {onBankNameError}
                </Text>
              ) : null}
              <Text style={Styles.BANKTEXT}>Bank Account Number</Text>
              <TextInput
                style={Styles.BANKINPUT}
                placeholder="Bank Account Number"
                placeholderTextColor={COLORS.GRAYDARK}
                keyboardType="number-pad"
                maxLength={12}
                onChangeText={text => setOnBankNumber(text)}
                value={onBankNumber}
              />
              {onBankNumberError ? (
                <Text style={[Styles.ERRORTEXT, {paddingLeft: 10}]}>
                  {onBankNumberError}
                </Text>
              ) : null}
              <Text style={Styles.BANKTEXT}>Account Holder Name</Text>
              <TextInput
                placeholder="Account Holder Name"
                placeholderTextColor={COLORS.GRAYDARK}
                style={Styles.BANKINPUT}
                onChangeText={text => setOnAccountHolder(text)}
                value={onAccountHolder}
              />
              {onAccountHolderError ? (
                <Text style={[Styles.ERRORTEXT, {paddingLeft: 10}]}>
                  {onAccountHolderError}
                </Text>
              ) : null}
              <Text style={Styles.BANKTEXT}>IFSC Code</Text>
              <TextInput
                placeholder="FSC Code"
                placeholderTextColor={COLORS.GRAYDARK}
                style={Styles.BANKINPUT}
                onChangeText={text => setOnIfscCode(text)}
                value={onIfscCode}
              />
              {onIfscCodeError ? (
                <Text style={[Styles.ERRORTEXT, {paddingLeft: 10}]}>
                  {onIfscCodeError}
                </Text>
              ) : null}
              <Text style={Styles.ORSTYLES}>OR</Text>
              <View style={Styles.UIPBOXMAIN}>
                <Text style={Styles.UPITEXT}>Enter UPI ID</Text>
                <View style={Styles.UPIBOX}>
                  <TextInput
                    placeholder="ex.mobilenumber@upi"
                    keyboardType="email-address"
                    style={Styles.UPIINPUTID}
                    onChangeText={text => setOnUpiId(text)}
                    value={onUpiId}
                  />
                  <TouchableOpacity style={Styles.UPIVERIFYBTN}>
                    <Text style={Styles.UPIBTNTEXT}>Verify</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
      <Toast />
      <Modal
        transparent={true}
        isVisible={modalVisibleone}
        animationInTiming={1000}
        animationOutTiming={1000}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}
        onRequestClose={() => {
          setModalVisibleone(false);
        }}>
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <Lottie
              source={require('../Assets/Lottie_json/Animation - 1698644964119.json')}
              autoPlay
              loop={true}
              style={{height: heightPixel(200)}}
            />
            <Text style={Styles.Modalsubtext}>
              Your Application is under review
            </Text>
            <Text style={Styles.Modaltext}>
              Your Application has been submitted & will be reviewed by our
              team. You will be notified if any extra information in needed
            </Text>
            <TouchableOpacity
              onPress={() => navigation.replace(Routes.LOGIN_ACCOUNT)}
              style={{
                backgroundColor: COLORS.PINK,
                paddingVertical: 10,
                alignItems: 'center',
                top: heightPixel(15),
                width: widthPixel(100),
                alignSelf: 'center',
                borderRadius: 4,
              }}>
              <Text
                style={{color: COLORS.WHITE, fontSize: 14, fontWeight: '500'}}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  CONTAINERMAIN: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  btnstyles: {
    backgroundColor: COLORS.PINK,
    borderRadius: 5,
    width: widthPixel(100),
    height: heightPixel(45),
    alignItems: 'center',
    justifyContent: 'center',
    // left: '35%',
    top: 10,
  },
  btntextstyles: {
    color: COLORS.WHITE,
    fontWeight: '500',
    fontSize: 14,
  },
  HEADTITLE1: {
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  TEXTMAINBOX: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  INPUONE: {
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    paddingHorizontal: 15,
    backgroundColor: COLORS.WHITE,
    borderRadius: 4,
    width: '45%',
    height: '90%',
    color: COLORS.BLACK,
  },
  FIRSTNAMETITLE: {color: COLORS.BLACK, fontWeight: 'bold'},
  DATEOFBIRTHSTYL: {
    height: 45,
    borderWidth: 1,
    borderColor: COLORS.GRAYDARK,
    borderRadius: 4,
    marginTop: 5,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
  },
  DATEBOXROW: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    alignItems: 'center',
  },
  INPUTSTYLES: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 4,
    paddingHorizontal: 15,
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLACK,
    marginVertical: 5,
  },
  HEADTITLE: {
    color: COLORS.BLACK,
    fontSize: fontPixel(20),
    fontWeight: '500',
  },
  MAINBOXHEAD: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  BOXHEAD: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  RADIOBOX: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  TEXTINPUT: {
    borderWidth: 1,
    borderColor: COLORS.GRAYDARK,
    borderRadius: 4,
    paddingHorizontal: 15,
    backgroundColor: COLORS.WHITE,
    marginTop: 7,
    color: COLORS.BLACK,
  },
  uploadText: {
    color: COLORS.BLACK,
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'left',
    paddingVertical: 5,
    marginTop: 15,
    marginHorizontal: 20,
  },
  DRIVINGBOX: {
    backgroundColor: '#fff',
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 4,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    alignItems: 'center',
  },
  BTNCHOOSEFILE: {
    width: responsiveWidth(25),
    // paddingVertical: 12,
    height: heightPixel(40),
    alignSelf: 'center',
    marginLeft: 10,
    justifyContent: 'center',
    borderRadius: 2,
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
  },
  CHOOSETEXT: {
    color: COLORS.BLACK,
    fontWeight: 'bold',
    fontSize: 12,
  },
  FILENAMESTYL: {
    width: responsiveWidth(60),
    height: responsiveHeight(5),
    alignSelf: 'center',
    marginLeft: 10,
    justifyContent: 'center',
  },
  BANKTEXT: {
    color: COLORS.BLACK,
    fontWeight: '500',
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  BANKINPUT: {
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 10,
    height: 50,
    borderRadius: 4,
    paddingLeft: 8,
    color: '#000',
    elevation: 2,
  },
  UPITEXT: {
    color: COLORS.BLACK,
    fontWeight: '500',
    fontSize: 12,
    textAlign: 'left',
    paddingVertical: 5,
    marginLeft: 2,
  },
  ORSTYLES: {
    color: COLORS.BLACK,
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
    paddingVertical: 10,
  },
  UIPBOXMAIN: {
    width: responsiveWidth(92),
    height: responsiveHeight(10),
    alignSelf: 'center',
  },
  UPIBOX: {
    width: responsiveWidth(92),
    height: responsiveHeight(6),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  UPIVERIFYBTN: {
    backgroundColor: COLORS.PINK,
    width: responsiveWidth(20),
    height: responsiveHeight(4),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  UPIBTNTEXT: {
    color: COLORS.BLACK,
    fontWeight: 'bold',
    fontSize: 12,
    // textAlign: 'center',
    color: '#fff',
  },
  UPIINPUTID: {
    backgroundColor: COLORS.WHITE,
    height: responsiveHeight(5),
    width: responsiveWidth(70),
    borderRadius: 4,
    paddingLeft: 8,
    color: COLORS.BLACK,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    fontSize: responsiveFontSize(1.5),
  },
  image: {
    width: responsiveWidth(40),
    height: responsiveHeight(18),
    borderRadius: 8,
  },
  UPLOADAADHARTEXT: {
    color: 'black',
    marginTop: 12,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.8),
    marginLeft: 12,
  },
  UPLOADROW: {
    flexDirection: 'row',
    width: responsiveWidth(95),
    height: responsiveHeight(22),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    justifyContent: 'space-between',
  },
  CAMERABTN: {
    width: responsiveWidth(40),
    height: responsiveHeight(18),
    // alignSelf: 'center',
    backgroundColor: '#545454',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FONTIMAGETEXT: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.5),
  },
  ERRORTEXT: {
    color: 'red',
    marginTop: 5,
    fontSize: fontPixel(14),
    fontWeight: '500',
  },
  modalView: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 7,
    padding: 25,
    shadowColor: '#000',
    shadowRadius: 4,
    elevation: 5,
  },
  Modalsubtext: {
    color: COLORS.BLACK,
    alignSelf: 'center',
    fontWeight: '500',
  },
  Modaltext: {
    color: COLORS.GRAY,
    fontWeight: '500',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
  },
});

const progressStepsStyle = {
  activeStepIconBorderColor: COLORS.PINK,
  activeLabelColor: COLORS.PINK,
  activeStepNumColor: COLORS.WHITE,
  activeStepIconColor: COLORS.PURPLE,
  completedStepIconColor: COLORS.PURPLE,
  completedProgressBarColor: COLORS.PURPLE,
  completedCheckColor: '#4bb543',
  labelColor: COLORS.BLACK,
  completedLabelColor: COLORS.PURPLE,
};
