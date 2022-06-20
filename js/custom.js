const myQuiz = [
  {
    'q': 'A sample question?',
    'options': [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4'
    ],
    'correctIndex': 1,
    'correctResponse': 'Custom correct response.',
    'incorrectResponse': 'Custom incorrect response.'
  },
  {
    'q': 'A smaple question?',
    'options': [
      'Answer 1',
      'Answer 2'
    ],
    'correctIndex': 1,
    'correctResponse': 'Custom correct response.',
    'incorrectResponse': 'Custom incorrect response.'
  },
  {
    'q': 'A smaple question?',
    'options': [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4'
    ],
    'correctIndex': 2,
    'correctResponse': 'Custom correct response.',
    'incorrectResponse': 'Custom incorrect response.'
  },
  {
    'q': 'A smaple question?',
    'options': [
      'Answer 1',
      'Answer 2'
    ],
    'correctIndex': 1,
    'correctResponse': 'Custom correct response.',
    'incorrectResponse': 'Custom incorrect response.'
  },
  {
    'q': 'A smaple question?',
    'options': [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4'
    ],
    'correctIndex': 3,
    'correctResponse': 'Custom correct response.',
    'incorrectResponse': 'Custom incorrect response.'
  }
]

$(document).ready(function () {

  $('#quiz-1').quiz({
    questions: myQuiz
  });

  function fade() {
    var animation_height = $(window).innerHeight() * 0.25;
    var ratio = Math.round((1 / animation_height) * 10000) / 10000;

    $('.row div').each(function () {

      var objectTop = $(this).offset().top;
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();

      if (objectTop < windowBottom) {
        if (objectTop < windowBottom - animation_height) {
          $(this).css({
            transition: 'opacity 0.1s linear',
            opacity: 1
          });

        } else {
          $(this).css({
            transition: 'opacity 0.25s linear',
            opacity: (windowBottom - objectTop) * ratio
          });
        }
      } else {
        $(this).css('opacity', 0);
      }
    });
  }
  $('.fade').css('opacity', 0);
  fade();
  $(window).scroll(function () { fade(); });

  // DEVELOPMENT ON // DELETE IF DONE
  $(".disabled").removeClass("disabled");
  $(".confirmation").removeClass("confirmation");

  $('.confirmation').on('click', function () {
    return confirm('Bist du sicher, dass du zurück möchtest? Wenn du zurückgehst, geht dein Fortschritt verloren.');
  });

  // initialize code highlighting plugin
  $('pre.code').highlight({
    source: false,
  });


  $(document).on("scroll", function () {
    var pixels = $(document).scrollTop();
    var pageHeight = $(document).height() - $(window).height();
    var progress = 100 * pixels / pageHeight;

    $("div.progressbar").css("width", progress + "%");
  })

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });

  $('.changeable-image').on('click', function () {
    $(this).children('img').toggleClass('hidden');
  });
});


// drag and drop quiz
$(document).ready(function () {
  // Set the initial score to zero...
  var score = 0;
  // Create an array with the answers in the correct order...
  var answers = [
    "Short-term supply of energy.",
    "Needed for growth and repair of cells.",
    "Long-term store of energy.",
    "Needed to maintain health.",
    "Needed to maintain health."
  ];
  // Get the intial state of the table, so it can be reset...
  var tableDefault = $(".table").html();

  // Enable drag and drop...
  function dragAndDrop(dragTarget, dropTarget) {
    // Enable draggable events...
    $(dragTarget).draggable({ revert: true });

    // Enable the droppable events...
    $(dropTarget).droppable({
      drop: function (event, ui) {
        // Append the dropped item into its drop target...
        $(this).append(ui.draggable);
        // Place the drag target in the normal document flow...
        ui.draggable.css({
          position: "static",
          top: "auto",
          left: "auto"
        });
        // jQuery UI requires the draggable element to have position: relative...
        ui.draggable.css({
          position: "relative"
        });
      }
    });
  }
  // Enable drag and drop...
  dragAndDrop(".card", ".answer");

  // When the check answers button is clicked...
  $(".check-answer").on("click", function () {
    $('.card').draggable("disable");

    // Check the guess against each answer in the answers array, and increment the score if they match...
    $(".answer").each(function (i) {

      // Get the correct answer for the current row...
      var answer = answers[i];
      // Get the user's guess...
      var guess = $(this).find("div").text();
      // Compare the user's guess to the correct answer...
      if (guess === answer) {
        // They were correct - increment the score!
        score++;
        // Correct answer gets a green background...
        $(this).css("background", "mediumaquamarine");
        $(this).children('div').css("background", "mediumaquamarine");
        $(this).children('div').css("border", "none");
        $(this).children('div').css("color", "white");
      } else {
        // Incorrect answers get a red background...
        $(this).css("background", "lightcoral");
        $(this).children('div').css("background", "lightcoral");
        $(this).children('div').css("border", "none");
        $(this).children('div').css("color", "white");
      }
    });
    // Display the score...
    $(".score-card").html("<p>Score: " + score + "/5</p>");

    $(".check-answer").css("display", "none");
  }); // END $(".check-answer").on("click", function({...}));

}); // END $(document).ready(function() {...});


// // initialize quiz plugin
// $(document).ready(function () {
//   if ($('body').hasClass('ch-1')) {
//     $('#quizone').quiz({
//       // disable return and restart buttons
//       hidePrevBtn: true,
//       hideRestartBtn: true,
//       // path to JSON
//       quizJson: "quizzes/quiz1.json",
//       // handle results
//       onResults: function (good, total) {
//         var perc = good / total;

//         $(".ch-2").removeClass("disabled")

//         $input = $('<a class="button-default" href="lektion-2.html">Weiter mit Kapitel 2</a>');
//         $input.appendTo($("#quizone"));

//         var alert = $('<div class="alert"></div>')
//           .prependTo(this);
//         if (perc == 0) {
//           alert.addClass('alert-danger')
//             .html('Alles falsch! Du solltest dir das Kapitel nochmal ansehen, bevor du fortfährst.');
//         } else if (perc > 0 && perc <= 0.25) {
//           alert.addClass('alert-danger')
//             .html('Schlechtes Ergebnis! Nur ' + good + ' von ' + total + ' Antworten waren richtig. Schau dir das Kapitel in Ruhe nochmal an.');
//         } else if (perc > 0.25 && perc <= 0.5) {
//           alert.addClass('alert-danger')
//             .html('Gerade ausreichend! Du hast ' + good + ' richtige Antworten von ' + total + '. Das geht noch besser.');
//         } else if (perc > 0.5 && perc <= 0.75) {
//           alert.addClass('alert-success')
//             .html('Dein Ergebnis kann sich sehen lassen! Du hast ' + good + ' richtige Antworten von ' + total + '. Wirf trotzdem nochmal einen Blick auf das Kapitel, bevor du fortfährst.');
//         } else if (perc > 0.75 && perc < 1) {
//           alert.addClass('alert-success')
//             .html('Gutes Ergebnis! Du hast ' + good + ' richtige Antworten von ' + total + '. Fast perfekt.');
//         } else if (perc == 1) {
//           alert.addClass('alert-success')
//             .html('Glückwunsch, du hast alle Fragen richtig beantwortet!');
//         }
//       }
//     });
//   }
// });

// // quiz Kapitel 2
// $(document).ready(function () {
//   if ($('body').hasClass('ch-2')) {
//     $('#quiztwo').quiz({
//       // disable return and restart buttons
//       hidePrevBtn: true,
//       hideRestartBtn: true,
//       // path to JSON
//       quizJson: "quizzes/quiz2.json",
//       // handle results
//       onResults: function (good, total) {
//         var perc = good / total;
//         var alert = $('<div class="alert"></div>')
//           .prependTo(this);
//         if (perc == 0) {
//           alert.addClass('alert-danger')
//             .html('Alles falsch! Du solltest dir das Kapitel nochmal ansehen, bevor du fortfährst.');
//         } else if (perc > 0 && perc <= 0.25) {
//           alert.addClass('alert-danger')
//             .html('Schlechtes Ergebnis! Nur ' + good + ' von ' + total + ' Antworten waren richtig. Schau dir das Kapitel in Ruhe nochmal an.');
//         } else if (perc > 0.25 && perc <= 0.5) {
//           alert.addClass('alert-danger')
//             .html('Gerade ausreichend! Du hast ' + good + ' richtige Antworten von ' + total + '. Das geht noch besser.');
//         } else if (perc > 0.5 && perc <= 0.75) {
//           alert.addClass('alert-success')
//             .html('Dein Ergebnis kann sich sehen lassen! Du hast ' + good + ' richtige Antworten von ' + total + '. Wirf trotzdem nochmal einen Blick auf das Kapitel, bevor du fortfährst.');
//         } else if (perc > 0.75 && perc < 1) {
//           alert.addClass('alert-success')
//             .html('Gutes Ergebnis! Du hast ' + good + ' richtige Antworten von ' + total + '. Fast perfekt.');
//         } else if (perc == 1) {
//           alert.addClass('alert-success')
//             .html('Glückwunsch, du hast alle Fragen richtig beantwortet!');
//         }
//       }
//     });
//   }
// });

// // change quiz language to german
// $(document).ready(function () {
//   $.quiz('localization', {
//     start: 'Start',
//     prev: 'Zurück',
//     next: 'Weiter',
//     results: 'Ergebnis ansehen',
//     restart: 'Zurück zum Start',
//     error: 'Error',
//     errmsg: [
//       'Bitte wähle eine Antwort',
//       'Manche Fragen wurden noch nicht beantwortet. Bitte gehe zurück bis zum Anfang und prüfe das.'
//     ]
//   });
// });