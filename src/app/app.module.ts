import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { FormsModule } from '@angular/forms';
import { RowHighlightDirective } from './common/rowhighlight.directive';
import { SearchPipe } from './shared/search.pipe';
import { ParenthesisPipe } from './shared/parenthesis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    RowHighlightDirective,
    SearchPipe,
    ParenthesisPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
