var hbs = require('express-hbs');
var dataProvider = require('../server/models');
var _ = require('lodash');

var loyaltyLionHelpers = function() {
  hbs.registerAsyncHelper('post-links-by-slug', function(tagSlug, cb) {
    var output = [];
    
    output.push('<ul class="sidebar-internal">');

    dataProvider.Post.findPage({
      tag: tagSlug
    })
    .then(function(result) {
      _(result.posts).forEach(function(item) {
        output.push('<li><a href="/blog/' + item.slug + '">' + item.title + '</a></li>');
      });

      output.push('</ul>');
      cb(output.join(''));
    });

  });
};

module.exports = loyaltyLionHelpers;