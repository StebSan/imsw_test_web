import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { PaginatorModule } from 'primeng/paginator';

const components = [
  UserFormComponent,
  UserListComponent,
  WelcomeComponent
];

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule
  ],
  declarations: [
    components,
    WelcomeComponent,
  ],
  exports: [
    components
  ],
})
export class ComponentsModule { }
