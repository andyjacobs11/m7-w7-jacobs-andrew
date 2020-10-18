var weatherTextContainer = document.querySelectorAll('#weather h1 span');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        //this is your response - everything you get back from the api lives in this variable
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
        console.log(apiResult);
        
        var locationName = document.createTextNode(apiResult.name);
        var weather = document.createTextNode(apiResult.description);

        weatherTextContainer[0].appendChild(locationName);
        weatherTextContainer[1].appendChild(weather);


        //another way to do it
        // ingredientTextContainer[0].innerHTML = apiResult.base_layer.name
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=10001,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();