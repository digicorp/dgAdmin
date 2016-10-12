import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  views: Object[] = [
    {
      name: `My Account`,
      description: `Edit my account information`,
      icon: `assignment ind`
    },
    {
      name: `Dashboard`,
      description: `Quick Access!`,
      icon: `pets`
    }
  ];
}
