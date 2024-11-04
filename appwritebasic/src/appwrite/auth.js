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
}

const authService = new AuthService ();

export default authService