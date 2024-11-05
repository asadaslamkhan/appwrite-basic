import conf from "../conf/config";
import { Account, Client, Databases } from "appwrite";


export class AuthService {
    Client = new Client();
    account;

    constructor() {
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({email, password, name}){
        try{
            await this.Client.account.create(ID.unique(), email,password,name);
            if(userAccount){
                return this.login((email, password));
            }else {
                return userAccount;
            }

        }catch (error){
            throw error;
        }
    }

    async login({email, password}) {
        try{
            return await this.account.createSession(email, password);

        }catch(error){
            throw error; 
        }
        
    }

    async getCurrentUser (){
        try {
            return await this.account.get();
        }catch(error){
            console.log("Appwrite service :: getCurrentUser :: error", error)
        }
        return null;
    }

    async logout (){
        try {
            return await this.account.deleteSession();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
    }
}

const authService = new AuthService ();

export default authService