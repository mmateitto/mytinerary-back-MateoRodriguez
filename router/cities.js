import { Router } from "express";
import {allCities, cityByName, cityByCountry, cityByContinent, cityByCurrency, cityBy_id}  from "../controllers/cities/read.js";
import create from "../controllers/cities/create.js";

let routerCities = Router();

routerCities.get("/all", allCities);
routerCities.get("/name/:name", cityByName);
routerCities.get("/country/:country", cityByCountry);
routerCities.get("/_id/:_id", cityBy_id)
routerCities.get("/continent/:continent", cityByContinent);
routerCities.get("/currency/:currency", cityByCurrency);
routerCities.post("/create", create);

export default routerCities