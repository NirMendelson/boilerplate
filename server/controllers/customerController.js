const Customer = require('../models/Customer');

async function createCustomer(req, res) {
  const { clerkId, email } = req.body;
  if (!clerkId || !email) {
    return res.status(400).json({ error: 'clerkId and email are required' });
  }
  try {
    let customer = await Customer.findOne({ clerkId });
    if (!customer) {
      customer = await Customer.create({ clerkId, email });
    }
    res.status(201).json({ success: true, customer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { createCustomer }; 