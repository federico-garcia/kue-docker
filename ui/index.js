var kue = require('kue'),
  queue = kue.createQueue({
    redis: 'redis://redis:6379'
  });

kue.app.listen(3000);