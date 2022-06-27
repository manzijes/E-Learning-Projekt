const quizOne = [
  {
    'q': 'Welche dieser Eigenschaften lässt sich in CSS3 NICHT definieren?',
    'options': [
      'Farben',
      'HTML-Content',
      'Layout',
      'Schrifteigenschaften'
    ],
    'correctIndex': 1,
    'correctResponse': 'Richtig, den Content eines Elements kannst (und solltest) du nicht mit CSS definieren.',
    'incorrectResponse': 'Falsch! Du kannst in CSS3 die Farbe definieren, das Layout und unterschiedliche Schrifteigenschaften bestimmen. Den HTML-Content eines Elements kannst (und solltest) du allerdings nicht mit CSS festlegen.'
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
    questions: quizThree,
    // button text
    nextButtonText: 'weiter',
    finishButtonText: 'Ergebnis',
    restartButtonText: 'Neustart',
    resultsFormat: 'Du hast %score von %total korrekt!'
  });
  $('#quiz-4').quiz({
    questions: quizFour,
    // button text
    nextButtonText: 'weiter',
    finishButtonText: 'Ergebnis',
    restartButtonText: 'Neustart',
    resultsFormat: 'Du hast %score von %total korrekt!'
  });
  $('#quiz-5').quiz({
    questions: quizFive,
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

