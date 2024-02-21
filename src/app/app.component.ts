import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { MainPageComponent } from './features/main-page/main-page.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { MembershipComponent } from './features/membership/membership.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    MembershipComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'udinternationaltaekwondo';
}
