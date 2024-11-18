const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwritProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwritDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwritCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    rteApiKey:String(import.meta.env.VITE_RTE)
}
export default conf