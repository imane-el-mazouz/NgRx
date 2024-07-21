import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; // Optionnel, pour les outils de développement
import {taskReducer, TaskReducer} from './store/reducers/task.reducer'; // Assurez-vous que le chemin est correct
import { TaskEffects } from './store/effects/task.effects'; // Assurez-vous que le chemin est correct
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component'; // Assurez-vous que le chemin est correct
import { AppRoutingModule } from './app.routes'; // Assurez-vous que le chemin est correct
import { environment } from '../../src/app/envirennements/envirennement'; // Environnement de configuration

@NgModule({
  declarations: [
    // Déclarez vos composants ici
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([TaskEffects]), // Assurez-vous que les effets sont enregistrés ici
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Nombre maximum d'actions à conserver dans les outils de développement
      logOnly: environment.production, // N'affiche les outils que en production ,
    }),
    AppRoutingModule,
    AppComponent,
    TaskListComponent,
    StoreModule.forRoot({ task: taskReducer }),

  ],
  providers: [],
  bootstrap: [] // Assurez-vous que le composant racine est bootstrap
})
export class AppModule { }
