import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//  RUTAS
import { APP_ROUTES } from './app.routes';


//modulos
import {PageModule} from './pages/pages.modules';


//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
