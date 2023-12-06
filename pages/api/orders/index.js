import dbConnect from "../../../util/connectMongoDB"
import Order from "../../../models/Order"


//http://localhost:3000/api/orders

export default async function handler(req, res) {

    const { method } = req;

    dbConnect.connect();
   

        //get all the orders

    if(method === "GET"){ //If GET method do somthing.....

        try{
            const orders = await Order.find();
            res.status(200).json(orders);
        }catch(error){
            res.status(500).json({
                status: 'unsuccessfully!'
            });
        }
    }

    if(method === "POST"){ // If POST method do something else.....
        try{
            const order = await Order.create(req.body);
            res.status(201).json(order);

        }catch(err){
            res.status(500).json(err);
        }
    }
  }