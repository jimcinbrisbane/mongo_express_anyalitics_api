const express = require('express')
const router = express.Router()

const MongoClient = require('mongodb').MongoClient;
const test = require('assert');
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name

router.get('/image/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      const db = client.db("a")
      const col = db.collection('b')
      var data = col.findOne({name: req.params.name}, function(err, result) {
        if (result === null) {
          res.send({error: "Input Error"})
        } else {
          res.send(result.image)
        }
        client.close();
        return result
         })
      })
    
})

router.get('/products/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      const db = client.db("a")
      const col = db.collection('b')
      var data = col.findOne({name: req.params.name}, function(err, result) {
        if (result === null) {
          res.send({error: "Input Error"})
        } else {
          res.send(result.products)
        }
        client.close();
        return result
         })
      })
    
})

router.get('/relationships/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      const db = client.db("a")
      const col = db.collection('b')
      var data = col.findOne({name: req.params.name}, function(err, result) {
        if (result === null) {
          res.send({error: "Input Error"})
        } else {
          res.send(result.relationships)
        }
        client.close();
        return result
         })
      })
    
})

router.get('/competitions/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      const db = client.db("a")
      const col = db.collection('b')
      var data = col.findOne({name: req.params.name}, function(err, result) {
        if (result === null) {
          res.send({error: "Input Error"})
        } else {
          res.send(result.competitions)
        }
        client.close();
        return result
         })
      })
    
})

router.get('/providerships/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      const db = client.db("a")
      const col = db.collection('b')
      var data = col.findOne({name: req.params.name}, function(err, result) {
        if (result === null) {
          res.send({error: "Input Error"})
        } else {
          res.send(result.providerships)
        }
        client.close();
        return result
         })
      })
    
})

router.get('/funding_rounds/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      const db = client.db("a")
      const col = db.collection('b')
      var data = col.findOne({name: req.params.name}, function(err, result) {
        if (result === null) {
          res.send({error: "Input Error"})
        } else {
          res.send(result.funding_rounds)
        }
        client.close();
        return result
         })
      })
    
})


router.get('/investments/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      const db = client.db("a")
      const col = db.collection('b')
      var data = col.findOne({name: req.params.name}, function(err, result) {
        if (result === null) {
          res.send({error: "Input Error"})
        } else {
          res.send(result.investments)
        }
        client.close();
        return result
         })
      })
    
})


router.get('/acquisition/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      const db = client.db("a")
      const col = db.collection('b')
      var data = col.findOne({name: req.params.name}, function(err, result) {
        if (result === null) {
          res.send({error: "Input Error"})
        } else {
          res.send(result.acquisition)
        }
        client.close();
        return result
         })
      })
    
})


router.get('/acquisitions/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      const db = client.db("a")
      const col = db.collection('b')
      var data = col.findOne({name: req.params.name}, function(err, result) {
        if (result === null) {
          res.send({error: "Input Error"})
        } else {
          res.send(result.acquisitions)
        }
        client.close();
        return result
         })
      })
    
})


router.get('/offices/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      const db = client.db("a")
      const col = db.collection('b')
      var data = col.findOne({name: req.params.name}, function(err, result) {
        if (result === null) {
          res.send({error: "Input Error"})
        } else {
          res.send(result.offices)
        }
        client.close();
        return result
         })
      })
    
})


router.get('/milestones/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      const db = client.db("a")
      const col = db.collection('b')
      var data = col.findOne({name: req.params.name}, function(err, result) {
        if (result === null) {
          res.send({error: "Input Error"})
        } else {
          res.send(result.milestones)
        }
        client.close();
        return result
         })
      })
    
})



router.get('/video_embeds/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      const db = client.db("a")
      const col = db.collection('b')
      var data = col.findOne({name: req.params.name}, function(err, result) {
        if (result === null) {
          res.send({error: "Input Error"})
        } else {
          res.send(result.video_embeds)
        }
        client.close();
        return result
         })
      })
    
})


router.get('/external_links/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      const db = client.db("a")
      const col = db.collection('b')
      var data = col.findOne({name: req.params.name}, function(err, result) {
        if (result === null) {
          res.send({error: "Input Error"})
        } else {
          res.send(result.external_links)
        }
        client.close();
        return result
         })
      })
    
})



router.get('/partners/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      const db = client.db("a")
      const col = db.collection('b')
      var data = col.findOne({name: req.params.name}, function(err, result) {
        if (result === null) {
          res.send({error: "Input Error"})
        } else {
          res.send(result.partners)
        }
        client.close();
        return result
         })
      })
  
})


router.get('/company/:name',(req, res) => {
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, client) {
      const db = client.db("a")
      const col = db.collection('b')
      var data = col.findOne({name: req.params.name}, function(err, result) {
        if (result === null) {
          res.send({error: "Input Error"})
        } else {
          res.send({name: result.name, id: result._id, crunch: result.crunchbase_url,home:result.homepage_url,
            blog:result.blog_url,blog_feed:result.blog_feed_url,
            twitter:result.twitter_username,
             category: result.category_code,employee: result.number_of_employees,
             founded_year: result.founded_year,
             founded_month: result.founded_month, founded_day: result.founded_day,
             deadpooled_year:result.deadpooled_year,tag_list:result.tag_list,alias_list: result.alias_list,email_address:result.email_address,
             phone_number:result.phone_number,
             description:result.description,overview:result.overview,total_money_raised:result.total_money_raised})
        }
        client.close();
        return result
         })
      })
    
})



  
module.exports = router