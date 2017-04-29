jQuery(document).ready(function($) {

    var entryTemp =  '<div class="item row"><div class="desc col-md-12 col-sm-12 col-xs-12"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3></div></div><hr class="divider" />';
    var temphold = '<p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank">Read more <i class="fa fa-long-arrow-right"></i></a>';
    var feedCount = 5;
    
    var indiaFeeds = ['http://timesofindia.indiatimes.com/rssfeedstopstories.cms', 'http://feeds.feedburner.com/ndtvnews-top-stories', 'http://www.dnaindia.com/syndication/rss,catID-0.xml', 'http://feeds.reuters.com/reuters/INtopNews', 'http://news.google.com/news?cf=all&hl=en&pz=1&ned=in&topic=n&output=rss','http://indianexpress.com/print/front-page/feed/'];
    var techFeeds = ['http://www.techradar.com/rss', 'https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/section/technology/rss.xml','https://www.wired.com/feed/','https://www.cnet.com/rss/news/','https://news.ycombinator.com/rss','http://www.digitaltrends.com/home/feed/'];
    var booksFeeds = ['Apple', 'Banana'];
    var startupsFeeds = ['Apple', 'Banana'];
    var fitnessFeeds = ['Apple', 'Banana'];
    
    //India feed loads by default
    for ( var i = 0; i < indiaFeeds.length; i++ ) {
        
        //Empty previous feeds
        $("#rss-feed"+i).find("div").html("");
        $("#rss-feed"+i).find("h2").remove();
        
        var populateRssFeed = function(){
            $("#rss-feed"+i).rss(

                //Change this to your own rss feeds
                indiaFeeds[i],

                {
                // how many entries do you want?
                // default: 4
                // valid values: any integer
                limit: feedCount,

                // the effect, which is used to let the entries appear
                // default: 'show'
                // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
                effect: 'slideFastSynced',

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
        };
        
        parseFeed(indiaFeeds[i], '#rss-feed'+i);
        populateRssFeed();
        
    }
     
    $( "#india" ).click(function() {
        for ( var i = 0; i < indiaFeeds.length; i++ ) {
            
            //Empty previous feeds
            $("#rss-feed"+i).find("div").html("");
            $("#rss-feed"+i).find("h2").remove();
            
            //Populate Headings
            parseFeed(indiaFeeds[i], '#rss-feed'+i);
            
            $("#rss-feed"+i).rss(

                //Change this to your own rss feeds
                indiaFeeds[i],

                {
                // how many entries do you want?
                // default: 4
                // valid values: any integer
                limit: feedCount,

                // the effect, which is used to let the entries appear
                // default: 'show'
                // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
                effect: 'slideFastSynced',

                // outer template for the html transformation
                // default: "<ul>{entries}</ul>"
                // valid values: any string
                layoutTemplate: '<div class="">{entries}</div>',

                // inner template for each entry
                // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
                // valid values: any string
                entryTemplate: entryTemp
                }
            );
        }
    });
    
    $( "#tech" ).click(function() {
        for ( var i = 0; i < techFeeds.length; i++ ) {
            
            //Empty previous feeds
            $("#rss-feed"+i).find("div").html("");
            $("#rss-feed"+i).find("h2").remove();
            
            parseFeed(techFeeds[i], '#rss-feed'+i);
            
            $("#rss-feed"+i).rss(

                //Change this to your own rss feeds
                techFeeds[i],

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
        }
    });
    
    $( "#books" ).click(function() {
        
    });
    
    $( "#startups" ).click(function() {
        alert( "Handler for .click() called." );
    });
    
    $( "#fitness" ).click(function() {
        alert( "Handler for .click() called." );
    });
    
});

/////////////////////////////////////////////////////////////////////////////////////////////

// YQL: https://developer.yahoo.com/yql/
// YQL Console: https://developer.yahoo.com/yql/console/

function parseFeed(url, container) {
    
    // yql query
    var query = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from feednormalizer where url="' + url + '"') + '&format=json';
    
    // send request
    $.getJSON(query, function (data, status, errorThrown) {
        
        // if successful... *
        if (status === 'success') {
            
            // log object data in console
            console.log(data);
            
            // append feed link and title in container
            //$(container).append('<a href="' + url + '"><span class="iconicstroke-rss-alt"></span></a>');
            $(container).prepend('<h2 class="heading">' + data.query.results.rss.channel.title + '</h2>');
            
        // if there's an error... *
        } else if (status === 'error' || status === 'parsererror') {
            // * log error message in console
            console.log(errorThrown);
            
            // * show error message
            alert('Could not load RSS feed!');
        } 
    });
}













