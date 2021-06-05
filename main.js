var input = document.getElementsByTagName("input")[0];
var output=  document.getElementsByTagName("input")[1]
var button = document.getElementsByTagName("button");


//BUTTON FUNCTIONS
const reset = () => {
input.value = '';
output.value=''
};


const powerOfTwo = () => {
let result= eval(input.value);
if(isNaN(result)==false){

result = Math.pow(result, 2);
result = result.toString()
if(result.length >= 15){
let decimalResult = Number(result);
let newResult = decimalResult.toFixed(10);
input.value=newResult;
output.value = "";
} else {
input.value = result;
output.value = "";
}
}else{
  input.value=''
output.value = "";
}
};

const squareRoot = () =>{

let result= eval(input.value);
console.log(result)
if(isNaN(result) == false){
result = Math.sqrt(result);
result = result.toString()
if(result.length >= 15){
let decimalResult = Number(result);
let newResult = decimalResult.toFixed(10);
input.value=newResult;
output.value = "";
}else {
input.value = result;
output.value = "";
}
}
 else{
output.value = "";
}

};

const multiplication = () => {
  input.value += '*';
  output.value = "";

}

const nine = () => {
  input.value += "9"; 
  let result= eval(input.value)
  if(result.length >= 15){
    return output.value =result.toFixed(10)
    }else {
    return output.value= result
    }
}

const eight = () =>{
  input.value += "8"; 
  let result= eval(input.value)
  if(result.length >= 15){
   return output.value =result.toFixed(10)
    }else {
      return output.value= result
    }
}

const seven = () => {
  input.value += "7"; 
  let result= eval(input.value)
 if(result.length >= 15){
   return output.value =result.toFixed(15)
    }else {
      return output.value= result
    }
}

const division = () =>{ 
 input.value += '/'; 
 output.value = "";
}

const six = () => { 
  input.value += "6";
  let result= eval(input.value)
   if(result.length >= 15){
   return output.value =result.toFixed(10)
    }else {
      return output.value= result
    }
}

const five = () => {
   input.value += "5"; 
   let result= eval(input.value)
    if(result.length >= 15){
   return output.value =result.toFixed(10)
    }else {
      return output.value= result
    }
}
const four = () =>{
   input.value += "4"; 
   let result= eval(input.value)
   if(result.length >= 15){
   return output.value =result.toFixed(10)
    }else {
      return output.value= result
    }
}
const subtraction = () =>{ 
  input.value += '-'; 
  output.value = "";

}

const three = () =>{ 
  input.value += "3"; 
  let result= eval(input.value)
   if(result.length >= 15){
   return output.value =result.toFixed(10)
    }else {
      return output.value= result
    }
}

const two = () => {
  input.value += "2"; 
  let result= eval(input.value)
  if(result.length >= 15){
   return output.value =result.toFixed(10)
    }else {
      return output.value= result
    }
}

const one = () =>{
   input.value += "1";
   let result= eval(input.value)
    if(result.length >= 15){
   return output.value =result.toFixed(10)
    }else {
      return output.value= result
    }
}

const addition = () =>{
   input.value += '+'; 
   output.value = "";
}

const period = () =>{ 
  input.value += "."; 
}

const zero = () =>{ 
  input.value += "0"; 
  let result= eval(input.value)
   if(result.length >= 15){
   return output.value =result.toFixed(10)
    }else {
      return output.value= result
    }
}

const powerOfn = () => {
  input.value += "^";
  var a = input.value;
  b = a.substr(0, a.indexOf("^"));
  b = Number(b);
};

const del = () =>{
  let a = input.value;
 input.value = a.substring(0, a.length - 1);
  let result= eval(a)
   if(result.length >= 15){
   return output.value = result.toFixed(10)
    }else {
      return output.value= result
    }
};

const equalTo = () => {

  if(input.value.includes("^") && (input.value.split('^').length-1) > 1){
    output.value = "Error";
  } else if(input.value.includes("^") && (input.value.split('^').length-1) == 1){
    let a = input.value;
  var c = a.substr(a.indexOf("^")+1);
  if(isNaN(c)==false && isNaN(this.b)==false){
    let a = Number(c);
    let y = Number(this.b);
   let result = Math.pow(y, a);
input.value=output.value;
output.value=''
   input.value = result;
   
  } else {
    output.value = "Error"
  };
} else {
let result = eval(input.value);
let newResult = Number(result);
if(isNaN(newResult) == false && newResult< 9999999999999999999999){
  output.value=''
return  input.value = result;
} else if( newResult > 9999999999999999999999){
return output.value = "Error";
}else{
output.value = "Error"
};
};
};

button[0].addEventListener("click", reset);
button[4].addEventListener("click", seven);
button[5].addEventListener("click", eight);
button[6].addEventListener("click", nine);
button[7].addEventListener("click", multiplication);
button[8].addEventListener("click", four);
button[9].addEventListener("click", five);
button[10].addEventListener("click", six);
button[3].addEventListener("click", division);
button[12].addEventListener("click", one);
button[13].addEventListener("click", two);
button[14].addEventListener("click", three);
button[11].addEventListener("click", subtraction);
button[18].addEventListener("click", period);
button[17].addEventListener("click", zero);
button[15].addEventListener("click", addition)
button[1].addEventListener("click", powerOfTwo);
button[2].addEventListener("click", squareRoot);
button[16].addEventListener("click", del);
button[19].addEventListener("click", equalTo);

