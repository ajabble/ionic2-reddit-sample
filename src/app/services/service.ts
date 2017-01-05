import  {Injectable} from "@angular/core";
import  {Http} from "@angular/http";
import  'rxjs/Rx';

@Injectable()
export class Service{
  // member variable
    http:any;
    baseUrl:String;

// constructor
    constructor(http:Http){
      this.http = http;
      this.baseUrl = 'https://www.reddit.com/r';
    }

// Function for fetching feeds/posts from Reddit API
  getFeeds(category, limit){
    return this.http.get(this.baseUrl + '/' + category + '/top.json?limit=' + limit)
    .map(response => response.json());
  }
}
