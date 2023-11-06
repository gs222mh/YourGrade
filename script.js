const subjects = [
  "Svenska 1",
  "Svenska 2",
  "Svenska 3",
  "Engelska 5",
  "Engelska 6",
  "Engelska 7",
  "Matematik 1a",
  "Matematik 2a",
  "Matematik 1b",
  "Matematik 2b",
  "Matematik 3b",
  "Matematik 1c",
  "Matematik 2c",
  "Matematik 3c",
  "Matematik 4",
  "Matematik 5",
];
const betyg = ["A", "B", "C", "D", "E"];
let id = 0;
function add() {
  id = id++;
  id++;
  const subjectsBetyg = document.querySelector(".subjects");
  const selectSub = document.createElement("select");
  selectSub.setAttribute("class", "sel");
  selectSub.setAttribute("onchange", `selectedSub(sub${id})`);
  const subTitle = document.createElement("option");
  subTitle.setAttribute("value", "empty");
  selectSub.setAttribute("id", `sub${id}`);
  subTitle.textContent = "اختر المادة";
  selectSub.appendChild(subTitle);
  subjects.forEach((element) => {
    const option = document.createElement("option");
    option.setAttribute("value", element);
    option.textContent = element;
    selectSub.appendChild(option);
  });
  subjectsBetyg.appendChild(selectSub);
  betyg.forEach((element) => {
    const betygBtn = document.createElement("button");
    betygBtn.setAttribute("class", "grade disabled");
    betygBtn.setAttribute("id", `${element}${id}`);
    betygBtn.setAttribute("onclick", `checkClicked(${element}${id})`);
    betygBtn.textContent = element;
    subjectsBetyg.appendChild(betygBtn);
  });

  const delBut = document.createElement("button");
  const img = document.createElement("img");
  img.src = "./recycle-bin.png";
  delBut.appendChild(img);
  delBut.setAttribute("class", "delBut");
  delBut.setAttribute("id", `del${id}`);
  delBut.setAttribute("onclick", `del(${id})`);
  subjectsBetyg.appendChild(delBut);
}

function del(id) {
  const subject = document.querySelector(".subjects");
  subject.removeChild(subject.children[`sub${id}`]);
  betyg.forEach((element) => {
    subject.removeChild(subject.children[`${element}${id}`]);
  });
  subject.removeChild(subject.children[`del${id}`]);
}

function checkClicked(betygSel) {
  if (document.getElementById(betygSel.id).classList.length == 1) {
    clicked(betygSel);
  } else {
    unClicked(betygSel);
  }
}

function clicked(betygSel) {
  betyg.forEach((element) => {
    if (betygSel.id == element + betygSel.id.substring(1, betygSel.id.length)) {
      const selectedByteg = document.getElementById(betygSel.id);
      selectedByteg.classList.add("clicked");
    } else {
      const unselectedByteg = document.getElementById(
        element + betygSel.id.substring(1, betygSel.id.length)
      );

      unselectedByteg.classList.add("disabled");
    }
  });
}

function unClicked(betygSel) {
  betyg.forEach((element) => {
    const selectedByteg = document.getElementById(
      element + betygSel.id.substring(1, betygSel.id.length)
    ); //D3
    selectedByteg.classList.remove(
      document.getElementById(
        element + betygSel.id.substring(1, betygSel.id.length)
      ).classList[1]
    );
  });
}

function selectedSub(subject) {
  console.log("test");
  if (document.getElementById(subject.id).value != "empty") {
    betyg.forEach((element) => {
      const selectedByteg = document.getElementById(
        element + subject.id.substring(3, subject.id.length)
      ); //D3
      selectedByteg.classList.remove("disabled");
    });
  } else if (document.getElementById(subject.id).value == "empty") {
    betyg.forEach((element) => {
      const selectedByteg = document.getElementById(
        element + subject.id.substring(3, subject.id.length)
      ); //D3
      selectedByteg.classList.add("disabled");
    });
  }
}
