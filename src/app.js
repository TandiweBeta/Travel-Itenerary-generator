

function displayItinerary(response){
   new Typewriter("#itinerary", {
     strings: response.data.answer,
     autoStart: true,
     delay: 1,
     cursor: null,
   });
}

function generateItinerary(event){
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
   let apiKey = "00c99d472fbddtac3e3b2d017a4afdbo";
  
   let prompt = `user instructions are: please generate a short 3 day itinerary. When writing the itinerary put a <br> HTML element after each day, put the days in <strong></strong> HTML element. It is very IMPORTANT to use the <br> html element after each day ${instructionsInput.value}`;
   let context =
     " You are a very knowledgable and well travelled AI and know a lot of interesting and fun places to visit all over the world, your mission is to generate a 3 day travel itinerary. When writing the itinerary put a <br> HTML element after each day put the days in <strong></strong> HTML element.Please it is important to use the <br> HTML element after each day .write about activities to do and where to eat lunch and what to do in the evenings Make sure to the follow user instructions";
   let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
   let itineraryElement = document.querySelector("#itinerary");
   itineraryElement.classList.remove("hidden");
   itineraryElement.innerHTML =`<div class="generating"> Generating a Travel Itinerary for ${instructionsInput.value}</div>`;
     
     axios.get(apiUrl).then(displayItinerary); 

  
 
}

let itineraryFormElement = document.querySelector("#itinerary-generator-form");
itineraryFormElement.addEventListener("submit",generateItinerary);
  
