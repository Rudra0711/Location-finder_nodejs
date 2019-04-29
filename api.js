const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');

const argv=yargs
  .options({
    a:{
      describe : 'Address to fetch weather for..',
      demand: true,
      alias: 'address',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

geocode.getDetails(argv.address,(err,body)=> {
  if (err) {
    console.log(err);
  }else{
    console.log(body);
  }
});
