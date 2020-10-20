import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LienheComponent } from './lienhe/lienhe.component';
import { DangtinComponent } from './dangtin/dangtin.component';
import { ChitiettinComponent } from './chitiettin/chitiettin.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { TrangchuComponent } from './trangchu.component';
import { DanhmucComponent } from './danhmuc/danhmuc.component';
import  { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const trangchuRoutes: Routes = [
  {
    path: '', component: TrangchuComponent,
    children: [
      {
        path: '', component: MenuComponent
      },
      {
        path: 'chi-tiet-tin', component: ChitiettinComponent
      },
      {
        path: 'danh-muc', component: DanhmucComponent
      },
      {
        path: 'lien-he', component: LienheComponent
      },
    ]
  }
]


@NgModule({
  declarations: [LienheComponent, DangtinComponent, ChitiettinComponent, DanhmucComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(trangchuRoutes)
  ]
})
export class TrangchuModule { }
