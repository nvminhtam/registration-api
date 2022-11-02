const User = require('../../models/User');

const findUser = ({ username }) => {
    return User.findOne({"username":username})
}

const createUser = async({
    fullname,
    username,
    hashPassword
}) => {
    let user = new User({"username":username,"fullname":fullname,"password":hashPassword});
    return await user.save();

}

module.exports = {
    findUser,
    createUser
}