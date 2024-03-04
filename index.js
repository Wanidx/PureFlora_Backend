const express = require(`express`);
const Sequelize = require(`sequelize`);
const app = express();

app.use(express.json());

const sequelize = new Sequelize('database', 'username', 'passwored', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'Database/DB.sqlite'
});

const Product = sequelize.define('Product', {
    
    ID : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    Name : {
        type: Sequelize.STRING,
        allowNull: false
    },

    Detail : {
        type: Sequelize.TEXT,
        allowNull: false,
    },

    Price : {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    ImageURL : {
        type: Sequelize.STRING,
        allowNull: false
    }

});

const Pot = sequelize.define('Pot', {

    ID : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    Name : {
        type: Sequelize.STRING,
        allowNull: false
    },

    Detail : {
        type: Sequelize.TEXT,
        allowNull: false,
    },

    Price : {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    ImageURL : {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Account = sequelize.define('Account', {
    
    ID : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    Username : {
        type: Sequelize.STRING,
        allowNull: false,
    },

    Password: {
        type: Sequelize.STRING,
        allowNull: false
    },

    level: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "user"
    }
});

sequelize.sync();

app.get('/Products' , (req, res) => {
    Product.findAll().then(Products => {
        res.json(Products);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/Products/:ID' , (req, res) => {
    Product.findByPk(req.params.ID).then(Product => {
        if (!Product) {
            res.status(404).send('Product not found');
        } else {
            res.json(Product);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.post('/Products', (req,res) => {
    Product.create(req.body).then(Products => {
        res.send(Products);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.put('/Products/:ID' , (req, res) => {
    Product.findByPk(req.params.ID).then(Product => {
        if (!Product) {
            res.status(404).send('Product not found');
        } else {
            Product.update(req.body).then(() => {
                res.send(Product);
            }).catch(err => {
                res.status(500).send(err);
            })
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.delete('/Products/:ID' , (req, res) => {
    Product.findByPk(req.params.ID).then(Product => {
        if (!Product) {
            res.status(404).send('Product not found');
        } else {
            Product.destroy().then(() => {
                res.send({});
            }).catch(err => {
                res.status(500).send(err);
            })
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});


app.get('/Pots' , (req, res) => {
    Pot.findAll().then(Pots => {
        res.json(Pots);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/Pots/:ID' , (req, res) => {
    Pot.findByPk(req.params.ID).then(Pot => {
        if (!Pot) {
            res.status(404).send('Pot not found');
        } else {
            res.json(Pot);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.post('/Pots', (req,res) => {
    Pot.create(req.body).then(Pots => {
        res.send(Pots);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.put('/Pots/:ID' , (req, res) => {
    Pot.findByPk(req.params.ID).then(Pot => {
        if (!Pot) {
            res.status(404).send('Pot not found');
        } else {
            Pot.update(req.body).then(() => {
                res.send(Pot);
            }).catch(err => {
                res.status(500).send(err);
            })
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.delete('/Pots/:ID' , (req, res) => {
    Pot.findByPk(req.params.ID).then(Pot => {
        if (!Pot) {
            res.status(404).send('Pot not found');
        } else {
            Pot.destroy().then(() => {
                res.send({});
            }).catch(err => {
                res.status(500).send(err);
            })
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/Accounts' , (req, res) => {
    Account.findAll().then(Accounts => {
        res.json(Accounts);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/Accounts/:ID' , (req, res) => {
    Account.findByPk(req.params.ID).then(Account => {
        if (!Account) {
            res.status(404).send('Account not found');
        } else {
            res.json(Account);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.post('/Accounts', (req,res) => {
    Account.create(req.body).then(Accounts => {
        res.send(Accounts);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.put('/Accounts/:ID' , (req, res) => {
    Account.findByPk(req.params.ID).then(Account => {
        if (!Account) {
            res.status(404).send('Account not found');
        } else {
            Account.update(req.body).then(() => {
                res.send(Account);
            }).catch(err => {
                res.status(500).send(err);
            })
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.delete('/Accounts/:ID' , (req, res) => {
    Account.findByPk(req.params.ID).then(Account => {
        if (!Account) {
            res.status(404).send('Account not found');
        } else {
            Account.destroy().then(() => {
                res.send({});
            }).catch(err => {
                res.status(500).send(err);
            })
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));