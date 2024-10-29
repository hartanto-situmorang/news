/**
 * @swagger
 * tags:
 *   - name: Bagian Akun
 *     description: Method menambahkan akun
 *   - name: Role Admin
 *     description: Semua tindakan hanya dilakukan oleh admin
 *   - name: All Users
 *     description: Hak akses all user
 */
/**
 * @swagger
 * /api/users:
 *   get:
 *     tags: [Bagian Akun]
 *     summary: Mengambil semua users
 *     description: Mengembalikan daftar data users
 *     responses:
 *       200:
 *         description: Respon berhasil
 *   post:
*     tags: [Bagian Akun]
 *     summary: Membuat data users
 *     description: Menambahkan data users baru ke dalam database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Admin User"
 *               contact:
 *                 type: string
 *                 example: "admin@example.com"
 *               image:
 *                 type: string
 *                 example: "admin_profile.png"
 *               role:
 *                 type: string
 *                 example: "admin"
 *               username:
 *                 type: string
 *                 example: "admin1233"
 *               password:
 *                 type: string
 *                 example: "admin1233"
 *     responses:
 *       201:
 *         description: Artikel users berhasil dibuat
 * /api/users/{id}:
 *   put:
 *     tags: [Bagian Akun]
 *     summary: Memperbarui data users
 *     description: Memperbarui data users yang ada di dalam database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID dari data users yang akan diperbarui
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Update Admin User"
 *               contact:
 *                 type: string
 *                 example: "updateadmin@example.com"
 *               image:
 *                 type: string
 *                 example: "Update admin_profile.png"
 *               role:
 *                 type: string
 *                 example: "Update admin"
 *               username:
 *                 type: string
 *                 example: "updateadmin1233"
 *               password:
 *                 type: string
 *                 example: "updateadmin1233"
 *     responses:
 *       200:
 *         description: Artikel users berhasil diperbarui
 *   delete:
*     tags: [Bagian Akun]
 *     summary: Menghapus data users
 *     description: Menghapus data users dari database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID dari data users yang akan dihapus
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Artikel users berhasil dihapus
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     tags: [Role Admin]
 *     summary: Login pengguna
 *     description: Autentikasi pengguna untuk mendapatkan token akses
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "admin1233"
 *               password:
 *                 type: string
 *                 example: "admin123"
 *     responses:
 *       200:
 *         description: Login berhasil, token akses diberikan
 *       401:
 *         description: Kredensial tidak valid
 */