next.onclick=()=>{
    window.open("next.html", "_self");
    let name=userName.value;
    let lastNane=userLastName.value;
    let packageNumber=package.value;
    let packageDetails={
        first:name,
        last:lastNane,
        userPackage:packageNumber,}
    localStorage.setItem('packageDetails',JSON.stringify(packageDetails))}
if (localStorage.gettItem('packageDetails')!=null){
     form=JSON.parse(localStorage.getItem('packageDetails'))}

