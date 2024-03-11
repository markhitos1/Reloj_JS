const contenedor = document.querySelector(".container");
const tiempo = document.getElementById("tiempo");
const datos = document.getElementById("data");
const brillo = document.querySelector('.brillo');
const body = document.body;
const bri = brillo.style;

body.style.height = "100vh";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.background = "#fff";
body.style.fontFamily = "lato";

contenedor.style.textAlign = "center";
contenedor.style.border = '10px solid #000';
contenedor.style.background = '#555';
contenedor.style.borderRadius = '20%';
contenedor.style.boxShadow = '40px 40px 30px 0px  #0008';

tiempo.style.fontSize = "10rem";
tiempo.style.fontWeight = "400";
tiempo.style.background = '#000';
tiempo.style.color = 'green';
tiempo.style.border = ' 10px solid  #444';
tiempo.style.margin = '20px 0 70px'

datos.style.fontSize = "2.5rem";
datos.style.fontFamily = "sans-serif";
datos.style.background = '#010';
datos.style.border = '8px solid #444';
datos.style.width = '60%';
datos.style.margin = '-5% 20% 8%';
datos.style.color = '#800';

bri.position = 'relative';
bri.margin = '0'
bri.width = '90px';
bri.height = '90px';
bri.borderLeft = '30px solid #fff0';
bri.borderRight = '30px solid #fff0';
bri.borderTop = '20px solid #fff0';
bri.borderBottom = '-0px solid #fff9';
bri.background = '#fff3';
bri.left = '68%';
bri.top = '45px';
bri.borderRadius = '50%';
bri.rotate = '30deg';



//Maquinacion del reloj

const meses = ["Diciembre","Enero","Febrero","Marzo","Abril",
               "Junio","julio","Agosto","Septiembre",
               "Octubre","Noviembre"];

           
const interval = setInterval(()=>{
    const local = new Date();
    let dia = local.getDate(),
       mes = local.getMonth();
       año = local.getFullYear(); 

       tiempo.innerHTML = local.toLocaleTimeString();
       datos.innerHTML = `${dia} ${meses[mes]} ${año}`

},1000);



