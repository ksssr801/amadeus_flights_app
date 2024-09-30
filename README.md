# amadeus_flights_app

This web application that interacts with the Amadeus Travel API to fetch flight prices for a specific route.
Implemented using local caching with Redis and also manages the Amadeus API access token automatically. 

## Prerequisites

- Docker server should be running.

## Installation Instructions

- **Local:** This enviornment consist of react app.
1. Pull or unzip the project.
2. Go to 
   ```
        cd amadeus_flights_app
   ```
3. Run the command to dockerize and start the app
    ```
        docker-compose up
    ```