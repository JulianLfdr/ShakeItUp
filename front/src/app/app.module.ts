import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing-module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
