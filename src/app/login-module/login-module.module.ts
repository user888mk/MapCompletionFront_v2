import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponentComponent} from './login-component/login-component.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {AuthorizeComponent} from './authorize/authorize.component';
import {HttpClientModule} from "@angular/common/http";
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    LoginComponentComponent,
    AuthorizeComponent
  ],
  exports: [
    LoginComponentComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    HttpClientModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class LoginModuleModule {
}
