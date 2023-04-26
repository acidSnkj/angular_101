import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  person = {
    name: '',
  }
  names: string[] = ['John', 'Doe', 'Jane', 'Meryl'];
  newName: string = '';

  addNewName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  removeName(position: number) {
    this.names.splice(position, 1);
  }
}


