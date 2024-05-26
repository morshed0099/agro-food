import app from './app';
import mongoose from 'mongoose';
import confing from './app/confing';

const port =5000;
async function main() {
  try {
    await mongoose.connect(confing.database_url as string);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
