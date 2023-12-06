import User from "../../../models/User";
import data from "../../../util/data";
import dbConnect from "../../../util/connectMongoDB";

const handler = async (req, res) => {

    await dbConnect.connect();
    await User.deleteMany();
    await User.insertMany(data.users);
    await dbConnect.disconnect();
    res.send({ message: 'seeded successfully'});
};
export default handler;