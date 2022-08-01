import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { DeptListComponent } from './components/dept-list/dept-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddEmpComponent } from './components/add-emp/add-emp.component';
import { AddDeptComponent } from './components/add-dept/add-dept.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    DeptListComponent,
    HomePageComponent,
    AddEmpComponent,
    AddDeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
