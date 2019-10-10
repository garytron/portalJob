const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    async hashPassword(password) {
        return await bcrypt.hash(password, saltRounds);
    },
    async comparePassword(password, hash) {
        return await bcrypt.compare(password,hash);
    }
}