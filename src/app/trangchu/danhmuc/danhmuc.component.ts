import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ViecLamService } from 'src/app/_services/vieclam.service';

@Component({
  selector: 'app-danhmuc',
  templateUrl: './danhmuc.component.html',
  styleUrls: ['./danhmuc.component.css']
})
export class DanhmucComponent implements OnInit {
  list: any;
  id: number;
  key: string;

  constructor(
    private route: ActivatedRoute,
    private viecLamService: ViecLamService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams.id;
    this.key = this.route.snapshot.queryParams.key;

    if(this.id && this.key) {
      this.viecLamService.getTimLoai(this.id, this.key).toPromise()
      .then(res => {
        this.list = res;
      })
      .catch(err => {
        console.error(err);
      })
    }
  }

}
