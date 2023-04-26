import { Component } from '@angular/core';
import { BoxStyle, Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  boxStyle: BoxStyle = {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
  widthImg = 10;
  person = {
    name: '',
  }
  names: string[] = ['John', 'Doe', 'Jane', 'Meryl'];
  newName: string = '';
  products: Product[] = [
    {
      name: 'Phone XL',
      price: 799,
      image: 'https://via.placeholder.com/350x150',
      category: 'Phone'
    },
    {
      name: 'Phone Mini',
      price: 699,
      image: 'https://via.placeholder.com/350x150'
    }
  ]

  addNewName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  removeName(position: number) {
    this.names.splice(position, 1);
  }
}


