const log = console.log;
var highScorers = [
  {
    name: "Amey",
    points: 5
  },
  {
    name: "Sonal",
    points: 7
  },
  {
    name: "Aakash",
    points: 2
  },
  {
    name: "Palash",
    points: 4
  },
  {
    name: "Bhavin",
    points: 4
  }
                 ];

log(highScorers.map(sortByName => sortByName.name + " : " + sortByName.points).sort().join("\n"));

log("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+")

//for ascending
var sorted = highScorers.sort(function (a, b) { return b.points - a.points;});

sorted.map(sortByPoints => sortByPoints.name + " : " + sortByPoints.points).join("\n");