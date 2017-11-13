"use strict"

class UserRepository {

    constructor() {
        this.users = [{ id: 1, username: 'admin', password: '$2y$10$6PsqoyFRdPllJkDutX38CeI8t2ozP9J6Kzw6aG3b5zF9wugpK/zli' }, { id: 2, username: 'user', password: '$2y$10$mQGcIdUoNH8sUV391GUDdeg/C.1E6eWdcT.YmvRFeV.eyHJaVUQdG' }];
    }

    findOneByUsername(username) {
        return this.users.find((u) => u.username === username);
    }
}

module.exports = new UserRepository();