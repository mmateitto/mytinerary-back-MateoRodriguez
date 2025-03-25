import City from '../../models/City.js'

let create = async (req, res, next) => {
    try {
        let citiesInfo = req.body

        let createCity = await City.create(citiesInfo)

        return res.status(201).json({
            response: createCity
        })
    }catch(error){
        next(error)
    }
}

export default create;