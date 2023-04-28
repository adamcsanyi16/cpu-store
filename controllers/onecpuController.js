const CPU = require("../models/cpu");

exports.getCPU = async (req, res) => {
  try {
    const param = req.params;
    const cpus = await CPU.findOne({ _id: param.id });
    res.status(200).render("onecpu", { cpus });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
