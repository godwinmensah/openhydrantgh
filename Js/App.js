
    
 const search = () => {  
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("driection-info")
    const direction =  document.querySelectorAll(".direction")
    const pname = storeitems.getElementsByTagName("h4")

    for (var i= 0; i < pname.length; i++){
        let match = direction[i].getElementsByTagName('h4')[0];

        if (match) {
            let textvalue = match.textcontent || match.innerHTML

        if (textvalue.toUpperCase().indexOf(searchbox) > -1){
            direction[i].style.display = "";
    
        }else{

            direction[i].style.display = "none";  
        }
            
        }
    }
 }



