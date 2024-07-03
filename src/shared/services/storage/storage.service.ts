enum StorageName {
  AUTH_TOKEN = "authToken",
}

export class StorageService {
  constructor() {}

  public getAuthToken() {
    const token = localStorage.getItem(StorageName.AUTH_TOKEN);
    return token;
  }
}

const instance = new StorageService();

export default instance;
