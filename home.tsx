import React, { useState, useEffect } from 'react';
import {
	Button,
	Image,
	View,
	StyleSheet,
	ActivityIndicator,
    Pressable,
	Text,
	FlatList
} from 'react-native';

export default function Home () {
    return (
        <View style = {styles.banner}>
           {/* Index banner */}
              <Image
              style = {styles.image002}
              source={require('./assets/index/logo.png')}
              />
              <Image
              style = {styles.image}
              source={require('./assets/index/olom001.jpg')}
              />   
              
              <View style = {styles.grid}>
        
        {/* Main Page Buttons     */}
        {/* Photos */}
            {/* <Link href = "/photos" style={{marginHorizontal:'auto'}} asChild> */}
            <Pressable style = {styles.button}>
             <Text style = {styles.buttonText}>Photos </Text> 
            </Pressable>
           
        
        {/* Videos*/}
        {/* <Link href = "/videos" style={{marginHorizontal:'auto'}} asChild> */}
            <Pressable style = {styles.button}>
             <Text style = {styles.buttonText}>Videos </Text> 
            </Pressable>
           
        
        {/* 3D Models*/}
        {/* <Link href = "/models" style={{marginHorizontal:'auto'}} asChild> */}
            <Pressable style = {styles.button}>
             <Text style = {styles.buttonText}>3D Models </Text> 
            </Pressable>
            
        
        {/*History*/}
        {/* <Link href = "/history" style={{marginHorizontal:'auto'}} asChild> */}
            <Pressable style = {styles.button}>
             <Text style = {styles.buttonText}>History </Text> 
            </Pressable>
            
        
        {/*Events*/}
        {/* <Link href = "/events" style={{marginHorizontal:'auto'}} asChild> */}
            <Pressable style = {styles.button}>
             <Text style = {styles.buttonText}>Events </Text> 
            </Pressable>
            
        
        {/*Guestbook*/}
        {/* <Link href = "/guestbook" style={{marginHorizontal:'auto'}} asChild> */}
            <Pressable style = {styles.button}>
             <Text style = {styles.buttonText}>Guestbook </Text> 
            </Pressable>
        
              </View>
            </View>
    )

}

const styles = StyleSheet.create({

    banner: {
    flex:1,
    flexDirection: 'column',
    },

    grid:{
    flex:1,
    flexDirection: 'row',
    flexWrap: "wrap",
    },

    image:{
    width:2000, 
    height:250,
    marginBottom:30,
    },

    image002:{
    width:250,
    height:250,
    position: "absolute",
    alignSelf:"center",
    zIndex: 1,
    },

    text: {
    color:"black",
    fontFamily: "impact",
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    },

    button: {
    width:300,
    height:300,
    borderRadius: 20, 
    backgroundColor: 'rgba(146, 146, 146, 0.75)',
    justifyContent: 'center',
    padding:6,
    },
   
    buttonText: {
    color:'rgba(255, 255, 255, 0.75)',
    fontFamily: "arial",
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 0,
  }
 
})

