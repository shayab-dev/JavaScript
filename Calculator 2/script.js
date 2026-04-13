let display = document.querySelector('#screen');
let buttons = document.querySelectorAll('button');
let Arraybuttons = Array.from(buttons);

let result = '';

Arraybuttons.forEach(function(btn){
  btn.addEventListener('click', function(e){
    if(e.target.innerHTML == 'DEL'){
      result = result.substring(0, result.length-1);
      display.value = result;

    }else if(e.target.innerHTML == 'AC'){
      result = '';
      display.value = result;

    }else if(e.target.innerHTML == '='){
      result = eval(result.replace(/×/g, '*').replace(/÷/g, '/'));
      display.value = result;

    }else{
      result += e.target.innerHTML;
      display.value = result;
    }
  });
});

// let display = document.querySelector('#screen');
// let buttons = document.querySelectorAll('button');
// let Arraybuttons = Array.from(buttons);

// let result = '';

// Arraybuttons.forEach(function(btn){
//   btn.addEventListener('click', function(e){
//     if(e.target.innerHTML == 'DEL'){
//       result = result.substring(0, result.length-1);
//       display.value = result;

//     }else if(e.target.innerHTML == 'AC'){
//       result = '';
//       display.value = result;

//     }else if(e.target.innerHTML == '='){
//       result = eval(result);
//       display.value = result;

//     }else{
//       result += e.target.innerHTML;
//       display.value = result;
//     }
//   });
// });