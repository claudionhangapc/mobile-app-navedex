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
    marginBottom:20,
    flexDirection:'row',
    alignItems:'center',
  },
  title:{
    color: '#212121',
    fontWeight: '600',
    fontSize: 24,
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
 
})