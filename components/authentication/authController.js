const bcrypt = require('bcrypt');
const service = require('./authService');

const register = async (req, res) => {
    //validation
    const {
        fullname,
        username,
        password,
    } = req.body;
    const user = await service.findUser({ username});
    if (user) {
        return res.status(409).send('This account already exists.');
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    const newAccount = {
        fullname,
        username,
        hashPassword
    }
    let result = await service.createUser(newAccount);
    return res.status(200).send(result);
}

const login = async (req, res) => {
    const {
        fullname,
        username,
        password,
    } = req.body;
    const user = await service.findUser({ username});
    if (user) {
        if (bcrypt.compareSync(password, user.password)) {
            return res.status(200).send(user);
        }
        else {
            return res.status(401).send("Wrong password");
        }
    }
    else {
        return res.status(401).send("Incorrect username");
    }
}

module.exports = {
    register,
    login
}