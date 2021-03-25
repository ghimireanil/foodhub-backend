// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// // Register user
// router.post('/register', async (req, res) => {
//   const { email, password } = req.body;
//   //Simple validation
//   if (!email || !password) {
//     return res.status(400).send({ msg: 'Field cannot be blank!' });
//   }
//   try {
//     const newUser = new User({
//       email,
//       password,
//     });
//     const response = await newUser.save();
//     res.status(201).send({
//       message: 'Signup Successful!',
//       _id: response._id,
//       email: response.email,
//     });
//   } catch (error) {
//     console.log(error.message);
//     res.status(400).send({
//       message: 'Error while signing up!',
//       error: error,
//     });
//   }
// });

// // Login User
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) return res.send({ msg: 'Please enter all fields!' });
//   try {
//     const user = await User.findOne({ email, password }, 'login successful!');
//     if (user) {
//       res.json({
//         message: 'Success',
//         found: true,
//         data: user,
//       });
//     } else {
//       res.json({
//         message: 'credentials invalid',
//         found: false,
//       });
//     }
//   } catch (e) {
//     console.log('Some error');
//     res.status(400).send({
//       message: 'Request error',
//       error: e,
//     });
//   }
// });

// //get all users
// router.get('/users', async (req, res) => {
//   try {
//     const getUsers = await User.find();
//     res.json(getUsers);
//   } catch (error) {
//     res.json(console.log(error));
//   }
// });

// //get specific user
// router.get('/users/:id', async (req, res) => {
//   try {
//     const specificUser = await User.findById(req.params.id);
//     res.json(specificUser);
//   } catch (error) {
//     res.json(console.log(error));
//   }
// });

// //delete a user
// router.delete('/users/:id', async (req, res) => {
//   try {
//     const removedUser = await User.findByIdAndRemove({
//       _id: req.params.id,
//     });
//     res.json(removedUser);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const register = new User({
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedRegister = await register.save();
    res.json(savedRegister);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.send({ msg: 'Please enter all fields!' });
  try {
    const user = await User.findOne({ email, password }, 'login successful!');
    if (user) {
      res.json({
        message: 'Success',
        found: true,
        data: user,
      });
    } else {
      res.json({
        message: 'credentials invalid',
        found: false,
      });
    }
  } catch (e) {
    console.log('Some error');
    res.status(400).send({
      message: 'Request error',
      error: e,
    });
  }
});

router.get('/users', async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/users/:id', async (req, res) => {
  try {
    const specificUser = await User.findById(req.params.id);
    res.json(specificUser);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const removedUser = await User.findByIdAndRemove({
      _id: req.params.id,
    });
    res.json(removedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
