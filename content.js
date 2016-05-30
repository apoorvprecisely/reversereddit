var firstHref = $("a[href^='http']").eq(0).attr("href");
$.getJSON("http://www.reddit.com/r/pics/search.json?q=kittens&sort=new", function(data){

alert(data.kind);


    });
