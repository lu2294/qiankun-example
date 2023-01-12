import { makeAutoObservable } from "mobx";

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  //更新数据，isLocal为是否存在缓存，避免数据刷新，数据丢失
  update = (value, key) => {
    this[key] = value
  }
}

const store = new Store();
export default store;