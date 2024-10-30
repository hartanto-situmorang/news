/**
 * @swagger
 * /api/categories:
 *   get:
 *     tags: [All Users]
 *     summary: Mengambil semua kategori
 *     description: Mengembalikan daftar kategori
 *     responses:
 *       200:
 *         description: Respon berhasil
 * /api/categories/{id}:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     tags: [Role Admin]
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
 *                 example: "SPORT"
 *               description:
 *                 type: string
 *                 example: "Sport"
 *     responses:
 *       200:
 *         description: Kategori berhasil diperbarui
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     tags: [Role Admin]
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

