import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Service} from "../../app/services/service";
import {FeedDetailPage} from "../detail/feeddetail"

@Component({
  selector: 'page-reddit',
  templateUrl: 'reddit.html'
})
export class RedditPage {
  feedsArray:any;

  constructor(public navCtrl: NavController, private service:Service) {

  }

  ngOnInit(){
    console.log('Called on init!');
    this.getFeeds('sports', 15);
  }

  getFeeds(category, limit){
    this.service.getFeeds(category, limit)
    .subscribe(response => this.feedsArray = response.data.children);
    //.subscribe(response => console.log(response)); // If you want to see response log
  }

  viewFeed(feed){
    this.navCtrl.push(FeedDetailPage, {feed:feed});
  }
}
