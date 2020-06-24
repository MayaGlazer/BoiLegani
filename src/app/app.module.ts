import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { StoreModule, MetaReducer, ActionReducer } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';
import { guards } from './guards and resolvers'
import { AuthService } from './services/auth.service';
import { TokenInterceptor, ErrorInterceptor } from './token.interceptor';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store'
import { CustomSerializer } from './store/selectors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalenderComponent } from './calender/calender.component';
import { HeaderComponent } from './navigation/header/header.component';
import { AuthGuard } from './guards and resolvers/auth.guard';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SignupComponent } from './login/signup/signup.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { LoginContainerComponent } from './login/login-container.component';
import { UserService } from './services/user.service';
import { CitiesService } from './services/cities.service';
import { CountriesService } from './services/countries.service';
import { PreferencesService } from './services/preferences.service';
import { CrossFieldErrorMatcher } from './cross-field-error-matcher';
import { LoginContainerGuard } from './guards and resolvers/login-container.guard';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('action', action);
    console.log('state', state);
 
    return reducer(state, action);
  };
}
 
export const metaReducers: MetaReducer<any>[] = [debug];

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'calendar',
    canActivate: [AuthGuard]
  },
  {
    path: 'calendar',
    component: CalenderComponent,
    canActivate: [AuthGuard] // !!! HERE !!!

  },
  {
    path: 'login',
    component: LoginContainerComponent,
    children: []
  },
  {
    path: 'register',
    component: LoginContainerComponent,
    canActivate: [LoginContainerGuard]
  },
  {
    path: 'reset',
    component: LoginContainerComponent,
    children: []
  }

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CalenderComponent,
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    LoginContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    NgxSpinnerModule,
    TranslateModule.forRoot({
      defaultLanguage: 'he',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-full-width',
      progressBar: true,
      progressAnimation: 'increasing',

    }),
    HttpClientModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature('state', reducers),
    RouterModule.forRoot(routes),
    //StoreModule.forFeature('router', routerReducers),
    AppRoutingModule,
    EffectsModule.forRoot([]),
    EffectsModule.forFeature(effects),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    },
    ...effects,
    ...guards,
    TranslateService,
    AuthService,
    UserService,
    CitiesService,
    CountriesService,
    PreferencesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: [
    TranslateModule
  ]
})
export class AppModule { }
