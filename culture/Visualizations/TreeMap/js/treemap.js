function getData(){
    d3.csv("http://localhost:8000/data/culture.csv", function(data){
        var culture = d3.nest().key(function(d){return d.countryCode;})
            .key(function(d){return d.domain;})
            .key(function(d){return d.industry;})
            .key(function(d){return d.occupation;})
            .map(data, d3.map);
        
        console.log(culture);
    });
}



$(document).ready(function(){
    getData();
});