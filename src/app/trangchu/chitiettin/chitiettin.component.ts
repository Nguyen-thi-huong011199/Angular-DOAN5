import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chitiettin',
  templateUrl: './chitiettin.component.html',
  styleUrls: ['./chitiettin.component.css']
})
export class ChitiettinComponent implements OnInit {
  id:number;
  vieclam: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    document.body.scrollTop = 0;
    
    this.id = this.route.snapshot.params['id'];
    if(this.id) {
      // this.vieclamService.getTheoId(this.id).toPromise()
      // .then(res => {
      //   this.vieclam = res;
      // })
      // .catch(err => console.error(err));
    }
  }

}




