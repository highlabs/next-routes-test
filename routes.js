const routes = require('next-routes');
module.exports = routes().add({
  name: 'post',
  pattern: 'posts/:slug-:id([^-]+)',
  page: 'post_public'
});
