import { Account, Client, ID } from 'react-native-appwrite';
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
    .setPlatform(config.platform) // Your application ID or bundle ID.

    const account = new Account(client);

    export const createUser = () => {
        account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    
    }
    

