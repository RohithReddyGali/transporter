import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  transportOptions: any = [];
  selectedTransport: string = '';
  selectedServe: string = '';
  serveOptions: any = [];

  constructor() {
    this.transportOptions = [
      { name: 'Enclosed', code: 'enclosed' },
      { name: 'Open', code: 'open' },
      { name: 'Door-to-Door', code: 'door' },
      { name: 'Expedited', code: 'expedited' },
      { name: 'Cross Country', code: 'crossCountry' }
    ];
    this.serveOptions = [
      { name: 'Family and Movers', code: 'familyMovers' },
      { name: 'Car dealers', code: 'carDealers' },
      { name: 'Auto Auctions', code: 'autoAuctions' },
      { name: 'Online Car Buyers', code: 'onlineCarBuyers' },
      { name: 'Classic Car Shipping', code: 'carShipping' },
      { name: 'Seasonal Moves', code: 'seasonalMoves' },
      { name: 'College Students', code: 'students' },
      { name: 'Military Members', code: 'military' }
    ];
  }
}
