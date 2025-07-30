module.exports = {
  ensureAuthenticated: (req, res, next) => {
    if (req.session && req.session.user) {
      return next();
    } else {
      return res.status(401).send('Unauthorized: Please log in');
    }
  },

  forwardAuthenticated: (req, res, next) => {
    if (!req.session || !req.session.user) {
      return next();
    } else {
      return res.redirect('/dashboard');
    }
  }
};
