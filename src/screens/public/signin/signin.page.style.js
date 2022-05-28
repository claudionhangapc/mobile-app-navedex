import { StyleSheet } from 'react-native';
export default StyleSheet.create({

  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20
   },
   containerChildren:{
     width:'100%',
     marginBottom:32,
   },
   logo:{
     width: 300,
     height: 100,
     resizeMode: 'contain',
     marginBottom:40,
   },
   inputView:{
     width:'100%',
   },
   input:{
     width:'100%',
     borderWidth:1,
     height:40,
     padding:10
   },
   textView:{
     marginBottom:4,
     textAlign:'left'
   },
   text:{
     fontSize:14,
     fontWeight:'600',
   },
   buttonView:{
    width:'100%',
    
   },
   errorView:{
     width:'100%',
     marginBottom:32,
     backgroundColor:'#FF5252',
     padding:8,
     height:40,
   },
   errortext:{
     color:'#212121'
   },
   button:{
     backgroundColor:'#212121',
     height:40,
     alignItems: "center",
     justifyContent:'center',
     padding:8,
     
   },
   textButton:{
     color:'#FFFFFF',
     fontSize:14,
     fontWeight:'600',
   }
 
})