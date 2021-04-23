import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShopBridge';

  constructor(private route: Router){

  }


  addProducts(){
    console.log('chethan');
    this.route.navigate(['/add-products']);
    console.log('test');

  }


  getAllProduct() {
    console.log('test1');
    this.route.navigate(['/list-products'])
    console.log('lsit aoge');
  }
}
