import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from './store';
import { HalakhikPreferences } from './store/models/preferences.model';
import { AppState } from './app-state';
import { PrefsState } from './store/reducers/preferences.reducer';
import * as PrefsSelectors from './store/selectors/preferences.selector';
import { GetPreferences } from './store/actions/preferences.action';
import { GetHalakhikEvents } from './store';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { getAppState } from './store/selectors';
import { getUserState } from './store/selectors/user.selector';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  prefsState$: Observable<PrefsState>;
  constructor(private store: Store<AppState>,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService) { }
  title = 'taharapp';
  ngOnInit() {
    this.translate.setDefaultLang('he');
    this.translate.use('he');
    this.store.select(getAppState).subscribe(appstate => {
      for (let state in appstate) {
        //console.log(appstate[state]);
        if (appstate[state] && appstate[state].hasOwnProperty('loading') && appstate[state]['loading'] == true)
          //  console.log(state);
          this.spinner.show()
        else this.spinner.hide()
      }
    }
    )
    

  }

  OnClick() {
    this.store.dispatch(new GetPreferences());
    var events = this.store.dispatch(new GetHalakhikEvents());
    console.log(events);

  }
}
