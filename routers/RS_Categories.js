/**
 * @swagger
 * tags:
 *   - name: Bagian Categories
 *     description: Semua berkaitan dengan kategori
 */


/**
 * @swagger
 * /api/categories:
 *   get:
 *     tags: [Bagian Categories]
 *     summary: Mengambil semua kategori
 *     description: Mengembalikan daftar kategori
 *     responses:
 *       200:
 *         description: Respon berhasil
 *   post:
 *     tags: [Bagian Categories]
 *     summary: Membuat kategori
 *     description: Menambahkan kategori baru ke dalam database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Nama Kategori"
 *     responses:
 *       201:
 *         description: Kategori berhasil dibuat
 * 
 * /api/categories/{id}:
 *   put:
 *     tags: [Bagian Categories]
 *     summary: Memperbarui kategori
 *     description: Memperbarui kategori yang ada di dalam database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID dari kategori yang akan diperbarui
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
 *                 example: "Nama Kategori Baru"
 *     responses:
 *       200:
 *         description: Kategori berhasil diperbarui
 *   delete:
 *     tags: [Bagian Categories]
 *     summary: Menghapus kategori
 *     description: Menghapus kategori dari database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID dari kategori yang akan dihapus
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Kategori berhasil dihapus
 */
