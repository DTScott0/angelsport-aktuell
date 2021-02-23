var randomStrings = [
  
    "Angelschein online <a href='https://www.fishing-king.de' target='_blank'>hier</a> machen",

    "Was ist <a href='https://www.simfisch.de/was-ist-drop-shot/' target='_blank'>dropshot</a> angeln?",

    "Spinnruten <a href='https://www.stern.de/vergleich/spinnrute/' target='_blank'>Vergleich</a> 2021",

    "Angeln & Corona <a href='https://angelmagazin.de/angeln-coronavirus-was-muessen-angler-beachten/' target='_blank'>hier</a> mehr erfahren",

    "Zeck Fishing <a href='https://zeck-fishing-podcast.podigee.io' target='_blank'>Podcast</a>",

    "Forellenangeln für Einsteiger<a href='https://www.youtube.com/watch?v=uKkUdZzYuGk' target='_blank'> Youtube tutorial</a>",

    "Wie baut man eine Angelrute zusammen <a href='https://www.youtube.com/watch?v=LoPN8wckVUo' target='_blank'> Youtube tutorial</a>",

    "Forellenangeln mit Sbirolino <a href='https://www.youtube.com/watch?v=Wk06_3Sp7_o' target='_blank'> Trout Master Youtube tutorial</a>",

    "Gewässerportal in Deutschland. <a href='https://www.monsterfisch.de/' target='_blank'> Monsterfisch</a>",
    

    /*"Hecht 1,00m +",
    "Barsch mit ASP spinner",
    "Zander mit Dropshot",
    "Nichts, bleib zu Hause",
    "Aal Angeln (Du Glückspilz)",
    "Lachs, viel Glück!",
    "Organisiere dein Tackle",
    "Urlaub in <a href='https://www.visitnorway.com/things-to-do/outdoor-activities/fishing/' target='_blank'>Norwegen</a>",
    "Neues Tackle <a href='https://www.angelsport.de' target='_blank'>kaufen</a>",
    "Karpfen Angeln",
    "Animal crossing Angeln?",
    "Fliegenfischen lernen",
    "Wels angeln",
    "Mal wieder nix gefangen",
    "Geblankt",
    "Familie Angelausflug",*/
  ];
  
  var randomDiv = document.getElementById("myRandomDiv");
  
  document.getElementById("generate").addEventListener("click", generate);
  
  function generate() {
    randomIndex = Math.ceil(Math.random() * randomStrings.length - 1);
    newText = randomStrings[randomIndex];
    randomDiv.innerHTML = newText;
  }
  
  //  generate();
