port = 3003;

const express = require('express');
const bd = require('./bancoDeDados');
const app = express();

app.listen(port, () => {
    console.log(`O servidor está funcionando na porta ${port}`);
});

app.use(express.json());

app.get('/users', (req, res, next) => {
    res.send(bd.getAll(req.params.id));
})

app.get('/users/:id', (req, res, next) => {
    bd.get(req.params.id)
        .then(user => {
            if (user != null) {
                res.send(user);
            } else {
                res.send("Não foi possível encontrar esse ID")
            }
        })
})

app.post('/users', (req, res, next) => {
    const user = bd.add({
        nome: req.body.nome,
        email: req.body.email,
        endereco: req.body.endereco
    });
    res.send(user);
})

app.put('/users/:id', (req, res, next) => {
    bd.update(req.params.id,
        {
            nome: req.body.nome,
            email: req.body.email,
            endereco: req.body.endereco
        })
        .then(
            u => res.send(u)
        )
        .catch(
            error => res.send(error)
        )
})

app.delete('/users/:id', (req, res, next) => {
    bd.remove(req.params.id)
        .then(
            u => res.send(u)
        )
        .catch(
            error => res.send(error)
        )
})