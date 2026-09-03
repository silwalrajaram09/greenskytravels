Adding the services section on the home page where it shows list of services icon like airline tickets, hotel bookings , airport transfers , visa asistance , travel insurance , and visa change with a short discription also and whre we click there it should open the its own page like visa assistant should be open the current visa services and airline tickets also shows the flight booking options and hotel bookings also shows the hotel booking options and airport transfers also shows the airport transfers options and travel insurance also shows the travel insurance options and visa change also shows the visa change options inside the visa change there is two type like visa change package by bus (bus to bus) by flight (a2a)  
the flight request is contains the thins whiche given mention 
Trip Type: Add radio buttons for One Way, Round Trip, and Multi City, with Round Trip selected by default.
Flight Search Fields: For One Way and Round Trip, include a searchable From Airport, To Airport, Departure Date, Return Date, and Passenger selector with Adult, Children, and Infant options. The Return Date should only be required for Round Trip and should be hidden or disabled for One Way.
Airport Dropdown: Use a real airport dataset from around the world containing the airport name, city, country, and IATA airport code. For example: Dubai International Airport (DXB), Sharjah International Airport (SHJ), Cochin International Airport (COK), Tribhuvan International Airport (KTM). The dropdown should be searchable by airport name, city, country, or IATA code, so searching Dubai or DXB displays Dubai International Airport (DXB). The selected airport should retain its name, city, country, and code, and the IATA code must be included in the WhatsApp message. The dataset should be structured so more airports can easily be added in the future.
WhatsApp Request: When the user clicks Search Flights, generate a WhatsApp message dynamically using the selected details, for example:
“I am looking for a flight ticket with the following details: Route: Dubai (DXB) to Cochin (COK), Trip Type: Round Trip, Departure Date: 21 August 2026, Return Date: 09 September 2026, Passenger: 1 Adult. Kindly check and provide the best available fare and flight options. Thank you.” The message should be properly URL-encoded and opened in WhatsApp with all selected information.
Multi City: When Multi City is selected, change the form to allow multiple flight segments instead of a single From/To/Date section. Each segment should contain From Airport, To Airport, and Departure Date. For example: Dubai (DXB) → Kathmandu (KTM) — 21 August 2026 and Kathmandu (KTM) → Delhi (DEL) — 25 August 2026. Add an “Add another city” button to create additional segments and allow users to remove segments if needed. The WhatsApp message should include all selected flight segments.

* visa change packages like inside there bus to bus and A2A (flight to flight) and it also form with the required feild
- visa type dropdowon like cancelaton visa and visit visa 
- last date date format 
- nationality 
- service dropdown like by bus/ by flight
and explore after click the explore it open the whatsapp with the prefilled message 
"I am looking for a visa change package with the following details:

Visa Type: Cancellation/Visa
Last Date: 21 August 2026
Nationality: Nepali
Service: Bus to Bus

Kindly check and provide the best available fare and flight options.

Thank you."



the services pages do not use the unnecessary desing like the hero section just use the common design no need the hero section with the another color and other things so make it simple but beautiful and attractive for the user and no need the full width image the image shoud be inside the container and do not use the shadow just use the border and border-radius for the design and the button should be inside the container. no need form div another it i mean not extra styling dis this page is full for the content for all the services page so make is like hte use the things from the where start the conten on the breadcrummbs like max-w-7xl so manage the design with the full details 
