const request = require('request');

var getDetails=(argAddress,callback) => {
  var address=encodeURIComponent(argAddress);

request({
  url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA99dy9GTK50I-uX-TCw85JKbqxIjJvcLU&address=${address}`,
  json:true
},
(err,response,body)=>{

  if (err) {
    console.log(err.message);
    callback(err.message,null);
  }else if (body.status==='ZERO_RESULTS') {
    var errMessage="No results found for the address entered.";
    callback(errMessage,null);
  }
else if(body.status==='OK'){
  //console.log(JSON.stringify(body,undefined,2));
  var details={
  Address :  body.results[0].formatted_address,
  Latitude :  body.results[0].geometry.location.lat,
  Longitude : body.results[0].geometry.location.lng
}
callback(null,details);
}
});
}

module.exports = {
  getDetails
};
