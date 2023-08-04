import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/Entypo';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import ImagePicker from 'react-native-image-crop-picker';
import {COLORS} from '../utils/Colors';

export default function Verification() {
  const [selectedOption, setSelectedOption] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const [shouldShowNo, setShouldShowNo] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);

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

  const handleRadioButtonPress = value => {
    setSelectedOption(value);
  };
  const pickImage = () => {
    ImagePicker.openPicker({
      width: responsiveWidth(40),
      height: responsiveHeight(18),
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setSelectedImage(image.path);
      })
      .catch(error => {
        console.log('Error selecting image: ', error);
      });
  };
  const pickImages = () => {
    ImagePicker.openPicker({
      width: responsiveWidth(40),
      height: responsiveHeight(18),
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setSelectedImage1(image.path);
      })
      .catch(error => {
        console.log('Error selecting image: ', error);
      });
  };

  const pickImage1 = () => {
    ImagePicker.openPicker({
      width: responsiveWidth(40),
      height: responsiveHeight(18),
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setSelectedImage3(image.path);
      })
      .catch(error => {
        console.log('Error selecting image: ', error);
      });
  };

  const takeImage = () => {
    ImagePicker.openCamera({
      width: responsiveWidth(40),
      height: responsiveHeight(18),
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setSelectedImage2(image.path);
      })
      .catch(error => {
        console.log('Error taking image: ', error);
      });
  };

  return (
    <View>
      <Text
        style={{
          color: 'black',
          marginTop: 12,
          textAlign: 'left',
          fontWeight: 'bold',
          fontSize: responsiveFontSize(1.8),
          marginLeft: 12,
        }}>
        Upload Aadhar Card
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: responsiveWidth(95),
          height: responsiveHeight(22),
          alignSelf: 'center',
          marginTop: responsiveHeight(2),
          justifyContent: 'space-between',
        }}>
        <View>
          {selectedImage ? (
            <Image
              source={{uri: selectedImage}}
              style={styles.image}
              onPress={pickImage}
            />
          ) : (
            <TouchableOpacity
              onPress={pickImage}
              style={{
                width: responsiveWidth(40),
                height: responsiveHeight(18),
                alignSelf: 'center',
                backgroundColor: '#545454',
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon color={'#000'} name="camera" size={40} />
            </TouchableOpacity>
          )}
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: responsiveFontSize(1.5),
            }}>
            Upload Front Image
          </Text>
        </View>
        <View>
          {selectedImage1 ? (
            <Image
              source={{uri: selectedImage1}}
              style={styles.image}
              onPress={pickImages}
            />
          ) : (
            <TouchableOpacity
              onPress={pickImages}
              style={{
                width: responsiveWidth(40),
                height: responsiveHeight(18),
                alignSelf: 'center',
                backgroundColor: '#545454',
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon color={'#000'} name="camera" size={40} />
            </TouchableOpacity>
          )}

          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: responsiveFontSize(1.5),
            }}>
            Upload Front Image
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            color: 'black',
            marginTop: 12,
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: responsiveFontSize(1.8),
            marginLeft: 12,
          }}>
          Upload Pan Card
        </Text>
        <Text
          style={{
            color: 'black',
            marginTop: 12,
            marginRight: 35,
            fontWeight: 'bold',
            fontSize: responsiveFontSize(1.8),
          }}>
          Upload Selfie
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: responsiveWidth(95),
          height: responsiveHeight(20),
          alignSelf: 'center',
          marginTop: responsiveHeight(2),
          justifyContent: 'space-between',
        }}>
        <View>
          <View>
            {selectedImage3 ? (
              <Image
                source={{uri: selectedImage3}}
                style={styles.image}
                onPress={pickImage1}
              />
            ) : (
              <TouchableOpacity
                onPress={pickImage1}
                style={{
                  width: responsiveWidth(40),
                  height: responsiveHeight(18),
                  alignSelf: 'center',
                  backgroundColor: '#545454',
                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon color={'#000'} name="camera" size={40} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View>
          {selectedImage2 ? (
            <Image
              source={{uri: selectedImage2}}
              style={styles.image}
              onPress={takeImage}
            />
          ) : (
            <TouchableOpacity
              onPress={takeImage}
              style={{
                width: responsiveWidth(40),
                height: responsiveHeight(18),
                alignSelf: 'center',
                backgroundColor: '#545454',
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon color={'#000'} name="camera" size={40} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* <Text
        style={{
          color: 'black',
          marginTop: 12,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: responsiveFontSize(1.8),
          marginLeft: 12,
        }}>
        Is the Store rented?
      </Text> */}
      {/* <View style={styles.container}>
        <CustomRadioButton
          label="Yes"
          selected={selectedOption === 'Yes'}
          onPress={() => {
            handleRadioButtonPress('Yes'), setShouldShow(!shouldShow);
          }}
        />
        <CustomRadioButton
          label="No"
          selected={selectedOption === 'No'}
          onPress={() => {
            handleRadioButtonPress('No'), setShouldShowNo(!shouldShowNo);
          }}
        />
      </View> */}
      {/* {shouldShow ? (
        <>
          <View
            style={{
              width: responsiveWidth(90),
              height: responsiveHeight(17),
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                marginTop: 3,
                marginRight: 35,
                fontSize: responsiveFontSize(1.5),
              }}>
              Upload Rent/Lease Bill
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  //backgroundColor: 'orange',
                  alignItems: 'center',
                }}>
                {selectedFile && (
                  <View style={styles.selectedFileContainer}>
                    <Text style={styles.selectedFileName} numberOfLines={1}>
                      File Name: {selectedFile.name}
                    </Text>
                  </View>
                )}
                <TouchableOpacity style={styles.button} onPress={pickDocument}>
                  <Icon color={'#fff'} name="attachment" size={20} />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={[
                  styles.button,
                  selectedFile ? styles.uploadButton : styles.disabledButton,
                ]}
                disabled={!selectedFile}
                onPress={handleUpload}>
                <Text style={styles.buttonText}>Upload</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : null} */}

      {/* {shouldShowNo ? (
        <>
          <View
            style={{
              width: responsiveWidth(90),
              height: responsiveHeight(17),
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                marginTop: 3,
                marginRight: 35,
                fontSize: responsiveFontSize(1.5),
              }}>
              Upload Electricity Bill
            </Text>
            <View
              style={{
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {selectedFile && (
                  <View style={styles.selectedFileContainer}>
                    <Text style={styles.selectedFileName} numberOfLines={1}>
                      File Name: {selectedFile.name}
                    </Text>
                  </View>
                )}
                <TouchableOpacity style={styles.button} onPress={pickDocument}>
                  <Icon color={'#fff'} name="attachment" size={20} />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={[
                  styles.button,
                  selectedFile ? styles.uploadButton : styles.disabledButton,
                ]}
                disabled={!selectedFile}
                onPress={handleUpload}>
                <Text style={styles.buttonText}>Upload</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : null} */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: 'green',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },

  button: {
    backgroundColor: COLORS.LIGHT_ORANGE,
    paddingHorizontal: 16,
    paddingVertical: 7.2,
    //borderRadius: 5,
    marginVertical: 7,
  },
  disabledButton: {
    backgroundColor: '#BDBDBD', // or any other color for disabled state
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  selectedFileContainer: {
    alignItems: 'center',
    //backgroundColor: 'teal',
    width: responsiveWidth(60),
    height: responsiveHeight(4.5),
    //borderRadius: 4,
    borderColor: COLORS.BLACK,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  selectedFileName: {
    fontSize: 16,
  },
  selectedFileSize: {
    fontSize: 16,
  },
  uploadButton: {
    backgroundColor: '#4CAF50', // or any other color for enabled state
  },
  image: {
    width: responsiveWidth(40),
    height: responsiveHeight(18),
    borderRadius: 8,
  },
});
