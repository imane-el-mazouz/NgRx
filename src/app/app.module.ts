// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './store/reducers/task.reducer';
import { AppComponent } from './app.component';
import {TaskStoreModule} from "./task-store.module";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "./envirennements/envirennement";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    TaskStoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retenez l'historique des 25 actions
      logOnly: environment.production, // Ne logguez que en production
    }),

  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
