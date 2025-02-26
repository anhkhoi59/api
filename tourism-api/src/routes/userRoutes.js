const express = require('express');
const router = express.Router();
const userData = require('../data/tourismData');

// Lấy tất cả users
router.get('/', (req, res) => {
  res.json(userData.users);
});

// Lấy user theo ID
router.get('/:id', (req, res) => {
  const user = userData.users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "Không tìm thấy người dùng" });
  }
  res.json(user);
});

module.exports = router;