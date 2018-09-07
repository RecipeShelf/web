import { 
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} from "mongodb-stitch-browser-sdk";

const client = Stitch.initializeDefaultAppClient('recipeshelfdev-bwwfr');

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('recipeshelf');

export class IngredientService {
    getCategories() {
        client.auth.loginWithCredential(new AnonymousCredential()).then(user => 
            db.collection('ingredient').distinct('category').asArray()
          ).then(docs => {
              return docs;
          }).catch(err => {
              console.error(err)
          });
    }

    findByCategory(category) {
        client.auth.loginWithCredential(new AnonymousCredential()).then(user => 
            db.collection('ingredient').find({category: category}, {_id: 1, names: 1}).asArray()
          ).then(docs => {
              return docs;
          }).catch(err => {
              console.error(err)
          });
    }

    findByVegan(vegan) {
        client.auth.loginWithCredential(new AnonymousCredential()).then(user => 
            db.collection('ingredient').find({vegan: vegan}, {_id: 1, names: 1}).asArray()
          ).then(docs => {
              return docs;
          }).catch(err => {
              console.error(err)
          });
    }
}

export class RecipeService {
    getMyRecipeSummaries() {
        client.auth.loginWithCredential(new AnonymousCredential()).then(user => 
            db.collection('recipe').find({ownerId: client.auth.user.id}, { _id: 1, names: 1}).asArray()
          ).then(docs => {
              return docs;
          }).catch(err => {
              console.error(err)
          });
    }    
}
