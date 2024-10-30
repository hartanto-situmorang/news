/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 * /api/news:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags: [Role Admin]
 *     summary: Membuat artikel berita
 *     description: Menambahkan artikel berita baru ke dalam database
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *                example: "Perkembangan Ekonomi Indonesia di Tengah Ketidakpastian Global"
 *              content:
 *                type: string
 *                example: "Ekonomi Indonesia menunjukkan tren positif meskipun ada tantangan global. Pemerintah meluncurkan beberapa inisiatif untuk meningkatkan investasi lokal dan memperkuat sektor ekspor. Dalam wawancara terbaru, Menteri Keuangan menekankan pentingnya stabilitas ekonomi dan pertumbuhan yang inklusif."
 *              image:
 *                type: string
 *                example: "ekonomi-indonesia.png"
 *              id_categories:
 *                type: string
 *                example: "2"
 *              author:
 *                type: string
 *                example: "Hartanto"
 *              createdAt:
 *                type: string
 *                example: "2024-10-29T04:44:25.000Z"
 *              updatedAt:
 *                type: string
 *                example: "2024-10-29T04:44:25.000Z"
 *     responses:
 *       201:
 *         description: Artikel berita berhasil dibuat
 *
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
 *     security:
 *       - bearerAuth: []
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
 *                 example: "2024-10-29T04:44:25.000Z"
 *               updatedAt:
 *                 type: string
 *                 example: "2024-10-29T04:44:25.000Z"
 *     responses:
 *       200:
 *         description: Artikel berita berhasil diperbarui
 *
 *   delete:
 *     security:
 *       - bearerAuth: []
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
 *                 example: "Indonesia"
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
