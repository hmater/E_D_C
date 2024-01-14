const all_terms = {
    "Cuestión social": "Etapa de la historia, surgida desde los inicios de la industrialización hasta nuestros días, caracterizada por todas las consecuencias económicas, políticas y sociales de los avances tecnológicos de la humanidad.",
    "In dubio pro operario": "Locución latina que se traduce como “en la duda por el trabajador” y significa que si no existen normas claras, el intérprete debe inclinarse en la duda por el trabajador.",
    "Norma más favorable": "Aspecto del principio pro operario que significa que cuando existen dos normas que convergen a un resultado distinto, se prefiere la que más favorece al trabajador.",
    "Condición más ventajosa": "Aspecto del principio pro operario, que significa que aunque una ley cambie, las condiciones adquiridas por una ley antigua y que eran más ventajosas, éstas últimas, se mantienen.",
    "Principio pro operario": "Principio fundamental del derecho del trabajo en el que se resalta el carácter tuitivo del Estado.",
    "Principio de irrenunciabilidad": "Hay elementos de la relación laboral que no pueden tocarse por las partes del contrato de trabajo, por ejemplo: el sueldo mínimo, las imposiciones, el recargo de las horas extras.",
    "Principio de la continuidad": "El legislador siempre busca que la relación laboral sea lo más permanente posible, por ejemplo el contrato indefinido es la regla general; el contrato a plazo fijo es la excepción.",
    "Principio de la primacía de la realidad": "Se refiere a que si hay contradicción entre lo que dice el contrato y lo que hace el trabajador en los hechos, se prefiere esto último.",
    "Principio de la Buena fe": "En materia laboral se refiere al respeto mutuo que debe darse entre empleador y trabajador.",
    "Principio de la no discriminación": "Principio consagrado en el art. 2 del C. del Trabajo y que hace alusión a que la propia ley establece los elementos por los cuales se puede reclamar discriminación en el ámbito laboral. Sólo se refiere a los que expresamente se indican en la ley.",
    "Discriminación positiva": "Elementos por los cuales si se puede discriminar en materia laboral ya que son atributos o características indispensables para la labor que se va a desempeñar.",
    "Principio del trato digno al trabajador": "Todo trabajador es persona y como tal siempre deberá ser respetado, teniendo el empleador límites a sus facultades disciplinarias y de mando que se le conceden y que son la intimidad, la vida privada y la honra de los trabajadores.",
    "Principio de certeza": "Las relaciones laborales siempre tienen que estar establecidas en la claridad y transparencia de situaciones hacia el trabajador, como por ejemplo: saber que se le paga y que se le descuenta a través de una liquidación de sueldo; establecer claramente su fecha de pago de sueldo, etc.",
    "Acoso sexual": "Requerimiento de carácter sexual indebido, no consentido por quien los recibe y que amenazan o perjudican su situación laboral u oportunidades en el empleo.",
    "Acoso laboral, hostigamiento o moobing": "Agresión u hostigamiento reiterados, ejercidos por el empleador o por uno o más trabajadores, en contra de otro u otros trabajadores, por cualquier medio y que tengan como resultado para el o los afectados su menoscabo, maltrato o humillación o bien amenace o perjudique su situación laboral o sus oportunidades en el empleo.",
    "Empleador": "Persona natural o jurídica que utiliza los servicios intelectuales o materiales de una o más personas en virtud de un contrato de trabajo.",
    "Trabajador": "Toda persona natural que presta servicios personales intelectuales o materiales, bajo dependencia o subordinación y en virtud de un contrato de trabajo.",
    "Trabajador independiente": "Aquél que en el ejercicio de la actividad de que se trate no depende de empleador alguno ni tiene trabajadores bajo su dependencia.",
    "Ius variandi": "Facultad unilateral del empleador, para modificar ciertos aspectos específicos del contrato de trabajo, tales como: las labores desempeñadas, el lugar de las mismas y el horario, siempre y cuando se atenga a las restricciones que le impone la ley. Se encuentra contemplada en el artículo 12 del C. del Trabajo.",
    "Jornada activa de trabajo": "Tiempo durante el cual el trabajador debe prestar efectivamente sus servicios en conformidad al contrato de trabajo.",
    "Jornada pasiva de trabajo": "Tiempo en que el trabajador se encuentra a disposición del empleador sin realizar labor, por causas que no le sean imputables.",
    "Jornada bisemanal de trabajo": "Aquella en que las faenas se encuentran apartadas de centros urbanos y cuyos trabajadores deben pernoctar en la faena. No requieren autorización de la Dirección del Trabajo. Se encuentran en el art. 39 del C. del Trabajo.",
    "Jornada Excepcional de Trabajo": "Son aquellas que requieren ser autorizadas por el Director del Trabajo, en atención a labores que no admiten una distribución normal de la jornada de trabajo, por cuanto la prestación de servicio tiene características especiales.",
    "Jornada extraordinaria de trabajo": "Se entiende como tal la que excede del máximo legal o de lo pactado contractualmente si fuese menor.",
    "Feriado legal": "Periodo en que el trabajador (a) suspende unilateralmente la relación laboral, por el hecho de haber cumplido un año desde el inicio de su prestación de servicios. Le corresponden 15 días hábiles de pago íntegro de remuneraciones y sólo puede fraccionarse sobre los diez días.- De preferencia se conceden en primavera o verano.",
    "Feriado Colectivo": "Cuando las empresas deciden dar feriado a todos sus trabajadores incluidos aquellos que no cumplan requisitos para tenerlo.",
    "Permiso post natal paternal": "Cinco días corridos de permiso pagado al padre por causa de nacimiento de su hijo. Deben solicitarse dentro del primer mes de nacimiento, de lo contrario caduca el derecho. También le corresponde al padre que adopta.",
    "Permiso por matrimonio": "Cinco días hábiles continuos de permiso pagado a quien contrae matrimonio. Son adicionales al feriado legal, e independientes al tiempo que lleven en la empresa.",
    "Remuneraciones": "Son todas las contraprestaciones en dinero y las adicionales en especies avaluables en dinero que debe percibir el trabajador del empleador por causa del contrato de trabajo.",
    "Sueldo": "Es el estipendio obligatorio y fijo, en dinero, pagado por períodos iguales, determinados en el contrato, que recibe el trabajador por la prestación de sus servicios en una jornada ordinaria de trabajo, sin perjuicio de lo señalado en el inciso segundo del artículo 10. El sueldo no podrá ser inferior a un ingreso mínimo mensual.",
    "Sobresueldo": "Es la remuneración de las horas extraordinarias de trabajo.",
    "Comisión": "Porcentaje sobre el precio de las ventas o compras, o sobre el monto de otras operaciones, que el empleador efectúa con la colaboración del trabajador.",
    "Participación": "Proporción en las utilidades en un negocio determinado o de una empresa o solo de una o más secciones o sucursales de la misma.",
    "Gratificación": "Parte de las utilidades con que el empleador beneficia el sueldo del trabajador. Existen tres formas de ella: Anual, anticipada y proporcional.",
    "Principio de la reajustabilidad de las prestaciones": "Cada vez que un empleador paga a sus trabajadores prestaciones adeudadas debe hacerlo de manera reajustada.",
    "Publicidad del pago de la remuneración": "El empleador debe entregar al trabajador un comprobante con lo pagado y los correspondientes descuentos que haga en el sueldo del trabajador.",
    "Irretenibilidad del sueldo": "El empleador debe cancelar la totalidad de las remuneraciones y no puede efectuar descuentos que no sean legales ni deducir créditos que tuviere contra el trabajador.",
    "Inembargabilidad de las remuneraciones": "Las remuneraciones de los trabajadores no pueden ser ejecutadas ni por los acreedores del empleador o del propio trabajador. La excepción la constituye sueldos sobre 56 UF y solo hasta el 50% en caso de obligaciones por pensiones alimenticias, defraudaciones, robos o hurtos o cuando el trabajador deba a otros trabajadores de él.",
    "Termino del contrato de trabajo por mutuo acuerdo": "Empleador y trabajador se ponen de acuerdo y finiquitan la relación laboral. Puede haber indemnización voluntaria acordada.",
    "Renuncia del trabajador": "Es una manifestación de la autonomía de la voluntad del trabajador en cuando a finiquitar su relación laboral. No le permite rescatar sus años de servicios toda vez que ha sido un acto voluntario. Debe cumplir con las formalidades exigidas en la ley.",
    "Contrato de trabajo a plazo fijo": "Contrato de trabajo supeditado a la variable tiempo para su duración.",
    "Contrato por obra o faena": "Contrato de trabajo supeditado a la variable de cuanto dure la labor que se ha contratado desempeñar. Concluye la labor, termina el contrato.",
    "Despido disciplinario": "Se refiere a aquellas causales que ponen término a la relación laboral y que proceden cuando es la mala conducta del trabajador la que lo ha provocado. Solo se refiere a las causales expresamente señaladas en la ley. No dan derecho a indemnización, salvo pacto en contrario.",
    "Vías de hecho" : "Cualquier acto de fuerza entre compañeros de trabajo o desde un empleador hacia el trabajador o viceversa, que provoca el término de la relación laboral.",
    "Abandono del trabajo" : "Causal de término de la relación laboral, puede ser por salida intempestiva o simplemente la negativa a trabajar.",
    "Necesidades de la empresa" : "Causal objetiva de término de la relación laboral que procede frente a la racionalización o modernización de la empresa, bajas en la productividad o cambios en las condiciones del mercado o la economía. Estas causales dan derecho a indemnización por años de servicios.",
    "Nulidad del despido" : "Procede cuando el empleador finiquita la relación laboral y al comunicarla, no mantiene al día el pago de las cotizaciones previsionales del trabajador.",
    "Carta de despido" : "Forma en la que un empleador debe comunicar a sus trabajadores el término de la relación laboral. Debe contener las causales legales aplicadas, descripción de los hechos y la indicación de que las cotizaciones previsionales se encuentran pagadas al día.",
    "Perdón de la causal" : "Cuando un trabajador incurre en alguna causal que pudiera poner término al contrato de trabajo, dicha causal deberá hacerse efectiva de inmediato por el empleador, pues de lo contrario se entiende perdonada la causal, es decir, el empleador optó por mantener la vigencia del contrato.",
    "Indemnización a todo evento" : "La ley permite a las partes pactar una indemnización sustitutiva de la legal a pagar a todo evento, cualquiera que sea la causa que lo origine.",
    "Indemnizaciones convencionales" : "El artículo 163 del Código del Trabajo permite que las partes convengan individual o colectivamente otros montos de indemnización, a condición de que sean superiores a la legal.",
    "Recargo legal de la indemnización" : "Cuando la causal de despido aplicada por un empleador al momento del despido de un trabajador es desvirtuada por un tribunal, se ordenará el recargo de su indemnización, dependiendo de la causal empleada, puede ser del 30%, 50% o 80%.",
    "Despido Indirecto o auto despido" : "Ocurre cuando es el trabajador quien comunica al empleador el término de la relación laboral, por haber sido éste el causante del cese de la misma. Las causales que pueden denunciarse son las del artículo 160 N° 1, 5 y 7 del Código del Trabajo. También pueden tener recargo legal del 50% y del 80%."
    };


var game_instance = 0
var commons
var score = 0
var tries = 0
var selected
var shown_word
var target_string
var gameover = 0


function getRandomPair(termsObject) {
    // Get all the keys (terms) from the object
    const terms = Object.keys(termsObject);
    
    // Pick a random index from the terms array
    const randomIndex = Math.floor(Math.random() * terms.length);
    
    // Get the random term and its definition
    const randomTerm = terms[randomIndex];
    const randomDefinition = termsObject[randomTerm];
    
    // Return the random pair
    const str = new Array(randomTerm.length + 1).join('_'); //filling with spaces ' ', before was '_'
    return { term: randomTerm, hide: str,  definition: randomDefinition };
}

function game() {
    
    console.log("s: "+score+"; t: "+tries);
    selected = getRandomPair(all_terms)
    shown_word = selected.hide
    target_string = selected.term.toLowerCase()

    document.getElementById("word").innerText = selected['hide']
    document.getElementById("desc").innerText = selected['definition']
    document.getElementById("score").innerText = "Aciertos: "+score+" / Intentos: "+tries
}


function find_subs(str1, str2) {
    const result = [];
  
    // Iterate through each character in the first string
    for (let i = 0; i < str1.length; i++) {
      const char = str1[i];
      const indexes = [];
  
      // Iterate through the second string to find all occurrences of the character
      for (let j = 0; j < str2.length; j++) {
        if (str2[j] === char) {
          indexes.push(j);
        }
      }
  
      // If we found any occurrences, add them to the result
      if (indexes.length > 0) {
        result.push({ char, indexes });
      }
    }
  
    return result;
  }
  

  

function replaceChar(inputString, index, newChar) {
    if (index < 0 || index >= inputString.length) {
      // Handle invalid index
      return inputString;
    }
  
    const stringArray = inputString.split('');
    stringArray[index] = newChar;
    return stringArray.join('');
}

function addTilde(string){
    if(string.includes('a')){string = string+'áÁ'}
    if(string.includes('e')){string = string+'éÉ'}
    if(string.includes('i')){string = string+'íÍ'}
    if(string.includes('o')){string = string+'óÓ'}
    if(string.includes('u')){string = string+'úÚ'}
    return string
}




function check_word(e){

    e.preventDefault();

    let input = document.getElementById('input').value.toLowerCase();
    input = addTilde(input);
    console.log("input", input)

    document.getElementById('input').value = '';
    commons = find_subs(input, target_string);
    
    commons.forEach(ins => {
        ins.indexes.forEach(index => {
            shown_word = replaceChar(shown_word, index, selected.term[index]);
        });
    });

    document.getElementById('word').innerText = shown_word.toUpperCase();

    check_guess()
    return false;
}


function precheck(){
    let input = ' '
    document.getElementById('input').value = ''
    commons = find_subs(input, target_string);
    
    commons.forEach(ins => {
        ins.indexes.forEach(index => {
            shown_word = replaceChar(shown_word, index, selected.term[index]);
        });
    });

    document.getElementById('word').innerText = shown_word.toUpperCase();
    return false;
}

function check_guess(){
    tries += 1
    
    if (shown_word.toUpperCase()== selected.term.toUpperCase()){
        win()
    }
    console.log("s: "+score+"; t: "+tries);
    document.getElementById("score").innerText = "Aciertos: "+score+" / Intentos: "+tries
    if(tries>=30){ gameOver(2);return}
}

function win(){
    console.log("ganaste");
    score+=1;
    if(score>=10){ gameOver(1);return}
    Next();
}

function Next(){
        setTimeout(function () {
            game();
            precheck();
        }, 1000);
      }

function gameOver(val){
    let msg = ''
    gameover = 1
    if (val==1){
        msg = 'Juego Finalizado, completaste todos los conceptos'
    }
    if (val==2){
        msg = 'Juego Finalizado, agotaste todos los intentos'
    }
    document.getElementById("word").innerText = msg;
    document.getElementById("form").remove();
    document.getElementById("desc").innerText = 'Puntaje guardado: Tu puntaje se calcula en base a tus aciertos e intentos'
    //total_score = parseInt((score/tries)*10)
    showScore(score,tries,3) 
}




game();
precheck();


