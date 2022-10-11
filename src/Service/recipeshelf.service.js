import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} from "mongodb-stitch-browser-sdk";

const client = Stitch.initializeDefaultAppClient("recipeshelfdev-bwwfr");

const db = client
  .getServiceClient(RemoteMongoClient.factory, "mongodb-atlas")
  .db("recipeshelf");

class RecipeShelfService {
  constructor(collectionName) {
    this._collectionName = collectionName;
  }

  getDocuments = getFunc => {
    return client.auth
      .loginWithCredential(this.credentials)
      .then(getFunc)
      .catch(err => {
        console.error(err);
      });
  };

  get credentials() {
    if (!this._credentials) {
      this._credentials = new AnonymousCredential();
    }
    return this._credentials;
  }

  set credentials(credentials) {
    this._credentials = credentials;
  }

  getDistinct = field => {
    return this.getDocuments(user =>
      client
        .callFunction("distinct", [db.name, this._collectionName, field])
        .then(docs => docs)
    );
  };

  findSummaries = query => {
    return this.getDocuments(user =>
      db
        .collection(this._collectionName)
        .find(query, { projection: { _id: 1, names: 1 } })
        .asArray()
        .then(docs => docs)
    );
  };

  findItem = summary => {
    return this.getDocuments(user =>
      db
        .collection(this._collectionName)
        .find({ _id: summary._id })
        .asArray()
        .then(docs => (docs.length == 0 ? null : docs[0]))
    );
  };
}

export default RecipeShelfService;
