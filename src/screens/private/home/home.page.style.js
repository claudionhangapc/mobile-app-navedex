import { StyleSheet } from 'react-native';
export default StyleSheet.create({

  container: {
    flex:1,
    paddingLeft:20,
    paddingRight:20,
   },
   containerChildren:{
     width:'100%',
     marginTop:32,
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
   },
   logo:{
    fontWeight: '600',
    fontSize: 30,
  },
  button:{
    height:40, 
    padding:8,
    width:176,
    alignItems: "center",
    justifyContent:'center',
    backgroundColor:'#212121'
  },
  textButton:{
    fontSize:14,
    fontWeight:'600',
    color:'#fff'
  }
 
})