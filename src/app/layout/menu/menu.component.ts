import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            routerLink: '/home',
        },
        {
            label: 'Agregar',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/register',
        },
        {
            label: 'Lista',
            icon: 'pi pi-fw pi-list',
            routerLink: '/list',
        }
    ];
}

}
