import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential,
  StitchCredential,
  StitchUser
} from "mongodb-stitch-browser-sdk";

// import { Summary } from "../Model/summary";

const client = Stitch.initializeDefaultAppClient("recipeshelfdev-bwwfr");

const db = client
  .getServiceClient(RemoteMongoClient.factory, "mongodb-atlas")
  .db("recipeshelf");

class RecipeShelfService {
  _credentials = StitchCredential;

  constructor(collectionName) {
    this._collectionName = collectionName;
  }

  get = getFunc => {
    return client.auth
      .loginWithCredential(this._credentials)
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
    return this.get(user =>
      client
        .callFunction("distinct", [db.name, this._collectionName, field])
        .then(docs => docs)
    );
  };

  findSummaries = query => {
    return this.get(user =>
      db
        .collection(this._collectionName)
        .find(query, { projection: { _id: 1, names: 1 } })
        .asArray()
        .then(docs => docs)
    );
  };

  findItem = summary => {
    return this.get(user =>
      db
        .collection(this._collectionName)
        .find({ _id: summary._id })
        .asArray()
        .then(docs => (docs.length == 0 ? null : docs[0]))
    );
  };
}

export default RecipeShelfService;
