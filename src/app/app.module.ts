import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from './shared/customer.service';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,                                                        //For creating Forms
    AngularFireModule.initializeApp(environment.firebaseConfig),                // for firebase connection
    AngularFireDatabaseModule,                                                  //for firebase connection
    FormsModule
  ],
  providers: [ CustomerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
