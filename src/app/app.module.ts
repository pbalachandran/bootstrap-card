import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BootstrapCardModule} from "./components/bootstrap-card.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BootstrapCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
