import { Client,Databases,ID,Query} from "appwrite";
import conf from "../conf";

export class Service {
    client = new Client();
    databases;
    constructor() {
        this.client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject(conf.appwritProjectId); 
        this.databases = new Databases(this.client)
    }

    async createPost(title,content,userID,date){
       try {
        
       return await this.databases.createDocument(
            conf.appwritDatabaseId,
            conf.appwritCollectionId,
            ID.unique(),
            {
                title,
                content,
                userID,
                date
            }
        )
        
       } catch (error) {
        console.log("Appwrite serive :: createPost :: error", error);
        throw error
       }
    
    }

    async getPosts(userID){
       try {
        return await this.databases.listDocuments(
            conf.appwritDatabaseId,
            conf.appwritCollectionId,
            [
                Query.equal('userID', userID)
            ]

        )
       } catch (error) {
        console.log("Appwrite serive :: getPosts :: error", error);
        throw error
       }
    }


    async getPost(id){
        try {
            return await this.databases.getDocument(
                conf.appwritDatabaseId,
                conf.appwritCollectionId,
                id
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            throw error
        }
    }


    async deletePost(id){
        try {
            return await this.databases.deleteDocument(conf.appwritDatabaseId,conf.appwritCollectionId,id)
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            throw error
        }
    }

    async editPost(id, title, content, date) {
        try {
            return await this.databases.updateDocument(
                conf.appwritDatabaseId,
                conf.appwritCollectionId,
                id,
                { title, content, date } // Updated fields
            );
        } catch (error) {
            console.error("Appwrite Service :: EditPost :: error", error);
            throw error;
        }
    }
}
    

const service = new Service
export default service