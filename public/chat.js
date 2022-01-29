const socket = io.connect('http://localhost:3000')

const output = document.getElementById('output')
const feedback = document.getElementById('feedback')
const inputName = document.getElementById('name')
const inputMsg = document.getElementById('message')
const sendBtn = document.getElementById('sendBtn')

sendBtn.addEventListener('click',()=>{
    socket.emit('chat',{
        name : inputName.value,
        message : inputMsg.value

    })
})

socket.on('chat',data=>{
    feedback.innerHTML = ''
    output.innerHTML += `<p><strong>  ${data.name} : </strong> ${data.message} </p>`
})

inputMsg.addEventListener('keypress',()=>{
    socket.emit('typing',inputName.value)
})

socket.on('typing',data =>{
    feedback.innerHTML = `<p>${data} is typing</p>`
})