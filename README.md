# ReLeaf

ReLeaf is a sustainable travel platform that aims to help travellers reduce their carbon footprint by providing eco-friendly and cost-efficient travel options, including flights, accommodations, and activities. Users can sign in, collect points, and save trips, fostering a sense of community among eco-conscious travellers.

&nbsp;

## 🏆 Awards

**🌱 Best Sustainability Hack** sponsored by Avanade at MetHacks 2023🌱

Check out our [MetHacks 2023 Devpost submission](https://devpost.com/software/re-leaf-iu2cje?ref_content=user-portfolio&ref_feature=in_progress) for more details on the project!

&nbsp;

## Inspiration

With the tourism sector accounting for approximately 8% of global carbon emissions, equivalent to around 4.5 gigatons of CO2, sustainable and responsible tourism practices are more important than ever. ReLeaf was created to tackle this issue head-on by providing users with a one-stop-shop platform for travelling sustainably.

&nbsp;

## Features

- Search for eco-friendly, cost-efficient and available flight, hotel, and activity options
- View carbon emissions savings for each option
- Sign in, collect points, and save trips for future reference
- Interactive map and nearby search functionality

&nbsp;

## Tech Stack

- Frontend: React.js, TailwindCSS, HTML, SCSS
- Backend: Javascript/Typescript, Express, Docker, Google Cloud Run
- Database: MongoDB Atlas
- APIs: Google Maps, Google Places, Google Flights (via Playwright), Auth0

&nbsp;

## Challenges and Accomplishments

- Overcoming the lack of easily accessible flight carbon emissions data by using Playwright for web scraping
- Successfully integrating multiple APIs to create a seamless and user-friendly platform
- Implementing secure user authentication with Auth0 and MongoDB
- Creating a platform that promotes positive social impact and sustainable travel practices

&nbsp;

## What We Learned

- Utilizing multiple APIs, database manipulation, cloud deployment, and web scraping
- Implementing secure user authentication by integrating Auth0 with MongoDB
- Front-end development using React.js and TailwindCSS
- The value of persistence, collaboration, and creativity in problem-solving

&nbsp;

## Future Plans

- Introduce a points redemption system for discounts and rewards
- Form partnerships with travel agencies and brands to incentivize sustainable travel
- Improve UI/UX and implement multiple sign-in methods (e.g., Facebook, Twitter)
- Create a community space for users to share experiences, tips, and best practices for sustainable travel
- Continuously enhance accessibility and inclusivity features to cater to diverse user needs and preferences

&nbsp;

## Getting Started

### Prerequisites

- Node.js
- Yarn
- Docker (optional)

### Installation

Follow these steps to get the project up and running:

1. **Clone the repo:**

```bash
git clone https://github.com/tanveersgill/re-leaf.git
```

2. **Install Yarn dependencies:**

```bash
cd re-leaf
yarn install
```

3. **Create a .env file** in the root of the project with the necessary API keys and credentials. Do not include the actual keys in the README or make them public. Instead, provide instructions on how to obtain the keys, as shown below:

```bash
VITE_REACT_APP_GOOGLE_MAPS_API_KEY=<your_google_maps_api_key>
VITE_APP_AUTH0_DOMAIN=<your_auth0_domain>
VITE_APP_AUTH0_CLIENT_ID=<your_auth0_client_id>
VITE_APP_AUTH0_AUDIENCE=<your_auth0_audience>
```

To obtain the **Google Maps API key**, follow the instructions [here](https://developers.google.com/maps/get-started#create-project).

For **Auth0 credentials**, sign up for a free account on [Auth0](https://auth0.com/), create a new application, and obtain the necessary credentials from the application settings.

4. **Run the development server:**

```bash
yarn start
```

Now you should be able to access the app on http://localhost:3000 in your browser.
