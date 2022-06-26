const quizOne = [
  {
    'q': 'Welche dieser Eigenschaften lässt sich in CSS3 NICHT abfragen?',
    'options': [
      'Farben',
      'HTML-Content',
      'Layout',
      'Schrifteigenschaften'
    ],
    'correctIndex': 1,
    'correctResponse': 'Richtig, den Content eines Elements kannst (und solltest) du nicht mit CSS definieren.',
    'incorrectResponse': 'Falsch! Du kannst in CSS3 die Farbe abfragen, das Layout auf verschiedene Weisen definieren und unterschiedliche Schrifteigenschaften bestimmen. Den HTML-Content eines Elements kannst (und solltest) du allerdings nicht mit CSS festlegen.'
  },
  {
    'q': 'Welche dieser Möglichkeiten ist KEINE korrekte Einbindungsart für Stylesheets?',
    'options': [
      'Einbindung durch Referenz auf ein externes Stylesheet im Header der HTML-Datei',
      'Einbindung mit dem HTML-Element css im Header'
    ],
    'correctIndex': 1,
    'correctResponse': 'Genau! Es gibt kein HTML-Element namens css. Es ginge allerdings mit dem HTML-Element style im Header.',
    'incorrectResponse': 'Leider falsch! Die Referenz auf ein Stylesheet im Header der HTML ist eine häufige Methode. Ein Beispiel, wie das aussehen könnte, findest du weiter oben im Kapitel unter "Einbindung von CSS".'
  },
  {
    'q': 'Mehrere CSS-Deklarationen musst du durch ... trennen',
    'options': [
      'Semikolons',
      'Kommas',
      'Doppelpunkte'
    ],
    'correctIndex': 0,
    'correctResponse': 'Genau! Mehrere CSS-Deklarationen musst du durch Semikolons trennen.',
    'incorrectResponse': 'Leider falsch! Mehrere CSS-Deklarationen musst du durch Semikolons trennen.'
  }
]

const quizTwo = [
  {
    'q': 'Mit welchem Attribut lassen sich Medieneigenschaften für ein Stylesheet definieren?',
    'options': [
      '@media-rule',
      '@mediatype',
      '@method',
      '@media'
    ],
    'correctIndex': 3,
    'correctResponse': 'Genau! Mit dem Attribut @media lassen sich Medieneigenschaften für ein Stylesheet definieren.',
    'incorrectResponse': 'Leider falsch! Mit dem Attribut @media lassen sich Medieneigenschaften für ein Stylesheet definieren.'
  },
  {
    'q': 'Welche Medieneigenschaft gilt für alle Ausgabegeräte',
    'options': [
      'default',
      'all'
    ],
    'correctIndex': 1,
    'correctResponse': 'Richtig. Der Medientyp media="all" gilt für alle Ausgabegeräte.',
    'incorrectResponse': 'Leider falsch! Der Medientyp media="all" gilt für alle Ausgabegeräte. Gibst du keinen an, gilt das automatisch.'
  }
]

const quizThree = [
  {
    'q': 'Welche Medieneigenschaft lässt sich mit CSS3 abfragen?',
    'options': [
      'Bildschirmhelligkeit',
      'Gerätetypen',
      'Größen von Viewports'
    ],
    'correctIndex': 2,
    'correctResponse': 'Richtig! Du kannst unter anderem die Größen von Viewports abfragen.',
    'incorrectResponse': 'Leider falsch! Momentan ist es nicht möglich, die eingestellte Bildschirmhelligkeit oder den Gerätetyp abzufragen.'
  }
]

const quizFour = [
  {
    'q': 'Welche dieser Optionen ist keine Hauptkomponente, aus der sich Media Queries zusammensetzen?',
    'options': [
      'Schlüsselwort für den Medientyp',
      'Ausdruck für die Medieneigenschaften',
      'Schlüsselwort für Eingrenzungen (z.B. only)'
    ],
    'correctIndex': 2,
    'correctResponse': 'Richtig! Media Queries setzen sich aus den Hauptkomponenten Medientyp und Medieneigenschaften zusammen.',
    'incorrectResponse': 'Leider falsch! Schlüsselwörter für Eingrenzungen sind keine Hauptkomponente.'
  },
  {
    'q': '@media [not|only] type1 and (expr1), type2 and (expr2), type3 and (expr3). Der gesamte Ausdruck ist nur dann wahr, wenn...',
    'options': [
      'keiner der Ausdrücke zutrifft',
      'mindestens einer der Ausdrücke zutrifft',
      'alle Ausdrücke zutreffen',
      'höchstens einer der Ausdrücke zutrifft'
    ],
    'correctIndex': 1,
    'correctResponse': 'Richtig. Der gesamte Ausdruck ist wahr, wenn mindestens einer der Ausdrücke zutrifft.',
    'incorrectResponse': 'Leider falsch. Der gesamte Ausdruck ist wahr, wenn mindestens einer der Ausdrücke zutrifft.'
  }
]

const quizFive = [
  {
    'q': 'Welche dieser Aussagen trifft zu?',
    'options': [
      'Gerätepixel und CSS-Pixel sind das Gleiche',
      'Der Viewport-Metatag wird im Footer der HTML-Datei definiert',
      'Mit initial-scale=1.0 können Sie den anfänglichen Zoomgrad auf 1% setzen',
      '@viewport kann auch innerhalb eines Media Query gesetzt werden'
    ],
    'correctIndex': 3,
    'correctResponse': 'Richtig! @viewport kann auch innerhalb eines Media Query gesetzt werden.',
    'incorrectResponse': 'Leider falsch! @viewport kann auch innerhalb eines Media Query gesetzt werden.'
  },
  {
    'q': 'Die @viewport-Anweisung im CSS unterscheidet sich grundlegend vom Viewport-Metatag.',
    'options': [
      'richtig',
      'falsch'
    ],
    'correctIndex': 1,
    'correctResponse': 'Genau! Dich führt niemand in die Irre.',
    'incorrectResponse': 'Leider falsch! Es gibt keine grundlegende Unterscheidung zwischen den beiden.'
  }
]

$(document).ready(function () {

  $('#quiz-1').quiz({
    questions: quizOne,
    // button text
    nextButtonText: 'weiter',
    finishButtonText: 'Ergebnis',
    restartButtonText: 'Neustart',
    resultsFormat: 'Du hast %score von %total korrekt!'
  });

  $('#quiz-2').quiz({
    questions: quizTwo,
    // button text
    nextButtonText: 'weiter',
    finishButtonText: 'Ergebnis',
    restartButtonText: 'Neustart',
    resultsFormat: 'Du hast %score von %total korrekt!'
  });
  $('#quiz-3').quiz({
    questions: quizTwo,
    // button text
    nextButtonText: 'weiter',
    finishButtonText: 'Ergebnis',
    restartButtonText: 'Neustart',
    resultsFormat: 'Du hast %score von %total korrekt!'
  });
  $('#quiz-4').quiz({
    questions: quizTwo,
    // button text
    nextButtonText: 'weiter',
    finishButtonText: 'Ergebnis',
    restartButtonText: 'Neustart',
    resultsFormat: 'Du hast %score von %total korrekt!'
  });
  $('#quiz-5').quiz({
    questions: quizTwo,
    // button text
    nextButtonText: 'weiter',
    finishButtonText: 'Ergebnis',
    restartButtonText: 'Neustart',
    resultsFormat: 'Du hast %score von %total korrekt!'
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