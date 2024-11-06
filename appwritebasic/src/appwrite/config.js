import conf from "../conf/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost ({tittle, slug, content, featuredImage, status, userID}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    tittle,
                    content,
                    featuredImage,
                    status,
                    userID,
                }   
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error)
        }
    }

    async updatePost (slug, {tittle,content, featuredImage, status, userID}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    tittle,
                    content,
                    featuredImage,
                    status,
                    userID
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error)
            
        }
    }

    async deletePost (slug){
        try {
            return await this.databases.deleteDocument(
             conf.appwriteDatabaseId,
             conf.appwriteCollectionId,
             slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false
        }
    }

    async getPosts (queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error)
        }
    }


    //file upload service

    async uploadFile (file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileid){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileid
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileid){
        return   this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileid
        )
    }
}



const service = new Service()
export default service