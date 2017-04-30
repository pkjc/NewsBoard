/////////////////////////////////////////////////////////////////////////////////////////////

//Variable Declarations//

/////////////////////////////////////////////////////////////////////////////////////////////

var entryTemp =  '<div class="item row"><div class="desc col-md-12 col-sm-12 col-xs-12"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3></div></div><hr class="divider" />';
var temphold = '<p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank">Read more <i class="fa fa-long-arrow-right"></i></a>';

var booksFeeds = ['Apple', 'Banana'];
var startupsFeeds = ['Apple', 'Banana'];
var fitnessFeeds = ['Apple', 'Banana'];
var j = 0;
var feedCount = 5;
var url = "feedSources.json";
var jsonData;

/////////////////////////////////////////////////////////////////////////////////////////////

//Execution starts after document has fully loaded//

/////////////////////////////////////////////////////////////////////////////////////////////

jQuery(document).ready(function($) {
    
    //Get data from JSON file
    $.getJSON(url, function(dataFromJsonFile){
        jsonData = dataFromJsonFile;
        
        //step 1: Load default feed
        loadDefaultFeeds(jsonData);
        
        //step 2: Remove previous content
        clearPriorContent();

        //step 3: populate the latest stories block
        populateLatestStoriesBlock(jsonData.indiaRssFeeds.length);
    });
    
    $('body').on('click', '#india', function() {
       //Get data from JSON file
        $.getJSON(url, function(dataFromJsonFile){
            jsonData = dataFromJsonFile;

            //step 1: Load default feed
            populateTopicFeed(jsonData.indiaRssFeeds.length, jsonData, "india");
            
            //step 2: Remove previous content
            clearPriorContent();
            
            //step 3: populate the latest stories block
            populateLatestStoriesBlock(jsonData.indiaRssFeeds.length, jsonData.indiaRssFeeds);
        });
    });
    
    $('body').on('click', '#tech', function() {
        //Get data from JSON file
        $.getJSON(url, function(dataFromJsonFile){
            jsonData = dataFromJsonFile;

            //step 1: Load default feed
            populateTopicFeed(jsonData.indiaRssFeeds.length, jsonData, "tech");
            
            //step 2: Remove previous content
            clearPriorContent();
            
            //step 3: populate the latest stories block
            populateLatestStoriesBlock(jsonData.indiaRssFeeds.length, jsonData.indiaRssFeeds);
        });
    });
    
    $('body').on('click', '#books', function() {
        
    });
    
    $('body').on('click', '#startups', function() {
        alert( "Handler for .click() called." );
    });
    
    $('body').on('click', '#fitness', function() {
        alert( "Handler for .click() called." );
    });
    
});

/////////////////////////////////////////////////////////////////////////////////////////////

//Function Definitions//

/////////////////////////////////////////////////////////////////////////////////////////////

//Returns feed source title
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

//Gather latest 5 stories
function gatherLatestStories (rssDiv){

    var headline = $(rssDiv).find('h3');
    
    $("#rss-feed0").append('<div class="item row"><div class="desc col-md-12 col-sm-12 col-xs-12"><h3 class="title">' + headline.html() + '</h3></div></div><hr class="divider" />');

}

//Populate latest headline from each feed
function populateLatestStoriesBlock(topicFeedLength){
    
    setTimeout(function(){ 
        for ( var i = 1; i < topicFeedLength; i++ ){
            $('#rss-feed'+i).find('h3').on('load', gatherLatestStories('#rss-feed'+i));
        }                     
    }, 2000);
}

//India feed loads by default
function loadDefaultFeeds(jsonData) {
    for ( var i = 0; i < jsonData.indiaRssFeeds.length; i++ ) {

        j = i+1;
        //Empty previous feeds
        $("#rss-feed"+j).find("div").html("");
        $("#rss-feed"+j).find("h2").remove();

        console.log("#rss-feed"+j);
        var populateRssFeed = function(){
            $("#rss-feed"+j).rss(

                //Change this to your own rss feeds
                jsonData.indiaRssFeeds[i],

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

        parseFeed(jsonData.indiaRssFeeds[i], '#rss-feed'+j);
        populateRssFeed();
    }
} 

//Get Feed Addresses By Topic
function getFeedsByTopic(topicFeedLength, jsonData, topic){
    var feeds = [];
    
    if(topic === "india"){
        for (var i = 0; i < topicFeedLength; i++){
            feeds[i] = jsonData.indiaRssFeeds[i];
        }
    }else if(topic === "tech"){
        for (var i = 0; i < topicFeedLength; i++){
            feeds[i] = jsonData.techRssFeeds[i];
        }
    }else if(topic === "books"){
        for (var i = 0; i < topicFeedLength; i++){
            feeds[i] = jsonData.booksRssFeeds[i];
        }
    }else if(topic === "startups"){
        for (var i = 0; i < topicFeedLength; i++){
            feeds[i] = jsonData.startupsRssFeeds[i];
        }
    }else if(topic === "fitness"){
        for (var i = 0; i < topicFeedLength; i++){
            feeds[i] = jsonData.fitnessRssFeeds[i];
        }
    }else if(topic === "food"){
        for (var i = 0; i < topicFeedLength; i++){
            feeds[i] = jsonData.foodRssFeeds[i];
        }
    }
    
    return feeds;
}

//Generic Populate topic feed
function populateTopicFeed(topicFeedLength, jsonData, topic){
    
    var feeds = [];
    
    feeds = getFeedsByTopic(topicFeedLength, jsonData, topic);
    
    for ( var i = 0; i < topicFeedLength; i++ ) {
        j = i+1;
        
        //Empty previous feeds
        $("#rss-feed"+j).find("div").html("");
        $("#rss-feed"+j).find("h2").remove();

        //Populate Headings
        parseFeed(feeds[i], '#rss-feed'+j);

        $("#rss-feed"+j).rss(

            //Change this to your own rss feeds
            feeds[i],

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
}

function clearPriorContent(){
    $("#rss-feed0").find("div").remove();
    $("#rss-feed0").find(".divider").remove();
}









