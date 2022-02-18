

function askMyName() {
    const name = prompt('What Is Your Name')
 
    if (name != null) {
       document.getElementById("j.name").innerHTML = "My name is " + name ;
    }
 }
 
 function helloWorld() {
   const h1message = document.getElementById("j.name").innerHTML 
    alert (h1message  + " แสงแดดที่ร้อนจ้า ยังแพ้ตัวข้าที่ร้อนเงิน ")
 }


 function calAge() {
    const Age = prompt ("Year of yourbirthday is")
    alert ("'ยินดีด้วย นายอยู่ประเทศนี้มา" + ((2022) - Age) + 'ปีแล้ว');
 }


function loadProfile(){
   const name = (" Jajee " + "")
   const province = (" Lampang " + "")
   
   document.getElementById("my-name").innerHTML = name 
   document.getElementById("my-province").innerHTML = province



}