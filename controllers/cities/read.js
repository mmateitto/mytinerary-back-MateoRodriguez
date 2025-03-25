import City from '../../models/City.js'

let allCities = async (req, res, next) =>{
    try{
        let all = await City.find();
        return res.status(200).json({
            response: all
        })
    }catch(error){
        next(error)
    }
}

let cityByName = async (req, res, next) => {
    try{
        let nameQuery = req.params.name;
        let all = await City.find({name: nameQuery});
        return res.status(200).json({
            response: all
        })

    }catch(error){
        next(error)
    }
}

let cityByCountry = async (req, res, next) => {
    try{
        let query = req.params.country;
        let all = await City.find({country: query});
        return res.status(200).json({
            response: all
        })

    }catch(error){
        next(error)
    }
}

let cityBy_id = async (req, res, next) => {
    try{
        let query = req.params._id;
        let all = await City.find({_id: query});
        return res.status(200).json({
            response: all
        })

    }catch(error){
        next(error)
    }
}

let cityByContinent = async (req, res, next) => {
    try{
        let query = req.params.continent;
        let all = await City.find({continent: query});
        return res.status(200).json({
            response: all
        })

    }catch(error){
        next(error)
    }
}

let cityByCurrency = async (req, res, next) => {
    try{
        let query = req.params.currency;
        let all = await City.find({currency: query});
        return res.status(200).json({
            response: all
        })

    }catch(error){
        next(error)
    }
}
export {allCities, cityByName, cityByCountry, cityByContinent, cityByCurrency, cityBy_id} 