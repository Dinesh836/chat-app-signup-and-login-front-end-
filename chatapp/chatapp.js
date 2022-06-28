const sendBtn=document.getElementById('sendBtn')
const chatbox=document.getElementById('chatbox')
const msginput=document.getElementById('msginput').value
console.log(msginput)



sendBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    chatbox.innerHTML=chatbox.innerHTML + ` <li class="msges">${msginput}</li>`
})