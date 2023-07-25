import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PdfViewComponent } from '../pdf-view/pdf-view.component';
import { Superhero } from '../superhero';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showAllContent: boolean = false;
  dcSuperheroes: Superhero[] = [
    {
      name: "Clark Kent",
      alias: "Superman",
      powers: ["Super strength", "Flight", "Heat vision", "X-ray vision"]
    },
    {
      name: "Bruce Wayne",
      alias: "Batman",
      powers: ["Genius-level intellect", "Rich", "Master detective", "Gadgets"]
    },
    {
      name: "Diana Prince",
      alias: "Wonder Woman",
      powers: ["Superhuman strength", "Lasso of Truth", "Combat skills", "Flight"]
    },
    {
      name: "Barry Allen",
      alias: "The Flash",
      powers: ["Super speed", "Time travel", "Speed Force connection"]
    }
  ];
  marvelSuperheroes: Superhero[] = [
    {
      name: "Tony Stark",
      alias: "Iron Man",
      powers: ["Powered Armor Suit", "Genius-level intellect", "Engineering skills"]
    },
    {
      name: "Steve Rogers",
      alias: "Captain America",
      powers: ["Superhuman strength", "Enhanced agility", "Vibranium shield"]
    },
    {
      name: "Natasha Romanoff",
      alias: "Black Widow",
      powers: ["Expert spy", "Master martial artist", "Acrobatics"]
    },
    {
      name: "Peter Parker",
      alias: "Spider-Man",
      powers: ["Wall-crawling", "Superhuman strength", "Spider-Sense"]
    }
    // Add more superheroes from Marvel as needed
  ];

  combinedSuperheroes: Superhero[] = [...this.dcSuperheroes, ...this.marvelSuperheroes];
  constructor(private modalCtrl: ModalController,) { }

  async openPDF() {
    let data = {
      superheroes: this.combinedSuperheroes
    }
    console.log(this.combinedSuperheroes);

    const InvoiceModal = await this.createModal(PdfViewComponent, { data });
    await InvoiceModal.present();
  }

  async createModal(component: any, componentProps?: any, cssClass?: any) {
    const modal = await this.modalCtrl.create({
      component,
      cssClass,
      componentProps,
      backdropDismiss: true
    });
    return modal;
  }
  getCustomBackgroundColor(index: number): string {
    return index % 2 === 0 ? '#f5f5f5' : '#p1p1p1';
  }
  getCircleColor(index: number): string {
    return index % 2 === 0 ? '#40bf40' : '#40bfbf';
  }
}
