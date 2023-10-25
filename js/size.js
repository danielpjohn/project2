console.log('oooooooo');

reSize = () => {

    if (document.getElementById('width_px').value != "") {
        document.getElementById('img').style.width = document.getElementById('width_px').value ;
    }

    if (document.getElementById('width_per').value != "") {
        document.getElementById('img').style.width = document.getElementById('width_per').value ;
    }

    if (document.getElementById('height_px').value != "") {
        document.getElementById('img').style.height = document.getElementById('height_px').value;
    }

    if (document.getElementById('height_per').value != "") {
        document.getElementById('img').style.height = document.getElementById('height_per').value;
    }
     
}

load_link = () =>{
 loadLink = () =>{
        if (document.getElementById('link').checked == true) {
            document.getElementById('enter_link').target = '__blank';

            window.open( document.getElementById('enter_link').value,'__blank');
           
        }
        else{
            window.location.href = document.getElementById('enter_link').value;
            
        }
    }
    if(document.getElementById('enter_link')!='')
    {
       setTimeout(loadLink,2000);
       
    } 
}