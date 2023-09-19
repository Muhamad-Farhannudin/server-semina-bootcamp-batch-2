const Users = require('../../api/v1/users/model')
const Organizers = require('../../api/v1/organizers/model')
const {BadRequestError} = require('../../errors')

const createOrganizer = async(req) => {
    const {organizer, role, name, password, confirmPassword, email} = req.body;

    if(password !== confirmPassword) {
        throw new BadRequestError('Password dan Konfirmasi password tidak cocok') 
    }

    const result = await Organizers.create({organizer});

    const users = await Users.create({
        name,
        email,
        password,
        role,
        organizer : result._id,
    });

    delete users._doc.password;

    return users;
};

const createUsers = async(req, res) => {
    const {role, name, password, confirmPassword, email} = req.body;

    if(password !== confirmPassword) {
        throw new BadRequestError('Password dan Konfirmasi password tidak cocok') 
    }

    const users = await Users.create({
        name,
        email,
        password,
        role,
        organizer : req.user.organizer,
    });

    return users;
};

const getAllUser = async (req) => {
    const result = await Users.find();

    return result;
}

module.exports = {createOrganizer, createUsers, getAllUser}