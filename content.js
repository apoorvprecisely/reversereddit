var firstHref = window.location.href;
$.getJSON("http://www.reddit.com/.json", function(data){

   $.each(data.data.children, function(index, element) {
   var url=element.data.url;
   //console.log(firstHref);
                 //  console.log(index+" : "+ element.data.url);
   if(url==firstHref){
                alert(" Title : "+ element.data.title);
                }

    });

    });
