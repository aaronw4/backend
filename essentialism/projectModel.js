const db = require('../data/dbConfig');

function find() {
    return db('projects')
};

function findById(id) {
    return db('projects')
        .where({id})
}

function findUserProjects(id) {
    return db('projects')
        .join('users', 'users.id', 'projects.userId')
        .select(
            'users.id',
            'users.username',
            'projects.id as projectId',
            'projects.projectName',
            'projects.projectDescription'
        )
        .where({userId: id})
}

module.exports = {
    find,
    findById,
    findUserProjects
}