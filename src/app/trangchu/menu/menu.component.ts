import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaiCongViecService } from 'src/app/_services/loaicv.service';
import { ViecLamService } from 'src/app/_services/vieclam.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loaicvs: any[];
  loaicvtype1: any[];
  loaicvtype2: any[];
  loaicvtype3: any[];
  loaicvtype4: any[];
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loaiCongViec: LoaiCongViecService,
    private viecLamService: ViecLamService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loaiCongViec.getAll().toPromise()
    .then(res => {
      this.loaicvs = res;
    });

    this.viecLamService.getLoai(12, 5).toPromise()
    .then(res => {
      this.loaicvtype1 = res;
    });

    this.viecLamService.getLoai(11, 6).toPromise()
    .then(res => {
      this.loaicvtype2 = res;
    });

    this.viecLamService.getLoai(2, 6).toPromise()
    .then(res => {
      this.loaicvtype3 = res;
    });
    this.viecLamService.getLoai(3, 6).toPromise()
    .then(res => {
      this.loaicvtype4 = res;
    });

    this.form = this.formBuilder.group({
      key_name: ['', [Validators.required]],
      type: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.router.navigate(['/danh-muc'], { queryParams: { id: this.form.value.type, key: this.form.value.key_name } });
  }

}
