const users = [
    {
        id: 1,
        name: 'Jhon Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
];

function getUserById(id, callback){
    const user = users.find(function(user){
        return user.id === id;
    });

    if(!user){
        return callback(`USER NOT FOUND ${id}`)
    }

    return callback(null, user);
}

module.exports = {
    getUserById,

}