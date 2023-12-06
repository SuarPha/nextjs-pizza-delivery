
import * as fs from 'node:fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
       let data = await fs.promises.readdir('contactdata');
       console.log(data)
       fs.promises.writeFile(`contactdata/formdata-${data.length+1}.json`, JSON.stringify(req.body))
      res.status(200).json(["req"])
    } else {
      // Handle any other HTTP method
      res.status(200).json(["Great! Get request is working! "])
      // Name, email, subject and message
    }
  }