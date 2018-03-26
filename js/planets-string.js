(function(){
    "use strict";

    var planetsString = " Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    var planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var string = planetsArray.join("<li>");

    console.log(string);


    document.write("<ul><li>" + string + "</li></ul>");


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     // This could be helpful if you were to get a set of data given to you with two arrays and you'd like to merge them together
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

})();