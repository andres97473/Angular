import { Component, OnInit } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';

import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css'],
})
export class PdfComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  createPdf() {
    const pdfDefinition: any = {
      // informacion del documento

      info: {
        title: 'awesome Document',
        author: 'john doe',
        subject: 'subject of document',
        keywords: 'keywords for document',
      },
      // estlecer margen para poder tener espacio en el header
      pageMargins: [40, 80, 40, 60],
      // file name
      filename: 'test.pdf',
      header: {
        alignment: 'center',
        margin: [0, 10, 0, 0],
        width: '100%',
        height: 100,
        text: [
          { text: 'Header 1\n' },
          { text: 'Header 2\n' },
          { text: 'Header 3\n' },
          { text: 'Header 4\n' },
        ],
      },

      content: [
        { text: 'Hello World!' },
        {
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus et nulla esse quas accusamus cumque ullam, voluptas at molestias suscipit consequatur ipsam. Deserunt est consectetur, vel dolores autem iure placeat!\n\n\n\n\n\n\n\n\n\n',
        },
        {
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus et nulla esse quas accusamus cumque ullam, voluptas at molestias suscipit consequatur ipsam. Deserunt est consectetur, vel dolores autem iure placeat!\n\n\n\n\n\n\n\n\n\n',
        },
        {
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus et nulla esse quas accusamus cumque ullam, voluptas at molestias suscipit consequatur ipsam. Deserunt est consectetur, vel dolores autem iure placeat!\n\n\n\n\n\n\n\n\n\n',
        },
        {
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus et nulla esse quas accusamus cumque ullam, voluptas at molestias suscipit consequatur ipsam. Deserunt est consectetur, vel dolores autem iure placeat!\n\n\n\n\n\n\n\n\n\n',
        },
        {
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus et nulla esse quas accusamus cumque ullam, voluptas at molestias suscipit consequatur ipsam. Deserunt est consectetur, vel dolores autem iure placeat!\n\n\n\n\n\n\n\n\n\n',
        },
        {
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus et nulla esse quas accusamus cumque ullam, voluptas at molestias suscipit consequatur ipsam. Deserunt est consectetur, vel dolores autem iure placeat!\n\n\n\n\n\n\n\n\n\n',
        },
        {
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus et nulla esse quas accusamus cumque ullam, voluptas at molestias suscipit consequatur ipsam. Deserunt est consectetur, vel dolores autem iure placeat!\n\n\n\n\n\n\n\n\n\n',
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        content: {
          fontSize: 12,
          bold: true,
          margin: [0, 60, 0, 0],
        },
      },
    };

    const pdf = pdfMake.createPdf(pdfDefinition);

    pdf.open({}, window.open('_blank'));
  }
}
