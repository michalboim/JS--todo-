add.onclick=()=>{
    let itemLists=[];
    console.log(itemLists)
    let itemDetails=task.value;
    let itemDate=date.value;
    let items={'items':[itemDetails,itemDate]};
    if (localStorage.getItem('array')==null){
        localStorage.setItem('array',JSON.stringify(itemLists))};
    itemLists=JSON.parse (localStorage.getItem('array'));
    itemLists.push(items)
    localStorage.setItem('array',JSON.stringify(itemLists))}

show.onclick=()=>{
    object=JSON.parse (localStorage.getItem('array'))
    for (let ob of object){
        console.log(ob)
        let divItems=document.createElement('div');
        lists.appendChild(divItems)
        divItems.className='items'
        let divDetails=document.createElement('div');
        divDetails.className ="details";
        divDetails.innerHTML=ob['items'][0];
        let divDate=document.createElement('div');
        divDate.className='date';
        divDate.innerHTML=ob['items'][1];
        divItems.append(divDetails,divDate)}}

clear.onclick=()=>{
    lists.innerHTML=""}

deleteItems.onclick=()=>{
    localStorage.clear('array')
    lists.innerHTML=""}
    


