var keylist="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"
 var temp = ''
 function generatePass(plength){
  temp=''
  for(var i= 0; i < plength; i++ ){
   temp +=keylist.charAt(Math.floor(Math.random()*keylist.length))
  }
  return temp
 }
 
 function populateForm (enterLength){
  document.passGen.output.value = generatePass(enterLength)
 }
 