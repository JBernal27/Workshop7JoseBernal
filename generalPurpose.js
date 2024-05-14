//Funciones de proposito general

const GP = {
    textInput: (input) => {
      const userInput = prompt(input).trim()
      return userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase()
    },
  
    numberInput: (msj, num = 0) => {
      while(true){
        num = Number(prompt(msj))
        if(typeof num === "number" &&!Number.isNaN(num)){
          return num
        }else{
          impErr("Por favor ingrese un valor numerico")
        }
      }
    },
  
    impErr: (input) => alert(`Error!\n${input}`),
  
    impInf: (input) => alert(input)
  };
  
  export default GP;