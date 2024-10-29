const { Users } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { use } = require('../routers/R_Users');

// out

// login
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Users.findOne({ where: { username } });

        // no user
        if (!user) {
            return res.status(404).json({ error: 'User tidak ditemukan' });
        }

        if (user.role == 'admin') {
            // ver pass
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Password salah' });
            }
            //login berhasil
            const token = jwt.sign({ id: user.id, username: user.username }, process.env.SECRET_KEY, { expiresIn: '1h' });
            res.status(200).json({
                message: 'Login berhasil',
                token,
                user: {
                    id: user.id,
                    name: user.name,
                    contact: user.contact,
                    image: user.image,
                    role: user.role,
                    username: user.username
                }
            });
        } else {
            res.status(200).json({
                message: 'Login berhasil',
                user: {
                    id: user.id,
                    name: user.name,
                    contact: user.contact,
                    image: user.image,
                    role: user.role,
                    username: user.username
                }
            });
        }
    } catch (error) {
        res.status(500).json({ error: 'Gagal melakukan login', detail: error.message });
    }
};

// GET
exports.getUsers = async (req, res) => {
    try {
        const duser = await Users.findAll();
        res.status(200).json(duser);
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil data users' });
    }
};

// POST
exports.createUsers = async (req, res) => {
    console.log(req.body);
    try {
        const { name, contact, image, role, username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        const newUsers = await Users.create({ name, contact, image, role, username, password: hashedPassword });
        res.status(201).json(newUsers);
    } catch (error) {
        res.status(500).json({
            error: 'Gagal menambah Users baru',
            detail: error.errors ? error.errors.map(e => e.message) : error.message
        });
    }
};



// UPDATE
exports.updateUsers = async (req, res) => {
    try {
        let hashedPassword
        const { id } = req.params;
        const { name, contact, image, role, username, password } = req.body;
        if (password) {
            hashedPassword = await bcrypt.hash(password, 10);
        }

        const [updated] = await Users.update(
            { name, contact, image, role, username, password: hashedPassword },
            { where: { id } }
        );
        if (updated) {
            const updatedUsers = await Users.findOne({ where: { id } });
            res.status(200).json(updatedUsers);
        } else {
            res.status(404).json({ error: 'Users tidak ditemukan' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengedit Users' });
    }
};


// DELETE
exports.deleteUsers = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Users.destroy({ where: { id } });
        console.log(result);

        if (result) {
            res.status(200).json({ message: 'Users berhasil dihapus' });
        } else {
            res.status(404).json({ error: 'Users tidak ditemukan' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Gagal menghapus Users' });
    }
};