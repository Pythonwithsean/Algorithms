const Node = require("./Node.js");

LEADER = new Node(1, false, "Leaders Message");
LEADER.Leader = true;
FOLLOWER = new Node(2, false, "I am a follower");
CANDIDATE = new Node(3, false, "I am a candidate");
VOTED = new Node(4, false, "I have voted");
let wave = [LEADER, FOLLOWER, CANDIDATE, VOTED];

i = 0;
while (LEADER.getDone() === false) {
  if (wave[i].Leader == true) {
    wave[i].sendMessage(wave[i + 1]);
    i++;
  }
  wave[i].sendMessage(wave[i + 1]);
  wave[i].setDone();
  console.log(wave[i].getMessage() + " " + wave[i].getID());
  i++;

  if (wave[i] === wave[wave.length - 1]) {
    console.log(wave[i].getMessage() + " " + wave[i].getID());
    LEADER.setDone();
  }
}
