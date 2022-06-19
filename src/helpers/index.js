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
  },
  getOnlyYear(string){
    return string.substring(0, 10);
  },
  getAge(dateString) 
  {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
  },
}

export default helpers;