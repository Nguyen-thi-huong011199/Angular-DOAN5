import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/_services/alert.service';
import { AuthService } from 'src/app/_services/auth.service';
import { ShareService } from 'src/app/_services/share.service';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css',]
})
export class DangkyComponent implements OnInit {
  form: FormGroup;
  submitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alert: AlertService,
    private shareService: ShareService
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tenTk: ['', Validators.required],
      diachi: ['', [Validators.required, Validators.email]],
      sdt: ['', [Validators.required, Validators.pattern('^(0)[0-9]{9}$')]],
      matkhau: ['', Validators.required],
      nhaplaimatkhau: ['', Validators.required],
    }, {
      validator: this.confirm_password_validate('pass', 'pass_confirm')
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.shareService.openLoading();

    let val = this.form.value;

    let user = {
      Diachi: val.diachi,
      Matkhau: val.matkhau,
      TenTk: val.tenTk,
      Sdt: val.sdt,
      Address: "Mặc định",
    };

    this.authService.register(user).toPromise()
    .then(user => {
      this.shareService.closeLoading();
      this.alert.registerSuccess();
    })
    .catch(err => {
      this.shareService.closeLoading();
      this.alert.error(err);
    });
  }

  confirm_password_validate(pass: string, pass_confirm: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[pass];
        const matchingControl = formGroup.controls[pass_confirm];

        if (matchingControl.errors && !matchingControl.errors.confirm_password) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirm_password: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }

}