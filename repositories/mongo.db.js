import mongoose from 'mongoose';

async function connect() {
  const uri =
    'mongodb+srv://root:igti@cluster0.tvabk.mongodb.net/petShop?retryWrites=true&w=majority';
  return await mongoose.connect(uri);
}

export { connect };
