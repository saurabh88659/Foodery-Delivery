import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/Colors';
import {fontPixel} from './Dimensions';
import {RadioButton} from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default function Certification() {
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

  return (
    <SafeAreaView style={Styles.CONTAINERMAIN}>
      <View style={{alignItems: 'center'}}>
        <Text style={Styles.HEADTITLE}>Do you have your own vehicle?</Text>
      </View>
      <View style={Styles.MAINBOXHEAD}>
        <View style={Styles.BOXHEAD}>
          <RadioButton
            value="Yes"
            status={checked === 'Yes' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Yes')}
          />
          <Text style={{color: COLORS.BLACK, fontSize: 16, fontWeight: '500'}}>
            Yes
          </Text>
        </View>
        <View style={Styles.RADIOBOX}>
          <RadioButton
            value="No"
            status={checked === 'No' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('No')}
          />
          <Text style={{color: COLORS.BLACK, fontSize: 16, fontWeight: '500'}}>
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
      <Text
        style={{
          color: COLORS.BLACK,
          fontWeight: '500',
          fontSize: 12,
          textAlign: 'left',
          paddingVertical: 5,
          marginLeft: 12,
          marginTop: 15,
        }}>
        Upload Driving Licens
      </Text>
      <View
        style={{
          backgroundColor: '#fff',
          width: responsiveWidth(90),
          height: responsiveHeight(6),
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 4,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 5,
        }}>
        <TouchableOpacity
          onPress={pickDocument}
          activeOpacity={0.6}
          style={{
            width: responsiveWidth(25),
            paddingVertical: 12,
            alignSelf: 'center',
            marginLeft: 10,
            justifyContent: 'center',
            borderRadius: 2,
            borderColor: 'gray',
            borderWidth: 1,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: COLORS.BLACK,
              fontWeight: 'bold',
              fontSize: 12,
            }}>
            Choose a File
          </Text>
        </TouchableOpacity>
        {selectedFssai && (
          <View
            style={{
              width: responsiveWidth(60),
              height: responsiveHeight(5),
              alignSelf: 'center',
              marginLeft: 10,
              justifyContent: 'center',
            }}>
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
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  CONTAINERMAIN: {
    flex: 1,
    // backgroundColor: COLORS.WHITE,
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
});
