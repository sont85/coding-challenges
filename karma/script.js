// Code goes here

var $$ = {
  storeData: function() {
    localStorage["karma.data"] = JSON.stringify(this.data);
  },
  readData: function() {
    this.data = JSON.parse(localStorage["karma.data"]);
  },
  leaderboard: function() {
    return this.data.sort(this.compare);
  },
  compare: function(a, b) {
    return b.points - a.points;
  },
  modifyPointsFor: function(indexInArray, newPoints) {
    this.data[indexInArray].points = newPoints;
    this.storeData();
    this.cloner();
  },
  cloner: function() {
    $("#ppl").empty();
    var sorted = $$.leaderboard();
    var $template = $(".person:first"),
      $clonedLi;
    var ppl = sorted.map(function(p, i) {
      $clonedLi = $template.clone().show();
      $clonedLi.data("order", i);
      $clonedLi.find(".name").text(p.name);
      $clonedLi.find(".points").text(p.points);
      $clonedLi.find("input").val(p.points);
      return $clonedLi;
    });

    $("#ppl").append(ppl);
  },
  eventHandler: function() {
    $("#ppl").on("dblclick", ".points", function(event) {
        var $points = $(this)
        $points.hide();
        $points.next(".input").show();
    }).on("keyup", "input", function(event) {
      if (event.which === 13) {
        var $input = $(this);
        var $person = $input.parents(".person")
        var personIndex = $person.data("order"); 
        var newVal = $input.val();
        $$.modifyPointsFor(personIndex, newVal);
        $person.find(".input").hide()
        $person.find(".points").text(newVal).show()
        $(".points").show();

      }
    });

  },

  data: []
  data:""
}


$(document).ready(function() {
  $$.readData();
  $$.cloner();
  $$.eventHandler();


})
