const users = [
    {
        id: 1,
        name: 'Léia'
    },
    {
        id: 2,
        name: 'Luke'
    },
    {
        id: 3,
        name: 'Anakin'
    }
];

function findAll() {
    return users;
}

function findById(id) {
    return users.find(u => u.id === parseInt(id));
}

function create(userData) {
    const newUser = {
        id: users.length + 1,
        name: userData.name
    };
    users.push(newUser);
    return newUser;
}

module.exports = {
    findAll,
    findById,
    create
};
