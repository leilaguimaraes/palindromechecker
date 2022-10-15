function palindrome(){
  var num = document.querySelector('.palavraidentificada').value.toLowerCase();
  var alpha = num
  .split('')
  .reverse()
  .join('');

    if (num === alpha){
      alert("É um palindromo")
    } else{
      alert("Não é um palindromo")
    }
  }





/*function palindrome(){
  var str = document.querySelector('.palavraidentificada').value.toLowerCase();
  var num = str.match(/[a-z0-9]/g);
  if(num.join('') === num.reverse().join('')){
    document.querySelector(".div__resultado").innerHTML= `É um palíndromo`
  } else{
    document.querySelector(".div__resultado").innerHTML= `Não um palíndromo`
  } 
  console.log(num)
} */
