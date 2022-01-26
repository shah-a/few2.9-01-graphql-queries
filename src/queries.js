const q1 = `query q1 {
  person(personID: 22) {
    name
  }
}`;

const q2 = `query q2 {
  person(personID: 20) {
    name
    height
    eyeColor
  }
}`;

const q3 = `query q3 {
  person(personID: 10) {
    name
    homeworld {
      name
    }
  }
}`;

const q4 = `query q4 {
  allSpecies {
    totalCount
  }
}`;

const q5 = `query q5 {
  allVehicles {
    vehicles {
      name
    }
  }
}`;

const q6 = `query q6 {
  person(personID: 1) {
    vehicleConnection {
      vehicles {
        name
        model
      }
    }
  }
}`;

const q7 = `query q7 {
  person(personID: 4) {
    starshipConnection {
      starships {
        name
        model
        maxAtmospheringSpeed
      }
    }
  }
}`;

const q8 = `query q8 {
  p1: person(personID: 2) {
    name
    eyeColor
  }
  p2: person(personID: 3) {
    name
    eyeColor
  }
}`;

const q9 = `query q9 {
  p1: person(personID: 13) {
    name
    homeworld {
      name
    }
  }
  p2: person(personID: 14) {
    name
    homeworld {
      name
    }
  }
}`;

const q10 = `query q10 {
  p1: person(personID: 2) {
    name
    filmConnection {
      films {
        title
        director
      }
    }
  }
  p2: person(personID: 5) {
    name
    filmConnection {
      films {
        title
        director
      }
    }
  }
}`;

export default [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
