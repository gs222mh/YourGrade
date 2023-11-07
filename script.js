const subjects = [
  { sub: "Svenska 1", point: 100 },
  { sub: "Svenska 2", point: 100 },
  { sub: "Svenska 3", point: 100 },
  { sub: "Engelska 5", point: 100 },
  { sub: "Engelska 6", point: 100 },
  { sub: "Engelska 7", point: 100 },
  { sub: "Matematik 1a", point: 100 },
  { sub: "Matematik 2a", point: 100 },
  { sub: "Matematik 2a", point: 100 },
  { sub: "Matematik 2b", point: 100 },
  { sub: "Matematik 2c", point: 100 },
  { sub: "Matematik 3a", point: 100 },
  { sub: "Matematik 3b", point: 100 },
  { sub: "Matematik 3c", point: 100 },
  { sub: "Matematik 4", point: 100 },
  { sub: "Matematik 5", point: 100 },
  { sub: "Naturkunskap 1a1", point: 50 },
  { sub: "Naturkunskap 1a2", point: 50 },
  { sub: "Naturkunskap 1b", point: 100 },
  { sub: "Naturkunskap 2", point: 100 },
  { sub: "Fysik 1a", point: 150 },
  { sub: "Fysik 1b1", point: 100 },
  { sub: "Fysik 1b2", point: 50 },
  { sub: "Fysik 2", point: 100 },
  { sub: "Fysik 3", point: 100 },
  { sub: "Kemi 1", point: 100 },
  { sub: "Kemi 2", point: 100 },
  { sub: "Biologi 1", point: 100 },
  { sub: "Biologi 2", point: 100 },
  { sub: "Bioteknik", point: 100 },
  { sub: "Geografi 1", point: 100 },
  { sub: "Geografi 2", point: 100 },
  { sub: "Geografiska informationssystem", point: 100 },
  { sub: "Historia 1a1", point: 50 },
  { sub: "Historia 1a2", point: 50 },
  { sub: "Historia 1b", point: 100 },
  { sub: "Historia 2a", point: 100 },
  { sub: "Historia 2b", point: 100 },
  { sub: "Historia 3", point: 100 },
  { sub: "Psykologi 1", point: 50 },
  { sub: "Psykologi 2a", point: 50 },
  { sub: "Psykologi 2b", point: 50 },
  { sub: "Religionskunskap 1", point: 50 },
  { sub: "Religionskunskap 2", point: 50 },
  { sub: "Religionskunskap specialisering", point: 100 },
  { sub: "Samhällskunskap 1a1", point: 50 },
  { sub: "Samhällskunskap 1a2", point: 50 },
  { sub: "Samhällskunskap 1b", point: 100 },
  { sub: "Samhällskunskap 2", point: 100 },
  { sub: "Samhällskunskap 3", point: 100 },
  { sub: "Internationell ekonomi", point: 100 },
  { sub: "Internationella relationer", point: 100 },
];

const betyg = [
  { grade: "A", value: 20 },
  { grade: "B", value: 17.5 },
  { grade: "C", value: 15 },
  { grade: "D", value: 12.5 },
  { grade: "E", value: 10 },
];
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
    option.setAttribute("value", element.sub);
    option.textContent = element.sub;
    selectSub.appendChild(option);
  });
  subjectsBetyg.appendChild(selectSub);
  betyg.forEach((element) => {
    const betygBtn = document.createElement("button");
    betygBtn.setAttribute("class", "grade disabled");
    betygBtn.setAttribute("id", `${element.grade}${id}`);
    betygBtn.setAttribute("onclick", `checkClicked(${element.grade}${id})`);
    betygBtn.textContent = element.grade;
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
    subject.removeChild(subject.children[`${element.grade}${id}`]);
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
    if (
      betygSel.id ==
      element.grade + betygSel.id.substring(1, betygSel.id.length)
    ) {
      const selectedByteg = document.getElementById(betygSel.id);
      selectedByteg.classList.add("clicked");
    } else {
      const unselectedByteg = document.getElementById(
        element.grade + betygSel.id.substring(1, betygSel.id.length)
      );

      unselectedByteg.classList.add("disabled");
    }
  });
}

function unClicked(betygSel) {
  betyg.forEach((element) => {
    const selectedByteg = document.getElementById(
      element.grade + betygSel.id.substring(1, betygSel.id.length)
    ); //D3
    selectedByteg.classList.remove(
      document.getElementById(
        element.grade + betygSel.id.substring(1, betygSel.id.length)
      ).classList[1]
    );
  });
}

function selectedSub(subject) {
  if (document.getElementById(subject.id).value != "empty") {
    betyg.forEach((element) => {
      const selectedByteg = document.getElementById(
        element.grade + subject.id.substring(3, subject.id.length)
      ); //D3

      selectedByteg.classList.remove("disabled");
    });
  } else if (document.getElementById(subject.id).value == "empty") {
    betyg.forEach((element) => {
      const selectedByteg = document.getElementById(
        element.grade + subject.id.substring(3, subject.id.length)
      ); //D3
      selectedByteg.classList.add("disabled");
    });
  }
}

function checkAll() {
  if (document.getElementById("myValue").value <= 20) {
    console.log(document.getElementById("myValue").value);
  } else if (document.getElementById("myValue").value === null) {
    alert("Hello! I am an alert box!!");
  }
}
