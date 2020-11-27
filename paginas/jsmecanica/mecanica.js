'use strict'

window.addEventListener('load',function(){

    //Selecciono las cajas donde se encuentran las preguntas y sus respectivas respuestas.
    var pregunta1 = document.querySelector("#pregunta1");
    var pregunta2 = document.querySelector("#pregunta2");
    var pregunta3 = document.querySelector("#pregunta3");
    var pregunta4 = document.querySelector("#pregunta4");
    var pregunta5 = document.querySelector("#pregunta5");
    var pregunta6 = document.querySelector("#pregunta6");
    var pregunta7 = document.querySelector("#pregunta7");
    var pregunta8 = document.querySelector("#pregunta8");
    var pregunta9 = document.querySelector("#pregunta9");
    var pregunta10 = document.querySelector("#pregunta10");
    var pregunta11 = document.querySelector("#pregunta11");
    var pregunta12 = document.querySelector("#pregunta12");
    var pregunta13 = document.querySelector("#pregunta13");
    var pregunta14 = document.querySelector("#pregunta14");
    var pregunta15 = document.querySelector("#pregunta15");
    var pregunta16 = document.querySelector("#pregunta16");
    var pregunta17 = document.querySelector("#pregunta17");
    var pregunta18 = document.querySelector("#pregunta18");
    var pregunta19 = document.querySelector("#pregunta19");
    var pregunta20 = document.querySelector("#pregunta20");
    

    var contador = 0;//Lo uso para recorrer las preguntas.
    var cantidadPreguntas = 20;//Para establecer el final del recorrido de las preguntas.
    var contador2=1; //para el ciclo de ocultado de preguntas.
    var contador3=0; //este contador se incrementa cuando respondemos bien una pregunta.

    //Selecciono los botones
    var btn_atras = document.querySelector("#atras");
    var btn_adelante = document.querySelector("#adelante");
    var btn_resultado = document.querySelector("#resultado");

    var Fpregunta1 = document.getElementsByName("Fpregunta1");

    //Ingreso todas las preguntas en un único arreglo.
    var todasLasPreguntas = [pregunta1,pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7,pregunta8,pregunta9,pregunta10,
        pregunta11,pregunta12,pregunta13,pregunta14,pregunta15,pregunta16,pregunta17,pregunta18,pregunta19,pregunta20];

    //Este arreglo contiene la posición de la respuesta a=0, b=1, c=2, d=3, e=4; (abcd estan en el libro de transito)
    //                        1,2,3,4,5,6,7,8,9,10
    var todasLasRespuestas = [2,3,2,0,1,0,1,2,1,4,
                              0,1,4,4,0,1,4,2,1,2]; 

    var nota = document.querySelector("#notaFinal");//Es el área donde mostrare la nota del examen

    nota.style.display = "none";   //Oculto el bloque donde mostrare la nota al finalizar el examen.

    /*Oculto todas las preguntas a excepción de la primera. */
    pregunta1.style.display = "block";
    
    for(contador2=1;contador2<=(cantidadPreguntas-1);contador2++)
    {
        todasLasPreguntas[contador2].style.display = "none";
    }

    
    btn_resultado.style.display = "none";//Oculto el botón y aparecerá hasta que se llegue a la ultima pregunta.

    btn_adelante.addEventListener("click",()=>{//Función del botón adelante.+++++++++++++++++++++++++++++++++++++++
        contador++;
        if(contador >= (cantidadPreguntas-1))
        {
            contador = cantidadPreguntas - 1;
            btn_resultado.style.display = "block";
            btn_resultado.style.margin = "0px auto";
        }
        todasLasPreguntas[contador-1].style.display = "none";
        todasLasPreguntas[contador].style.display = "block";
        
    });// FIN DE LA FUNCION DEL BOTÓN ADELANTE++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    btn_atras.addEventListener("click",function(){
         contador--;
         if(contador <= 0)
         {
             contador = 0;
         }
         todasLasPreguntas[contador].style.display = "block";
         todasLasPreguntas[contador+1].style.display = "none";
    });//fin de la funcion atras.---------------------------------------------------------------

    function notaFinal()
    {
        var final = (contador3/cantidadPreguntas)*100;
        nota.style.display = "Block";
        var resultadofinal = document.querySelector("#resultadoFinal");
        btn_resultado.style.display = "none";   //Oculto el bloque donde mostrare la nota al finalizar el examen.
        botones.style.display = "none";
        if(final>100)
        {final=100;}
        resultadofinal.innerHTML = final.toFixed(2);
        if(final>=80)
        {
            resultadofinal.style.color = "blue";
        }
        else
        {
            resultadofinal.style.color = "red";
        }
        //document.write("<h3>"+final+"</h3>");
    }

    function sumaPuntos()
   {
        contador3++;
   }
   //******************************-btn_resultado-*****************************************************
    btn_resultado.addEventListener("click",()=>{
       console.log("Btn:_resultado");
       let i=0;
       if(document.Fpregunta1.pregunt1[todasLasRespuestas[i]].checked == true)
       {
            pregunta1.style.display = "block";
            pregunta1.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta1.style.display = "block";
            pregunta1.style.color = "red";
       }
       i++;//''''''''''''''''''''''_2_'''''''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta2.pregunt2[todasLasRespuestas[i]].checked == true)
       {
            pregunta2.style.display = "block";
            pregunta2.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta2.style.display = "block";
            pregunta2.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''_3_''''''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta3.pregunt3[todasLasRespuestas[i]].checked == true)
       {
            pregunta3.style.display = "block";
            pregunta3.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta3.style.display = "block";
        pregunta3.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''_4_'''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta4.pregunt4[todasLasRespuestas[i]].checked == true)
       {
            pregunta4.style.display = "block";
            pregunta4.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta4.style.display = "block";
            pregunta4.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''_5_''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta5.pregunt5[todasLasRespuestas[i]].checked == true)
       {
            pregunta5.style.display = "block";
            pregunta5.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta5.style.display = "block";
        pregunta5.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''_6_''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta6.pregunt6[todasLasRespuestas[i]].checked == true)
       {
            pregunta6.style.display = "block";
            pregunta6.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta6.style.display = "block";
            pregunta6.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''_7_'''''''''''''''''''''''''''''''''''
       if(document.Fpregunta7.pregunt7[todasLasRespuestas[i]].checked == true)
       {
            pregunta7.style.display = "block";
            pregunta7.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta7.style.display = "block";
        pregunta7.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''_8_'''''''''''''''''''''''''''''''''''
       if(document.Fpregunta8.pregunt8[todasLasRespuestas[i]].checked == true)
       {
            pregunta8.style.display = "block";
            pregunta8.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta8.style.display = "block";
            pregunta8.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''_9_''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta9.pregunt9[todasLasRespuestas[i]].checked == true)
       {
            pregunta9.style.display = "block";
            pregunta9.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta9.style.display = "block";
            pregunta9.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''_10_''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta10.pregunt10[todasLasRespuestas[i]].checked == true)
       {
            pregunta10.style.display = "block";
            pregunta10.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta10.style.display = "block";
            pregunta10.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''_11_'''''''''''''''''''''''''''''''''''
       if(document.Fpregunta11.pregunt11[todasLasRespuestas[i]].checked == true)
       {
            pregunta11.style.display = "block";
            pregunta11.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta11.style.display = "block";
        pregunta11.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''_12_''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta12.pregunt12[todasLasRespuestas[i]].checked == true)
       {
            pregunta12.style.display = "block";
            pregunta12.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta12.style.display = "block";
            pregunta12.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''_13_''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta13.pregunt13[todasLasRespuestas[i]].checked == true)
       {
            pregunta13.style.display = "block";
            pregunta13.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta13.style.display = "block";
            pregunta13.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''_14_''''''''''''''''''''''''''''''''''
       if(document.Fpregunta14.pregunt14[todasLasRespuestas[i]].checked == true)
       {
            pregunta14.style.display = "block";
            pregunta14.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta14.style.display = "block";
            pregunta14.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''''_15_'''''''''''''''''''''''''''''''''
       if(document.Fpregunta15.pregunt15[todasLasRespuestas[i]].checked == true)
       {
            pregunta15.style.display = "block";
            pregunta15.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta15.style.display = "block";
        pregunta15.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''_16_''''''''''''''''''''''''''''''''''
       if(document.Fpregunta16.pregunt16[todasLasRespuestas[i]].checked == true)
       {
            pregunta16.style.display = "block";
            pregunta16.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta16.style.display = "block";
            pregunta16.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''_17_''''''''''''''''''''''''''''''''''
       if(document.Fpregunta17.pregunt17[todasLasRespuestas[i]].checked == true)
       {
            pregunta17.style.display = "block";
            pregunta17.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta17.style.display = "block";
            pregunta17.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''_18_''''''''''''''''''''''''''''''''''
       if(document.Fpregunta18.pregunt18[todasLasRespuestas[i]].checked == true)
       {
            pregunta18.style.display = "block";
            pregunta18.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta18.style.display = "block";
        pregunta18.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''_19_'''''''''''''''''''''''''''''''''''
       if(document.Fpregunta19.pregunt19[todasLasRespuestas[i]].checked == true)
       {
            pregunta19.style.display = "block";
            pregunta19.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta19.style.display = "block";
        pregunta19.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''_20_'''''''''''''''''''''''''''''''''''
       if(document.Fpregunta20.pregunt20[todasLasRespuestas[i]].checked == true)
       {
            pregunta20.style.display = "block";
            pregunta20.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta20.style.display = "block";
        pregunta20.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''_21_'''''''''''''''''''''''''''''''''''

       notaFinal();    
   });//***************FIN btn_resultado */
   
   
});