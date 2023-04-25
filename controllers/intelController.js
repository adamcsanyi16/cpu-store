const CPU = require("../models/cpu");

exports.getIntel = async (req, res) => {
  try {
    const cpus = await CPU.find({});
    res.status(200).render("intel", { cpus });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};