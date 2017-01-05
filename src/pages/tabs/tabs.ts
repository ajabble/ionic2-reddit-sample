import { Component } from '@angular/core';

import { RedditPage } from '../reddit/reddit';
import { TrendingPage } from '../trending/trending';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RedditPage;
  tab2Root: any = TrendingPage;
  tab3Root: any = AboutPage;

  constructor() {

  }
}
