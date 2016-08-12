var kue = require('kue')
  , queue = kue.createQueue({
        redis: 'redis://redis:6379'
        });

queue.process('email', function(job, done) {
  console.log(job.data);
  setTimeout(function() {
    try {
      // do all the work here
      console.log('email was sent!');
      done();
    } catch (e) {
      done(e.message);
    }
  }, 3000);
});