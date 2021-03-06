import {observable} from "mobx";

class TodoModel {
  id = Math.random();
  @observable title;
  @observable finished = false;

  constructor(title) {
    this.title = title;
  }
}

export default TodoModel;
