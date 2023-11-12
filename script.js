const subjects = [
  { sub: "Svenska 1", point: 100 },
  { sub: "Svenska 2", point: 100 },
  { sub: "Svenska 3", point: 100 },
  { sub: "Engelska 5", point: 100 },
  { sub: "Engelska 6", point: 100 },
  { sub: "Engelska 7", point: 100 },
  { sub: "Matematik 1a", point: 100 },
  { sub: "Matematik 2a", point: 100 },
  { sub: "Matematik 1b", point: 100 },
  { sub: "Matematik 2b", point: 100 },
  { sub: "Matematik 3b", point: 100 },
  { sub: "Matematik 1c", point: 100 },
  { sub: "Matematik 2c", point: 100 },
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
let doneSub = [];
let donebetyg = [];
let ids = [];

let id = 0;
function add() {
  if (document.querySelector(".subjects").children.length / 7 == 0) {
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
      betygBtn.setAttribute("onclick", `clicked(${element.grade}${id})`);
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
    doneSub = [];
    donebetyg = [];
    ids.push(id);
  } else {
    betyg.forEach((element) => {
      if (
        document.getElementById(`${element.grade}${id}`).classList[1] ==
        "clicked"
      ) {
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
          betygBtn.setAttribute("onclick", `clicked(${element.grade}${id})`);
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
        doneSub = [];
        donebetyg = [];
        ids.push(id);
      }
    });
  }
}

function del(delID) {
  const index = ids.indexOf(delID);
  ids.splice(index, 1);
  const subject = document.querySelector(".subjects");
  subject.removeChild(subject.children[`sub${delID}`]);
  betyg.forEach((element) => {
    subject.removeChild(subject.children[`${element.grade}${delID}`]);
  });
  subject.removeChild(subject.children[`del${delID}`]);
  if (delID == id) {
    id = id--;
    id--;
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
      const lockSub = document.getElementById(
        `sub${betygSel.id.substring(1, betygSel.id.length)}`
      );
      lockSub.classList.add("disabled");
      unselectedByteg.classList.add("disabled");
    }
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
  if (id != 0 && theGradeIsWriten()) {
    if (theLastSub()) {
      donebetyg = [];
      let allChild = document.querySelector(".subjects").children.length; //all children
      for (let i = 0; i < allChild; i++) {
        if (i % 7 == 0) {
          doneSub.push(document.querySelector(".subjects").childNodes[i].value);
        }
      }
      for (let x = 0; x < ids.length; x++) {
        betyg.forEach((betygSub) => {
          if (
            document.getElementById(`${betygSub.grade}${ids[x]}`)
              .classList[1] == "clicked"
          ) {
            donebetyg.push(
              document.getElementById(`${betygSub.grade}${ids[x]}`).id[0]
            );
          }
        });
      }
    }
    cal();
  }
}

function theLastSub() {
  let x = false;
  betyg.forEach((element) => {
    if (
      document.getElementById(`${element.grade}${id}`).classList[1] == "clicked"
    ) {
      x = true;
    }
  });
  return x;
}
function theGradeIsWriten() {
  if (
    document.getElementById("myValue").value <= 20 &&
    document.getElementById("myValue").value.length != 0
  ) {
    return true;
  }
}

function cal() {
  let Mprel = document.getElementById("myValue").value;
  let MK;
  if (Mprel >= 10 && Mprel <= 11.99) {
    MK = 0.5;
  }
  if (Mprel >= 12 && Mprel <= 12.99) {
    MK = 0.75;
  }
  if (Mprel >= 13 && Mprel <= 13.99) {
    MK = 1;
  }
  if (Mprel >= 14 && Mprel <= 14.99) {
    MK = 1.25;
  }
  if (Mprel >= 15 && Mprel <= 15.99) {
    MK = 1.5;
  }
  if (Mprel >= 16 && Mprel <= 16.99) {
    MK = 1.75;
  }
  let A = 0;
  let B = 0;
  doneSub.forEach((element) => {
    for (let i = 0; i < subjects.length; i++) {
      if (element == subjects[i].sub) {
        A = A + subjects[i].point;
      }
    }
  });
  donebetyg.forEach((element) => {
    for (let i = 0; i < betyg.length; i++) {
      if (element == betyg[i].grade) {
        B = B + 100 * betyg[i].value;
      }
    }
  });

  let result = (Mprel * 2500 + 1.2 * B) / (2500 + A) + MK;
  document.getElementById("result").textContent = result;
}
