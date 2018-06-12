import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oscar: Person;
  constructor(){
    this.oscar = new Person("miticanoy", "05", 1111);
    console.log(this.oscar);

    }
  }
}


