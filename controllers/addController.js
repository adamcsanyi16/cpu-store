const CPU = require("../models/cpu");

exports.getAdd = (req, res) => {
  res.status(200).render("add");
};

exports.postAdd = async (req, res) => {
  try {
    const { type, name, cores, threads, price } = req.body;
    const file = req.file;
    const newCPU = new CPU({
      type,
      name,
      cores,
      threads,
      price,
      image: `./images/${file.originalname}`,
    });
    await newCPU.save();
    res.status(201).json({ msg: newCPU });
  } catch (error) {
    res.status(500).json({ msg: "Sikertelen feltöltés!" });
  }
};
