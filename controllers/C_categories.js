const { News, Categories } = require('../models');

// GET
exports.getCategories = async (req, res) => {
  try {
    const category = await Categories.findAll();
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({
      error: 'Gagal mengambil data categories',
      detail: error.errors ? error.errors.map(e => e.message) : error.message
    });
  }
};

// POST
exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newCategory = await Categories.create({ name, description });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: 'Gagal menambah kategori baru' });
  }
};

// UPDATE
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const [updated] = await Categories.update(
      { name, description },
      { where: { id } }
    );

    if (updated) {
      const updatedCategory = await Categories.findOne({ where: { id } });
      res.status(200).json(updatedCategory);
    } else {
      res.status(404).json({ error: 'kategori tidak ditemukan' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengedit kategori' });
  }
};

// DELETE
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    // berita yang terkait
    const newsCount = await News.count({ where: { id_categories: id } });
    if (newsCount > 0) {
      return res.status(400).json({ message: 'Berita dengan kategori tersebut masih tersedia' });
    }

    const result = await Categories.destroy({ where: { id } });
    console.log(result);

    if (result) {
      res.status(200).json({ message: 'Kategori berhasil dihapus' });
    } else {
      res.status(404).json({ error: 'Kategori tidak ditemukan' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Gagal menghapus Kategori' });
  }
};