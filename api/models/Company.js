module.exports = {

    attributes: {
        name: {
            type: "string",
            required: true
        },
        city: {
            type: "string"
        },
        address: {
            type: "string"
        },
        jobs: {
            collection: 'job',
            via: 'company'
    
        }
    }
}