import { Account, Client, ID, Avatars, Databases } from 'react-native-appwrite';
export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aora',
    projectId: "665b006200078cc602c5",
    databaseId: "665b04420035ef3e76a2",
    userCollectionId: "665b049a00018ebc51c2",
    videoCollectionId: "665b04fc000aa1ac1262",
    storageId: "665b088d0037212a50b5",
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform); // Your application ID or bundle ID.

    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client);

    export const createUser = async (email, password, username) => {
        try{
            const newAccount = await account.create(
                ID.unique(),
                email,
                password,
                username,
            )

            if(!newAccount) throw new Error;

            const avatarUrl = avatars.getInitials(username);

            await signIn(email, password)


            const newUser = await databases.createDocument(
                config.databaseId,
                config.userCollectionId,
                ID.unique(),
                {
                    accountId: newAccount.$id,
                    email: email,
                    username: username,
                    avatar: avatarUrl,
                }
            )

            return newUser;
        }catch(error){
            // console.log(error)
            throw new Error(error)
        }
    
    }

export async function signIn(email, password){
    try {
        const session = await account.createEmailSession(email, password)
        return session;
    } catch (error) {
        throw new Error(error)
    }
}
    

