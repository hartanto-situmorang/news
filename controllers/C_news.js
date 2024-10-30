const { News, Categories } = require('../models');
const { Op } = require('sequelize');

// Get News
exports.getnews = async (req, res) => {
  try {
    const news = await News.findAll();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({
      error: 'Gagal mengambil data news',
      detail: error.errors ? error.errors.map(e => e.message) : error.message
    });
  }
};

// cari Berita by id
exports.getbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findAll({
      where: { id_categories: id }
    });

    if (news.length === 0) {
      return res.status(404).json({ message: 'Tidak ada berita ditemukan untuk kategori tersebut' });
    }

    res.status(200).json({
      message: 'Berita berhasil ditemukan',
      data: news,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Gagal mengambil data news',
      details: error.message
    });
  }
};

// cari Berita
exports.carinews = async (req, res) => {
  try {
    const { search } = req.body;
    const whereConditions = search
      ? {
        [Op.or]: [
          { title: { [Op.like]: `%${search}%` } },
          { content: { [Op.like]: `%${search}%` } }
        ]
      }
      : {};
    const news = await News.findAll({
      where: whereConditions
    });

    res.status(200).json({
      message: "Berita yang tersedia berdasarkan konten dan title",
      data: news
    });
  } catch (error) {
    res.status(500).json({
      error: 'Gagal mengambil data news',
      data: error
    });
  }
};

// create /  post news
exports.createNews = async (req, res) => {
  try {
    const { title, content, id_categories, image, author, createdAt, updatedAt } = req.body;

    const category = await Categories.findByPk(id_categories);
    if (!category) {
      return res.status(404).json({
        message: 'Kategori belum ada',
      });
    }

    const inews = await News.create({ title, content, id_categories, image, author, createdAt, updatedAt });
    res.status(201).json({
      message: 'Berhasil Insert',
      data: inews
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal insert data News",
      error: error.message,
      data: req.body,
    });
  }
};


// udpate  / PUT
exports.udpatenews = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, image, id_categories, author, createdAt, updatedAt } = req.body;

    const category = await Categories.findByPk(id_categories);
    if (!category) {
      return res.status(404).json({
        message: 'Kategori belum ada',
      });
    }

    const [update] = await News.update(
      { title, content, image, id_categories, author, createdAt, updatedAt },
      { where: { id } }
    )
    if (update) {
      const inews = await News.findOne({ where: { id } });

      res.status(200).json({
        message: "berhasil Update",
        data: inews
      })
    } else {
      res.status(404).json({
        message: "data tidak ditemukan"
      })
    }
  } catch (error) {
    res.status(500).json({
      message: "Database Gagal, gagal edit",
      data: req.body
    })
  }
};

exports.deletedNews = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await News.destroy({ where: { id } });
    console.log(id);
    if (result) {
      res.status(200).json({ message: 'News berhasil dihapus' });
    } else {
      res.status(404).json({ error: 'News tidak ditemukan' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Gagal menghapus category' });
  }
};