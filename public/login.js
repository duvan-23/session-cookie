
const enviar=document.getElementById("enviar");
if(enviar){
    enviar.addEventListener('click',(e)=>{
        e.preventDefault();
        const nombre=document.getElementById("nombre_login");
        if(nombre.value!=""){

            setTimeout(() => {
                window.location.href=`/?nombre=${nombre.value}`;
            }, 500);
            
        }else{
            document.getElementById("alerta").style.visibility = "visible";
            setTimeout(() => {
                document.getElementById("alerta").style.visibility = "hidden";
            }, 2000);
        }
    });
}
