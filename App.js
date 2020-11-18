import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBxO91q3iPZ0Y2E900ALQhQ8ATc6LTDN3c",
  authDomain: "mobile-final-3260a.firebaseapp.com",
  databaseURL: "https://mobile-final-3260a.firebaseio.com",
  projectId: "mobile-final-3260a",
  storageBucket: "mobile-final-3260a.appspot.com",
  messagingSenderId: "441503247840",
  appId: "1:441503247840:web:72c9274c4484a186358f85",
  measurementId: "G-2B4MGPH0T8"
};
// ติดต่อ firebase

if(firebase.apps.length==0)
  firebase.initializeApp(firebaseConfig);

export default class App extends React.Component{
  state = {
    data: []
  };

  componentDidMount(){
    firebase.database().ref('address').on('value', snapshot=>{
      this.setState({
        data : snapshot.val()
      })
    });
  }
   
  render(){
    if(this.state.data.length==0)
     return <View style={styles.container}><Text>Loading</Text></View>;
    return <View style={styles.container}><Text>Connected</Text>
      <Text>{this.state.data.city}</Text>
      
      </View>;
     
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
