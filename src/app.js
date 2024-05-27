

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
  
   let prompt = `user instructions are: please generate a short 3 day itinerary about When writing the itinerary Skip a line after each day and start each day on a new line, put the days in <strong></strong> HTML element.Sign at the end Compiled by in a new line in <strong>SheCodes AI</strong> HTML element ${instructionsInput.value}`;
   let context =
     " You are a very knowledgable and well travelled AI and know a lot of interesting and fun places to visit all over the world, your mission is to generate a 3 day travel itinerary. When writing the itineraryput a <br> after each day put the days in <strong></strong> HTML element.Sign at the end Compiled by in a new line in <strong>SheCodes AI</strong> HTML element . Make sure to the follow user instructions";
   let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
     console.log("Generating an Itinerary");
     console.log(`prompt: ${prompt}`);
     console.log(`context: ${context}`);
     axios.get(apiUrl).then(displayItinerary); 

  
 
}

let itineraryFormElement = document.querySelector("#itinerary-generator-form");
itineraryFormElement.addEventListener("submit",generateItinerary);
  
