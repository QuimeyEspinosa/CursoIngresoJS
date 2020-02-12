/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var precioLampara;
     var cantidad;
     var descuento;
     var marca;
     var precioDescuento;

     precioLampara = 35;
     cantidad = document.getElementById("Cantidad").value;
     marca = document.getElementById("Marca").value;
     precioDescuento = document.getElementById("precioDescuento").value;
     importeFinal = 

     if(cantidad >= 6) {
         descuento = 0.5;
     } else if (cantidad == 5 && marca == "ArgentinaLuz") {
         descuento = 0.4;
     } else if (cantidad == 5) {
         descuento = 0.3;
     } else if (cantidad == 4 && marca == "ArgentinaLuz" || "FelipeLamparas") {
         descuento = 0.25;
     } else if (cantidad == 4) {
         descuento = 0.2;
     } else if (cantidad == 3 && marca == "ArgentinaLuz") {
         descuento = 0.15;
     } else if (cantidad == 3 && marca == "FelipeLamparas") {
         descuento = 0.1;
     } else if (cantidad == 3) {
         descuento = 0.05;
     }

     parseInt(precioDescuento)

     if (precioDescuento > 120) {
         importeFinal = (precioDescuento * 1.1)
     }
    


}    