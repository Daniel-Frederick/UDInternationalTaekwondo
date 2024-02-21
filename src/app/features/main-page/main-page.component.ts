import { Component } from '@angular/core';
import { MembershipComponent } from '../membership/membership.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MembershipComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {}
