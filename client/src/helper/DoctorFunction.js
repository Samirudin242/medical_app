export function getAbilities(ability) {
  if (ability !== "") {
    for (let i = 0; i < ability.length; i++) {
      if (ability[i] === ",") {
        doctorAbility = ability.split(",");
        return;
      }
    }
  } else if (ability !== "") {
    doctorAbility.push(ability);
  }
}

export function getDisieases(disease) {
  if (disease !== "") {
    for (let i = 0; i < disease.length; i++) {
      if (disease[i] === ",") {
        doctorDisease = disease.split(",");
        return;
      }
    }
  } else if (disease !== "") {
    doctorDisease.push(disease);
  }
}

// exports = {
//   getAbilities,
//   getDisieases,
// };
