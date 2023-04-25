const CPU = require("../models/cpu");

exports.getAmd = async (req, res) => {
  try {
    const cpus = await CPU.find({});
    res.status(200).render("amd", { cpus });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
