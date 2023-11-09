import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Toast from 'react-native-simple-toast';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from './Colors';
import {Dimensions, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {checkInternetConnection} from './Handler/InternetInfo';
import axios from 'axios';

const logowithlogin = require('../Assets/LogoInLogin.png');
const google = require('../Assets/google.png');
const facebook = require('../Assets/facebook.png');
const thankyou = require('../Assets/Lottie_json/animation_lkqojitq.json');
const thankyoudelivering = require('../Assets/Lottie_json/animation_lkqqe6zp.json');
const manlogo = require('../Assets/man.png');
const userTab = require('../Assets/user.png');
const recordbutton = require('../Assets/recordbutton.png');

const footertext = 'By signing up, you are agree with our';
const accounttext = "We've sent an email and password to your";

// const BASE_URL = 'http:/192.168.68.110:8000/api/deliveryApp'; //  Server URL  Localhost

/* The `BASE_URL` constant is storing the URL of the server API. In this case, it is set to
`'https://apigrocery.kickrtechnology.online/api/deliveryApp'`. This URL is used to make API requests
to the server for fetching or sending data. */
const BASE_URL = 'https://apigrocery.kickrtechnology.online/api/deliveryApp'; //  Server URL

const {height, width} = Dimensions.get('window');

// 👇👇👇 DATA for mapView 👇👇👇123

/* The line `const ASPECT_RATIO = width / height;` is calculating the aspect ratio of the device's
screen. The `width` and `height` variables are obtained using the `Dimensions.get('window')` method,
which returns the width and height of the device's screen. The aspect ratio is calculated by
dividing the width by the height. */
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

/**
 * The Ionicon function is a JavaScript component that renders an Ionicon icon with customizable
 * properties.
 */
const Ionicon = ({title, size, IconColor, IconStyle}) => (
  <Ionicons
    name={title}
    size={size}
    color={IconColor}
    style={IconStyle || {}}
  />
);

const MaterialCommunityIcon = ({title, size, IconColor, IconStyle}) => (
  <MaterialCommunityIcons
    name={title}
    size={size}
    color={IconColor}
    style={IconStyle || {}}
  />
);

const FontAwesome = ({title, size, IconColor, IconStyle}) => (
  <FontAwesome5
    name={title}
    size={size}
    color={IconColor}
    style={IconStyle || {}}
  />
);

const Entypos = ({title, size, IconColor, IconStyle}) => (
  <Entypo name={title} size={size} color={IconColor} style={IconStyle || {}} />
);

const EvilIcon = ({title, size, IconColor, IconStyle}) => (
  <EvilIcons
    name={title}
    size={size}
    color={IconColor}
    style={IconStyle || {}}
  />
);

const Feathers = ({title, size, IconColor, IconStyle}) => (
  <Feather name={title} size={size} color={IconColor} style={IconStyle || {}} />
);

const MaterialIcon = ({title, size, IconColor, IconStyle}) => (
  <MaterialIcons
    name={title}
    size={size}
    color={IconColor}
    style={IconStyle || {}}
  />
);
const FontAwesome6s = ({title, size, IconColor, IconStyle}) => (
  <FontAwesome6
    name={title}
    size={size}
    color={IconColor}
    style={IconStyle || {}}
  />
);

/**
 * The SimpleToast function displays a toast message with a given title and duration.
 */
const SimpleToast = ({title, isLong}) => {
  isLong ? Toast.show(title, Toast.LONG) : Toast.show(title, Toast.SHORT);
};

/**
 * The above function creates a custom status bar component with a gradient background.
 */
const CustomStatusBar = () => (
  <LinearGradient
    colors={[COLORS.PURPLE, COLORS.PINK]}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={{height: StatusBar.currentHeight}}>
    <StatusBar translucent backgroundColor="transparent" />
  </LinearGradient>
);

/**
 * The function `Instance` is an asynchronous function that makes an HTTP request using the provided
 * method, URL, headers, and data, and returns the result or an error if there is no internet
 * connection.
 * @param method - The HTTP method to be used for the request (e.g., GET, POST, PUT, DELETE).
 * @param url - The `url` parameter is the URL of the API endpoint that you want to make a request to.
 * It should be a string representing the URL.
 * @param header - The `header` parameter is an object that contains the headers to be included in the
 * HTTP request. Headers are used to provide additional information about the request or the client
 * making the request. Examples of headers include `Content-Type`, `Authorization`, etc.
 * @param data - The `data` parameter is an object that contains the data to be sent in the request
 * body. It can be used to send data such as JSON payloads, form data, or any other type of data that
 * needs to be included in the request.
 * @returns The function `Instance` returns either the result of the axios request if there is an
 * internet connection and the request is successful, or an error object if there is an error during
 * the request.
 */
const Instance = async (method, url, header, data) => {
  const isInternet = await checkInternetConnection();
  console.log('isInternet', isInternet);
  if (isInternet) {
    try {
      const result = await axios({
        method: method,
        url: url,
        headers: header,
        data: data,
      });
      return result;
    } catch (e) {
      return e;
    }
  } else {
    SimpleToast({title: 'No Internet Connection!', isLong: true});
  }
};

/**
 * The function `headerConfig` returns an object with an Authorization header containing a token
 * retrieved from AsyncStorage.
 * @returns The function `headerConfig` returns an object `HEADER` with the `Authorization` property
 * set to a string value that includes the token retrieved from AsyncStorage.
 */
const headerConfig = async () => {
  const token = await AsyncStorage.getItem('token');
  const HEADER = {
    Authorization: `Bearer ${token}`,
  };
  return HEADER;
};

export {
  logowithlogin,
  google,
  facebook,
  footertext,
  accounttext,
  Ionicon,
  LONGITUDE_DELTA,
  thankyou,
  thankyoudelivering,
  MaterialCommunityIcon,
  FontAwesome,
  manlogo,
  Entypos,
  userTab,
  EvilIcon,
  Feathers,
  MaterialIcon,
  FontAwesome6s,
  recordbutton,
  BASE_URL,
  SimpleToast,
  CustomStatusBar,
  headerConfig,
  Instance,
};
