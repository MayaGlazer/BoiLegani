import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    //RouterModule.forChild(ROUTES),
    StoreModule.forFeature('events', reducers)
  ]
})
export class CalenderModule { }
