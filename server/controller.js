

module.exports = {
    grab: (req, res) => {
        const dbInstance = req.app.get('db');
        // const {name, price, img} = req.body;

        dbInstance.get_inventory()
        .then((response) => res.status(200).send(response))
                .catch(err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
                console.log(err)
            })
    },

    add: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, price, img} = req.body;

        dbInstance.create_product([img, name, price])
        .then((response) => res.status(200).send(response))
                .catch(err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
                console.log(err)
            })
    }


}