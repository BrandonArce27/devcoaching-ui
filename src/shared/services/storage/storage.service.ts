import { Language } from "@/shared/generated";

enum StorageName {
  AUTH_TOKEN = "authToken",
}

export class StorageService {
  setLanguage(selectedLanguage: Language) {
    throw new Error("Method not implemented.");
  }
  constructor() {}

  public getAuthToken() {
    const token = localStorage.getItem(StorageName.AUTH_TOKEN);
    return token;
  }
}

const instance = new StorageService();

export default instance;
