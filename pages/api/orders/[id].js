import dbConnect from "../../../util/connectMongoDB"
import Order from "../../../models/Order"


//http://localhost:3000/api/orders

export default async function handler(req, res) {

    const { 
        method,
        query: { id }, } = req;

    dbConnect.connect();
   

        // CRUD all pizzas
  
    if(method === "GET"){ //If GET method do somthing.....
      
        try{
            const order = await Order.findById(id);
            res.status(200).json(order);
        }catch(error){
            res.status(500).json({
                status: 'unsuccessfully!'
            });
        }
    }

    if(method === "PUT"){ 
        
        try{
            const order = await Order.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(order);

        }catch(err){
            res.status(500).json(err);
        }
    } 
    
    if(method === "DELETE"){ 
        try{
            const order = await Order.create(req.body);
            res.status(200).json(product);

        }catch(err){
            res.status(500).json(err);
        } 
    } 
  }