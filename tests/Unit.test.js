const request = require('supertest');
const app = require('../index');
const { Users, News } = require('../models');
let token;

beforeAll(async () => {
    const loginData = {
        username: "admin1233",
        password: "admin1233"
    };
    const loginResponse = await request(app).post('/api/login').send(loginData);
    console.log("Login Response Body:", loginResponse.body);
    token = loginResponse.body.token;
    console.log("Extracted Token:", token);
});

// ------------------------------ UNIT TEST UNTUK AKUN ----------------------------------------------
describe('User Controller', () => {
    let userId;

    beforeAll(async () => {
        const testUser = {
            name: "Test User",
            contact: "1234567890",
            image: "test-image.png",
            role: "admin",
            username: "testuser",
            password: "testpassword"
        };
        const response = await request(app)
            .post('/api/users')
            .send(testUser);

        userId = response.body.id;
    });

    afterAll(async () => {
        await Users.destroy({ where: { id: userId } });
    });

    describe('POST /api/login', () => {
        it('should log in a user and return a token', async () => {
            const loginData = {
                username: "testuser",
                password: "testpassword"
            };
            const response = await request(app)
                .post('/api/login')
                .send(loginData);

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('message', 'Login berhasil');
            expect(response.body.user).toHaveProperty('id', userId);
            expect(response.body).toHaveProperty('token');
        });

        it('should return error for invalid username', async () => {
            const loginData = {
                username: "invaliduser",
                password: "testpassword"
            };
            const response = await request(app)
                .post('/api/login')
                .send(loginData);

            expect(response.statusCode).toBe(404);
            expect(response.body).toHaveProperty('error', 'User tidak ditemukan');
        });

        it('should return error for invalid password', async () => {
            const loginData = {
                username: "testuser",
                password: "wrongpassword"
            };
            const response = await request(app)
                .post('/api/login')
                .send(loginData);

            expect(response.statusCode).toBe(401);
            expect(response.body).toHaveProperty('error', 'Password salah');
        });
    });

    describe('GET /api/users', () => {
        it('should retrieve all users', async () => {
            const response = await request(app).get('/api/users');

            expect(response.statusCode).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        });
    });

    describe('PUT /api/users/:id', () => {
        it('should update an existing user', async () => {
            const updatedUser = {
                name: "Updated User",
                contact: "0987654321",
                image: "updated-image.png",
                role: "admin",
                username: "updateduser",
                password: "newpassword"
            };

            const response = await request(app)
                .put(`/api/users/${userId}`)
                .send(updatedUser);

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('id', userId);
            expect(response.body).toHaveProperty('name', 'Updated User');
        });

        it('should return error for non-existing user', async () => {
            const updatedUser = {
                name: "Updated User",
                contact: "0987654321"
            };

            const response = await request(app)
                .put(`/api/users/999999`)
                .send(updatedUser);

            expect(response.statusCode).toBe(404);
            expect(response.body).toHaveProperty('error', 'Users tidak ditemukan');
        });
    });

    describe('DELETE /api/users/:id', () => {
        it('should delete an existing user', async () => {
            const response = await request(app)
                .delete(`/api/users/${userId}`);

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('message', 'Users berhasil dihapus');
        });

        it('should return error for non-existing user', async () => {
            const response = await request(app)
                .delete(`/api/users/999999`);

            expect(response.statusCode).toBe(404);
            expect(response.body).toHaveProperty('error', 'Users tidak ditemukan');
        });
    });
});

// ------------------------------ UNIT TEST UNTUK NEWS --------------------------------------
describe('News Controller', () => {
    let newsid;
    // Unit test untuk get news
    describe('GET /api/News', () => {
        it('should fetch the list of news', async () => {
            const response = await request(app)
                .get('/api/news');

            expect(response.statusCode).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        });
    });

    describe('POST /api/News', () => {
        // unit untuk menambahkan berita
        it('should create a new news item', async () => {
            const newNews = {
                title: "unit test Perkembangan Ekonomi Indonesia di Tengah Ketidakpastian Global",
                content: "unit test Ekonomi Indonesia menunjukkan tren positif meskipun ada tantangan global...",
                image: "unit test ekonomi-indonesia.png",
                id_categories: "3",
                author: "Hartanto"
            };
            const response = await request(app)
                .post('/api/news')
                .set('Authorization', `Bearer ${token}`)
                .send(newNews);

            expect(response.statusCode).toBe(201);
            expect(response.body).toHaveProperty('message', 'Berhasil Insert');
            expect(response.body.data).toHaveProperty('id');
            newsid = response.body.data.id;
        });
    });

    afterAll(async () => {
        await News.destroy({ where: { id: newsid } });
    });

    // unit test untuk mengubah data berita
    describe('PUT /api/News', () => {

        it('should update an existing news item', async () => {
            const updatedNews = {
                title: "UPDATE Perkembangan Ekonomi Indonesia di Tengah Ketidakpastian Global",
                content: "UPDATE Ekonomi Indonesia menunjukkan tren positif meskipun ada tantangan...",
                image: "UPDATE ekonomi-indonesia.png",
                id_categories: "1",
                author: "UPDATE Hartanto"
            };
            const response = await request(app)
                .put(`/api/news/${newsid}`)
                .set('Authorization', `Bearer ${token}`)
                .send(updatedNews);

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('message', 'berhasil Update');
            expect(response.body.data).toHaveProperty('title', updatedNews.title);
        });
    });

    // unit untuk hapus berita
    describe('DELETED /api/News', () => {
        it('should delete an existing news item', async () => {
            const response = await request(app)
                .delete(`/api/news/${newsid}`)
                .set('Authorization', `Bearer ${token}`);

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('message', 'News berhasil dihapus');
        });
    });
});

// ------------------------------ UNIT TEST UNTUK Categoris --------------------------------------
describe('Category Controller', () => {
    let categoriId;

    // unit untuk get categories
    describe('GET /api/categories', () => {
        it('should fetch the list of categories', async () => {
            const response = await request(app)
                .get('/api/categories');
            expect(response.statusCode).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        });
    });

    // Buat Categoris Baru
    describe('POST /api/categories', () => {
        it('should create a new category', async () => {
            const newCategory = {
                name: "Kategori Test",
                description: "Deskripsi kategori test"
            };
            const response = await request(app)
                .post('/api/categories')
                .set('Authorization', `Bearer ${token}`)
                .send(newCategory);

            expect(response.statusCode).toBe(201);
            expect(response.body).toHaveProperty('id');
            categoriId = response.body.id;
        });
    });

    // Update categories
    describe('PUT /api/categories', () => {
        it('should update an existing category', async () => {
            const updatedCategory = {
                name: "Kategori Test Update",
                description: "Deskripsi kategori test setelah update"
            };
            const response = await request(app)
                .put(`/api/categories/${categoriId}`)
                .set('Authorization', `Bearer ${token}`)
                .send(updatedCategory);

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('name', updatedCategory.name);
        });
    });

    // Hapus categories
    describe('DELETED /api/categories', () => {
        it('should delete an existing category', async () => {
            const response = await request(app)
                .delete(`/api/categories/${categoriId}`)
                .set('Authorization', `Bearer ${token}`);

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('message', 'Kategori berhasil dihapus');
        });

        // id tidak ditemukan
        it('should return error for non-existing category', async () => {
            const response = await request(app)
                .delete(`/api/categories/999999`)
                .set('Authorization', `Bearer ${token}`);

            expect(response.statusCode).toBe(404);
            expect(response.body).toHaveProperty('error', 'Kategori tidak ditemukan');
        });

        // masih ada berita dengan kategori tersebut
        it('should return error if category has associated news', async () => {
            const response = await request(app)
                .delete(`/api/categories/1`)
                .set('Authorization', `Bearer ${token}`);

            expect(response.statusCode).toBe(400);
            expect(response.body).toHaveProperty('message', 'Berita dengan kategori tersebut masih tersedia');
        });
    });

});