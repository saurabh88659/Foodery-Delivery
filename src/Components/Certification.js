import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import DocumentPicker from 'react-native-document-picker';
import {COLORS} from '../utils/Colors';

export default function Certification() {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [selectedFssai, setSelectedFssai] = React.useState(null);
  const [selectedIso, setSelectedIso] = React.useState(null);
  const [selectedFPO, setSelectedFPO] = React.useState(null);
  const [selectedMark, setSelectedMark] = React.useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedFile(result);
      setSelectedFssai(result);
      setSelectedIso(result);
      setSelectedFPO(result);
      setSelectedMark(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the document picker
      } else {
        console.log('Error selecting document:', err);
      }
    }
  };

  const handleUpload = () => {
    // Implement your file upload logic here
    if (selectedFile) {
      // Perform the upload process, e.g., send the file to your server or cloud storage
      console.log('Uploading:', selectedFile.uri);
    }
  };

  return (
    <View>
      {/* -----------------------------Upload fssai licence-------------------- */}
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
        Upload FSSAI Licence
      </Text>
      <View
        style={{
          backgroundColor: '#fff',
          width: responsiveWidth(95),
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
          style={{
            width: responsiveWidth(25),
            height: responsiveHeight(5),
            alignSelf: 'center',
            marginLeft: 10,
            justifyContent: 'center',
            borderRadius: 2,
            borderColor: 'gray',
            borderWidth: 1,
          }}>
          <Text
            style={{
              color: COLORS.BLACK,
              fontWeight: 'bold',
              fontSize: 12,
              textAlign: 'left',
              paddingVertical: 5,
              marginLeft: 2,
            }}>
            Choose a File
          </Text>
        </TouchableOpacity>
        {selectedFssai && (
          <View
            style={{
              //backgroundColor: 'pink',
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

      {/* -----------------------------Upload ISO Certification-------------------- */}

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
        Upload ISO Certificate
      </Text>
      <View
        style={{
          backgroundColor: '#fff',
          width: responsiveWidth(95),
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
          style={{
            //backgroundColor: 'pink',
            width: responsiveWidth(25),
            height: responsiveHeight(5),
            alignSelf: 'center',
            marginLeft: 10,
            justifyContent: 'center',
            borderRadius: 2,
            borderColor: 'gray',
            borderWidth: 1,
          }}>
          <Text
            style={{
              color: COLORS.BLACK,
              fontWeight: 'bold',
              fontSize: 12,
              textAlign: 'left',
              paddingVertical: 5,
              marginLeft: 2,
            }}>
            Choose a File
          </Text>
        </TouchableOpacity>
        {selectedIso && (
          <View
            style={{
              //backgroundColor: 'pink',
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
              File Name: {selectedIso.name}
            </Text>
          </View>
        )}
      </View>

      {/* -----------------------------Upload FPO Mark Certificate-------------------- */}
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
        Upload FPO Mark Certificate
      </Text>
      <View
        style={{
          backgroundColor: '#fff',
          width: responsiveWidth(95),
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
          style={{
            //backgroundColor: 'pink',
            width: responsiveWidth(25),
            height: responsiveHeight(5),
            alignSelf: 'center',
            marginLeft: 10,
            justifyContent: 'center',
            borderRadius: 2,
            borderColor: 'gray',
            borderWidth: 1,
          }}>
          <Text
            style={{
              color: COLORS.BLACK,
              fontWeight: 'bold',
              fontSize: 12,
              textAlign: 'left',
              paddingVertical: 5,
              marginLeft: 2,
            }}>
            Choose a File
          </Text>
        </TouchableOpacity>
        {selectedFPO && (
          <View
            style={{
              //backgroundColor: 'pink',
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
              File Name: {selectedFPO.name}
            </Text>
          </View>
        )}
      </View>

      {/* -----------------------------Upload FSSC 22000 Certificate-------------------- */}
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
        Upload FSSC 22000 Certificate
      </Text>
      <View
        style={{
          backgroundColor: '#fff',
          width: responsiveWidth(95),
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
          style={{
            //backgroundColor: 'pink',
            width: responsiveWidth(25),
            height: responsiveHeight(5),
            alignSelf: 'center',
            marginLeft: 10,
            justifyContent: 'center',
            borderRadius: 2,
            borderColor: 'gray',
            borderWidth: 1,
          }}>
          <Text
            style={{
              color: COLORS.BLACK,
              fontWeight: 'bold',
              fontSize: 12,
              textAlign: 'left',
              paddingVertical: 5,
              marginLeft: 2,
            }}>
            Choose a File
          </Text>
        </TouchableOpacity>
        {selectedFile && (
          <View
            style={{
              //backgroundColor: 'pink',
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
              File Name: {selectedFile.name}
            </Text>
          </View>
        )}
      </View>

      {/* -----------------------------Upload AG Mark Certificate-------------------- */}
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
        Upload AG Mark Certificate
      </Text>
      <View
        style={{
          backgroundColor: '#fff',
          width: responsiveWidth(95),
          height: responsiveHeight(6),
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 4,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 5,
        }}>
        <TouchableOpacity
          style={{
            //backgroundColor: 'pink',
            width: responsiveWidth(25),
            height: responsiveHeight(5),
            alignSelf: 'center',
            marginLeft: 10,
            justifyContent: 'center',
            borderRadius: 2,
            borderColor: 'gray',
            borderWidth: 1,
          }}>
          <Text
            style={{
              color: COLORS.BLACK,
              fontWeight: 'bold',
              fontSize: 12,
              textAlign: 'left',
              paddingVertical: 5,
              marginLeft: 2,
            }}>
            Choose a File
          </Text>
        </TouchableOpacity>
        {selectedMark && (
          <View
            style={{
              //backgroundColor: 'pink',
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
              File Name: {selectedMark.name}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
