import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getUserState } from 'src/app/store/selectors/user.selector';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() public sidenavToggle = new EventEmitter();
  isLoggedIn: boolean = false;
  constructor(private store: Store<AppState>) { }
 
  ngOnInit() {
    this.store.select(getUserState).subscribe(state => {
      console.log(state);
      if (state.isLoggedIn == true) {
        this.isLoggedIn = true;
      }
    })
  }
 

}
