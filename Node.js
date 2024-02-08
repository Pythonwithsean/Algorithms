class Node {
  ID;
  done;
  message;
  Leader;

  constructor(id, done, message) {
    this.ID = id;
    this.done = done;
    this.message = message;
    this.Leader = false;
  }

  getID() {
    return this.ID;
  }
  getDone() {
    return this.done;
  }
  getMessage() {
    return this.message;
  }
  recieveMessage(message) {
    this.message = message;
  }
  setDone() {
    this.done = true;
  }
  sendMessage(node) {
    node.recieveMessage(this.message);
  }
}

module.exports = Node;
