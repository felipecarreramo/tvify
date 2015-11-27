import fs from 'fs'
 
const importAsset = function importAsset(name, callback){

	fs.readFile('./public/' + name, function(err, data){
		if (err) {
			return callback(err)
		}
		callback(err, data.toString())
	})

}

export default importAsset