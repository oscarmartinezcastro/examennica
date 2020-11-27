'use strict'

window.addEventListener("load",()=>{
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
    var pregunta21 = document.querySelector("#pregunta21");
    var pregunta22 = document.querySelector("#pregunta22");
    var pregunta23 = document.querySelector("#pregunta23");
    var pregunta24 = document.querySelector("#pregunta24");
    var pregunta25 = document.querySelector("#pregunta25");
    var pregunta26 = document.querySelector("#pregunta26");
    var pregunta27 = document.querySelector("#pregunta27");
    var pregunta28 = document.querySelector("#pregunta28");
    var pregunta29 = document.querySelector("#pregunta29");
    var pregunta30 = document.querySelector("#pregunta30");
    var pregunta31 = document.querySelector("#pregunta31");
    var pregunta32 = document.querySelector("#pregunta32");
    var pregunta33 = document.querySelector("#pregunta33");
    var pregunta34 = document.querySelector("#pregunta34");
    var pregunta35 = document.querySelector("#pregunta35");
    var pregunta36 = document.querySelector("#pregunta36");
    var pregunta37 = document.querySelector("#pregunta37");
    var pregunta38 = document.querySelector("#pregunta38");
    var pregunta39 = document.querySelector("#pregunta39");
    var pregunta40 = document.querySelector("#pregunta40");
    var pregunta41 = document.querySelector("#pregunta41");
    var pregunta42 = document.querySelector("#pregunta42");
    var pregunta43 = document.querySelector("#pregunta43");
    var pregunta44 = document.querySelector("#pregunta44");
    var pregunta45 = document.querySelector("#pregunta45");
    var pregunta46 = document.querySelector("#pregunta46");
    var pregunta47 = document.querySelector("#pregunta47");
    var pregunta48 = document.querySelector("#pregunta48");
    var pregunta49 = document.querySelector("#pregunta49");
    var pregunta50 = document.querySelector("#pregunta50");
    var pregunta51 = document.querySelector("#pregunta51");
    var pregunta52 = document.querySelector("#pregunta52");
    var pregunta53 = document.querySelector("#pregunta53");
    var pregunta54 = document.querySelector("#pregunta54");
    var pregunta55 = document.querySelector("#pregunta55");
    var pregunta56 = document.querySelector("#pregunta56");
    var pregunta57 = document.querySelector("#pregunta57");
    var pregunta58 = document.querySelector("#pregunta58");
    var pregunta59 = document.querySelector("#pregunta59");
    var pregunta60 = document.querySelector("#pregunta60");

    var contador = 0;//Lo uso para recorrer las preguntas.
    var cantidadPreguntas = 60;//Para establecer el final del recorrido de las preguntas.
    var contador2=1; //para el ciclo de ocultado de preguntas.
    var contador3=0; //este contador se incrementa cuando respondemos bien una pregunta.

    //Selecciono los botones
    var btn_atras = document.querySelector("#atras");
    var btn_adelante = document.querySelector("#adelante");
    var btn_resultado = document.querySelector("#resultado");

    var Fpregunta1 = document.getElementsByName("Fpregunta1");

    //Ingreso todas las preguntas en un único arreglo.
    var todasLasPreguntas = [pregunta1,pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7,pregunta8,pregunta9,pregunta10,
        pregunta11,pregunta12,pregunta13,pregunta14,pregunta15,pregunta16,pregunta17,pregunta18,pregunta19,pregunta20,
        pregunta21,pregunta22,pregunta23,pregunta24,pregunta25,pregunta26,pregunta27,pregunta28,pregunta29,pregunta30,
        pregunta31,pregunta32,pregunta33,pregunta34,pregunta35,pregunta36,pregunta37,pregunta38,pregunta39,pregunta40,
        pregunta41,pregunta42,pregunta43,pregunta44,pregunta45,pregunta46,pregunta47,pregunta48,pregunta49,pregunta50,
        pregunta51,pregunta52,pregunta53,pregunta54,pregunta55,pregunta56,pregunta57,pregunta58,pregunta59,pregunta60,
    ];
    
    /*Oculto todas las preguntas a excepción de la primera. */
    pregunta1.style.display = "block";
    
    for(contador2=1;contador2<=(cantidadPreguntas-1);contador2++)
    {
        todasLasPreguntas[contador2].style.display = "none";
    }

    //Este arreglo contiene la posición de la respuesta a=0, b=1, c=2, d=3, e=4; (abcd estan en el libro de transito)
    //                        1,2,3,4,5,6,7,8,9,10
    var todasLasRespuestas = [0,1,2,0,0,3,1,1,1,1,
                              2,1,3,1,0,1,2,0,2,2,
                              0,0,1,0,0,3,0,0,4,0,
                              1,3,2,0,0,1,2,0,1,0,
                              0,1,1,2,0,1,0,0,2,1,
                              1,1,0,0,2,0,1,2,2,0]; 

    var nota = document.querySelector("#notaFinal");//Es el área donde mostrare la nota del examen

    nota.style.display = "none";   //Oculto el bloque donde mostrare la nota al finalizar el examen.
    
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

    /////////////////////////////////////////////////////////////////////////////////////////
    //////Aqui el despelote de la correccion de la nota//////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////

    function notaFinal()
    {
        console.log("Dentro del bloque final");
        var final = 0;
        final = (contador3/cantidadPreguntas)*100;
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
       if(document.Fpregunta21.pregunt21[todasLasRespuestas[i]].checked == true)
       {
            pregunta21.style.display = "block";
            pregunta21.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta21.style.display = "block";
        pregunta21.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''_22_''''''''''''''''''''''''''''''''''
       if(document.Fpregunta22.pregunt22[todasLasRespuestas[i]].checked == true)
       {
            pregunta22.style.display = "block";
            pregunta22.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta22.style.display = "block";
        pregunta22.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''_23_'''''''''''''''''''''''''''''''''
       
       if(document.Fpregunta23.pregunt23[todasLasRespuestas[i]].checked == true)
       {
            pregunta23.style.display = "block";
            pregunta23.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta23.style.display = "block";
        pregunta23.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''_24_'''''''''''''''''''''''''''''''''
       if(document.Fpregunta24.pregunt24[todasLasRespuestas[i]].checked == true)
       {
            pregunta24.style.display = "block";
            pregunta24.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta24.style.display = "block";
        pregunta24.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''_25_'''''''''''''''''''''''''''''''''
       if(document.Fpregunta25.pregunt25[todasLasRespuestas[i]].checked == true)
       {
            pregunta25.style.display = "block";
            pregunta25.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta25.style.display = "block";
            pregunta25.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''_26_'''''''''''''''''''''''''''''''''
       
       if(document.Fpregunta26.pregunt26[todasLasRespuestas[i]].checked == true)
       {
            pregunta26.style.display = "block";
            pregunta26.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta26.style.display = "block";
        pregunta26.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''''_27_''''''''''''''''''''''''''''''''
       if(document.Fpregunta27.pregunt27[todasLasRespuestas[i]].checked == true)
       {
            pregunta27.style.display = "block";
            pregunta27.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta27.style.display = "block";
            pregunta27.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''_28_''''''''''''''''''''''''''''''
       if(document.Fpregunta28.pregunt28[todasLasRespuestas[i]].checked == true)
       {
            pregunta28.style.display = "block";
            pregunta28.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta28.style.display = "block";
        pregunta28.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''''''''_29_'''''''''''''''''''''''''''''
       if(document.Fpregunta29.pregunt29[todasLasRespuestas[i]].checked == true)
       {
            pregunta29.style.display = "block";
            pregunta29.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta29.style.display = "block";
            pregunta29.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''''''''_30_''''''''''''''''''''''''''''
       if(document.Fpregunta30.pregunt30[todasLasRespuestas[i]].checked == true)
       {
            pregunta30.style.display = "block";
            pregunta30.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta30.style.display = "block";
        pregunta30.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''''''''_31_''''''''''''''''''''''''''''
       if(document.Fpregunta31.pregunt31[todasLasRespuestas[i]].checked == true)
       {
            pregunta31.style.display = "block";
            pregunta31.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta31.style.display = "block";
        pregunta31.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''''''''_32_''''''''''''''''''''''''''''
       console.log(todasLasRespuestas[i]);
       if(document.Fpregunta32.pregunt32[todasLasRespuestas[i]].checked == true)
       {
            pregunta32.style.display = "block";
            pregunta32.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta32.style.display = "block";
        pregunta32.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''_33_'''''''''''''''''''''''''''''
       if(document.Fpregunta33.pregunt33[todasLasRespuestas[i]].checked == true)
       {
            pregunta33.style.display = "block";
            pregunta33.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta33.style.display = "block";
        pregunta33.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''_34_'''''''''''''''''''''''''''''
       if(document.Fpregunta34.pregunt34[todasLasRespuestas[i]].checked == true)
       {
            pregunta34.style.display = "block";
            pregunta34.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta34.style.display = "block";
            pregunta34.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''_35_'''''''''''''''''''''''''''''
       if(document.Fpregunta35.pregunt35[todasLasRespuestas[i]].checked == true)
       {
            pregunta35.style.display = "block";
            pregunta35.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta35.style.display = "block";
        pregunta35.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''_36_'''''''''''''''''''''''''''''
       
       if(document.Fpregunta36.pregunt36[todasLasRespuestas[i]].checked == true)
       {
            pregunta36.style.display = "block";
            pregunta36.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta36.style.display = "block";
        pregunta36.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''_37_'''''''''''''''''''''''''''''
       
       if(document.Fpregunta37.pregunt37[todasLasRespuestas[i]].checked == true)
       {
            pregunta37.style.display = "block";
            pregunta37.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta37.style.display = "block";
        pregunta37.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''_38_'''''''''''''''''''''''''''''
       
       if(document.Fpregunta38.pregunt38[todasLasRespuestas[i]].checked == true)
       {
            pregunta38.style.display = "block";
            pregunta38.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta38.style.display = "block";
        pregunta38.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''_39_'''''''''''''''''''''''''''''
       if(document.Fpregunta39.pregunt39[todasLasRespuestas[i]].checked == true)
       {
            pregunta39.style.display = "block";
            pregunta39.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta39.style.display = "block";
        pregunta39.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''_40_'''''''''''''''''''''''''''''''
       if(document.Fpregunta40.pregunt40[todasLasRespuestas[i]].checked == true)
       {
            pregunta40.style.display = "block";
            pregunta40.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta40.style.display = "block";
        pregunta40.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''_41_'''''''''''''''''''''''''''''''''
       if(document.Fpregunta41.pregunt41[todasLasRespuestas[i]].checked == true)
       {
            pregunta41.style.display = "block";
            pregunta41.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta41.style.display = "block";
            pregunta41.style.color = "red";
       }
       i++;//''''''''''''''''''''''_42_'''''''''''''''''''''''''''''''''''''''''
       
       if(document.Fpregunta42.pregunt42[todasLasRespuestas[i]].checked == true)
       {
            pregunta42.style.display = "block";
            pregunta42.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta42.style.display = "block";
            pregunta42.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''_43_''''''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta43.pregunt43[todasLasRespuestas[i]].checked == true)
       {
            pregunta43.style.display = "block";
            pregunta43.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta43.style.display = "block";
        pregunta43.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''_44_'''''''''''''''''''''''''''''''''''''
       
       if(document.Fpregunta44.pregunt44[todasLasRespuestas[i]].checked == true)
       {
            pregunta44.style.display = "block";
            pregunta44.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta44.style.display = "block";
            pregunta44.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''_45_'''''''''''''''''''''''''''''''''''''''''
       
       if(document.Fpregunta45.pregunt45[todasLasRespuestas[i]].checked == true)
       {
            pregunta45.style.display = "block";
            pregunta45.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta45.style.display = "block";
            pregunta45.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''_46_''''''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta46.pregunt46[todasLasRespuestas[i]].checked == true)
       {
            pregunta46.style.display = "block";
            pregunta46.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta46.style.display = "block";
        pregunta46.style.color = "red";
       }
       i++;//''''''''''''''''''''''''_47_'''''''''''''''''''''''''''''
       
       if(document.Fpregunta47.pregunt47[todasLasRespuestas[i]].checked == true)
       {
            pregunta47.style.display = "block";
            pregunta47.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta47.style.display = "block";
        pregunta47.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''_48_'''''''''''''''''''''''''''''
       
       if(document.Fpregunta48.pregunt48[todasLasRespuestas[i]].checked == true)
       {
            pregunta48.style.display = "block";
            pregunta48.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta48.style.display = "block";
        pregunta48.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''_49_'''''''''''''''''''''''''''''
       if(document.Fpregunta49.pregunt49[todasLasRespuestas[i]].checked == true)
       {
            pregunta49.style.display = "block";
            pregunta49.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta49.style.display = "block";
        pregunta49.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''_50_'''''''''''''''''''''''''''''''
       if(document.Fpregunta50.pregunt50[todasLasRespuestas[i]].checked == true)
       {
            pregunta50.style.display = "block";
            pregunta50.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta50.style.display = "block";
        pregunta50.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''_51_'''''''''''''''''''''''''''''''''
       if(document.Fpregunta51.pregunt51[todasLasRespuestas[i]].checked == true)
       {
            pregunta51.style.display = "block";
            pregunta51.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta51.style.display = "block";
            pregunta51.style.color = "red";
       }
       i++;//''''''''''''''''''''''_52_'''''''''''''''''''''''''''''''''''''''''
       
       if(document.Fpregunta52.pregunt52[todasLasRespuestas[i]].checked == true)
       {
            pregunta52.style.display = "block";
            pregunta52.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta52.style.display = "block";
            pregunta52.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''_53_''''''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta53.pregunt53[todasLasRespuestas[i]].checked == true)
       {
            pregunta53.style.display = "block";
            pregunta53.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta53.style.display = "block";
        pregunta53.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''_54_'''''''''''''''''''''''''''''''''''''
       
       if(document.Fpregunta54.pregunt54[todasLasRespuestas[i]].checked == true)
       {
            pregunta54.style.display = "block";
            pregunta54.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta54.style.display = "block";
            pregunta54.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''_55_'''''''''''''''''''''''''''''''''''''''''
       
       if(document.Fpregunta55.pregunt55[todasLasRespuestas[i]].checked == true)
       {
            pregunta55.style.display = "block";
            pregunta55.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta55.style.display = "block";
            pregunta55.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''_56_''''''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta56.pregunt56[todasLasRespuestas[i]].checked == true)
       {
            pregunta56.style.display = "block";
            pregunta56.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta56.style.display = "block";
        pregunta56.style.color = "red";
       }
       i++;//''''''''''''''''''''''''_57_'''''''''''''''''''''''''''''
       
       if(document.Fpregunta57.pregunt57[todasLasRespuestas[i]].checked == true)
       {
            pregunta57.style.display = "block";
            pregunta57.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta57.style.display = "block";
        pregunta57.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''_58_'''''''''''''''''''''''''''''
       
       if(document.Fpregunta58.pregunt58[todasLasRespuestas[i]].checked == true)
       {
            pregunta58.style.display = "block";
            pregunta58.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta58.style.display = "block";
        pregunta58.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''_59_'''''''''''''''''''''''''''''
       if(document.Fpregunta59.pregunt59[todasLasRespuestas[i]].checked == true)
       {
            pregunta59.style.display = "block";
            pregunta59.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta59.style.display = "block";
        pregunta59.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''_60_'''''''''''''''''''''''''''''''
       if(document.Fpregunta60.pregunt60[todasLasRespuestas[i]].checked == true)
       {
            pregunta60.style.display = "block";
            pregunta60.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta60.style.display = "block";
        pregunta60.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
       console.log("despues de la 45");
       notaFinal();    
   });//***************FIN btn_resultado */
});