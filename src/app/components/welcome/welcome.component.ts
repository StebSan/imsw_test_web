import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  constructor(
    private router: Router
  ) {}

  public goRegister() {
    this.router.navigateByUrl("/register");
  }

  public goList() {
    this.router.navigateByUrl('/list');
  }

}
