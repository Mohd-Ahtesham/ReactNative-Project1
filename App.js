/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  Button,
  Image,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';

import GoogleSVG from './Assets/svgs/google.svg';
import ArrowSVG from './Assets/svgs/arrow.svg';
import BasketSVG from './Assets/svgs/basket.svg';
import BellSVG from './Assets/svgs/bell.svg';
import GithubSVG from './Assets/svgs/github.svg';

const App = () => {
  const checked = require('./asset/check.png');
  const unChecked = require('./asset/uncheck.png');
  const checkboxImage = {true: checked, false: unChecked};
  const [isChecked, setChecked] = useState(checkboxImage.false);

  const checkboxChange = () => {
    if (isChecked == checkboxImage.true) {
      setChecked(checkboxImage.false);
    } else {
      setChecked(checkboxImage.true);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground style={{flex: 1}} source={require('./asset/BG.png')}>
        <View style={{flexDirection: 'row', marginTop: 54}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{marginLeft: 17}}>
              <ArrowSVG />
            </View>
            <View style={{marginLeft: 27}}>
              <Text style={styles.navText}>Create Account</Text>
            </View>
          </View>
          <View style={styles.navIcon}>
            <View style={{marginRight: 20}}>
              <BellSVG />
            </View>
            <View style={{marginRight: 16}}>
              <BasketSVG />
            </View>
          </View>
        </View>

        <View style={{flex: 1}}>
          <View style={styles.innerBg1}>
            <Text style={styles.innerText}>Sign up with</Text>

            <View style={styles.btnalgn}>
              <TouchableOpacity style={styles.button}>
                <GithubSVG />
                <Text style={styles.innerButton}>GITHUB</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <GoogleSVG />
                <Text style={styles.innerButton}>GOOGLE</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.innerBg2}>
            <Text style={styles.credential}>Or sign up with credentials</Text>
            <View style={styles.input}>
              <Image
                style={styles.inputIcon}
                source={require('./asset/graduate.png')}
              />
              <TextInput placeholder="Name" style={styles.inputStyle} />
            </View>

            <View style={styles.input}>
              <Image
                style={styles.inputIcon}
                source={require('./asset/email_icon.png')}
              />
              <TextInput placeholder="E mail" style={styles.inputStyle} />
            </View>
            <View style={styles.input}>
              <Image
                style={styles.inputIcon}
                source={require('./asset/password_icon.png')}
              />
              <TextInput placeholder="Password" style={styles.inputStyle} />
            </View>
            <Text style={styles.passwordstr}>
              password strenght:
              <Text style={{color: '#2DCE89', fontWeight: 700, fontSize: 14}}>
                strong
              </Text>
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={checkboxChange}>
                <Image style={styles.check} source={isChecked} />
              </TouchableOpacity>
              <Text style={{marginLeft: 8, color: '#525F7F'}}>
                I agree with the
                <Text style={{color: '#5E72E4'}}> Privacy Policy</Text>
              </Text>
            </View>
            <TouchableOpacity style={styles.lastBtn}>
              <Text style={styles.navText}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  navText: {
    fontSize: 16,
    fontWeight: 700,
    color: 'white',
  },
  navIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  innerText: {textAlign: 'center', marginTop: 31, color: '#8898AA'},
  innerBg1: {
    flex: 1,
    marginTop: 57,
    backgroundColor: 'white',
    marginLeft: 18,
    marginRight: 16,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  btnalgn: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18,
  },
  innerButton: {
    marginLeft: 15,
    fontSize: 14,
    color: '#5E72E4',
    fontWeight: 700,
  },
  innerBg2: {
    flex: 3,
    backgroundColor: '#F4F5F7',
    marginBottom: 58,
    marginLeft: 18,
    marginRight: 16,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  button: {
    width: 144,
    height: 44,
    marginTop: 16,
    marginHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  credential: {
    color: '#8898AA',
    textAlign: 'center',
    marginTop: 35,
    fontSize: 12,
    fontWeight: 400,
    marginBottom: 30,
  },
  input: {
    flexDirection: 'row',
    height: 46,
    paddingVertical: 17,
    paddingHorizontal: 16,
    marginBottom: 16,
    marginHorizontal: 18,
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputIcon: {
    width: 10,
    height: 16,
    flexShrink: 0,
  },
  inputStyle: {
    marginLeft: 12,
  },
  passwordstr: {
    color: '#8898AA',
    fontSize: 12,
    fontWeight: 400,
    marginLeft: 26,
    marginTop: 4,
    marginBottom: 32,
  },
  lastBtn: {
    alignItems: 'center',
    backgroundColor: '#5E72E4',
    padding: 12,
    height: 43,
    marginHorizontal: 88,
    marginTop: 48,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  check: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'blue',
    marginRight: 10,
    marginLeft: 18,
  },
});

export default App;
