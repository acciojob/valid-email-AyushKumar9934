
  //your JS code here.
	const validEmail = (email) => {
    
   if(  String(email)
    
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )==null){ return false;}
    return true;

      
  };



// Do not change the code below.
 const str = prompt("Enter an email address.");
alert(validEmail(str));
