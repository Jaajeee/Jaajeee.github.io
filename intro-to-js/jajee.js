


function askMyName() {
    const name = prompt('What Is My Name')
 
    if (name != null) {
       document.getElementById("j.name").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
 const h1message = document.getElementById("j.name").innerHTML 
    alert (h1message + 'แสงแดดที่ร้อนจ้า ยังแพ้ตัวข้าที่ร้อนเงิน')
 }