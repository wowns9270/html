// let count = 0;

// var timer = setInterval(()=>{
//     console.log(count);

//     if(++count > 4 ) clearInterval(timer);
// } , 1000);


// let a = [1,2,3,4,5];

// a.forEach( function( c , i ){
//     console.log(this[i]);
// } , a);

// let a = {
//     name : "b",
//     gogo : function(){
       
//         setTimeout(function(){
//             console.log(that);
//         },300);
//     }
// }

// a.gogo();

// let promise2 = new Promise(function(resolve , reject){

//     console.log("1단계전");
//     resolve("done");
//     console.log("1단계후");

// })
// .then( (result)=>{

//     return new Promise( function(resolve , reject) {

//         console.log("2단계 전");
//         resolve("ddoonnee");
//         console.log("2단계 후");
//     })
// })
// .then ( (result ) =>{
//     console.log(result);
// })


// console.log(promise2);



// let promise = new Promise(function(resolve, reject) {

//     console.log("11");
//     resolve(1);
//     console.log("22");
//     setTimeout(() =>{
//         resolve(2);
//         console.log("33");
//     } , 1000);

//     console.log("44");

//   });


  
//   promise.then(alert =>{
//       console.log(alert);
//   });


// function delay(ms) {
//     return new Promise( function(resolve ,reject){

//         setTimeout(function(){  
//             resolve("good");
//         } , ms)

//     })
//   }
  
//   delay(3000).then(() => console.log('3초후 실행'));


// let a = new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000); // (*)
  
//   }).then(function(result) { // (**)
  
//     console.log(result); // 1
//     return result * 2;
  
//   }).then(function(result) { // (***)
  
//    console.log(result); // 2
//     return result * 2;
  
//   }).then(function(result) {
  
//     console.log(result); // 4
//     return result * 2;
//   });

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  });
  
  promise.then(function(result) {
    console.log(result); // 1
    return result * 2;
  });
  
  promise.then(function(result) {
    console.log(result); // 1
    return result * 2;
  });
  
  promise.then(function(result) {
    console.log(result); // 1
    return result * 2;
  });