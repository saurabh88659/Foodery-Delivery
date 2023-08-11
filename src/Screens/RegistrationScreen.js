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
import {
  BASE_URL,
  CustomStatusBar,
  FontAwesome,
  SimpleToast,
} from '../utils/Const';
import MyHeader from '../Components/MyHeader';
import {COLORS} from '../utils/Colors';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Entypo';
import Toast from 'react-native-toast-message';

import {RadioButton} from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import axios from 'axios';
import {_getStorage} from '../utils/Storage';

export default function RegistrationScreen({navigation, route}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
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

  const phoneNumber = route.params;

  console.log('phoneNumber--------------', phoneNumber);

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
    const namePattern = /^[A-Za-z\s]+$/;
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
    const namePattern = /^(?=.*[a-zA-Z])(?=.*\d)/;
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
    const namePattern = /^(?=.*[a-zA-Z])(?=.*\d)/;
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

  const showToast = () => {
    Toast.show({
      type: 'error',
      text1: `${
        firstNameError ||
        lastNameError ||
        workExperienceError ||
        emailIdError ||
        mobileAlNoError ||
        emergencyMobileError ||
        permanentAddressError ||
        stateOneError ||
        cityOneError ||
        pinCodeOneError ||
        currentAddressError ||
        stateTwoError ||
        cityTwoError ||
        pinCodeTwoError
      }`,
      text2: 'This is some something 👋',
    });
  };

  const _PersonnalDetails = async () => {
    const token = await _getStorage('token');
    console.log('token----------', token);
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
      !isValidPincodeTwo
    ) {
      setIsError(true);
      showToast();
      // return;
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
    console.log('personalobj-------------->>>', personalobj);

    axios
      .put(BASE_URL + `/signUpDeliveryApp`, personalobj, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(response => {
        // setIsError(false);
        console.log('response data sign up', response?.data);
      })
      .catch(error => {
        // setIsError(true);
        console.log(
          'catch error signup------>>',
          error?.response?.data?.message,
        );
      });
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

  // console.log('selectedImages------------', selectedImages);

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
    ImagePicker.openPicker({
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
    ImagePicker.openPicker({
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

  const _UploadFrontImage = async data => {
    const token = await _getStorage('token');
    var filename = data?.path?.replace(/^.*[\\\/]/, '');

    const selectedImages = new FormData();

    console.log('selectedImages-==========', selectedImages._parts);

    imageFrontIamge.append('image', {
      name: filename,
      type: data.mime,
      uri:
        Platform.OS === 'android'
          ? data.path
          : data.path.replace('file://', ''),
    });
    imageFrontIamge.append('uploadFor', 'verification.aadharFront');

    axios
      .put(BASE_URL + `/deliveryBoyDocs`, imageFrontIamge, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => {
        console.log('result', res.data);
        SimpleToast({
          title: 'Image Updated Successfully For verification Selfie Tow',
          isLong: true,
        });
      })
      .catch(error => {
        console.log('error in catch', error);
      });
  };

  const _UploadImagesUsingFetch = async () => {
    const formData = new FormData();
    const token = await _getStorage('token');

    selectedImages.forEach((uri, index) => {
      formData.append('images', {
        uri:
          Platform.OS === 'android'
            ? uri.path
            : uri.path.replace('file://', ''),
        type: uri.mime,
        name: uri?.path?.replace(/^.*[\\\/]/, ''),
      });
    });

    console.log('formData============', formData);

    // axios
    //   .put(BASE_URL + `/deliveryBoyDocs`, formData, {
    //     headers: {Authorization: `Bearer ${token}`},
    //   })
    //   .then(response => {
    //     console.log('image response data', response);
    //   })
    //   .catch(error => {
    //     console.log('image catch error', error);
    //   });

    try {
      const response = await fetch(BASE_URL + `/deliveryBoyDocs`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        headers: {Authorization: `Bearer ${token}`},
        body: formData,
      });

      const responseData = await response;
      console.log('Upload response:', responseData);
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  {
    /* ==============================certification======================== */
  }

  const [checked, setChecked] = React.useState('Yes');
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [selectedFssai, setSelectedFssai] = React.useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedFile(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        console.log('Error selecting document:', err);
      }
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading:', selectedFile.uri);
    }
  };

  {
    /* ==============================Bank Details======================== */
  }

  const [onBankNumber, setOnBankNumber] = useState('');
  const [onIfscCode, setOnIfscCode] = useState('');
  const [onAccountHolder, setOnAccountHolder] = useState('');
  const [onBankName, setOnBankName] = useState('');
  const [onUpiId, setOnUpiId] = useState('');

  const _BankDetailsHandle = () => {
    const bankdetalsobj = {
      accountNumber: onBankNumber,
      accountHolder: onAccountHolder,
      bankName: onBankName,
      ifscCode: onIfscCode,
      upi: onUpiId,
    };
    console.log('bankdetalsobj-------->>>>', bankdetalsobj);
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
                <TextInput
                  placeholder="First name"
                  placeholderTextColor={COLORS.GRAYDARK}
                  style={Styles.INPUONE}
                  value={firstName}
                  onChangeText={text => setFirstName(text)}
                />
                <TextInput
                  placeholder="Last name"
                  placeholderTextColor={COLORS.DARK_GRAY}
                  style={Styles.INPUONE}
                  value={lastName}
                  onChangeText={text => setLastName(text)}
                />
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
                {/* <TextInput
                  placeholder="Gender"
                  placeholderTextColor={COLORS.GRAYDARK}
                  style={Styles.INPUTSTYLES}
                  value={gender}
                  onChangeText={text => setGender(text)}
                  setWorkExperience
                /> */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
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
                  </View>

                  <View style={{flexDirection: 'row'}}>
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
                  </View>
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
              </View>
              <View style={Styles.TEXTMAINBOX}>
                <Text style={Styles.FIRSTNAMETITLE}>City</Text>
                <Text style={[Styles.FIRSTNAMETITLE, {right: widthPixel(95)}]}>
                  Pincode
                </Text>
              </View>
              <View style={Styles.TEXTMAINBOX}>
                <TextInput
                  placeholder="City"
                  placeholderTextColor={COLORS.GRAYDARK}
                  style={Styles.INPUONE}
                  value={cityOne}
                  maxLength={6}
                  onChangeText={text => setCityOne(text)}
                />
                <TextInput
                  placeholder="Pincode"
                  placeholderTextColor={COLORS.DARK_GRAY}
                  style={Styles.INPUONE}
                  value={pinCodeOne}
                  maxLength={6}
                  keyboardType="number-pad"
                  onChangeText={text => setPinCodeOne(text)}
                />
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
              </View>
              <View style={Styles.TEXTMAINBOX}>
                <Text style={Styles.FIRSTNAMETITLE}>City</Text>
                <Text style={[Styles.FIRSTNAMETITLE, {right: widthPixel(95)}]}>
                  Pincode
                </Text>
              </View>
              <View style={Styles.TEXTMAINBOX}>
                <TextInput
                  placeholder="City"
                  placeholderTextColor={COLORS.GRAYDARK}
                  style={Styles.INPUONE}
                  value={cityTwo}
                  onChangeText={text => setCityTwo(text)}
                />
                <TextInput
                  placeholder="Pincode"
                  placeholderTextColor={COLORS.DARK_GRAY}
                  style={Styles.INPUONE}
                  value={pinCodeTwo}
                  maxLength={6}
                  keyboardType="number-pad"
                  onChangeText={text => setPinCodeTwo(text)}
                />
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
              <View style={{marginHorizontal: 20, marginTop: 15}}>
                <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
                  Enter your Vehicle Number
                </Text>
                <TextInput
                  placeholder="Enter your Vehicle Number"
                  placeholderTextColor={COLORS.GRAYDARK}
                  style={Styles.TEXTINPUT}
                />
              </View>
              <View style={{marginHorizontal: 20, marginTop: 15}}>
                <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
                  Driving License Number
                </Text>
                <TextInput
                  placeholder="Enter your Vehicle Number"
                  placeholderTextColor={COLORS.GRAYDARK}
                  style={Styles.TEXTINPUT}
                />
              </View>
              {/* -----------------------------Upload Driving Licens-------------------- */}
              <Text style={Styles.uploadText}>Upload Driving Licens</Text>
              <View style={Styles.DRIVINGBOX}>
                <TouchableOpacity
                  onPress={pickDocument}
                  activeOpacity={0.6}
                  style={Styles.BTNCHOOSEFILE}>
                  <Text style={Styles.CHOOSETEXT}>Choose a File</Text>
                </TouchableOpacity>
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
                />
              </View>
            </View>
          </ProgressStep>
          {/* ==============================Bank Details======================== */}
          <ProgressStep
            onSubmit={_BankDetailsHandle}
            nextBtnStyle={Styles.btnstyles}
            nextBtnTextStyle={Styles.btntextstyles}
            previousBtnStyle={Styles.btnstyles}
            previousBtnTextStyle={Styles.btntextstyles}
            label="Bank Details">
            <View style={{}}>
              <Text style={Styles.BANKTEXT}>Bank Account Number</Text>
              <TextInput
                style={Styles.BANKINPUT}
                placeholder="Bank Account Number"
                placeholderTextColor={COLORS.GRAYDARK}
                keyboardType="number-pad"
                onChangeText={text => setOnBankNumber(text)}
                value={onBankNumber}
              />
              <Text style={Styles.BANKTEXT}>Account Holder Name</Text>
              <TextInput
                placeholder="Account Holder Name"
                placeholderTextColor={COLORS.GRAYDARK}
                style={Styles.BANKINPUT}
                onChangeText={text => setOnAccountHolder(text)}
                value={onAccountHolder}
              />
              <Text style={Styles.BANKTEXT}>IFSC Code</Text>
              <TextInput
                placeholder="FSC Code"
                placeholderTextColor={COLORS.GRAYDARK}
                style={Styles.BANKINPUT}
                onChangeText={text => setOnIfscCode(text)}
                value={onIfscCode}
              />
              <Text style={Styles.BANKTEXT}>Bank Name</Text>
              <TextInput
                placeholder="Bank Name"
                placeholderTextColor={COLORS.GRAYDARK}
                style={Styles.BANKINPUT}
                onChangeText={text => setOnBankName(text)}
                value={onBankName}
              />
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
    fontSize: 12,
    textAlign: 'left',
    paddingVertical: 5,
    marginLeft: 12,
    marginTop: 15,
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
