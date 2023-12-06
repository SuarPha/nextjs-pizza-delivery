//create the mongoDB connection

import mongoose, { connection } from 'mongoose';

/*
const MONGO_URL = process.env.MONGO_URL

if (!MONGO_URL) {
  throw new Error(
    'Please define the MONGO_URL environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
/*
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}
*/
async function connect() {

  if(connection.isConnected){
    console.log('already connected');
    return;
  }
  if (mongoose.connections.length > 0){
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1){
      console.Console('use previous connection');
      return;
    }
    await mongoose.disconnect();
  }
  const dbConnect = await mongoose.connect(process.env.MONGO_URL);
  console.log('new connection');
  connection.isConnected = dbConnect.connections[0].readyState;
  /*
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGO_URL, opts).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn 
  */
}
async function disconnect(){
  if(connection.isConnected){
    if (process.env.NODE_ENV === 'production'){
      await mongoose.disconnect();
      connection.isConnected = false;
    }else {
      console.log('Not disconnected');
    }
  }
}
const dbConnect = {connect, disconnect};

export default dbConnect;