import config from '../config/config';

const allowOnly = (accessLevel, callback) => {
     const checkUserRole = (req, res) => {
        const { role } = req.user[0].dataValues;
        const number = getNumber(role);
        if(number < accessLevel) {
            res.status(403).json({ msg: 'You do not have access to this'})
            return;
        }

        callback(req, res)
    }

    return checkUserRole;
}

const getNumber = (role) => {
    let number;
    Object.entries(config.userRoles).map(([key, value]) => {
        if (key === role) {
            number = value;
        }
    })
    return number;
}

export { allowOnly }