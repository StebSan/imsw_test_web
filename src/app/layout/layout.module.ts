import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MenuComponent } from './menu/menu.component';

const components = [
  FooterComponent,
  MenuComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
  ],
  declarations: [
    components,
  ],
  exports: [
    components
  ],
})
export class LayoutModule { }
