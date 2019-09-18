const fs = require('fs');
const http = require('http');
const express = require('express');
const DBing = require('../schemas/DBingredients');
const router = express.Router();
// const parser = require('xml2json');
const formidable = require('formidable');
const path = require('path');

router.post('/api/uploadimg', async (req, res) => {
  let savePath = path.join(__dirname, '../../frontend/public/images/uploaded/');
  let form = new formidable.IncomingForm();
  form.parse(req);

  form.on('fileBegin', function (name, file) {
    let ext = file.name.split('.').pop();
    file.name = name + '.' + ext;
    file.path = savePath + file.name;
    file = file.name;
  });

  form.on('file', function (name, file) {
    res.json({ "filename": file.name })
  });
})

// Get all ingredients
// EX: localhost:3001/api/ingredients
router.get('/api/ingredients', async (req, res) => {
  DBing.find({}).exec().then(data => {
    res.status(200).json(data)
  })
})

// Get specific ingredient by ID
// EX: localhost:3001/api/ingredient/id/5d7a151fd8053c2e53086ccf
router.get('/db/ingredient/id/:id', (req, res) => {
  DBing.findById(req.params.id).exec().then(data => {
    res.status(200).send(data)
  })
});

// Get textual stringmatch of ingredient
// EX: localhost:3001/api/ingredient/search/olja
router.get('/api/ingredient/search/:name', (req, res) => {
  DBing.find({ "Namn": new RegExp(req.params.name, 'i') },
    function (err, result) {
      res.json(err || result)
    }
  );
});

// Load ingredients to DB (TAKES TIME!)
// EX: localhost:3001/db/loadings
/* router.get('/api/load-ingredients', async (req, res) => {
  req.setTimeout(0);
  await DBing.deleteMany({}, () => console.log("Truncate DB, check!"));

  function datey() {
    let dingus = new Date();
    let y = dingus.getFullYear().toString();
    let m = (dingus.getMonth() + 1).toString();
    let d = dingus.getDate().toString();
    (d.length == 1) && (d = '0' + d);
    (m.length == 1) && (m = '0' + m);
    let yyyymmdd = y + m + d;
    return yyyymmdd;
  }

  const endpoint = `http://www7.slv.se/apilivsmedel/LivsmedelService.svc/Livsmedel/Naringsvarde/${datey()}`;

  async function fillThatDB(xml) {
    let json = parser.toJson(xml);
    let data = JSON.parse(json);

    // Only save subset of relevant pieces of data
    data = data.LivsmedelDataset.LivsmedelsLista.Livsmedel;

    for (food of data) {
      // Delete unwanted data
      delete food.Nummer;
      delete food.ViktGram;
      delete food.Huvudgrupp;
      // Removeunneccessary/empty level
      food.Naringsvarden = food.Naringsvarden.Naringsvarde;

      let obj = {};
      for (nutrient of food.Naringsvarden) {
        switch (nutrient.Namn) {
          case 'Summa mättade fettsyror':
            nutrient.Namn = 'Mattade';
            break;
          case 'Summa enkelomättade fettsyror':
            nutrient.Namn = 'Enkelomattade';
            break;
          case 'Summa fleromättade fettsyror':
            nutrient.Namn = 'Fleromattade';
            break;
          default:
        }
        // Keep properties Varde and Enhet 
        obj[nutrient.Namn] = nutrient.Varde.replace(/,/g, '.') / 1;
      }
      // Only keep relevant data for the assignment 
      let keepers = [
        'Mattade',
        'Enkelomattade',
        'Fleromattade',
        'Protein',
        'Kolhydrater',
        'Salt'
      ];

      for (key in obj) {
        if (keepers.includes(key)) {
          continue;
        }
        delete obj[key];
      }
      // Replace the Naringsvarden array with our custom object
      food.Naringsvarden = obj;
    }

    let count = 0;
    for (var i = 0; i < data.length; i++) {
      let newEntry = new DBing(data[i]);
      await newEntry.save().catch(err => {
        console.log(err);
      })
      count++;
    }

    res.json({
      "status": "ok",
      "Insert into DB count": count
    })
  }

  http.get(endpoint, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      fillThatDB(data);
    });
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });

}); */


module.exports = router;