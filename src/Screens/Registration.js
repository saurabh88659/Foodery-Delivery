import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Stylesheet,
  Dimensions,
  TextInput,
  ToastAndroid,
  StyleSheet,
  Modal,
} from 'react-native';

import React, {useState} from 'react';

import {format} from 'date-fns';

// import {Dropdown} from 'react-native-element-dropdown';
import StepIndicator from 'react-native-step-indicator';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
// import {he} from 'date-fns/locale';
import PersonalDetails from '../Components/Personal';
import Verification from '../Components/Verification';
import Bankdetails from '../Components/BankDetails';
import Certification from '../Components/Certification';
import Custombtn from '../Components/Custombtn';
import {COLORS} from '../utils/Colors';
import MyHeader from '../Components/MyHeader';
import Routes from '../Navigation/Routes';
import {CustomStatusBar} from '../utils/Const';
// import Button from '../Components/Button';
// const {height, width} = Dimensions.get('window');
//var query = require('india-pincode-search');

const labels = [
  'Personal Details',
  'Verification',
  'certification',
  'Bank Details',
]; // Array of step labels
const stepCount = labels.length;

export default function Registration({navigation, route}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [date, setDate] = useState(new Date());
  const [bankName, onBankName] = useState('');
  const [ifscCode, onIfscCode] = useState('');
  const [accountHolder, onAccountHolder] = useState('');
  const [bankAccount, onBankAccount] = useState('');

  const phoneNumber = route.params;

  // console.log('hhhhhhhhhhhhhhh--------->>', phoneNumber);

  const [showPicker, setShowPicker] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const formattedDate = format(date, 'dd/MM/yyyy');

  const handleNextStep = () => {
    setCurrentStep(prevStep => Math.min(prevStep + 1, stepCount - 1));
  };

  // const handlePreviousStep = () => {
  //   setCurrentStep(prevStep => Math.max(prevStep - 1, 0));
  // };

  const handleSubmit = () => {
    // Handle form submission here
    // For example, you can call an API or save the form data
  };

  // const handleDateChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShowPicker(false);
  //   setDate(currentDate);
  // };

  // const handlePress = () => {
  //   setShowPicker(true);
  // };

  // .................................state...................................

  const statedata = [
    {label: 'Andhra Pradesh', value: '1'},
    {label: 'Arunachal Pradesh', value: '2'},
    {label: 'Assam', value: '3'},
    {label: 'Bihar', value: '4'},
    {label: 'Chhattisgarh', value: '5'},
    {label: 'Goa', value: '6'},
    {label: 'Gujarat', value: '7'},
    {label: 'Haryana', value: '8'},
    {label: 'Himachal Pradesh', value: '9'},
    {label: 'Jharkhand', value: '10'},
    {label: 'Karnataka', value: '11'},
    {label: 'Kerala', value: '12'},
    {label: 'Madhya Pradesh', value: '13'},
    {label: 'Maharashtra', value: '14'},
    {label: 'Manipur', value: '15'},
    {label: 'Meghalaya', value: '16'},
    {label: 'Mizoram', value: '17'},
    {label: 'Nagaland', value: '18'},
    {label: 'Odisha', value: '19'},
    {label: 'Punjab', value: '20'},
    {label: 'Rajasthan', value: '21'},
    {label: 'Sikkim', value: '22'},
    {label: 'Tamil Nadu', value: '23'},
    {label: 'Telangana', value: '24'},
    {label: 'Tripura', value: '25'},
    {label: 'Uttar Pradesh', value: '26'},
    {label: 'Uttarakhand', value: '27'},
    {label: 'West Bengal', value: '28'},
  ];

  // const [value, setValue] = useState(null);
  // const [value2, setValue2] = useState(null);
  // const [isFocus, setIsFocus] = useState(false);

  //11111............................................City ........................................................

  // const [cityvalue, setCityValue] = useState('');

  //22222............................................City ........................................................

  // const [cityvalue2, setCityValue2] = useState('');

  //....................................Pincode..........................

  // const [pincode, setpincode] = useState(null);
  // const [pincode2, setpincode2] = useState(null);

  // const fetchLocationInfo = () => {
  //   const CollectData = query.search(`${pincode}`);

  //   if (CollectData[0] == null) {
  //     ToastAndroid.show('Please Enter Correct Pincode', ToastAndroid.LONG);
  //   } else {
  //     setCityValue(CollectData[0].city);
  //     console.log('data', CollectData);
  //   }
  // };

  // const fetchLocationInfo2 = () => {
  //   const CollectData = query.search(`${pincode2}`);

  //   if (CollectData[0] == null) {
  //     ToastAndroid.show('Please Enter Correct Pincode', ToastAndroid.LONG);
  //   } else {
  //     setCityValue2(CollectData[0].city);
  //   }
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomStatusBar />
      <MyHeader
        title={'Registration Details'}
        onPress={() => navigation.goBack()}
      />

      <Text
        style={{
          color: 'black',
          marginTop: 10,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Fill the details to complete your Profile
      </Text>

      <View style={Styles.container}>
        <StepIndicator
          customStyles={stepIndicatorStyles}
          currentPosition={currentStep}
          labels={labels}
          stepCount={stepCount}
        />
        {currentStep === 0 && (
          <View style={{height: responsiveHeight(77)}}>
            <ScrollView
              automaticallyAdjustContentInsets={true}
              // contentContainerStyle={{paddingBottom: 1}}
            >
              <PersonalDetails data={phoneNumber} />

              <View
                style={{
                  paddingVertical: 12,
                  alignSelf: 'center',
                }}>
                {currentStep < stepCount - 1 ? (
                  <Custombtn title={'Next'} onPress={handleNextStep} />
                ) : (
                  <TouchableOpacity
                    style={Styles.button}
                    onPress={handleSubmit}>
                    <Text style={Styles.buttonText}>Submit</Text>
                  </TouchableOpacity>
                )}
              </View>
            </ScrollView>
          </View>
        )}
        {currentStep === 1 && (
          <View style={{height: responsiveHeight(77)}}>
            <ScrollView
              automaticallyAdjustContentInsets={true}
              // contentContainerStyle={{paddingBottom: 1}}
            >
              <Verification />

              <View
                style={{
                  paddingVertical: 12,
                  alignSelf: 'center',
                }}>
                {currentStep < stepCount - 1 ? (
                  <Custombtn title={'Next'} onPress={handleNextStep} />
                ) : (
                  <TouchableOpacity
                    style={Styles.button}
                    onPress={handleSubmit}>
                    <Text style={Styles.buttonText}>Submit</Text>
                  </TouchableOpacity>
                )}
              </View>
            </ScrollView>
          </View>
        )}
        {currentStep === 2 && (
          <View style={{height: responsiveHeight(70)}}>
            <ScrollView
              automaticallyAdjustContentInsets={true}
              // contentContainerStyle={{paddingBottom: 1}}
            >
              <Certification />
              {currentStep < stepCount - 1 ? (
                <View
                  style={{
                    // backgroundColor: 'green',
                    alignSelf: 'center',
                    paddingVertical: 20,
                    paddingHorizontal: 10,
                    marginTop: 10,
                  }}>
                  <Custombtn title={'Next'} onPress={handleNextStep} />
                </View>
              ) : (
                <TouchableOpacity style={Styles.button} onPress={handleSubmit}>
                  <Text style={Styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              )}
            </ScrollView>
          </View>
        )}
        {currentStep === 3 && (
          <>
            <ScrollView>
              <Bankdetails />
              <View
                style={{
                  paddingVertical: 12,
                  alignSelf: 'center',
                }}>
                {currentStep < stepCount - 1 ? (
                  <Custombtn title={'Next'} onPress={handleNextStep} />
                ) : (
                  <TouchableOpacity
                    style={Styles.button}
                    onPress={() => navigation.navigate(Routes.BOTTOM_TAB_BAR)}>
                    <Text style={Styles.buttonText}>SUBMIT </Text>
                  </TouchableOpacity>
                )}
              </View>
            </ScrollView>
          </>
        )}

        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={toggleModal}>
          <View style={Styles.modalContainer}>
            <View style={Styles.modalContent}>
              <View style={{paddingHorizontal: 20}}>
                <Text
                  style={{
                    fontWeight: 'normal',
                    fontSize: responsiveFontSize(1.7),
                    color: '#000',
                  }}>
                  Your form have been submitted for approval.
                </Text>
                <Text
                  style={{
                    fontWeight: 'normal',
                    fontSize: responsiveFontSize(1.7),
                    color: '#000',
                  }}>
                  We will Verify your details and will sent you an email
                  regarding your login details within the next 7 working days.
                </Text>
              </View>

              <TouchableOpacity
                onPress={toggleModal}
                style={{
                  width: responsiveWidth(10),
                  height: responsiveHeight(5),
                  backgroundColor: COLORS.GREEN,
                }}>
                <Text>Okay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 35,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: COLORS.PINK,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: COLORS.PINK,
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: COLORS.PINK,
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: COLORS.PINK,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 12,
  stepIndicatorLabelCurrentColor: COLORS.PINK,
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: COLORS.PINK,
  labelSize: 12,
  currentStepLabelColor: COLORS.PINK,

  // Customize the step indicator styles here (same as the previous example)
};

const Styles = StyleSheet.create({
  docTitle: {
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  stepContentContainer: {
    paddingBottom: 90,
  },
  button: {
    // paddingHorizontal: 10,
    backgroundColor: COLORS.PINK,
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(5),
  },
  buttonText: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(3),
  },
});
