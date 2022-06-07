let Btn = document.getElementById("Btn");
let let_resultDisplay = document.querySelector(".let_resultDisplay") ;

Btn.addEventListener("click",() =>{
    let_resultDisplay.style.display = "block";
   
});

Btn.onmouseout = () => {
    document.querySelector(".let_resultDisplay").style.display = "none"
};
 
const result1 = "shyface gave me tough time second time"
const  Btn1 = document.getElementById("Btn1");
 Btn1.addEventListener('click', ()=>{
     try{
         //but that was done here therefore giving us an error
          result1= "shyface I have no questions"
     document.querySelector(".const_resultDisplay").style.display = "block"
      document.getElementById("results1").innerHTML = result1   
     } catch (e){
     document.querySelector(".const_resultDisplay").style.display = "block"
      document.getElementById("results1").innerHTML = "there is an error"
     }
 }) 
  Btn1.onmouseout = () => {
         document.querySelector(".const_resultDisplay").style.display = "none"
        }
        










        //     const_resultDisplay.style.display = "block";
// let valueStored = "shyface gave me tough time";
//  document.getElementById("valueStored").innerHTML = valueStored

 

// let  Btn = document.getElementById("Btn");
// Btn.addEventListener('click', ()=>{
//     valueStored = "shyface I have questions"
//     document.querySelector(".let_resultDisplay").style.display = "block"
//      document.getElementById("results").innerHTML = valueStored
// })

// Btn.onmouseout = () => {
//     document.querySelector(".let_resultDisplay").style.display = "none"
// }


// // THE IS AN ERROR BECAUSE WHEN USING CONST AS A VARIABLE STATED ITS CANNOT BE OVERRIDEB WITH ANOTHER VALUE.

// const valueStored1 = "shyface gave me tough time second time"
//  document.getElementById("valueStored1").innerHTML = valueStored1

//  let  Btn1 = document.getElementById("Btn1");
// Btn1.addEventListener('click', ()=>{
//     try{
//         //but that was done here therefore giving us an error
//         valueStored1 = "shyface I have no questions"
//     document.querySelector(".const_resultDisplay").style.display = "block"
//      document.getElementById("results1").innerHTML = valueStored1    
//      //i tried changing the color but it didnt work
//      valueStored1.style.backgroundColor = "green";
//     } catch (e){
//     document.querySelector(".const_resultDisplay").style.display = "block"
//      document.getElementById("results1").innerHTML = "there is an error"
//     }
// })

// Btn1.onmouseout = () => {
//     document.querySelector(".const_resultDisplay").style.display = "none"
// }



