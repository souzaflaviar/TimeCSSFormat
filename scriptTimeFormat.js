function load (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var date = new Date()
    var hour = date.getHours()
    var min = date.getMinutes()
    
    msg.innerHTML = `<p>Agora são ${hour}:${min}</p>`  
    
    if (hour >= 00 && hour <= 05){
        img.src =  'img/04dawn.png'
        greet.innerHTML = `<p>Vai dormir!</p>`
        document.body.style.background = '#2d0038'
        document.body.header.style.color = 'white'
    }
    else if (hour > 05 && hour < 12){
        img.src =  'img/01morning.png'
        greet.innerHTML = `<p>Bom dia!</p>`
        document.body.style.background = '#e98b33'
        document.header.style.color = 'white'
    }
    else if (hour >= 12 && hour <= 18){
        greet.innerHTML = `<p>Boa tarde!</p>`
        img.src =  'img/02afternoon.png'
        document.body.style.background = '#7b7f7b'
        document.header.style.color = 'white'
        
    }
    else {
        img.src =  'img/03night.png'
        greet.innerHTML = `<p>Boa noite!</p>`
        document.body.style.background = '#262e35'
    }
}
    

