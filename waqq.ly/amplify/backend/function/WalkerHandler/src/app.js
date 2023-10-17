/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const MONGODB_URI = "mongodb+srv://server:Lolipop32@medireq0.m7es4pc.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI, {socketTimeoutMS: 30000, keepAlive: true});

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

const Walker = mongoose.model('Walker', { user: String, name: String, size: String, postcode: String, email: String, tel: String, spaces: Number, image: String });



/**********************
 * Example get method *
 **********************/

app.get('/resources/walkers', function(req, res) {
  let query = {$and: []};

  if(req.query.hasOwnProperty('size') && req.query.size != "a") {
    query.$and.push({$or: [{size: "a"}, {size: req.query.size}]});
  } 

  if(req.query.hasOwnProperty('postCode')) {
    query.$and.push({postcode: {$regex: '^' + req.query.postCode}});
  }

  if(req.query.hasOwnProperty('hasVacancies')) {
    query.$and.push({spaces: {$gt: 0}});
  }

  if(req.query.hasOwnProperty('user')) {
    query.$and = [{user: req.query.user}];
  }

  console.log(query);

  Walker.find(query).then((results) => {
    res.json({ success: results, url: req.url });
  }).catch((err) => {
    console.log(err);
    res.json({ failure: err, url: req.url });
  });

});

app.get('/resources/walkers/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/resources/walkers', function(req, res) {
  if(req.body._id && req.body._id.length > 0) { 
          
    Walker.findByIdAndUpdate(req.body._id, req.body).then((result) => {
      res.json({ success: result, url: req.url, body: req.body })
    }).catch((err) => {
      res.json({ failure: err, url: req.url, body: req.body })
    });
    
  } else {

    let walker = new Walker({ user: req.body.user, name: req.body.name, sizes: req.body.sizes, postcode: req.body.postCode, email: req.body.email, tel: req.body.tel, spaces: req.body.spaces, image: req.body.image });
    
    walker.save().then((result) => {
      res.json({ success: result, url: req.url, body: req.body })
    }).catch((err) => {
      res.json({ failure: err, url: req.url, body: req.body })
    });

  }
});

app.post('/resources/walkers/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/resources/walkers', function(req, res) {
  if(req.body._id && req.body._id.length > 0) { 
          
    Walker.findByIdAndUpdate(req.body._id, req.body).then((result) => {
      res.json({ success: result, url: req.url, body: req.body })
    }).catch((err) => {
      res.json({ failure: err, url: req.url, body: req.body })
    });
    
  } else {

    let walker = new Walker({ user: req.body.user, name: req.body.name, sizes: req.body.sizes, postcode: req.body.postCode, email: req.body.email, tel: req.body.tel, spaces: req.body.spaces, image: req.body.images });
    
    walker.save().then((result) => {
      res.json({ success: result, url: req.url, body: req.body })
    }).catch((err) => {
      res.json({ failure: err, url: req.url, body: req.body })
    });

  }
});

app.put('/resources/walkers/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/resources/walkers', function(req, res) {

  if (!req.body.hasOwnProperty("id")) {
    res.json({ failure: 'no walker ID entered', url: req.url });
    return;
  }


  Walker.findByIdAndDelete(req.body.id).then((result) => {
    res.json({ success: result, url: req.url });
  }).catch((err) => {
    console.log(err);
    res.json({ failure: err, url: req.url });
  });

});

app.delete('/resources/walkers/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
