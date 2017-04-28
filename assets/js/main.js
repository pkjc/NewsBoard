jQuery(document).ready(function($) {

    var entryTemp =  '<div class="item row"><div class="desc col-md-12 col-sm-12 col-xs-12"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3></div></div><hr class="divider" />';
    var temphold= '<p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank">Read more <i class="fa fa-long-arrow-right"></i></a>';
    var feedCount = 5;
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    $("#rss-feed1").rss(
    
        //Change this to your own rss feeds
        "http://timesofindia.indiatimes.com/rssfeedstopstories.cms",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: feedCount,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slide',
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class=''>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: entryTemp
        }
    );
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    $("#rss-feed2").rss(
    
        //Change this to your own rss feeds
        "http://feeds.feedburner.com/ndtvnews-top-stories",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: feedCount,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slide',
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class=''>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: entryTemp
        }
    );
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    $("#rss-feed3").rss(
    
        //Change this to your own rss feeds
        "http://www.dnaindia.com/syndication/rss,catID-0.xml",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: feedCount,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slide',
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class=''>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: entryTemp
        }
    );
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    $("#rss-feed4").rss(
    
        //Change this to your own rss feeds
        "http://feeds.reuters.com/reuters/INtopNews",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: feedCount,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slide',
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class=''>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: entryTemp
        }
    );
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    $("#rss-feed5").rss(
    
        //Change this to your own rss feeds
        "http://news.google.com/news?cf=all&hl=en&pz=1&ned=in&topic=n&output=rss",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: feedCount,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slide',
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class=''>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: entryTemp
        }
    );
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    $("#rss-feed6").rss(
    
        //Change this to your own rss feeds
        "http://indianexpress.com/print/front-page/feed/",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: feedCount,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slide',
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class=''>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: entryTemp
        }
    );
  
});