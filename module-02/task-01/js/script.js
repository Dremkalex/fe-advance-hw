const resortTaba = 'Taba';
const resortSharm = 'Sharm';
const resortHurgada = 'Hurgada';

const resort = prompt(`Enter a number from \"1\" to \"3\" where:
1 = ${resortTaba},
2 = ${resortSharm},
3 = ${resortHurgada}`, '');

switch (resort) {
  case '1': alert (`Your choice is ${resortTaba}!`); break;
  case '2': alert (`Your choice is ${resortSharm}!`); break;
  case '3': alert (`Your choice is ${resortHurgada}!`); break;
  case '': alert ('You didn\'t choose anything!'); break;
  case null: alert ('You canceled choise!'); break;
  default: alert (`Your choice is uncorrect! Option "${resort}" is not at the list!`)
}
