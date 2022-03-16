const theatersService = require("./theatersService");

async function list(req, res, next) {
    const {movieId} = req.params;
    if(movieId) {
        const data = await theaterService.list(movieId);
        res.json({ data });
    } else {
        const data = await theatersService.list();
        res.json({ data });
    }
}

module.exports = {
    list,
};