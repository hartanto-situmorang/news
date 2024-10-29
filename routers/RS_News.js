
/**
 * @swagger
 * tags:
 *   - name: Bagian News
 *     description: Semua berkaitan dengan News
 */

/**
 * @swagger
 * /api/news:
 *   get:
 *     tags: [Bagian News]
 *     summary: Mengambil semua berita
 *     description: Mengembalikan daftar artikel berita
 *     responses:
 *       200:
 *         description: Respon berhasil
 *   post:
*     tags: [Bagian News]
 *     summary: Membuat artikel berita
 *     description: Menambahkan artikel berita baru ke dalam database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Judul Berita Baru"
 *               content:
 *                 type: string
 *                 example: "Konten berita yang baru"
 *               image:
 *                 type: string
 *                 example: "gambar.png"
 *               author:
 *                 type: string
 *                 example: "hartanto"
 *               createdAt:
 *                 type: string
 *                 example: "2024-10-29T04:44:25.000Z"
 *               updatedAt:
 *                 type: string
 *                 example: "2024-10-29T04:44:25.000Z"
 *     responses:
 *       201:
 *         description: Artikel berita berhasil dibuat
 * /api/news/{id}:
 *   put:
 *     tags: [Bagian News]
 *     summary: Memperbarui artikel berita
 *     description: Memperbarui artikel berita yang ada di dalam database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID dari artikel berita yang akan diperbarui
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Judul Berita UPDATE"
 *               content:
 *                 type: string
 *                 example: "Konten berita yang diperbarui."
 *               image:
 *                 type: string
 *                 example: "gambar berubah.png"
 *               author:
 *                 type: string
 *                 example: "hartanto"
 *               createdAt:
 *                 type: string
 *                 example: "2024-10-29T04:44:25.000Z"
 *               updatedAt:
 *                 type: string
 *                 example: "2024-10-29T04:44:25.000Z"
 *     responses:
 *       200:
 *         description: Artikel berita berhasil diperbarui
 *   delete:
*     tags: [Bagian News]
 *     summary: Menghapus artikel berita
 *     description: Menghapus artikel berita dari database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID dari artikel berita yang akan dihapus
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Artikel berita berhasil dihapus
 */
