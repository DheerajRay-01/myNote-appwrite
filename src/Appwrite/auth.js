import { Client,Account ,ID} from "appwrite";
import conf from "../conf";
import toastr from "toastr";

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject(conf.appwritProjectId); 
        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique() , email , password , name)
            if (userAccount) {
                const session = this.login({email, password});
                console.log("userAccount: auth session :", session);
                return session
            } else {
               return  userAccount;
            }
        } catch (error) {
            console.log("error : appwrite auth : createAccount :" ,error);
            throw error
        }
    }

    async login({email,password}){
        try {
            return  await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            // console.log("error : appwrite auth : login :" ,error);        
                throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("error : appwrite auth : login :" ,error);
            throw error
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log(error,"error in appwrite / auth / logout fun");
            throw error
        }
    }
}

const authService = new AuthService()
export default authService