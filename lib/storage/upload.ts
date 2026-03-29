export async function uploadImage(file: File): Promise<string> {
  if (process.env.CLOUDINARY_CLOUD_NAME) {
    return `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${file.name}`;
  }

  if (process.env.S3_BUCKET_NAME) {
    return `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${file.name}`;
  }

  throw new Error('No image storage provider configured');
}
