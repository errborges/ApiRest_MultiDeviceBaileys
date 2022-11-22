var Service = require('node-windows').Service;
var svc = new Service({
 name:'Whats CCL',
 description: 'Servico Whats CCL',
 script: 'C:\\Path\\ApiRestMultiDeviceBaileys-\\src\\server.js'
});

svc.on('install',function(){
 svc.start();
});

svc.install();
