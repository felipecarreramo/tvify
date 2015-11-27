import express from 'express'

const app = express()

app.use( express.static("public") )



const votes = {}

// GET /votes
app.get("/votes", (req, res) => {
	res.json(votes)
})

// POST /vote/<id>
app.post("/vote/:id", (req, res) => {

	let id = req.params.id
	if ( votes[id] === undefined ){
		votes[id] = 1
	}else {
		votes[id] += 1
	}

	res.json(votes[id])

})


app.listen(8000, () => console.log("listening on port 8000") )