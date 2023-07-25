import { Component, Input, OnInit } from '@angular/core';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.scss'],
})
export class PdfViewComponent implements OnInit {
  @Input() data: any;
  content: any;
  constructor(private modalContrller: ModalController, private pdfGenerator: PDFGenerator) {
  }
  ngOnInit() {
    console.log('pdf Page2', this.data);
  }
  closeModal() {
    this.modalContrller.dismiss();
  }
  downloadPDF() {
    this.content = document.getElementById('printPDF')?.innerHTML;
    let options = {
      documentSize: 'A4',
      type: 'share',
      // landscape: 'portrait',
      fileName: 'Order-Invoice.pdf'
    };
    this.pdfGenerator.fromData(this.content, options)
      .then((base64) => {
        console.log('OK', base64);
      }).catch((error) => {
        console.log('error', error);
      });

  }
  getCustomBackgroundColor(index: number): string {
    return index % 2 === 0 ? '#f5f5f5' : '#p1p1p1';
  }
  getCircleColor(index: number): string {
    return index % 2 === 0 ? '#40bf40' : '#40bfbf';
  }
}
