do{
    input = prompt("Password:");
} while(input != 'jondax');


let showPDF;

let cur = 'GS';

function runCode(showPDF) {
    if(document.getElementById('gs').checked){
        cur = ' GS'
    } else {
        cur = ' USD'
    }
    
    var doc = new jsPDF({
      orientation: 'p',
      unit: 'in',
      format: 'legal',
      putOnlyUsedFonts:true
    });

    if(showPDF == true){
      let img = new Image()
      img.src = '/administracion/image.jpg'
      doc.addImage(img, 'jpg', 0, 0, 8.5, 13)
    }

    function reformatDate(dateStr){
      dArr = dateStr.split("-");
      if (dArr[2] == undefined){
        return ''
      } else
      return dArr[2]+ "/" +dArr[1]+ "/" +dArr[0].substring(2);
    }

    let j = 0

    while(j < 10){
        doc.setFontSize(10);
        doc.text(1.4, j + 1.37, reformatDate(document.getElementById("fecha").value));
        doc.text(1.75, j + 1.55, document.getElementById("razon").value)
        doc.text(1.07, j + 1.73, document.getElementById("direccion").value)
    
        if(document.querySelector('.condicion').checked){ doc.text(6.43, j + 1.35, 'x') }
        if(document.querySelector('.credito').checked){ doc.text(7.3, j + 1.35, 'x') } 
        doc.text(7.7, j + 1.35, document.getElementById("dias").value, { align: 'center' })
        
        doc.text(7.2, j + 1.53, document.getElementById("telefono").value)
        doc.text(7.2, j + 1.7, document.getElementById("ruc").value)
        doc.text(5.9, j + 1.54, document.getElementById("nota").value)
    
        doc.setFontSize(8);

        for (let i = 0 ; i < 9 ; i++){
            doc.text(0.75, j + 2.12 + i/6, document.getElementById(i + "cantidad").value,  { align: 'center' })
            doc.text(1.15, j + 2.12 + i/6, document.getElementById(i + "descripcion").value)
            doc.text(4.7, j + 2.12 + i/6, fill(i + "unitario"),  { align: 'right' })
            doc.text(5.8, j + 2.12 + i/6, fill(i + "exentas"),  { align: 'right' })
            doc.text(6.9, j + 2.12 + i/6, fill(i + "venta5"),  { align: 'right' })
            doc.text(8, j + 2.12 + i/6, fill(i + "venta10"),  { align: 'right' })
        }

        doc.text(5.8, j + 3.66, fill('subtotalex'), { align: 'right' })
        doc.text(6.9, j + 3.66, fill('subtotal5'), { align: 'right' })
        doc.text(8, j + 3.66, fill('subtotal10'), { align: 'right' })
        doc.text(1.6, j + 3.97, fill('iva5'))
        doc.text(3, j + 3.97, fill('iva10'))
        doc.text(5, j + 3.97, fill('ivatotal'))
        doc.text(8, j + 3.93, fill('final'), { align: 'right' })

        if(document.getElementById('gs').checked){
            doc.text(1.2, j + 3.8, numeroALetras(document.getElementById("final").value, {
                plural: 'GUARANIES',
                singular: 'GUARANI ',
                centPlural: 'CENTAVOS',
                centSingular: 'CENTAVO'
            }))
        } else {
            doc.text(1.2, j + 3.8, numeroALetras(document.getElementById("final").value, {
                plural: 'DOLARES AMERICANOS',
                singular: 'DOLARES AMERICANOS ',
                centPlural: 'CENTAVOS',
                centSingular: 'CENTAVO'
            }))
        }
        
        j = j + 4.29
        if(j >  8){
            j = j + 0.06
        }
    }
    
    var iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    iframe.src = doc.output('datauristring');
}


function fill(val){
    if(document.getElementById(val).value == ''){
        return ''
    } else {
        return numberWithDots(document.getElementById(val).value) + cur;
    }
}


function Unidades(num){
  switch(num)
  {
      case 1: return "UN";
      case 2: return "DOS";
      case 3: return "TRES";
      case 4: return "CUATRO";
      case 5: return "CINCO";
      case 6: return "SEIS";
      case 7: return "SIETE";
      case 8: return "OCHO";
      case 9: return "NUEVE";
  }
  return "";
}

var numeroALetras = (function() {
      function Unidades(num){
          switch(num)
          {
              case 1: return 'UN';
              case 2: return 'DOS';
              case 3: return 'TRES';
              case 4: return 'CUATRO';
              case 5: return 'CINCO';
              case 6: return 'SEIS';
              case 7: return 'SIETE';
              case 8: return 'OCHO';
              case 9: return 'NUEVE';
          }
          return '';
      }//Unidades()
  
      function Decenas(num){
          let decena = Math.floor(num/10);
          let unidad = num - (decena * 10);
          switch(decena)
          {
              case 1:
                  switch(unidad)
                  {
                      case 0: return 'DIEZ';
                      case 1: return 'ONCE';
                      case 2: return 'DOCE';
                      case 3: return 'TRECE';
                      case 4: return 'CATORCE';
                      case 5: return 'QUINCE';
                      default: return 'DIECI' + Unidades(unidad);
                  }
              case 2:
                  switch(unidad)
                  {
                      case 0: return 'VEINTE';
                      default: return 'VEINTI' + Unidades(unidad);
                  }
              case 3: return DecenasY('TREINTA', unidad);
              case 4: return DecenasY('CUARENTA', unidad);
              case 5: return DecenasY('CINCUENTA', unidad);
              case 6: return DecenasY('SESENTA', unidad);
              case 7: return DecenasY('SETENTA', unidad);
              case 8: return DecenasY('OCHENTA', unidad);
              case 9: return DecenasY('NOVENTA', unidad);
              case 0: return Unidades(unidad);
          }
      }
  
      function DecenasY(strSin, numUnidades) {
          if (numUnidades > 0)
              return strSin + ' Y ' + Unidades(numUnidades)
  
          return strSin;
      }
  
      function Centenas(num) {
          let centenas = Math.floor(num / 100);
          let decenas = num - (centenas * 100);
          switch(centenas)
          {
              case 1:
                  if (decenas > 0)
                      return 'CIENTO ' + Decenas(decenas);
                  return 'CIEN';
              case 2: return 'DOSCIENTOS ' + Decenas(decenas);
              case 3: return 'TRESCIENTOS ' + Decenas(decenas);
              case 4: return 'CUATROCIENTOS ' + Decenas(decenas);
              case 5: return 'QUINIENTOS ' + Decenas(decenas);
              case 6: return 'SEISCIENTOS ' + Decenas(decenas);
              case 7: return 'SETECIENTOS ' + Decenas(decenas);
              case 8: return 'OCHOCIENTOS ' + Decenas(decenas);
              case 9: return 'NOVECIENTOS ' + Decenas(decenas);
          }
  
          return Decenas(decenas);
      }
  
      function Seccion(num, divisor, strSingular, strPlural) {
          let cientos = Math.floor(num / divisor)
          let resto = num - (cientos * divisor)
  
          let letras = '';
  
          if (cientos > 0)
              if (cientos > 1)
                  letras =  Centenas(cientos) + ' ' + strPlural;
              else
                  letras = strSingular;
  
          if (resto > 0)
              letras += '';
  
          return letras;
      }
  
      function Miles(num) {
          let divisor = 1000;
          let cientos = Math.floor(num / divisor)
          let resto = num - (cientos * divisor)
  
          let strMiles = Seccion(num, divisor, 'UN MIL', 'MIL');
          let strCentenas = Centenas(resto);
  
          if(strMiles == '')
              return strCentenas;
  
          return strMiles + ' ' + strCentenas;
      }
  
      function Millones(num) {
          let divisor = 1000000;
          let cientos = Math.floor(num / divisor)
          let resto = num - (cientos * divisor)
  
          let strMillones = Seccion(num, divisor, 'UN MILLON DE', 'MILLONES DE');
          let strMiles = Miles(resto);
  
          if(strMillones == '')
              return strMiles;
  
          return strMillones + ' ' + strMiles;
      }
  
      return function NumeroALetras(num, currency) {
          currency = currency || {};
          let data = {
              numero: num,
              enteros: Math.floor(num),
              centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
              letrasCentavos: '',
              letrasMonedaPlural: currency.plural || 'PESOS CHILENOS',//'PESOS', 'Dólares', 'Bolívares', 'etcs'
              letrasMonedaSingular: currency.singular || 'PESO CHILENO', //'PESO', 'Dólar', 'Bolivar', 'etc'
              letrasMonedaCentavoPlural: currency.centPlural || 'CHIQUI PESOS CHILENOS',
              letrasMonedaCentavoSingular: currency.centSingular || 'CHIQUI PESO CHILENO'
          };
  
          if (data.centavos > 0) {
              data.letrasCentavos = 'CON ' + (function () {
                      if (data.centavos == 1)
                          return Millones(data.centavos) + ' ' + data.letrasMonedaCentavoSingular;
                      else
                          return Millones(data.centavos) + ' ' + data.letrasMonedaCentavoPlural;
                  })();
          };
  
          if(data.enteros == 0)
              return '';
          if (data.enteros == 1)
              return data.letrasMonedaSingular + ' ' + Millones(data.enteros) + ' ' + data.letrasCentavos;
          else
              return data.letrasMonedaPlural + ' ' + Millones(data.enteros) + ' ' + data.letrasCentavos;
      };
  
  })();

function numberWithDots(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
}