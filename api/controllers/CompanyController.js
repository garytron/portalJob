module.exports = {
    async create(req,res){

        try{
            //Create a new record in Company Model.
            let params = req.allParams();

            if(!params.name){
                return res.badRequest({err: 'Name is required field.'})
            }

            const results = await Company.create({
                name: params.name,
                city: params.city,
                address: params.address,
            });

            return res.ok(results);
        }
        catch(err){
            return res.serverError(err);
        }
    },
    async find(req, res){

        try {
            const companies = await Company.find().populate('jobs');

            return res.ok(companies);
        } catch (err) {
            return res.serverError(err);
        }

    },
    async findOne(req,res){
        try {
            const company = await Company.findOne({
                id: req.params.id
            });

            return res.ok(company);
        } catch (err) {
            return res.serverError(err);
        }
    },
    async update(req,res){

        const params = req.allParams();

        try {
            const results = await Company.update({id: params.id},{
                name: params.name,
                city: params.city,
                address: params.address,
            });

            return res.ok(results);
        } catch (err) {
            return res.serverError(err);
        }
    },
    async delete(req,res){
        try {
            const results = await Company.destroy({
                id: req.params.id
            });

            return res.ok(results);
        } catch (err) {
            return res.serverError(err);
        }
    }
}