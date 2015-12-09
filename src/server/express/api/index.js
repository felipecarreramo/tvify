import express from 'express'

const router = express.Router()

import Vote from 'src/server/express/models'

// GET /votes
router.get("/votes", (req, res) => {
	console.log('GET /votes')
	Vote.find({}, (err, docs) => {
		if(err){
			return res.sendStatus(500).json(err)
		}
		res.json(docs)
	})
	
})

// POST /vote/<id>
router.post("/vote/:id", (req, res) => {

	var onSave = function(vote) {

		return err => {
			if(err) {
				return res.sendStatus(500).json(err)
			}
			res.json(vote)
		}

	}

	let id = req.params.id
	Vote.findOne({showId: id}, (err, doc) => {
		if (doc) {
			//actualizo este docs
			doc.count = doc.count + 1
			doc.save( onSave(doc) )

		}else {
			//creo un doc nuevo y le pongo count 1
			let vote = new Vote()
			vote.showId = id
			vote.count = 1
			vote.save( onSave(vote) )
		}
	})
})


export default router