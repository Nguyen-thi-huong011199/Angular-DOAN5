import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaiCongViecService } from 'src/app/_services/loaicv.service';
import { ViecLamService } from 'src/app/_services/vieclam.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loaicvs: any[];
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
