import { Component } from '@angular/core';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import breakingBad from './fake-data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-pdf';
  breakingBadData = breakingBad;

  constructor() {
    //this.downloadPDF();
    console.log(this.breakingBadData);
  }
  public downloadPDF() {
    // Extraemos el
    const DATA: any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');

    doc.setHeaderFunction(function (callback) {
      callback(
        doc
          .setFontSize(20)
          .setTextColor(0)
          .setFontStyle('normal')
          .text('Header', 50, 50)
      );
    });

    const options = {
      background: 'white',
      scale: 3,
    };
    html2canvas(DATA, options)
      .then((canvas) => {
        const img = canvas.toDataURL('image/PNG');

        // Add image Canvas to PDF
        const bufferX = 15;
        const bufferY = 15;
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(
          img,
          'PNG',
          bufferX,
          bufferY,
          pdfWidth,
          pdfHeight,
          undefined,
          'FAST'
        );
        return doc;
      })
      .then((docResult) => {
        docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
      });
  }
}
