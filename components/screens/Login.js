import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  StyleSheet,
  TextInput
} from 'react-native';

const Login = (props) => {
    const [email,Setemail] = useState();
    const [password,Setpassword] = useState();
    const [loading,setLoading] = useState({
        loadingLogin:false,
        loadingSign:false
    })

    const AuthSign = async () =>{
        try {
            setLoading({loadingSign:true})
            const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCHogkFkCU7UsWeUwooJmVkdzRx-_KejQs",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:true
            })
        })
        const restData = await response.json()
        if(response.ok){
            await props.navigation.navigate('Home')
        }else{
            Alert.alert('An Eror Occured!', restData.error.message)[{
                text:'okay'
            }]
        }
        setLoading({loadingSign:false})
        } catch (error) {
            console.log(error)
            setLoading({loadingSign:false})
        }
        
    }
    
    const AuthLogin = async () =>{
        try {
            setLoading({
                loadingLogin:true 
            })
            const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCHogkFkCU7UsWeUwooJmVkdzRx-_KejQs",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:true
            })
        })
        const restData = await response.json()
        if(response.ok){
           await props.navigation.navigate('Home')
        }else{
            Alert.alert('An Eror Occured!', restData.error.message)[{
                text:'okay'
            }]
        }
        setLoading({loadingLogin:false})
        } catch (error) {
            console.log(error)
            setLoading({loadingLogin:false})
        }
        

    }

    return(
        <View style= {styles.container}>
            <Text style={styles.logo}>Second Gadget</Text>
            <View style={styles.inputView}>
                <TextInput
                style={styles.inputText}
                placeholder="Email.."
                placeholderTextColor="#003f5c"
                onChangeText={(text)=>{
                    Setemail(text);
                }}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="Password.."
                placeholderTextColor="#003f5c"
                onChangeText={(text) => {
                    Setpassword(text);
                }}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn}
            onPress={AuthLogin}>
            {loading.loadingLogin? <ActivityIndicator size='small'color="white"/>: <Text style={styles.loginText}>Login</Text>}
            </TouchableOpacity>
            <TouchableOpacity
            onPress={AuthSign}
            >
                {loading.loadingSign ? <ActivityIndicator size='small'color="white"/> : <Text style={styles.forget}>Sign Up</Text>}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      },
      
      /* Style untuk elemen Text */
      logo:{
        fontWeight: 'bold',
        fontSize: 50 ,
        color: '#1A4CFF',
        marginBottom: 40,
      },
      
      /* Style untuk elemen View */
      inputView :{
        width: '80%',
        backgroundColor: '#CECECE',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
      },
      
      /* Style untuk elemen TextInput */
      inputText: {
        height: 50,
        color: 'black',
      },
      
      /* Style untuk elemen TouchableOpacity */
      loginBtn: {
        width: '80%',
        backgroundColor: '#1A4CFF',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
      },
      
      /* Style untuk elemen Text */
      loginText:{
        color: 'white',
      },
      
    });
export default Login