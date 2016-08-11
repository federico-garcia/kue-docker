var kue = require('kue')
  , queue = kue.createQueue({
        redis: 'redis://redis:6379'
        });

var job = queue.create('email', {
    title: 'welcome email for fg'
  , to: 'tj@learnboost.com'
  , template: 'welcome-email'
}).save( function(err){
  if( !err ) console.log( job.id );
});