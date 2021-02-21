const sequence = {
    _id: 0,
    get id() {
        return this._id++;
    }
}

const users = {};

/**
 * Adciona um novo usuário na lista.
 * @param user Um objeto com o nome, email e endereço do novo usuário.
 * @return  O novo usário adcionado.
 */
function add(user) {
    user.id = sequence.id;
    users[user.id] = user;
    return user;
}

/** 
 * @param id o número referente ao ID que deseja encontrar.
 * @return Uma Promisse com o objeto com a ID passada por parametro.
 */
function get(id) {
    return Promise.resolve(users[id]);
}
/**
 * @return A lista com todos os usuários cadastrados;
 */
function getAll() {
    return Object.values(users);
}

/**
 * Atualiza as informação de um usário ja cadastrado.
 * @param id o número da ID do usário que deseja modificar. 
 * @param user um objeto com todos as mudanças que deseja fazer.
 * @return Uma Promisse com o usário atualizado, ou se não for encontrado a id passada, com uma mensagem de erro.
 */
function update(id, user) {
    let find = false
    Object.values(users).forEach(u => {
        if (u.id == id) {
            Object.keys(user).forEach(key => {
                if (user[key] != null) {
                    users[parseInt(id)][key] = user[key];
                    find = true;
                }
            });
        }
    });
    if (!find) {
        return Promise.resolve({ error: "Não foi possível encontrar essa ID" });
    } else {
        return Promise.resolve(users[parseInt(id)]);
    }
}

/**
 * Atualiza as informação de um usário ja cadastrado.
 * @param id o número da ID do usário que deseja modificar.
 * @return Uma Promisse com o usário que foi deletado, ou se não for encontrado a id passada, com uma mensagem de erro.
 */
function remove(id) {
    let user;
    let find =  false;
    for (let i = 0; i < Object.values(users).length; i++) {
        if ( id == users[i].id) {
            user = users[id];
            find = true;
            delete users[i];
        }
    }

    if (find) {
        return Promise.resolve(user);
    } else {
        return Promise.resolve({ error: "Não foi possível encontrar essa ID" });
    }
}


module.exports = { add, get, getAll, update, remove };