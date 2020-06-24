import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from '../calender/calender.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EventsReducer } from '../store/reducers/event.reducer';

const calenderRouting: Routes = [{ path: "", component: CalenderComponent}]

@NgModule({
  declarations: [CalenderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(calenderRouting),
    //StoreModule.forFeature('events', calenderRouting)

  ]
})
export class EventsModule { }
