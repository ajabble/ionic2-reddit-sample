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
  filter:any;
  limit:any;

  constructor(public navCtrl: NavController, private service:Service) {
    this.getDefaults();
  }

  // Default constructor
  getDefaults(){
    this.filter = 'sports';
    this.limit = 10;
  }

  // Init Constructor
  ngOnInit(){
    console.log('Called on init!', this.filter);
    this.getFeeds(this.filter, this.limit);
  }

  
  // fetching feeds from API with filter
  getFeeds(category, limit){
    this.service.getFeeds(category, limit)
    .subscribe(response => this.feedsArray = response.data.children);
    //.subscribe(response => console.log(response)); // If you want to see response log
  }

 // To see the feed detail object
  viewFeed(feed){
    this.navCtrl.push(FeedDetailPage, {feed:feed});
  }

  // feeds filtered by
  filterBy(){
    this.getFeeds(this.filter, this.limit);
  }

}
