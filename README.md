# SMOKE FIRE AIR: a wildfire wafety dashboard 
This application pulls data from the US EPA's [Air Now API](https://docs.airnowapi.org/) and renders it on an interactive map with [Mapbox](https://docs.mapbox.com/). It built on Node.js using yarn as package manager and React.
## Run Locally
1. Download the project from github
```bash 
git clone https://github.com/NickCoooke/FireSmokeAir
```
2. Install the project dependencies 
```bash 
cd FireSmokeAir/frontend
yarn install
```
3. Launch the development server
```bash
yarn start
```
----------------------------------------------------------------------------
Here is the agenda for the development of FireSmokeAir`
# To Do
- add AIRNOW data as a source to map
- render that source as a layer (circle)
- render another later ontop as a circle
- parse airnow data into geojson


## InfoBox
- Fix centering on cards
- Add images for tags
- Add sorting feature for tags
- Add topical Blocks: overview of topic and notes on how to research. Ex, clean rooms
- Color links by danger: use these links in these situations. Ex, red would have links on how to make DIY clean rooms and find masks that work

## Map
- Add A floating Key explaining the colors 
- Add location search
- Connect to AirNow for current Data
- Connect to purple air for more Data
- Format and store data in temp back end files

## Side Bar
- Populate with location information: (Air quality, Location name, nearest sensor)
- Color based off of result (like we do with point population)
