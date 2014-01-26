// ***********************************
// Fonctions relatives aux formulaires
// ***********************************

function sumAttReg() {
  var attInfReg = parseInt(document.forms["pips"].attInfReg.value);
  var attCavReg = parseInt(document.forms["pips"].attCavReg.value);
  var attArtReg = parseInt(document.forms["pips"].attArtReg.value);

  if (isNaN(attInfReg)) {
    document.forms["pips"].attInfReg.value = '0';
  }
  if (isNaN(attCavReg)) {
    document.forms["pips"].attCavReg.value = '0';
  }
  if (isNaN(attArtReg)) {
    document.forms["pips"].attArtReg.value = '0';
  }
  var sum = attInfReg + attCavReg + attArtReg;
  document.getElementById("attTotal").innerHTML = sum.toString();
} // sumAttReg

function sumDefReg() {
  var defInfReg = parseInt(document.forms["pips"].defInfReg.value);
  var defCavReg = parseInt(document.forms["pips"].defCavReg.value);
  var defArtReg = parseInt(document.forms["pips"].defArtReg.value);

  if (isNaN(defInfReg)) {
    document.forms["pips"].defInfReg.value = '0';
  }
  if (isNaN(defCavReg)) {
    document.forms["pips"].defCavReg.value = '0';
  }
  if (isNaN(defArtReg)) {
    document.forms["pips"].defArtReg.value = '0';
  }
  var sum = defInfReg + defCavReg + defArtReg;
  document.getElementById("defTotal").innerHTML = sum.toString();
} // sumDefReg

function reset() {
} // reset

function check() {
  var leadAttFire = parseInt(document.forms["leader"].attFire.value);
  var leadAttShock = parseInt(document.forms["leader"].attShock.value);

  var attTerMod = parseInt(document.forms["misc"].attTerMod.value);
  var attWidth = parseInt(document.forms["misc"].attWidth.value);
  var attMoral = parseFloat(document.forms["misc"].attMor.value);
  var attInfAbi = parseInt(document.forms["misc"].attInfAbi.value);
  var attCavAbi = parseInt(document.forms["misc"].attCavAbi.value);
  var attArtAbi = parseInt(document.forms["misc"].attArtAbi.value);
  var attDiscipline = parseInt(document.forms["misc"].attDiscipline.value);
  var attTactics = parseFloat(document.forms["misc"].attTactics.value);

  var armyAtt: Army = new Army(leadAttFire, leadAttShock, 0, attTerMod, attWidth, attMoral, attInfAbi, attCavAbi, attArtAbi, attDiscipline, attTactics);

  var attInfReg = parseInt(document.forms["pips"].attInfReg.value);
  var attInfFireOff = parseInt(document.forms["pips"].attInfFireOff.value);
  var attInfFireDef = parseInt(document.forms["pips"].attInfFireDef.value);
  var attInfShockOff = parseInt(document.forms["pips"].attInfShockOff.value);
  var attInfShockDef = parseInt(document.forms["pips"].attInfShockDef.value);
  var attInfMoralOff = parseInt(document.forms["pips"].attInfMoralOff.value);
  var attInfMoralDef = parseInt(document.forms["pips"].attInfMoralDef.value);

  var attInfFireMod = parseFloat(document.forms["modifiers"].attInfFire.value);
  var attInfShockMod = parseFloat(document.forms["modifiers"].attInfShock.value);

  for (var i = 0; i < attInfReg; i++) {
    armyAtt.addUnit("inf", 1000, 1, attInfFireOff, attInfFireDef, attInfShockOff, attInfShockDef, attInfMoralOff, attInfMoralDef, attInfFireMod, attInfShockMod);
  } // for i

  var attCavReg = parseInt(document.forms["pips"].attCavReg.value);
  var attCavFireOff = parseInt(document.forms["pips"].attCavFireOff.value);
  var attCavFireDef = parseInt(document.forms["pips"].attCavFireDef.value);
  var attCavShockOff = parseInt(document.forms["pips"].attCavShockOff.value);
  var attCavShockDef = parseInt(document.forms["pips"].attCavShockDef.value);
  var attCavMoralOff = parseInt(document.forms["pips"].attCavMoralOff.value);
  var attCavMoralDef = parseInt(document.forms["pips"].attCavMoralDef.value);

  var attCavFireMod = parseFloat(document.forms["modifiers"].attCavFire.value);
  var attCavShockMod = parseFloat(document.forms["modifiers"].attCavShock.value);

  for (var i = 0; i < attCavReg; i++) {
    armyAtt.addUnit("cav", 1000, 2, attCavFireOff, attCavFireDef, attCavShockOff, attCavShockDef, attCavMoralOff, attCavMoralDef, attCavFireMod, attCavShockMod);
  } // for i

  var attArtReg = parseInt(document.forms["pips"].attArtReg.value);
  var attArtFireOff = parseInt(document.forms["pips"].attArtFireOff.value);
  var attArtFireDef = parseInt(document.forms["pips"].attArtFireDef.value);
  var attArtShockOff = parseInt(document.forms["pips"].attArtShockOff.value);
  var attArtShockDef = parseInt(document.forms["pips"].attArtShockDef.value);
  var attArtMoralOff = parseInt(document.forms["pips"].attArtMoralOff.value);
  var attArtMoralDef = parseInt(document.forms["pips"].attArtMoralDef.value);

  var attArtFireMod = parseFloat(document.forms["modifiers"].attArtFire.value);
  var attArtShockMod = parseFloat(document.forms["modifiers"].attArtShock.value);

  for (var i = 0; i < attArtReg; i++) {
    armyAtt.addUnit("art", 1000, 2, attArtFireOff, attArtFireDef, attArtShockOff, attArtShockDef, attArtMoralOff, attArtMoralDef, attArtFireMod, attArtShockMod);
  } // for i

  var leadDefFire = parseInt(document.forms["leader"].defFire.value);
  var leadDefShock = parseInt(document.forms["leader"].defShock.value);
  var defTerMod = parseInt(document.forms["misc"].defTerMod.value);
  var defWidth = parseInt(document.forms["misc"].defWidth.value);
  var defMoral = parseFloat(document.forms["misc"].defMor.value);
  var defInfAbi = parseInt(document.forms["misc"].defInfAbi.value);
  var defCavAbi = parseInt(document.forms["misc"].defCavAbi.value);
  var defArtAbi = parseInt(document.forms["misc"].defArtAbi.value);
  var defDiscipline = parseInt(document.forms["misc"].defDiscipline.value);
  var defTactics = parseFloat(document.forms["misc"].defTactics.value);

  var armyDef: Army = new Army(leadDefFire, leadDefShock, 0, defTerMod, defWidth, defMoral, defInfAbi, defCavAbi, defArtAbi, defDiscipline, defTactics);

  var defInfReg = parseInt(document.forms["pips"].defInfReg.value);
  var defInfFireOff = parseInt(document.forms["pips"].defInfFireOff.value);
  var defInfFireDef = parseInt(document.forms["pips"].defInfFireDef.value);
  var defInfShockOff = parseInt(document.forms["pips"].defInfShockOff.value);
  var defInfShockDef = parseInt(document.forms["pips"].defInfShockDef.value);
  var defInfMoralOff = parseInt(document.forms["pips"].defInfMoralOff.value);
  var defInfMoralDef = parseInt(document.forms["pips"].defInfMoralDef.value);

  var defInfFireMod = parseFloat(document.forms["modifiers"].defInfFire.value);
  var defInfShockMod = parseFloat(document.forms["modifiers"].defInfShock.value);

  for (var i = 0; i < defInfReg; i++) {
    armyDef.addUnit("inf", 1000, 1, defInfFireOff, defInfFireDef, defInfShockOff, defInfShockDef, defInfMoralOff, defInfMoralDef, defInfFireMod, defInfShockMod);
  } // for i

  var defCavReg = parseInt(document.forms["pips"].defCavReg.value);
  var defCavFireOff = parseInt(document.forms["pips"].defCavFireOff.value);
  var defCavFireDef = parseInt(document.forms["pips"].defCavFireDef.value);
  var defCavShockOff = parseInt(document.forms["pips"].defCavShockOff.value);
  var defCavShockDef = parseInt(document.forms["pips"].defCavShockDef.value);
  var defCavMoralOff = parseInt(document.forms["pips"].defCavMoralOff.value);
  var defCavMoralDef = parseInt(document.forms["pips"].defCavMoralDef.value);

  var defCavFireMod = parseFloat(document.forms["modifiers"].defCavFire.value);
  var defCavShockMod = parseFloat(document.forms["modifiers"].defCavShock.value);

  for (var i = 0; i < defCavReg; i++) {
    armyDef.addUnit("cav", 1000, 2, defCavFireOff, defCavFireDef, defCavShockOff, defCavShockDef, defCavMoralOff, defCavMoralDef, defCavFireMod, defCavShockMod);
  } // for i

  var defArtReg = parseInt(document.forms["pips"].defArtReg.value);
  var defArtFireOff = parseInt(document.forms["pips"].defArtFireOff.value);
  var defArtFireDef = parseInt(document.forms["pips"].defArtFireDef.value);
  var defArtShockOff = parseInt(document.forms["pips"].defArtShockOff.value);
  var defArtShockDef = parseInt(document.forms["pips"].defArtShockDef.value);
  var defArtMoralOff = parseInt(document.forms["pips"].defArtMoralOff.value);
  var defArtMoralDef = parseInt(document.forms["pips"].defArtMoralDef.value);

  var defArtFireMod = parseFloat(document.forms["modifiers"].defArtFire.value);
  var defArtShockMod = parseFloat(document.forms["modifiers"].defArtShock.value);

  for (var i = 0; i < defArtReg; i++) {
    armyDef.addUnit("art", 1000, 2, defArtFireOff, defArtFireDef, defArtShockOff, defArtShockDef, defArtMoralOff, defArtMoralDef, defArtFireMod, defArtShockMod);
  } // for i

  battle = new Battle(armyAtt, armyDef);

  show();
} // check

function nextDay() {
  if (!battle) {
    check();
  }
  battle.nextDay();

  document.getElementById("days").innerHTML = battle.days.toString();
  document.getElementById("phase").innerHTML = battle.phase.toString();

  document.getElementById("attDie").innerHTML = battle.attackerCur.die.toString();
  document.getElementById("defDie").innerHTML = battle.defenderCur.die.toString();

  show();
} // nextDay

function result() {
  null;
} // result

function show() {
  document.getElementById("attCurInf").innerHTML = battle.attackerCur.getSize("inf").toString();
  document.getElementById("attCurCav").innerHTML = battle.attackerCur.getSize("cav").toString();
  document.getElementById("attCurArt").innerHTML = battle.attackerCur.getSize("art").toString();
  document.getElementById("attCurMoral").innerHTML = battle.attackerCur.getMoral().toFixed(2);

  document.getElementById("defCurInf").innerHTML = battle.defenderCur.getSize("inf").toString();
  document.getElementById("defCurCav").innerHTML = battle.defenderCur.getSize("cav").toString();
  document.getElementById("defCurArt").innerHTML = battle.defenderCur.getSize("art").toString();
  document.getElementById("defCurMoral").innerHTML = battle.defenderCur.getMoral().toFixed(2);
}

// *********************
// Méchaniques de combat
// *********************
var globalID = 0;
var battle: Battle = null;

class Unit {
  id: string;
  type: string;
  men: number;
  moral: number;
  maneuver: number;
  fireOff: number;
  fireDef: number;
  shockOff: number;
  shockDef: number;
  moralOff: number;
  moralDef: number;
  fireMod: number;
  shockMod: number;
  ability: number;
  discipline: number;
  tactics: number;
  posX: number;
  posRow: number;
  target: Unit = null;
  casualties: number;
  moralDamage: number;

  constructor(type: string, men: number, moral: number, maneuver: number, fireOff: number, fireDef: number, shockOff: number, shockDef: number, moralOff: number, moralDef: number, fireMod: number, shockMod: number, ability: number, discipline: number, tactics: number, posX: number, posRow: number) {
    this.id = globalID.toString();
    globalID++;
    this.type = type;
    this.men = men;
    this.moral = moral;
    this.maneuver = maneuver;
    this.fireOff = fireOff;
    this.fireDef = fireDef;
    this.shockOff = shockOff;
    this.shockDef = shockDef;
    this.moralOff = moralOff;
    this.moralDef = moralDef;
    this.fireMod = fireMod;
    this.shockMod = shockMod;
    this.ability = ability;
    this.discipline = discipline;
    this.tactics = tactics;

    this.posX = posX;
    this.posRow = posRow;
  } // constructor

  setTarget(oppArmy: Army) {
    this.target = oppArmy.getUnit(this.posX, this.posRow);
  } // setTarget

  applyDamage() {
    this.men -= this.casualties;
    this.men = Math.max(this.men, 0);

    this.moral -= this.moralDamage;
    this.moral -= 0.01; // patch 1.4
    this.moral = Math.max(this.moral, 0);
  } // applyDamage
} // Unit

class Leader {
  fire: number;
  shock: number;
  maneuver: number;

  constructor(fire: number, shock: number, maneuver: number) {
    this.fire = fire;
    this.shock = shock;
    this.maneuver = maneuver;
  } // constructor

} // Leader

class Army {
  units: Unit[] = [];
  leader: Leader = null;
  terrainMod: number;
  combatWidth: number;
  moralMax: number;
  infAbi: number;
  cavAbi: number;
  artAbi: number;
  discipline: number;
  tactics: number;
  die: number;

  constructor(leadFire: number, leadShock: number, leadManeuver: number, terrainMod: number, combatWidth: number, moralMax: number, infAbi: number, cavAbi: number, artAbi: number, discipline: number, tactics: number) {
    this.leader = new Leader(leadFire, leadShock, leadManeuver);
    this.terrainMod = terrainMod;
    this.combatWidth = combatWidth;
    this.moralMax = moralMax;
    this.infAbi = infAbi;
    this.cavAbi = cavAbi;
    this.artAbi = artAbi;
    this.discipline = discipline;
    this.tactics = tactics;
  } // constructor

  getSize(type: string): number {
    var size = 0;

    for (var i = 0; i < this.units.length; i++) {
      var unit = this.units[i];
      if (unit.type == type) {
        size += unit.men;
      }
    } // for i

    return size;
  } // getSize

  getMoral(): number {
    var moral = 0.0;

    for (var i = 0; i < this.units.length; i++) {
      var unit = this.units[i];

      moral += unit.moral;
    } // for i

    return moral / this.units.length;
  }

  getUnit(x, row): Unit {
    for (var i = 0; i < this.units.length; i++) {
      var unit = this.units[i];

      if (unit.posX == x && unit.posRow == row) {
        return unit;
      }
    } // for i

    return null;
  } // getUnit

  addUnit(type: string, men: number, maneuver: number, fireOff: number, fireDef: number, shockOff: number, shockDef: number, moralOff: number, moralDef: number, fireMod: number, shockMod: number) {
    var ability: number;
    switch (type) {
      case "inf":
        ability = this.infAbi;
        break;
      case "cav":
        ability = this.cavAbi;
        break;
      case "art":
        ability = this.artAbi;
        break;
    } // switch type

    var unit = new Unit(type, men, this.moralMax, maneuver, fireOff, fireDef, shockOff, shockDef, moralOff, moralDef, fireMod, shockMod, ability, this.discipline, this.tactics, this.units.length, 0);

    this.units.push(unit);
  } // addUnit

  setTargets(oppArmy: Army) {
    for (var i = 0; i < this.units.length; i++) {
      var unit = this.units[i];

      unit.setTarget(oppArmy);
    } // for i
  } // setTargets
} // Army

class Battle {
  attackerInit: Army = null;
  defenderInit: Army = null;
  attackerCur: Army = null;
  defenderCur: Army = null;

  days: number;
  phase: string;

  constructor(attacker: Army, defender: Army) {
    this.attackerInit = attacker;
    this.defenderInit = defender;
    this.attackerCur = attacker;
    this.defenderCur = defender;

    this.days = 0;
    this.phase = "fire";
    this.dieRoll();
    this.attackerCur.setTargets(this.defenderCur);
    this.defenderCur.setTargets(this.attackerCur);
  } // constructor

  nextDay() {
    this.days += 1;

    if (this.days % 3 == 0) {
      if (this.phase == "fire") {
        this.phase = "shock";
        this.attackerCur.setTargets(this.defenderCur);
        this.defenderCur.setTargets(this.attackerCur);
        this.dieRoll();
      }
      else {
        this.phase = "fire";
        this.attackerCur.setTargets(this.defenderCur);
        this.defenderCur.setTargets(this.attackerCur);
        this.dieRoll();
      }
    }

    // Calcul des dommages =============================================================

    // Armée attaquante
    var attDie: number = this.attackerCur.die;
    var terMod: number = this.attackerCur.terrainMod;
    var attMoralMax: number = this.attackerCur.moralMax;
    var leadAttSkill: number;
    var leadDefSkill: number;

    if (this.phase == "fire") {
      leadAttSkill = this.attackerCur.leader.fire;
      leadDefSkill = this.defenderCur.leader.fire;
    }
    else {
      leadAttSkill = this.attackerCur.leader.shock;
      leadDefSkill = this.defenderCur.leader.shock;
    }

    for (var i = 0; i < this.attackerCur.units.length; i++) {
      var unit = this.attackerCur.units[i];

      this.computeDamage(unit, attDie, leadAttSkill, leadDefSkill, attMoralMax, terMod);
    } // for i

    // Armée défendante
    var attDie: number = this.defenderCur.die;
    var terMod: number = this.defenderCur.terrainMod;
    var attMoralMax: number = this.defenderCur.moralMax;
    var leadAttSkill: number;
    var leadDefSkill: number;

    if (this.phase == "fire") {
      leadAttSkill = this.defenderCur.leader.fire;
      leadDefSkill = this.attackerCur.leader.fire;
    }
    else {
      leadAttSkill = this.defenderCur.leader.shock;
      leadDefSkill = this.attackerCur.leader.shock;
    }

    for (var i = 0; i < this.defenderCur.units.length; i++) {
      var unit = this.defenderCur.units[i];

      this.computeDamage(unit, attDie, leadAttSkill, leadDefSkill, attMoralMax, terMod);
    } // for i

    // Application des dommages =============================================================

    // Armée attaquante
    for (var i = 0; i < this.attackerCur.units.length; i++) {
      var unit = this.attackerCur.units[i];

      unit.applyDamage();
    } // for i

    // Armée défendante
    for (var i = 0; i < this.defenderCur.units.length; i++) {
      var unit = this.defenderCur.units[i];

      unit.applyDamage();
    } // for i

  } // nextDay

  dieRoll() {
    var min = 0;
    var max = 9;

    this.attackerCur.die = Math.floor(Math.random() * (max - min + 1) + min);
    this.defenderCur.die = Math.floor(Math.random() * (max - min + 1) + min);
  } // dieRoll

  dieResult(die: number, attLead: number, defLead: number, attPips: number, defPips: number, terMod: number): number {
    var result = die + (attLead - defLead) + (attPips - defPips) - terMod;
    return result;
  } // dieResult

  baseCasualties(dieResult: number): number {
    if (dieResult <= -2) {
      return 4;
    }
    else if (dieResult == -1) {
      return 8;
    }
    else if (dieResult == 0) {
      return 12;
    }
    else if (dieResult == 1) {
      return 16;
    }
    else if (dieResult == 2) {
      return 20;
    }
    else if (dieResult == 3) {
      return 24;
    }
    else if (dieResult == 4) {
      return 32;
    }
    else if (dieResult == 5) {
      return 40;
    }
    else if (dieResult == 6) {
      return 50;
    }
    else if (dieResult == 7) {
      return 60;
    }
    else if (dieResult == 8) {
      return 70;
    }
    else if (dieResult == 9) {
      return 80;
    }
    else if (dieResult == 10) {
      return 90;
    }
    else if (dieResult == 11) {
      return 100;
    }
    else if (dieResult == 12) {
      return 100;
    }
    else {
      return 120;
    }

    return 0
  } // baseCasualties

  casualties(baseCasualties: number, men: number, unitModifier: number, combatAbility: number, discipline: number, tactics: number): number {
    return Math.round(baseCasualties * men / 1000 * unitModifier * (100 + combatAbility) / 100 * (discipline / 100) / tactics);
  }

  moralDamage(baseCasualties: number, men: number, moralMax: number, combatAbility: number, discipline: number, tactics: number): number {
    return baseCasualties * 0.01 / 6 * men / 1000 * moralMax * (100 + combatAbility) / 100 * (discipline / 100) / tactics;
  }

  computeDamage(unit: Unit, attDie: number, leadAttSkill: number, leadDefSkill: number, attMoralMax: number, terMod: number) {
    var attPipsM = unit.moralOff;
    var defPipsM = unit.target.moralDef;

    if (this.phase == "fire") {
      var attPips = unit.fireOff;
      var defPips = unit.target.fireDef;
      var attMod = unit.fireMod;
    }
    else {
      var attPips = unit.shockOff;
      var defPips = unit.target.shockDef;
      var attMod = unit.shockMod;
    }

    var dieResultC = this.dieResult(attDie, leadAttSkill, leadDefSkill, attPips, defPips, terMod);
    var dieResultM = this.dieResult(attDie, leadAttSkill, leadDefSkill, attPipsM, defPipsM, terMod);
    console.log("dieResult : " + unit.id + " : " + dieResultC + ", " + dieResultM);

    var baseCasualtiesC = this.baseCasualties(dieResultC);
    var baseCasualtiesM = this.baseCasualties(dieResultM);
    console.log("baseCasualties : " + unit.id + " : " + baseCasualtiesC + ", " + baseCasualtiesM);

    unit.casualties = this.casualties(baseCasualtiesC, unit.men, attMod, unit.ability, unit.discipline, unit.target.tactics);
    unit.casualties *= Math.round(1 + (this.days - 1) / 100);

    unit.moralDamage = this.moralDamage(baseCasualtiesM, unit.men, attMoralMax, unit.ability, unit.discipline, unit.target.tactics);
    unit.moralDamage *= 1.1; // patch 1.4
    console.log("damage : " + unit.id + " : " + unit.casualties + ", " + unit.moralDamage);
  } // computeDamage
} // Battle
