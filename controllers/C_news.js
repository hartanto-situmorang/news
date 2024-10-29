const { News } = require('../models');
const { Categories } = require('../models');
const { Op } = require('sequelize');

exports.getnews = async (req, res) => {
  try {
    const response = news.map(({ title,content,image,author,id_categories,createdAt}) => ({ title,content,image,author,id_categories,createdAt}));
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: 'Gagal mengambil data news',
      data: error
    });
  }
};

// cari Berita by id
exports.getbyid = async (req, res) => {
  try {
    const {id} = req.params;
    const news = await News.findAll({
      id_categories : id
    });

    res.status(200).json({
      message: news,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Gagal mengambil data news',
      data: error
    });
  }
};

// cari Berita
exports.carinews = async (req, res) => {
  try {
    const { search } = req.body;
    const whereConditions = search
      ?{
        [Op.or]: [
          { title: { [Op.like]: `%${search}%` } },
          { content: { [Op.like]: `%${search}%` } }
        ]
      }
      :{};
    const news = await News.findAll({
      where: whereConditions
    });

    res.status(200).json({
      message: news,
      data: req.body
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
    // Menyimpan data ke dalam database
    const inews = await News.create({ title, content, id_categories, image, author, createdAt, updatedAt });

    // Mengembalikan respon yang sukses dengan data yang baru dibuat
    res.status(201).json({
      message: 'Berhasil Insert',
      data: inews // Mengembalikan data yang baru saja dimasukkan
    });
  } catch (error) {
    // Menangani error
    res.status(500).json({
      message: "Gagal insert data News",
      error: error.message, // Menampilkan pesan error yang lebih jelas
      data: req.body,
    });
  }
};

// POST
exports.createNews = async (req, res) => {
  try {
    const { title, content, id_categories, image, author, createdAt, updatedAt } = req.body;
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