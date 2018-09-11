import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { BoardPage } from '../pages/board/board';
import { KeyboardRowFilterPipe } from '../pipes/keyboard-row-filter/keyboard-row-filter';
import { KeyboardComponent } from '../components/keyboard/keyboard';
import { AdminPage } from '../pages/admin/admin';
import { FamousFacesProvider } from '../providers/famous-faces/famous-faces';
import { AdminDetailPage } from '../pages/admin-detail/admin-detail';
import { AdminEditPage } from '../pages/admin-edit/admin-edit';
import { AdminCreatePage } from '../pages/admin-create/admin-create';

@NgModule({
  declarations: [
    MyApp,
    AdminPage,
    AdminDetailPage,
    AdminEditPage,
    AdminCreatePage,
    HomePage,
    BoardPage,
    KeyboardComponent,
    KeyboardRowFilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AdminPage,
    AdminDetailPage,
    AdminEditPage,
    AdminCreatePage,
    HomePage,
    BoardPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FamousFacesProvider,
  ],
})
export class AppModule {
}

