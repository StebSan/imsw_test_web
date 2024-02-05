import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/interface/user.interfaces';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  formUser!: FormGroup;
  user!: IUser;

  constructor(
    private userService: UserService,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
  ) {
    this.builderUserNewForm();
  }

  ngOnInit(): void { }

  saveUser() {
    if (this.formUser.valid) {
      this.userService.save(this.formUser.value).subscribe({
        next: (resp) => {
          this.toastService.show('success', 'Registro exitoso');
          this.formUser.reset();
        }
      })
    }
  }

  private builderUserNewForm() {
    this.formUser = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      yearsOld: ['', [Validators.required, Validators.maxLength(2)]],
    });
  }
}
