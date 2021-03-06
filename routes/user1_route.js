
const mongodb = require('mongodb')
const fs = require('fs')
const details = require("../models/details");


const mongoClient = mongodb.MongoClient
const binary = mongodb.Binary


module.exports = function(app) {
app.get("/", (req, res) => {
    res.sendFile('./index.html', { root: __dirname })
})

app.get("/download", (req, res) => {
    getFiles(res)
})



app.post("/upload", (req, res) => {
    let file = { name: req.body.name, file: binary(req.files.uploadedFile.data) }
    insertFile(file, res)
})

app.get("/mypost_video/:id",(req,res) =>{

    var _id = req.params.id;
    details.findById(_id, (err,it) =>{
   
     
   
     var username = it.userid;

     mongoClient.connect('mongodb+srv://yelp:Tech@1234@yelp.kmvtt.mongodb.net/test', { useNewUrlParser: true }, (err, client) => {
        if (err) {
            return err
        }
        let db = client.db('test')
            let collection = db.collection('videos');
  
          collection.find().toArray((err,item)=>{
            if(err)
            {
              console.log(err);
            }
            
            res.render("video_post",{obj: item,user:it,id:_id});
          })
  
      })



    });
})

function insertFile(file, res) {
    mongoClient.connect('mongodb+srv://yelp:Tech@1234@yelp.kmvtt.mongodb.net/test', { useNewUrlParser: true }, (err, client) => {
        if (err) {
            return err
        }
        else {
            let db = client.db('video_upload')
            let collection = db.collection('files')
            try {
                collection.insertOne(file)
                console.log('File Inserted')
            }
            catch (err) {
                console.log('Error while inserting:', err)
            }
            client.close()
            res.redirect('/')
        }

    })
}
}