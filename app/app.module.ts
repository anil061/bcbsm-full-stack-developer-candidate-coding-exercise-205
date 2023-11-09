import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { EmailComponent } from './email/email.component';
import { EmaillistComponent } from './emaillist/emaillist.component';
import { EmailService } from './email/email.service';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    EmaillistComponent
  ],
  imports: [
    FormsModule,
    NgxDatatableModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
