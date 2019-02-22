
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity,ImageBackground} from 'react-native';
import Note from './note' 

export default class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    }
  }

  addnote(){
    
    if (this.state.noteText){
      var s = new Date();
      this.state.noteArray.push({
        'date': s.getFullYear() + 
        "/" + (s.getMonth() + 1) +
        "/" + s.getDate(),
        'note': this.state.noteText 
      });
    this.setState({ noteArray: this.state.noteArray })
    this.setState({ noteText: '' }) 

    }
 }

 deleteNote(){
   var key; 
   this.state.noteArray.splice (key ,1);
   this.setState({noteArray: this.state.noteArray}) 
 }

 render() { 

    let notes = this.state.noteArray.map((val, key) => {
       return <Note key={key} keyval= {key} val={val}
               deleteMethod={ ()=> this.deleteNote(key) }/> 
    });

    return (
      <View style={styles.container}>
           
          <View style={styles.header}>
             <Text style={styles.headerText}> List Of What ToDo </Text> 
          </View>

          <ImageBackground source = {require('./Img/gg.jpg')}
                           style={styles.ImageBackground}> 
          <ScrollView style={styles.ScrollViewconatiner}>
              {notes}
          </ScrollView>
          </ImageBackground>
          <View style={styles.footer}>
             <TextInput
               onChangeText={(noteText) => this.setState({noteText})} 
               value={this.state.noteText} 
               style={styles.TextInput}
               placeholder ='note'
               placeholderTextColor='white'
             >
             </TextInput>
          </View>

          <TouchableOpacity onPress={ this.addnote.bind(this)} style={styles.addbutton}>
             <Text style={styles.addButtonText}> + </Text>
          </TouchableOpacity>

      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor:'#bc2929',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd', 
  },
  headerText:{
    color: 'white',
    fontSize: 16,
    padding: 26,
  },
  ImageBackground:{
    flex: 2,
    justifyContent: 'center',
  },
  ScrollViewconatiner:{
    flex: 1,
    marginBottom: 100,
  },
  footer:{
    position:'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  TextInput:{
    alignSelf:'stretch',
    color:'#fff',
    padding: 20,
    backgroundColor: '#252525', 
    borderTopWidth: 2,
    borderTopColor:'#ededed',
    fontWeight: '500'
  },
  addbutton:{
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#bc2929',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});


