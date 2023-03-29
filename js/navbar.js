let navbar=document.createElement('div');
document.body.appendChild(navbar)
navbar.className='navbar'
let link1=document.createElement('a');
link1.setAttribute('href','calculator.html')
link1.innerHTML='CALCULATOR'
let link2=document.createElement('a');
link2.setAttribute('href','index.html')
link2.innerHTML='HOME'
let link3=document.createElement('a');
link3.setAttribute('href','mail.html')
link3.innerHTML='MAIL'
let link4=document.createElement('a');
link4.setAttribute('href', 'todo.html')
link4.innerHTML='TODO'
navbar.append(link2,link1,link3,link4)