import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { TrendingPage } from '../pages/trending/trending';
import { RedditPage } from '../pages/reddit/reddit';
import {FeedDetailPage} from '../pages/detail/feeddetail';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TrendingPage,
    RedditPage,
    FeedDetailPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TrendingPage,
    RedditPage,
    FeedDetailPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
