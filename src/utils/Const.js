import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Toast from 'react-native-simple-toast';

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
import {Dimensions} from 'react-native';

const BASE_URL = 'http:/192.168.68.119:8000/api/deliveryApp'; //  Server URL  Localhost

const {height, width} = Dimensions.get('window');

// 👇👇👇 DATA for mapView 👇👇👇

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

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

const SimpleToast = ({title, isLong}) => {
  isLong ? Toast.show(title, Toast.LONG) : Toast.show(title, Toast.SHORT);
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
};
