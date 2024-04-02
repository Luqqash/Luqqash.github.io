var yourName = document.getElementById("yourname"),
  theirName = document.getElementById("theirname"),
  calcBtn = document.querySelector("button"),
  yourlovescoreis = document.getElementById("yourlovescoreis"),
  loveScore = Math.random() * 100,
  loveInfo = document.getElementById("loveinfo"),
  reloadBtn = document.getElementById("reload");
loveScore = Math.floor(loveScore) + 1;

//capitalize input values
function capitalize_Words(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Love Score Counter
function love() {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  (async function () {
    var i = 0;
    while (i < loveScore) {
      document.getElementById("score").innerHTML = i + "%";
      await sleep(20);
      i++;
    }
  })();
}

// Add eventlistener to button
calcBtn.addEventListener("click", function (e) {
  loveScore = Math.random() * 100; //delete this line if you want to keep the same value in the same session.
  e.preventDefault();
  if (yourName.value == "" && theirName.value == "") {
    alert("Nu poti lasa acest spatiu gol");
  }
  if (yourName.value == "") {
    alert("Te rog insereaza un nume");
  }
  if (theirName.value == "") {
    alert("Te rog insereaza numele");
  }

  //lovescore conditions
  else if (loveScore <= 10) {
    yourlovescoreis.innerHTML = "Scorul vostru de iubire este";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Tu</b> și " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " iubiți-vă ca Uleiul și Apa. Îmi pare rău, dar acest lucru nu este suficient pentru o relație perfectă.";
  } else if (loveScore <= 20) {
    yourlovescoreis.innerHTML = "Scorul vostru de iubire este";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Tu</b> și " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      "iubește-te ca Pasarea si Cerul. Dar trebuie să te concentrezi puțin asupra dragostei tale.";
  } else if (loveScore <= 30) {
    yourlovescoreis.innerHTML = "Scorul vostru de iubire este";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Tu</b> și" +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " iubiți-vă ca Pamantul si Samanta. Ar trebui să ai mai multă grijă de iubirea ta! ";
  } else if (loveScore <= 40) {
    yourlovescoreis.innerHTML = "Scorul vostru de iubire este";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Tu</b> și " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " iubiti-va ca Romeo și Julieta. Nu există lucruri false în dragostea ta. Daţi-i drumul!";
  } else if (loveScore <= 50) {
    yourlovescoreis.innerHTML = "Scorul vostru de iubire este";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Tu</b> și " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " iubiti-va ca Marie și Pierre Curie. E o combinație bună. Sunteți un bun exemplu de iubire adevărată.";
  } else if (loveScore <= 60) {
    yourlovescoreis.innerHTML = "Scorul vostru de iubire este";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Tu</b> și " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      "iubiți-vă ca Pământul și Luna. Nu puteți trăi unul fără celălalt.";
  } else if (loveScore <= 70) {
    yourlovescoreis.innerHTML = "Scorul vostru de iubire este";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Tu</b> și " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " iubiti-va ca River & Sea. Răspândește dragoste, No hate";
  } else if (loveScore <= 80) {
    yourlovescoreis.innerHTML = "Scorul vostru de iubire este";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Tu</b> și " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " iubiți-vă ca lipiciul. Nimic nu vă poate separa unul de celălalt. Dragostea este pentru totdeauna.";
  } else if (loveScore <= 90) {
    yourlovescoreis.innerHTML = "Scorul vostru de iubire este";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Tu</b> și " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " iubiți-vă mai mult decât orice pe lume! Esti cel mai bun exemplu de iubire adevarata.";
  } else if (loveScore <= 100) {
    yourlovescoreis.innerHTML = "Scorul vostru de iubire este";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Tu</b> și " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " iubiti-va ca Ertuğrul Gazi și Halime Sultan. Ar trebui să te căsătorești cu  " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " foarte curand. Mult noroc!";
  }
});