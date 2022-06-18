const helpers = {

  validateUrl : function(url){
     // eslint-disable-next-line
     const reg = new RegExp("^https?://(?:[a-z0-9\-]+\.)+[a-z0-9]{2,6}(?:/[^/#?]+)+\.(?:jpg|gif|png)$")
     let message = true;
     if(url=== null || url.length===0){
       message = "campo o brigatório"
     }
     if(!reg.test(url)){
       message = "url inválido"
     }
      
      return message
  }
}

export default helpers;