'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 */

 const watch =require('node-watch')
 const path =require('path')

module.exports = cb => {

const io =require('socket.io')(strapi.server)
strapi.io =io

io.on('connection',(socket)=>{


  strapi.log.debug('New user connected')
})


  strapi.on('updateone', ()=>{
    strapi.log.debug('mmmmmm')
  });

  cb();
};
