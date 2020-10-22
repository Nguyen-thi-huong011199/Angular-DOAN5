import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViecLamService } from 'src/app/_services/vieclam.service';


@Component({
  selector: 'app-chitiettin',
  templateUrl: './chitiettin.component.html',
  styleUrls: ['./chitiettin.component.css']
})
export class ChitiettinComponent implements OnInit {
  list: any;
  id:number;
  vieclam: any;

  constructor(
    private route: ActivatedRoute,
    private viecLamService: ViecLamService,
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(res => {
      let id = res['id'];
      this.viecLamService.getTheoId(id).toPromise()
      .then(res => {
        this.vieclam = res;
        document.body.scrollTop = 0;
      })
      .catch(err => console.error(err));
    });
  }

}
  



