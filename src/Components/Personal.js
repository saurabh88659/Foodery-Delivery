import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

import {format} from 'date-fns';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePickerr from '@react-native-community/datetimepicker';

// import {
//   responsiveHeight,
//   responsiveWidth,
//   responsiveFontSize,
// } from 'react-native-responsive-dimensions';
// import {he} from 'date-fns/locale';

import {COLORS} from '../utils/Colors';
import Custombtn from './Custombtn';
import {heightPixel} from './Dimensions';
const {height, width} = Dimensions.get('window');

var query = require('india-pincode-search');

const Personal = props => {
  const [currentStep, setCurrentStep] = useState(0);
  const [date, setDate] = useState(new Date());

  const Phone = props.data;

  const [showPicker, setShowPicker] = useState(false);
  const formattedDate = format(date, 'dd/MM/yyyy');

  const handleNextStep = () => {
    setCurrentStep(prevStep => Math.min(prevStep + 1, stepCount - 1));
  };

  const handlePreviousStep = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 0));
  };

  // const handleSubmit = () => {
  //   // Handle form submission here
  //   // For example, you can call an API or save the form data
  //   alert('Form submitted successfully!');
  // };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  const handlePress = () => {
    setShowPicker(true);
  };

  // const [Firstname, setfirstname] = useState('');
  // const [Lastname, setLastname] = useState('');

  const [WorkExp, setWorkExp] = useState('');
  const [emailId, setemailId] = useState('');

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

  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  //11111............................................City ........................................................

  const [cityvalue, setCityValue] = useState('');

  //22222............................................City ........................................................

  const [cityvalue2, setCityValue2] = useState('');

  //....................................Pincode..........................

  const [pincode, setpincode] = useState(null);
  const [pincode2, setpincode2] = useState(null);

  const fetchLocationInfo = () => {
    const CollectData = query.search(`${pincode}`);
    if (CollectData[0] == null) {
      ToastAndroid.show('Please Enter Correct Pincode', ToastAndroid.LONG);
    } else {
      setCityValue(CollectData[0].city);
      console.log('data', CollectData);
    }
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

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

  const handleSubmit = () => {
    const isValidfirst = validateFirstNameChange(firstName);
    const isValidlast = validateLastNameChange(lastName);
    if (isValidfirst && isValidlast) {
      // console.alert('Submit one -------------->>>>>>>>>>>>>');
    }
  };

  return (
    <SafeAreaView>
      {/* ..................First Name and Last Name.................... */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 10,
        }}>
        <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
          First Name
        </Text>
        <Text
          style={{
            color: COLORS.BLACK,
            right: width / 4.7,
            fontWeight: 'bold',
          }}>
          Last Name
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 5,
        }}>
        <TextInput
          placeholder="First name"
          value={firstName}
          onChangeText={text => {
            setFirstName(text);
          }}
          placeholderTextColor={COLORS.darkGray}
          style={{
            borderWidth: 1,
            borderColor: COLORS.GRAY,
            paddingHorizontal: 15,
            backgroundColor: COLORS.WHITE,
            borderRadius: 4,
            width: '45%',
            height: '90%',
            color: COLORS.BLACK,
          }}
        />
        <TextInput
          placeholder="Last name"
          value={setLastName}
          onChangeText={text => {
            setLastName(text);
          }}
          placeholderTextColor={COLORS.DARK_GRAY}
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            borderRadius: 4,
            paddingHorizontal: 15,
            backgroundColor: COLORS.WHITE,
            width: '45%',
            height: '90%',
            color: COLORS.BLACK,
          }}
        />
      </View>
      <View
        style={{
          marginHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingHorizontal: 15,
        }}>
        {firstNameError ? (
          <Text style={Styles.ERRORTEXT}>{firstNameError}</Text>
        ) : null}
        {lastNameError ? (
          <Text style={Styles.ERRORTEXT}>{lastNameError}</Text>
        ) : null}
      </View>

      {/* .....................Date of Birth............................. */}

      <View style={{marginHorizontal: 20, marginTop: 10}}>
        <Text
          style={{
            color: COLORS.BLACK,
            fontWeight: 'bold',
            top: heightPixel(-5),
          }}>
          Date of Birth
        </Text>
        <View
          style={{
            height: 45,
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            borderRadius: 4,
            marginTop: 0,
            backgroundColor: COLORS.WHITE,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 15,
              alignItems: 'center',
              top: 8,
            }}>
            <Text style={{color: COLORS.BLACK}}>{formattedDate}</Text>
            <TouchableOpacity onPress={handlePress}>
              <FontAwesome5Icon name="calendar-alt" color="#a9a9a9" size={28} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        {showPicker && (
          <DateTimePickerr
            value={date}
            mode="date"
            dateFormat="DD-MM-YYYY"
            display="default"
            onChange={handleDateChange}
            maximumDate={new Date()}
          />
        )}
      </View>

      {/* .........................Gender................................. */}

      <View style={{marginHorizontal: 20, marginTop: 15}}>
        <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>Gender</Text>
        <TextInput
          placeholder="Gender"
          // value={WorkExp}
          // onChangeText={text => {
          //   setWorkExp(text);
          // }}
          placeholderTextColor={COLORS.darkGray}
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            borderRadius: 4,
            paddingHorizontal: 15,
            backgroundColor: COLORS.WHITE,
            marginTop: 7,
            color: COLORS.BLACK,
          }}
        />
      </View>

      {/* .........................Work Experiences................................. */}

      <View style={{marginHorizontal: 20, marginTop: 15}}>
        <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
          Work Experience
        </Text>
        <TextInput
          placeholder="Work Experience"
          // value={WorkExp}
          // onChangeText={text => {
          //   setWorkExp(text);
          // }}
          placeholderTextColor={COLORS.darkGray}
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            borderRadius: 4,
            paddingHorizontal: 15,
            backgroundColor: COLORS.WHITE,
            marginTop: 7,
            color: COLORS.BLACK,
          }}
        />
      </View>

      {/* ...................................Email Id........................... */}

      <View style={{marginHorizontal: 20, marginTop: 15}}>
        <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>E-mail ID</Text>
        <TextInput
          placeholder="Plese enter Email Id"
          value={emailId}
          onChangeText={text => {
            setemailId(text);
          }}
          placeholderTextColor={COLORS.darkGray}
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            borderRadius: 4,
            paddingHorizontal: 15,
            backgroundColor: COLORS.WHITE,
            marginTop: 7,
            color: COLORS.BLACK,
          }}
        />
      </View>

      {/* ..........................................Mobile number.......................... */}

      <View style={{marginHorizontal: 20, marginTop: 15}}>
        <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
          Mobile Number
        </Text>
        {/* <TextInput
          placeholder="Plese enter mobile number"
          placeholderTextColor={COLORS.darkGray}
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            borderRadius: 4,
            paddingHorizontal: 15,
            backgroundColor: COLORS.WHITE,
            marginTop: 7,
            color: COLORS.BLACK,
          }}
        /> */}
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            borderRadius: 4,
            paddingHorizontal: 15,
            backgroundColor: COLORS.WHITE,
            marginTop: 7,
            color: COLORS.BLACK,
            paddingVertical: 15,
          }}>
          <Text
            style={{
              color: COLORS.BLACK,
              fontWeight: '500',
              letterSpacing: 0.6,
            }}>
            {Phone}
          </Text>
        </View>
      </View>

      {/* ..........................................Mobile Alternate number.......................... */}

      <View style={{marginHorizontal: 20, marginTop: 15}}>
        <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
          Alternate Mobile Number
        </Text>
        <TextInput
          placeholder="Alternate Mobile Number"
          placeholderTextColor={COLORS.darkGray}
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            borderRadius: 4,
            paddingHorizontal: 15,
            backgroundColor: COLORS.WHITE,
            marginTop: 7,
            color: COLORS.BLACK,
          }}
        />
      </View>

      {/* ..........................................Shop full Address.......................... */}
      <View style={{marginHorizontal: 20, marginTop: 15}}>
        <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
          Emergency Mobile Number
        </Text>
        <TextInput
          placeholder="Emergency Mobile Number"
          placeholderTextColor={COLORS.GRAYDARK}
          style={{
            borderWidth: 1,
            borderColor: COLORS.DARK_GRAY,
            borderRadius: 4,
            paddingHorizontal: 15,
            backgroundColor: COLORS.WHITE,
            marginTop: 7,
            color: COLORS.BLACK,
          }}
        />
      </View>

      <View style={{marginHorizontal: 20, marginTop: 15}}>
        <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
          Permanent Address
        </Text>
        <TextInput
          placeholderTextColor={COLORS.darkGray}
          placeholder="Permanent Address"
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            borderRadius: 4,
            paddingHorizontal: 15,
            backgroundColor: COLORS.WHITE,
            marginTop: 7,
            color: COLORS.BLACK,
          }}
        />
      </View>
      <View style={{marginHorizontal: 20, marginTop: 15}}>
        <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>State</Text>

        <Dropdown
          style={[Styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={Styles.placeholderStyle}
          selectedTextStyle={Styles.selectedTextStyle}
          inputSearchStyle={Styles.inputSearchStyle}
          iconStyle={Styles.iconStyle}
          data={statedata}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={Styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>

      {/* ..................Permanent address City Name and Pincode.................... */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 10,
        }}>
        <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>City</Text>
        <Text
          style={{
            color: COLORS.BLACK,
            right: width / 4.7,
            fontWeight: 'bold',
          }}>
          Pincode
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 5,
        }}>
        <TextInput
          placeholder="City"
          //value={firstname}
          // isValid={false}
          // errors={false}
          onChangeText={text => {
            setCityValue(text);
          }}
          value={cityvalue}
          // onChangeText={text => {
          //   _validateMobileNumber(text);
          // }}
          placeholderTextColor={COLORS.darkGray}
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            paddingHorizontal: 15,
            backgroundColor: COLORS.WHITE,
            borderRadius: 4,
            width: '45%',
            height: '90%',
            color: COLORS.BLACK,
          }}
        />

        <TextInput
          placeholder="Pin Code"
          value={pincode}
          onChangeText={text => {
            setpincode(text);
          }}
          maxLength={6}
          onBlur={fetchLocationInfo}
          placeholderTextColor={COLORS.darkGray}
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            borderRadius: 4,
            paddingHorizontal: 15,
            backgroundColor: COLORS.WHITE,
            width: '45%',
            height: '90%',
            color: COLORS.BLACK,
          }}
        />
      </View>
      <View style={{marginHorizontal: 20, marginTop: 15}}>
        <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>
          Current Address
        </Text>
        <TextInput
          placeholderTextColor={COLORS.darkGray}
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            borderRadius: 4,
            paddingHorizontal: 15,
            backgroundColor: COLORS.WHITE,
            marginTop: 7,
            color: COLORS.BLACK,
          }}
        />
      </View>

      {/* ..........................................State......................................... */}

      <View style={{marginHorizontal: 20, marginTop: 15}}>
        <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>State</Text>
        <Dropdown
          style={[Styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={Styles.placeholderStyle}
          selectedTextStyle={Styles.selectedTextStyle}
          inputSearchStyle={Styles.inputSearchStyle}
          iconStyle={Styles.iconStyle}
          data={statedata}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={Styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>

      {/* ..................Permanent address City Name and Pincode.................... */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 10,
        }}>
        <Text style={{color: COLORS.BLACK, fontWeight: 'bold'}}>City</Text>
        <Text
          style={{
            color: COLORS.BLACK,
            right: width / 4.7,
            fontWeight: 'bold',
          }}>
          Pincode
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 5,
        }}>
        <TextInput
          placeholder="City"
          //value={firstname}
          // isValid={false}
          // errors={false}
          onChangeText={text => {
            setCityValue(text);
          }}
          value={cityvalue}
          // onChangeText={text => {
          //   _validateMobileNumber(text);
          // }}
          placeholderTextColor={COLORS.darkGray}
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            paddingHorizontal: 15,
            backgroundColor: COLORS.WHITE,
            borderRadius: 4,
            width: '45%',
            height: '90%',
            color: COLORS.BLACK,
          }}
        />

        <TextInput
          placeholder="Pin Code"
          value={pincode}
          onChangeText={text => {
            setpincode(text);
          }}
          maxLength={6}
          onBlur={fetchLocationInfo}
          placeholderTextColor={COLORS.darkGray}
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            borderRadius: 4,
            paddingHorizontal: 15,
            backgroundColor: COLORS.WHITE,
            width: '45%',
            height: '90%',
            color: COLORS.BLACK,
          }}
        />
      </View>
      <Custombtn title={'Next'} onPress={handleSubmit} />
    </SafeAreaView>
  );
};
export default Personal;
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
  ERRORTEXT: {color: 'red', paddingHorizontal: 40, marginTop: 5},
});
