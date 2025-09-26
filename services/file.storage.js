import { Storage } from "@google-cloud/storage";
import { v4 as uuidv4 } from "uuid";
import "dotenv/config";

const {
  GOOGLE_PROJECT_ID,
  GOOGLE_PRIVATE_KEY_ID,
  GOOGLE_PRIVATE_KEY,
  GOOGLE_CLIENT_EMAIL,
  GOOGLE_CLIENT_ID,
  GOOGLE_BUCKET_NAME,
} = process.env;

class GoogleCloudStorageService {
  constructor() {
    this.storage = new Storage({
      projectId: GOOGLE_PROJECT_ID,
      credentials: {
        private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        private_key_id: GOOGLE_PRIVATE_KEY_ID,
        client_email: GOOGLE_CLIENT_EMAIL,
        client_id: GOOGLE_CLIENT_ID,
      },
    });
    this.bucketName = GOOGLE_BUCKET_NAME;
  }

  async uploadFile(file, folderName) {
    const bucket = this.storage.bucket(this.bucketName);

    const fileExtension = file.originalname.split(".").pop();
    const fileId = uuidv4();
    const fileName = `${folderName}/${fileId}.${fileExtension}`;
    const blob = bucket.file(fileName);
    const blobStream = blob.createWriteStream();

    try {
      await this.saveToStorage(blobStream, file.buffer);
      await blob.makePublic();
      return `https://storage.googleapis.com/${this.bucketName}/${encodeURIComponent(fileName)}`;
    } catch (error) {
      throw new Error("File upload failed: " + error.message);
    }
  }

  async saveToStorage(blobStream, buffer) {
    return new Promise((resolve, reject) => {
      blobStream.on("error", reject);
      blobStream.on("finish", resolve);
      blobStream.end(buffer);
    });
  }
}

export default new GoogleCloudStorageService();
