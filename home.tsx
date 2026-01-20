import React, { useState, useEffect } from 'react';
import {
	Button,
	Image,
	View,
	StyleSheet,
	ActivityIndicator,
    Pressable,
	Text,
	FlatList,
    ImageBackground,
    Modal
} from 'react-native';

export default function Home () {

    //Open modal for admin mode
    const[visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    

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
             <ImageBackground
            //  this link is a placeholder
              source={{uri: 'https://historicplacesdays.ca/wp-content/uploads/2019/07/4C039F93-975D-485C-A26E-A14F56A79E1C.png'}}
              style = {styles.buttonImage}
              imageStyle={{borderRadius:30}}
              >
             <Text style = {styles.buttonText}>Photos </Text> 
             </ImageBackground>
            </Pressable>   
        
        {/* Videos*/}
        {/* <Link href = "/videos" style={{marginHorizontal:'auto'}} asChild> */}
            <Pressable style = {styles.button}>
             <ImageBackground
            //  this link is a placeholder
              source={{uri: 'https://t4.ftcdn.net/jpg/00/98/31/69/360_F_98316912_2Mmdy5mluCDJSNUmU5vx5KLsMZX5s8Wl.jpg'}}
              style = {styles.buttonImage}
              imageStyle={{borderRadius:30}}
              >
             <Text style = {styles.buttonText}>Videos </Text> 
             </ImageBackground>
            </Pressable>
           
        
        {/* 3D Models*/}
        {/* <Link href = "/models" style={{marginHorizontal:'auto'}} asChild> */}
            <Pressable style = {styles.button}>
             <ImageBackground
            //  this link is a placeholder
              source={{uri: 'https://media.sketchfab.com/models/a1e63357f3fa4a8d9a310db3ae35c2fb/thumbnails/91123f9d8d614f8b99011ac454045e76/0b8997d7bede43a785f7d8b060fcdbce.jpeg'}}
              style = {styles.buttonImage}
              >
             <Text style = {styles.buttonText}>3D Models </Text> 
             </ImageBackground>
            </Pressable>
            
        
        {/*History*/}
        {/* <Link href = "/history" style={{marginHorizontal:'auto'}} asChild> */}
            <Pressable style = {styles.button}>
             <ImageBackground
            //  this link is a placeholder
              source={{uri: 'https://www.heritage.nf.ca/articles/society/images/our-lady-mercy.jpg'}}
              style = {styles.buttonImage}
              imageStyle={{borderRadius:30}}
              >
             <Text style = {styles.buttonText}>History </Text> 
             </ImageBackground> 
            </Pressable>
            
        
        {/*Events*/}
        {/* <Link href = "/events" style={{marginHorizontal:'auto'}} asChild> */}
            <Pressable style = {styles.button}>
             <ImageBackground
            //  this link is a placeholder
              source={{uri: 'https://scontent.fyhz1-1.fna.fbcdn.net/v/t1.6435-9/42854466_1860628977349207_3131969244065955840_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=B6BLnkjbNwcQ7kNvwHA-len&_nc_oc=AdlXuguWEbpeLqCUtk5NFH84mTuz1GXYmtVW7eZSVK0u0p8hpomC5gYBNGIkRL28jjo&_nc_zt=23&_nc_ht=scontent.fyhz1-1.fna&_nc_gid=mJa9c2kbIu0itzaRf8EocA&oh=00_AfpkrZuZE9iAqRH-w7-2f1t42MRua-MEl4w3eSOv8Ns9rw&oe=69960D5A'}}
              style = {styles.buttonImage}
              >
             <Text style = {styles.buttonText}>Events </Text> 
             </ImageBackground>
            </Pressable>
            
        
        {/*Guestbook*/}
        {/* <Link href = "/guestbook" style={{marginHorizontal:'auto'}} asChild> */}
            <Pressable style = {styles.button}>
             <ImageBackground
            //  this link is a placeholder
              source={{uri: 'https://miro.medium.com/v2/resize:fit:1400/1*GdJ-q8rJqOk4xbg0GXIBvg.jpeg'}}
              style = {styles.buttonImage}
              >
             <Text style = {styles.buttonText}>Guestbook </Text> 
             </ImageBackground>
            </Pressable>
              </View>
              
        {/* Administrative button */}
        <Pressable style = {styles.adminButton} onPress={show}>
        <Text style = {styles.buttonText}>Admin</Text> 
        </Pressable>

        {/*Administrative modal*/}
        <View>
            <Modal
            visible = {visible}
            onRequestClose = {hide}
            animationType= "slide"
            transparent>
                <Pressable style = {styles.adminModalUpper} onPress = {hide}/>
                <View style= {styles.adminModalLower}>
                    <Text>I'm a modal! I think..</Text>
                </View>
            </Modal>
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
    height:256,
    marginBottom:2,
    zIndex:1,
    },

    image002:{
    width:250,
    height:250,
    position: "absolute",
    alignSelf:"center",
    zIndex: 2,
    },

    text: {
    color:"black",
    fontFamily: "impact",
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    },

    button: {
    flex:1,
    height:'100%',
    borderRadius: 30, 
    borderWidth: 2,
    borderColor: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(255, 255, 255)',
    justifyContent: 'center',
    padding:3,
    zIndex:0,
    shadowColor: 'rgb(110, 110, 110)',
    shadowOffset: {width:2, height:2},
    shadowRadius: 10
    },

    buttonImage:{
    flex:1,
    resizeMode:"cover",
    justifyContent:'center',
    borderRadius: 30
    
    },
   
    buttonText: {
    color:'rgba(255, 255, 255, 0.75)',
    fontFamily: "arial",
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(1,1,1,1)',
    textShadowRadius: 10,
    textShadowOffset: {width: 2, height:2},
    padding: 0,
    // transform: 'rotate(-10deg)',
  },

  adminButton:{
    position: 'absolute',
    top:5,
    right:5,
    height:'8%',
    width:'8%',
    borderRadius: 30, 
    borderColor: 'rgb(255, 255, 255)',
    backgroundColor: 'rgba(161, 161, 161, 0.7)',
    justifyContent: 'center',
    padding:3,
    zIndex:3
  },

  adminModalUpper: {
    height:100,
    backgroundColor:'#DDD',
    opacity:0.5,
  },

  adminModalLower:{
    flex: 1, 
    backgroundColor: 'white'
  }



 
})

