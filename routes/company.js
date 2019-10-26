const express = require('express')
const router = express.Router()

const MongoClient = require('mongodb').MongoClient;
const test = require('assert');
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name

router.get('/:name',(req, res) => {
    MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
        // Create a collection we want to drop later
        const db = client.db("a");
        const col = db.collection('b')
        // Show that duplicate records got dropped
        var data = col.findOne({name: req.params.name}, function(err, result) {
        console.log(result)
        res.send(result)


          if (err) throw err;
          
          console.log(result);
          

          client.close();
          return result
          
        });



        //console.log("collection", col);
      
        });
})


router.get('/competitions/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      // Create a collection we want to drop later
      const db = client.db("a");
      const col = db.collection('b')
      // Show that duplicate records got dropped
      var data = col.findOne({name: req.params.name}, function(err, result) {
      console.log(result)
      res.send(result.competitions)


        if (err) throw err;
        
        console.log(result);
        

        client.close();
        return result
        
      });



      //console.log("collection", col);
    
      });
})




router.get('/investments/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      // Create a collection we want to drop later
      const db = client.db("a");
      const col = db.collection('b')
      // Show that duplicate records got dropped
      var data = col.findOne({name: req.params.name}, function(err, result) {
      console.log(result)
      res.send(result.investments)


        if (err) throw err;
        
        console.log(result);
        

        client.close();
        return result
        
      });



      //console.log("collection", col);
    
      });
})

      //console.log("collection", col);
router.get('/investments/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      // Create a collection we want to drop later
      const db = client.db("a");
      const col = db.collection('b')
      // Show that duplicate records got dropped
      var data = col.findOne({name: req.params.name}, function(err, result) {
      console.log(result)
      res.send(result.investments)


        if (err) throw err;
        
        console.log(result);
        

        client.close();
        return result
        
      });



      //console.log("collection", col);
    
      });
})

      //console.log("collection", col);
    
router.get('/acquisition/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      // Create a collection we want to drop later
      const db = client.db("a");
      const col = db.collection('b')
      // Show that duplicate records got dropped
      var data = col.findOne({name: req.params.name}, function(err, result) {
      console.log(result)
      res.send(result.acquisition)


        if (err) throw err;
        
        console.log(result);
        

        client.close();
        return result
        
      });



      //console.log("collection", col);
    
      });
})
router.get('/providerships/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      // Create a collection we want to drop later
      const db = client.db("a");
      const col = db.collection('b')
      // Show that duplicate records got dropped
      var data = col.findOne({name: req.params.name}, function(err, result) {
      console.log(result)
      res.send(result.providerships)


        if (err) throw err;
        
        console.log(result);
        

        client.close();
        return result
        
      });



      //console.log("collection", col);
    
      });
})




router.get('/investments/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      // Create a collection we want to drop later
      const db = client.db("a");
      const col = db.collection('b')
      // Show that duplicate records got dropped
      var data = col.findOne({name: req.params.name}, function(err, result) {
      console.log(result)
      res.send(result.investments)


        if (err) throw err;
        
        console.log(result);
        

        client.close();
        return result
        
      });



      //console.log("collection", col);
    
      });
})



router.get('/competitions/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      // Create a collection we want to drop later
      const db = client.db("a");
      const col = db.collection('b')
      // Show that duplicate records got dropped
      var data = col.findOne({name: req.params.name}, function(err, result) {
      console.log(result)
      res.send(result.competitions)


        if (err) throw err;
        
        console.log(result);
        

        client.close();
        return result
        
      });



      //console.log("collection", col);
    
      });
})
      //console.log("collection", col);
    
router.get('/relationships/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      // Create a collection we want to drop later
      const db = client.db("a");
      const col = db.collection('b')
      // Show that duplicate records got dropped
      var data = col.findOne({name: req.params.name}, function(err, result) {
      console.log(result)
      res.send(result.relationships)


        if (err) throw err;
        
        console.log(result);
        

        client.close();
        return result
        
      });



      //console.log("collection", col);
    
      });
})
router.get('/products/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      // Create a collection we want to drop later
      const db = client.db("a");
      const col = db.collection('b')
      // Show that duplicate records got dropped
      var data = col.findOne({name: req.params.name}, function(err, result) {
      console.log(result)
      res.send(result.products)


        if (err) throw err;
        
        console.log(result);
        

        client.close();
        return result
        
      });



      //console.log("collection", col);
    
      });
})


router.get('/offices/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      // Create a collection we want to drop later
      const db = client.db("a");
      const col = db.collection('b')
      // Show that duplicate records got dropped
      var data = col.findOne({name: req.params.name}, function(err, result) {
      console.log(result)
      res.send(result.offices)


        if (err) throw err;
        
        console.log(result);
        

        client.close();
        return result
        
      });



      //console.log("collection", col);
    
      });
})

      //console.log("collection", col);
    
router.get('/funding_rounds/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      // Create a collection we want to drop later
      const db = client.db("a");
      const col = db.collection('b')
      // Show that duplicate records got dropped
      var data = col.findOne({name: req.params.name}, function(err, result) {
      console.log(result)
      res.send(result.funding_rounds)


        if (err) throw err;
        
        console.log(result);
        

        client.close();
        return result
        
      });



      //console.log("collection", col);
    
      });
})
  
module.exports = router