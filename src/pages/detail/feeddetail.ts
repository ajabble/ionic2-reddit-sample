import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'feeddetail.html'
})
export class FeedDetailPage {
  feed:any;

  constructor(public navCtrl: NavController, public navParm:NavParams) {
    this.feed = navParm.get('feed');
  }

}
