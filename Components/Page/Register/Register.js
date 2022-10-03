'use strict';

import { useEffect, useRef, useState} from "react"
import { View, Text, TextInput, StyleSheet, Pressable, SafeAreaView, TouchableOpacity, Dimensions} from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "react-router-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';



import { validator } from '../../Validator';

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

const Register  = () => {
    const [email, setEmail] = useState('')
    const [isCheckEmail, setIsCheckEmail] = useState(false)
    const [password, setPassword] = useState('')
    const [isCheckPassword, setIsCheckPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isCheckConfirmPassword, setIsCheckConfirmPassword] = useState(false)
    const [isCheckedBox, setIsCheckedBox] = useState(null)
    const iconName = isCheckedBox ? "checkbox-marked" : "checkbox-blank-outline"
    const [isCheckedHidePWUp, setIsCheckedHidePWUp] = useState(false)
    const iconNamePWUp = isCheckedHidePWUp ? "eye" : "eye-off"
    const [isCheckedHidePWBelow, setIsCheckedHidePWBelow] = useState(false)
    const iconNamePWBelow = isCheckedHidePWBelow ? "eye" : "eye-off"
    const [inforUser, setInforUser] = useState('')
    
    const handleSubmit = () => {
        if (validator('email', email)) setIsCheckEmail(validator('email', email))
        else setIsCheckEmail(false)
        if (validator('password', password)) setIsCheckPassword(validator('password', password))
        else setIsCheckPassword(false)
        if (validator('confirmpassword', confirmPassword, password)) setIsCheckConfirmPassword(validator('confirmpassword', confirmPassword, password))
        else setIsCheckConfirmPassword(false)
        if ( !isCheckedBox ) setIsCheckedBox(false)
        if (email && password && !validator('email', email) && !validator('password', password) && !validator('confirmpassword', confirmPassword, password) && isCheckedBox) {
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setInforUser({email, password})
        }
    }
    useEffect(() => {
        if (inforUser) console.log(inforUser)

    }, [inforUser])
    console.log( isCheckedBox )
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.containerTextHeader}>
                    <Text style={styles.textHeader} >Sign up</Text>
                    <Text style={styles.SubTextHeader} >
                        You can using the application after sign up.
                    </Text>
                </View>

                <View style={styles.containerForm}>
                    <View style={{flexDirection: 'column'}}>
                        <View style={[styles.containerInput, {borderColor: isCheckEmail == '**Trường này bắt buộc phải nhập' ? 'red' : '#e8e8e8'}]}>
                            <MaterialCommunityIcons name='email-outline' color='gray' size={20} />
                            <TextInput 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e)=> setEmail(e.nativeEvent.text)}
                            style={styles.emailInput}/>
                        </View>
                        {
                            isCheckEmail && isCheckEmail !== '**Trường này bắt buộc phải nhập' && 
                            <View style={styles.containerTextError}>
                                <Text style={styles.textError}>
                                    {isCheckEmail}
                                </Text>
                            </View>
                        }
                    </View>

                    <View style={{flexDirection: 'column'}}>
                        <View style={[styles.containerInput, {justifyContent: 'space-between'}, {borderColor: isCheckPassword == '**Trường này bắt buộc phải nhập' ? 'red' : '#e8e8e8'}]}>
                            <View style={styles.containerInputPw}>
                                <Icon name='lock' color='gray' size={20} />
                                <TextInput 
                                keyboardType='default' 
                                secureTextEntry= { !isCheckedHidePWUp ? true : false }
                                placeholder="Password" 
                                value={password} onChange={(e)=> setPassword(e.nativeEvent.text)}
                                style={styles.pwInput}/>
                            </View>
                            <Pressable onPress={() => setIsCheckedHidePWUp(!isCheckedHidePWUp)}>
                                <Feather
                                name={iconNamePWUp}
                                color='#B1B5C4'
                                size={18}
                                />
                            </Pressable>

                        </View>
                            {
                                isCheckPassword && isCheckPassword !== '**Trường này bắt buộc phải nhập' && 
                                <View style={styles.containerTextError}>
                                    <Text style={styles.textError}>
                                        {isCheckPassword}
                                    </Text>
                                </View>
                            }
                    </View>

                    <View style={{flexDirection: 'column'}}>
                        <View style={[styles.containerInput, {justifyContent: 'space-between'}, {borderColor: isCheckPassword == '**Trường này bắt buộc phải nhập' ? 'red' : '#e8e8e8'}]}>
                            <View style={styles.containerInputPw}>
                                <Icon name='lock' color='gray' size={20} />
                                <TextInput 
                                keyboardType='default' 
                                secureTextEntry= { !isCheckedHidePWBelow ? true : false } 
                                placeholder="Confirm password" 
                                value={confirmPassword} onChange={(e)=> setConfirmPassword(e.nativeEvent.text)}
                                style={styles.pwInput}/>
                            </View>
                            <Pressable onPress={() => setIsCheckedHidePWBelow(!isCheckedHidePWBelow)}>
                                <Feather
                                name={iconNamePWBelow}
                                color='#B1B5C4'
                                size={18}
                                />
                            </Pressable>
                        </View>
                            {
                                isCheckConfirmPassword && isCheckPassword !== '**Trường này bắt buộc phải nhập' && 
                                <View style={styles.containerTextError}>
                                    <Text style={styles.textError}>{isCheckConfirmPassword}</Text>
                                </View>
                            }
                    </View>
                </View>
                
                <View style={styles.containerButton}>
                    <View style={styles.checkTerm }>
                            <Pressable onPress={() => setIsCheckedBox(!isCheckedBox)}>
                                <MaterialCommunityIcons
                                    name={iconName} 
                                    size={23} 
                                    color= { isCheckedBox === null ? '#B1B5C3' : isCheckedBox ? '#B1B5C3' : 'red'}
                                    style={[styles.checkBox]}/>
                            </Pressable>
                            <Text style={styles.text1}>
                                I read and agree to 
                            </Text>
                            <TouchableOpacity><Text style={styles.text2}>{' Terms & Conditions'}</Text></TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.button}
                            onPress= {() => {
                            handleSubmit()
                        }}>
                            <Text style={styles.textButton}>Log up </Text>
                        {
                            inforUser && <View>
                                <Text>Bạn đã đăng kí thành công</Text>
                                <Link to='/login'>
                                    <Text> Quay trở lại</Text>
                                </Link>
                            </View>
                        }
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerFooter}>
                <Text style={styles.text1}>
                    Already have an account?
                </Text>
                <Link to='/login'>
                    <Text style={styles.text2}> Sign In</Text>
                </Link>
            </View>
        </SafeAreaView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    containerHeader: {
        flex: 6.5,
        // height: deviceHeight / 1.5,
        width: '100%',
        // paddingBottom: 10,
    },
    containerTextHeader: {
        // height: deviceHeight * (0.65) * 0.2,
        paddingTop: 50,

    },
    textHeader: {
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 40,
    },
    SubTextHeader: {
        paddingTop: 10,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#777E91',
    },
    containerForm: {
        // height: deviceHeight * (0.65) * 0.5,
        paddingVertical: 30,
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#e8e8e8',
        height: 45,
    },
    containerInputPw: {
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 15,
    },
    emailInput: {
        paddingHorizontal: 10,
        maxWidth: deviceWidth - 130,
    },
    pwInput: {
        paddingHorizontal: 11,
        maxWidth: deviceWidth - 130,
        flex: 1,
    },
    containerTextError: {
        // margin: 0,
    },
    textError: {
        color: 'red',
        fontSize: 13,
    },
    containerButton: {
        // height: deviceHeight * (0.65) * 0.333,
        width: '100%',
        // marginTop: 50,
        // paddingTop: 30,
    },
    checkTerm: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingTop: 35
    },
    checkBox: {
        paddingRight: 5,
    },
    text1: {
        fontSize: 15,
        fontWeight: '400',
        color: '#777E91',
        lineHeight: 20,
    },
    text2: {
        fontSize: 15,
        fontWeight: '500',
        color: '#3888FE',
        lineHeight: 20,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 90,
        paddingVertical: 10,
        borderRadius: 10,
        width: "100%",
        backgroundColor: "#7A71F7",
        marginTop: 40
    },
    textButton: {
        fontSize: 17,
        lineHeight: 30,
        fontWeight: "light",
        color: "white",
    },
    containerFooter: {
        flex: 3.5,
        // height: deviceHeight / 3,
        flexDirection: 'row',
        alignItems: 'flex-end',
    }
})