import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ViecLamService } from 'src/app/_services/vieclam.service';

@Component({
  selector: 'app-danhmucloaicv',
  templateUrl: './danhmucloaicv.component.html',
  styleUrls: ['./danhmucloaicv.component.css']
})
export class DanhmucloaicvComponent implements OnInit {
  list: any;

  constructor(
    private route: ActivatedRoute,
    private viecLamService: ViecLamService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const idloai = param['id'];

      if(idloai) {
        this.viecLamService.getTheoLoai(idloai).toPromise()
        .then(res => {
          this.list = res;
        })
        .catch(err => console.error(err));
      }
    });
  }

  }


