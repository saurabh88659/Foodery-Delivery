import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const logowithlogin = require('../Assets/LogoInLogin.png');
const google = require('../Assets/google.png');
const facebook = require('../Assets/facebook.png');
const thankyou = require('../Assets/Lottie_json/animation_lkqojitq.json');
const thankyoudelivering = require('../Assets/Lottie_json/animation_lkqqe6zp.json');
const manlogo = require('../Assets/man.png');

const footertext = 'By signing up, you are agree with our';
const accounttext = "We've sent an email and password to your";
import {Dimensions} from 'react-native';

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
};
