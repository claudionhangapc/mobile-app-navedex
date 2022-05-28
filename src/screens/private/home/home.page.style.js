import { StyleSheet } from 'react-native';
export default StyleSheet.create({

  container: {
    flex:1,
    alignItems:'center',
    padding:20
   },
   containerChildren:{
     width:'100%',
     marginBottom:32,
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
   },
   logo:{
    width: 145,
    height: 37,
    resizeMode: 'contain',
  },
  button:{
    height:40, 
    padding:8,
    width:50,
    alignItems: "center",
    justifyContent:'center',
  },
  textButton:{
    fontSize:14,
    fontWeight:'600',
  }
 
})