document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function () {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            // Display the user's message in the chat box
            displayMessage("You: " + userMessage);

            // Get the chatbot's response
            const botResponse = getBotResponse(userMessage);

            // Display the bot's response
            displayMessage("Chatbot: " + botResponse);

            // Clear the user input field
            userInput.value = "";
        }
    });

    function displayMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat box
    }

    function getBotResponse(userMessage) {
        const lowerUserMessage = userMessage.toLowerCase();
        let response = "";
    
        if (lowerUserMessage.includes("hello")) {
            response = "Hello! How can I assist you today?";
        } else if (lowerUserMessage.includes("information")) {
            response = "I have access to a wide range of information. Feel free to ask me anything.";
        } else if (lowerUserMessage.includes("weather")) {
            response = "I'm sorry, I don't have real-time weather information. You can check a weather website or app for the latest updates.";
        } else if (lowerUserMessage.includes("time")) {
            const currentTime = new Date().toLocaleTimeString();
            response = "The current time is " + currentTime + ".";
        } else if (lowerUserMessage.includes("your name")) {
            response = "I'm just a chatbot. I don't have a personal name.";
        } else if (lowerUserMessage.includes("thank you")) {
            response = "You're welcome!";
        } else if (lowerUserMessage.includes("tell me a joke")) {
            const jokes = [
                "Why did the scarecrow win an award? Because he was outstanding in his field!",
                "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
                "Parallel lines have so much in common. It's a shame they'll never meet.",
            ];
            response = jokes[Math.floor(Math.random() * jokes.length)];
        } else if (lowerUserMessage.includes("capital of france")) {
            response = "The capital of France is Paris.";
        } else if (lowerUserMessage.includes("recipe for chocolate cake")) {
            response = "Here's a simple recipe for chocolate cake: \nIngredients: ... (provide a recipe)";
        } else if (lowerUserMessage.includes("facts about space")) {
            const spaceFacts = [
                "The largest volcano in our solar system is Olympus Mons, located on Mars.",
                "A day on Venus is longer than its year. It takes Venus 243 Earth days to complete one rotation.",
                "Neptune's blue color is due to the presence of methane in its atmosphere.",
                "Saturn's rings are made primarily of ice particles.",
                "The Milky Way galaxy is estimated to contain over 100 billion stars.",
                // Add more space facts here.
            ];
            response = spaceFacts[Math.floor(Math.random() * spaceFacts.length)];
        } else if (lowerUserMessage.includes("famous inventors")) {
            response = "Some famous inventors include Thomas Edison, Alexander Graham Bell, and Nikola Tesla.";
        } else if (lowerUserMessage.includes("programming languages")) {
            response = "There are many programming languages, including JavaScript, Python, Java, C++, and more.";
        } else if (lowerUserMessage.includes("world capitals")) {
            response = "Some world capitals are Washington, D.C. (USA), London (UK), Tokyo (Japan), and Beijing (China).";
        } else if (lowerUserMessage.includes("history")) {
            const historicalFacts = [
                "The Declaration of Independence was adopted on July 4, 1776, in the United States.",
                "The Great Wall of China is over 13,000 miles long and was built over centuries.",
                "The French Revolution began in 1789 and led to significant social and political changes in France.",
                "Leonardo da Vinci is known for the Mona Lisa and The Last Supper.",
                "The first computer, known as the ENIAC, was developed in the 1940s.",
                // Add more historical facts here.
            ];
            response = historicalFacts[Math.floor(Math.random() * historicalFacts.length)];
        } else if (lowerUserMessage.includes("what is the meaning of life")) {
            response = "The meaning of life is a philosophical question that has been debated for centuries. Some believe it's about finding purpose and happiness.";
        } else if (lowerUserMessage.includes("how does photosynthesis work")) {
            response = "Photosynthesis is the process by which plants convert sunlight into energy by using chlorophyll and carbon dioxide to produce glucose and oxygen.";
        } else if (lowerUserMessage.includes("who won the World Series in 2020")) {
            response = "The Los Angeles Dodgers won the World Series in 2020.";
        } else if (lowerUserMessage.includes("how does the internet work")) {
            response = "The internet is a global network of interconnected computers that communicate using various protocols, including TCP/IP.";
        } else if (lowerUserMessage.includes("who is the president of the United States")) {
            response = "As of my last knowledge update in September 2021, the President of the United States is Joe Biden.";
        } else if (lowerUserMessage.includes("what is the largest mammal in the world")) {
            response = "The largest mammal in the world is the blue whale.";
        } else if (lowerUserMessage.includes("how do vaccines work")) {
            response = "Vaccines work by stimulating the immune system to produce antibodies against a specific pathogen, providing immunity without causing the disease.";
        } else if (lowerUserMessage.includes("how do plants grow")) {
            response = "Plants grow through a process called photosynthesis, where they use sunlight, water, and carbon dioxide to produce energy.";
        } else if (lowerUserMessage.includes("what is the formula for water")) {
            response = "The chemical formula for water is H2O, which means it consists of two hydrogen atoms and one oxygen atom.";
        } else if (lowerUserMessage.includes("who wrote the play 'Romeo and Juliet'")) {
            response = "The play 'Romeo and Juliet' was written by William Shakespeare.";
        } else if (lowerUserMessage.includes("how do birds fly")) {
            response = "Birds fly by flapping their wings, creating lift and thrust. Their lightweight bones and feathers also contribute to their flight.";
        } else if (lowerUserMessage.includes("what is the boiling point of water")) {
            response = "The boiling point of water at standard atmospheric pressure is 100 degrees Celsius or 212 degrees Fahrenheit.";
        } else if (lowerUserMessage.includes("how do earthquakes occur")) {
            response = "Earthquakes occur when there is a sudden release of energy in the Earth's crust, typically due to the movement of tectonic plates.";
        } else if (lowerUserMessage.includes("who painted the 'Mona Lisa'")) {
            response = "The 'Mona Lisa' was painted by Leonardo da Vinci.";
        } else if (lowerUserMessage.includes("what is the speed of light")) {
            response = "The speed of light in a vacuum is approximately 299,792,458 meters per second (about 186,282 miles per second).";
        } else if (lowerUserMessage.includes("how does the human brain work")) {
            response = "The human brain is a complex organ that processes information through electrical and chemical signals between neurons.";
        } else if (lowerUserMessage.includes("who is the author of 'To Kill a Mockingbird'")) {
            response = "The author of 'To Kill a Mockingbird' is Harper Lee.";
        } else if (lowerUserMessage.includes("how are stars formed")) {
            response = "Stars are formed from clouds of gas and dust in space through a process called nuclear fusion.";
        } else if (lowerUserMessage.includes("who was the first person to walk on the moon")) {
            response = "The first person to walk on the moon was Neil Armstrong during NASA's Apollo 11 mission.";
        } else if (lowerUserMessage.includes("what is the largest planet in our solar system")) {
            response = "The largest planet in our solar system is Jupiter.";
        } else if (lowerUserMessage.includes("how does a cell phone work")) {
            response = "A cell phone works by sending and receiving radio signals to and from cell towers, allowing voice and data communication.";
        } else if (lowerUserMessage.includes("who is the founder of Microsoft")) {
            response = "Microsoft was co-founded by Bill Gates and Paul Allen.";
        } else if (lowerUserMessage.includes("how is electricity generated")) {
            response = "Electricity can be generated through various methods, including burning fossil fuels, nuclear reactions, and renewable sources like wind and solar.";
        } else if (lowerUserMessage.includes("who wrote 'The Great Gatsby'")) {
            response = "The novel 'The Great Gatsby' was written by F. Scott Fitzgerald.";
        } else if (lowerUserMessage.includes("how does a refrigerator work")) {
            response = "A refrigerator works by removing heat from its interior and expelling it to the external environment, keeping the contents cool.";
        } else if (lowerUserMessage.includes("who is the artist behind 'Starry Night'")) {
            response = "The painting 'Starry Night' was created by the artist Vincent van Gogh.";
        } else if (lowerUserMessage.includes("how do airplanes stay in the air")) {
            response = "Airplanes stay in the air due to the lift generated by their wings, which is created by the shape and angle of the wings.";
        } else if (lowerUserMessage.includes("what is the process of digestion")) {
            response = "Digestion is the process of breaking down food into smaller molecules in the digestive system, allowing nutrients to be absorbed into the body.";
        } else {
            // If none of the predefined responses match, provide a generic response.
            response = "I'm sorry, I don't have the specific information you're looking for at the moment.";
        }
    
        return response;
    }
    

});