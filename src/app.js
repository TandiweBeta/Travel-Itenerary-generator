function generateItinerary(event){
  event.preventDefault();
  
  let itineraryElement = document.querySelector("#itinerary");
  itineraryElement.innerHTML = "Day 1, Day 2, Day 3";
  new Typewriter("#itinerary", {
    strings: "Day 1, Day 2, Day 3",
    autoStart: true,
    delay:1,
    cursor:null,
  });
 
}

let itineraryFormElement = document.querySelector("#itinerary-generator-form");
itineraryFormElement.addEventListener("submit",generateItinerary);
