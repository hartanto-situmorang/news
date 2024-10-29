/**
 * @swagger
 * security:
 *   - bearerAuth: []
 * 
 * /api/news:
 *   post:
 *     tags: [Role Admin]
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
 *                 format: date-time
 *                 example: "2024-10-29T04:44:25.000Z"
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-10-29T04:44:25.000Z"
 *     responses:
 *       201:
 *         description: Artikel berita berhasil dibuat
 *   get:
 *     tags: [All Users]
 *     summary: Mengambil semua berita
 *     description: Mengembalikan daftar artikel berita
 *     responses:
 *       200:
 *         description: Respon berhasil
 * 
 * /api/news/{id}:
 *   put:
 *     tags: [Role Admin]
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
 *                 format: date-time
 *                 example: "2024-10-29T04:44:25.000Z"
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-10-29T04:44:25.000Z"
 *     responses:
 *       200:
 *         description: Artikel berita berhasil diperbarui
 *   delete:
 *     tags: [Role Admin]
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
 * 
 * /api/news/cari:
 *   post:
 *     tags: [All Users]
 *     summary: Mencari berita
 *     description: Mencari berita berdasarkan title dan content
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               search:
 *                 type: string
 *                 example: "percobaan"
 *     responses:
 *       200:
 *         description: Respon berhasil
 *
 * /api/news/categori/{id}:
 *   post:
 *     tags: [All Users]
 *     summary: Mencari kategori berita
 *     description: Mencari berita berdasarkan ID kategori
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID dari kategori berita yang akan dicari
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Respon berhasil
 */
