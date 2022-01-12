let showPDF;

function runCode(showPDF) {
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
        doc.text(4.7, j + 2.12 + i/6, document.getElementById(i + "unitario").value,  { align: 'right' })
        doc.text(5.8, j + 2.12 + i/6, document.getElementById(i + "exentas").value,  { align: 'right' })
        doc.text(6.9, j + 2.12 + i/6, document.getElementById(i + "venta5").value,  { align: 'right' })
        doc.text(8, j + 2.12 + i/6, document.getElementById(i + "venta10").value,  { align: 'right' })
      }

      doc.text(5.8, j + 3.66, document.getElementById("subtotalex").value, { align: 'right' })
      doc.text(6.9, j + 3.66, document.getElementById("subtotal5").value, { align: 'right' })
      doc.text(8, j + 3.66, document.getElementById("subtotal10").value, { align: 'right' })
      doc.text(1.2, j + 3.8, document.getElementById("total").value)
      doc.text(1.6, j + 3.97, document.getElementById("iva5").value)
      doc.text(3, j + 3.97, document.getElementById("iva10").value)
      doc.text(5, j + 3.97, document.getElementById("ivatotal").value)
      doc.text(8, j + 3.93, document.getElementById("final").value, { align: 'right' })
      
      j = j + 4.29
      if(j >  8){
        j = j + 0.06
      }
    }
    
    var iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    iframe.src = doc.output('datauristring');
}