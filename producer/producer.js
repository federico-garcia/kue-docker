var kue = require('kue')
  , queue = kue.createQueue({
        redis: 'redis://redis:6379'
        });

var sequence = 0;

setInterval(
  function() {
    sequence += 1;
    (function(){
      var job = queue.create('email', {
          title: 'welcome email for fg'
        , to: 'tj@learnboost.com'
        , template: 'welcome-email'
      }).save( function(err){
        if( !err ) console.log( job.id );
      });

      job.on('complete', function() {
        console.log('job #' + sequence + ' was processed.')
      });

      job.on('failed', function() {
        console.log('job #' + sequence + ' failed.')
      });

    })(sequence);
  }
  , 500);

