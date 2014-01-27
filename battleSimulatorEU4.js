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
}

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
}

function updatePipsAttInf() {
    var listSelect = document.getElementById("listPipsAttInf");
    var index = listSelect.selectedIndex;
    var value = listSelect.options[index].value;
    var valArray = value.split(",");

    (document.getElementsByName("attInfMoralOff")[0]).value = valArray[0];
    (document.getElementsByName("attInfMoralDef")[0]).value = valArray[1];
    (document.getElementsByName("attInfFireOff")[0]).value = valArray[2];
    (document.getElementsByName("attInfFireDef")[0]).value = valArray[3];
    (document.getElementsByName("attInfShockOff")[0]).value = valArray[4];
    (document.getElementsByName("attInfShockDef")[0]).value = valArray[5];
}

function updatePipsDefInf() {
    var listSelect = document.getElementById("listPipsDefInf");
    var index = listSelect.selectedIndex;
    var value = listSelect.options[index].value;
    var valArray = value.split(",");

    (document.getElementsByName("defInfMoralOff")[0]).value = valArray[0];
    (document.getElementsByName("defInfMoralDef")[0]).value = valArray[1];
    (document.getElementsByName("defInfFireOff")[0]).value = valArray[2];
    (document.getElementsByName("defInfFireDef")[0]).value = valArray[3];
    (document.getElementsByName("defInfShockOff")[0]).value = valArray[4];
    (document.getElementsByName("defInfShockDef")[0]).value = valArray[5];
}

function updatePipsAttCav() {
    var listSelect = document.getElementById("listPipsAttCav");
    var index = listSelect.selectedIndex;
    var value = listSelect.options[index].value;
    var valArray = value.split(",");

    (document.getElementsByName("attCavMoralOff")[0]).value = valArray[0];
    (document.getElementsByName("attCavMoralDef")[0]).value = valArray[1];
    (document.getElementsByName("attCavFireOff")[0]).value = valArray[2];
    (document.getElementsByName("attCavFireDef")[0]).value = valArray[3];
    (document.getElementsByName("attCavShockOff")[0]).value = valArray[4];
    (document.getElementsByName("attCavShockDef")[0]).value = valArray[5];
}

function updatePipsDefCav() {
    var listSelect = document.getElementById("listPipsDefCav");
    var index = listSelect.selectedIndex;
    var value = listSelect.options[index].value;
    var valArray = value.split(",");

    (document.getElementsByName("defCavMoralOff")[0]).value = valArray[0];
    (document.getElementsByName("defCavMoralDef")[0]).value = valArray[1];
    (document.getElementsByName("defCavFireOff")[0]).value = valArray[2];
    (document.getElementsByName("defCavFireDef")[0]).value = valArray[3];
    (document.getElementsByName("defCavShockOff")[0]).value = valArray[4];
    (document.getElementsByName("defCavShockDef")[0]).value = valArray[5];
}

function updatePipsAttArt() {
    var listSelect = document.getElementById("listPipsAttArt");
    var index = listSelect.selectedIndex;
    var value = listSelect.options[index].value;
    var valArray = value.split(",");

    (document.getElementsByName("attArtMoralOff")[0]).value = valArray[0];
    (document.getElementsByName("attArtMoralDef")[0]).value = valArray[1];
    (document.getElementsByName("attArtFireOff")[0]).value = valArray[2];
    (document.getElementsByName("attArtFireDef")[0]).value = valArray[3];
    (document.getElementsByName("attArtShockOff")[0]).value = valArray[4];
    (document.getElementsByName("attArtShockDef")[0]).value = valArray[5];
}

function updatePipsDefArt() {
    var listSelect = document.getElementById("listPipsDefArt");
    var index = listSelect.selectedIndex;
    var value = listSelect.options[index].value;
    var valArray = value.split(",");

    (document.getElementsByName("defArtMoralOff")[0]).value = valArray[0];
    (document.getElementsByName("defArtMoralDef")[0]).value = valArray[1];
    (document.getElementsByName("defArtFireOff")[0]).value = valArray[2];
    (document.getElementsByName("defArtFireDef")[0]).value = valArray[3];
    (document.getElementsByName("defArtShockOff")[0]).value = valArray[4];
    (document.getElementsByName("defArtShockDef")[0]).value = valArray[5];
}

function reset() {
}

function parseDiceSequence(diceSequence) {
    var diceArrayText = diceSequence.split(",");
    var diceArray = [];

    for (var i = 0; i < diceArrayText.length; i++) {
        var item = diceArrayText[i];

        if (item == "?") {
            diceArray.push(-1);
        } else {
            diceArray.push(parseInt(item));
        }
    }

    return diceArray;
}

function restart() {
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

    var attDice = document.forms["options"].attDice.value;
    var attDiceSequence = parseDiceSequence(attDice);

    var armyAtt = new Army(leadAttFire, leadAttShock, 0, attTerMod, attWidth, attMoral, attInfAbi, attCavAbi, attArtAbi, attDiscipline, attTactics, attDiceSequence);

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
    }

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
    }

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
    }

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

    var defDice = document.forms["options"].defDice.value;
    var defDiceSequence = parseDiceSequence(defDice);

    var armyDef = new Army(leadDefFire, leadDefShock, 0, defTerMod, defWidth, defMoral, defInfAbi, defCavAbi, defArtAbi, defDiscipline, defTactics, defDiceSequence);

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
    }

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
    }

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
    }

    battle = new Battle(armyAtt, armyDef);

    show();

    if (battle.attackerCur.getSize() != battle.defenderCur.getSize()) {
        alert("ERROR: attacker's army (" + battle.attackerCur.getSize() + ") and defender's army (" + battle.defenderCur.getSize() + ") have different size.");
        throw "armies have different size";
    }
}

function nextDay() {
    if (!battle) {
        restart();
    }
    battle.nextDay();

    document.getElementById("days").innerHTML = battle.days.toString();
    document.getElementById("phase").innerHTML = battle.phase.toString();

    document.getElementById("attDie").innerHTML = battle.attackerCur.die.toString();
    document.getElementById("defDie").innerHTML = battle.defenderCur.die.toString();

    show();
}

function result() {
    null;
}

function show() {
    document.getElementById("attCurInf").innerHTML = battle.attackerCur.getSize("inf").toString();
    document.getElementById("attCurCav").innerHTML = battle.attackerCur.getSize("cav").toString();
    document.getElementById("attCurArt").innerHTML = battle.attackerCur.getSize("art").toString();
    document.getElementById("attCurMoral").innerHTML = battle.attackerCur.getMoral().toFixed(2);

    document.getElementById("defCurInf").innerHTML = battle.defenderCur.getSize("inf").toString();
    document.getElementById("defCurCav").innerHTML = battle.defenderCur.getSize("cav").toString();
    document.getElementById("defCurArt").innerHTML = battle.defenderCur.getSize("art").toString();
    document.getElementById("defCurMoral").innerHTML = battle.defenderCur.getMoral().toFixed(2);

    document.getElementById("attBackRow").innerHTML = battle.attackerCur.getBackRow();
    document.getElementById("attFrontRow").innerHTML = battle.attackerCur.getFrontRow();

    document.getElementById("defBackRow").innerHTML = battle.defenderCur.getBackRow();
    document.getElementById("defFrontRow").innerHTML = battle.defenderCur.getFrontRow();
}

// ********************
// Mécaniques de combat
// ********************
var globalID = 0;
var battle = null;

var Unit = (function () {
    function Unit(type, men, moral, maneuver, fireOff, fireDef, shockOff, shockDef, moralOff, moralDef, fireMod, shockMod, ability, discipline, tactics, posX, posRow) {
        this.target = null;
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
    }
    Unit.prototype.setTarget = function (oppArmy) {
        this.target = oppArmy.getUnit(this.posX, this.posRow);
    };

    Unit.prototype.applyDamage = function () {
        this.men -= this.casualties;
        this.men = Math.max(this.men, 0);

        this.moral -= this.moralDamage;
        this.moral -= 0.01;
        this.moral = Math.max(this.moral, 0);
    };
    return Unit;
})();

var Leader = (function () {
    function Leader(fire, shock, maneuver) {
        this.fire = fire;
        this.shock = shock;
        this.maneuver = maneuver;
    }
    return Leader;
})();

var Army = (function () {
    function Army(leadFire, leadShock, leadManeuver, terrainMod, combatWidth, moralMax, infAbi, cavAbi, artAbi, discipline, tactics, diceSequence) {
        this.units = [];
        this.leader = null;
        this.diceSequence = [];
        this.diceSequenceIndex = 0;
        this.leader = new Leader(leadFire, leadShock, leadManeuver);
        this.terrainMod = terrainMod;
        this.combatWidth = combatWidth;
        this.moralMax = moralMax;
        this.infAbi = infAbi;
        this.cavAbi = cavAbi;
        this.artAbi = artAbi;
        this.discipline = discipline;
        this.tactics = tactics;
        this.diceSequence = diceSequence;
    }
    Army.prototype.getSize = function (type) {
        var size = 0;

        if (!type) {
            return this.units.length * 1000;
        } else {
            for (var i = 0; i < this.units.length; i++) {
                var unit = this.units[i];
                if (unit.type == type) {
                    size += unit.men;
                }
            }
            return size;
        }
    };

    Army.prototype.getMoral = function () {
        var moral = 0.0;

        for (var i = 0; i < this.units.length; i++) {
            var unit = this.units[i];

            moral += unit.moral;
        }

        return moral / this.units.length;
    };

    Army.prototype.getUnit = function (x, row) {
        for (var i = 0; i < this.units.length; i++) {
            var unit = this.units[i];

            if (unit.posX == x && unit.posRow == row) {
                return unit;
            }
        }

        return null;
    };

    Army.prototype.addUnit = function (type, men, maneuver, fireOff, fireDef, shockOff, shockDef, moralOff, moralDef, fireMod, shockMod) {
        var ability;
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
            default:
                break;
        }

        var unit = new Unit(type, men, this.moralMax, maneuver, fireOff, fireDef, shockOff, shockDef, moralOff, moralDef, fireMod, shockMod, ability, this.discipline, this.tactics, this.units.length, 0);

        this.units.push(unit);
    };

    Army.prototype.setTargets = function (oppArmy) {
        for (var i = 0; i < this.units.length; i++) {
            var unit = this.units[i];

            unit.setTarget(oppArmy);
        }
    };

    Army.prototype.dieRoll = function () {
        var min = 0;
        var max = 9;
        var curDie = this.diceSequence[this.diceSequenceIndex];

        if (curDie < 0) {
            this.die = Math.floor(Math.random() * (max - min + 1) + min);
        } else {
            this.die = curDie;
        }

        this.diceSequenceIndex++;
        if (this.diceSequenceIndex >= this.diceSequence.length) {
            this.diceSequenceIndex = 0;
        }

        return this.die;
    };

    Army.prototype.getBackRow = function () {
        return "";
    };

    Army.prototype.getFrontRow = function () {
        var result = "";

        for (var i = 0; i < this.units.length; i++) {
            var unit = this.units[i];

            switch (unit.type) {
                case "inf":
                    result += "I";
                    break;
                case "cav":
                    result += "C";
                    break;
                case "art":
                    result += "A";
                    break;
                default:
                    break;
            }
        }
        return result;
    };
    return Army;
})();

var Battle = (function () {
    function Battle(attacker, defender) {
        this.attackerInit = null;
        this.defenderInit = null;
        this.attackerCur = null;
        this.defenderCur = null;
        this.attackerInit = attacker;
        this.defenderInit = defender;
        this.attackerCur = attacker;
        this.defenderCur = defender;

        this.days = 0;
        this.phase = "fire";
        this.dieRoll();
        this.attackerCur.setTargets(this.defenderCur);
        this.defenderCur.setTargets(this.attackerCur);
    }
    Battle.prototype.nextDay = function () {
        this.days += 1;

        if (this.days % 3 == 0) {
            if (this.phase == "fire") {
                this.phase = "shock";
                this.attackerCur.setTargets(this.defenderCur);
                this.defenderCur.setTargets(this.attackerCur);
                this.dieRoll();
            } else {
                this.phase = "fire";
                this.attackerCur.setTargets(this.defenderCur);
                this.defenderCur.setTargets(this.attackerCur);
                this.dieRoll();
            }
        }

        // Calcul des dommages =============================================================
        // Armée attaquante
        var attDie = this.attackerCur.die;
        var terMod = this.attackerCur.terrainMod;
        var attMoralMax = this.attackerCur.moralMax;
        var leadAttSkill;
        var leadDefSkill;

        if (this.phase == "fire") {
            leadAttSkill = this.attackerCur.leader.fire;
            leadDefSkill = this.defenderCur.leader.fire;
        } else {
            leadAttSkill = this.attackerCur.leader.shock;
            leadDefSkill = this.defenderCur.leader.shock;
        }

        for (var i = 0; i < this.attackerCur.units.length; i++) {
            var unit = this.attackerCur.units[i];

            this.computeDamage(unit, attDie, leadAttSkill, leadDefSkill, attMoralMax, terMod);
        }

        // Armée défendante
        var attDie = this.defenderCur.die;
        var terMod = this.defenderCur.terrainMod;
        var attMoralMax = this.defenderCur.moralMax;
        var leadAttSkill;
        var leadDefSkill;

        if (this.phase == "fire") {
            leadAttSkill = this.defenderCur.leader.fire;
            leadDefSkill = this.attackerCur.leader.fire;
        } else {
            leadAttSkill = this.defenderCur.leader.shock;
            leadDefSkill = this.attackerCur.leader.shock;
        }

        for (var i = 0; i < this.defenderCur.units.length; i++) {
            var unit = this.defenderCur.units[i];

            this.computeDamage(unit, attDie, leadAttSkill, leadDefSkill, attMoralMax, terMod);
        }

        for (var i = 0; i < this.attackerCur.units.length; i++) {
            var unit = this.attackerCur.units[i];

            unit.applyDamage();
        }

        for (var i = 0; i < this.defenderCur.units.length; i++) {
            var unit = this.defenderCur.units[i];

            unit.applyDamage();
        }
    };

    Battle.prototype.dieRoll = function () {
        var min = 0;
        var max = 9;

        this.attackerCur.dieRoll();
        this.defenderCur.dieRoll();
    };

    Battle.prototype.dieResult = function (die, attLead, defLead, attPips, defPips, terMod) {
        var result = die + (attLead - defLead) + (attPips - defPips) - terMod;
        return result;
    };

    Battle.prototype.baseCasualties = function (dieResult) {
        if (dieResult <= -2) {
            return 4;
        } else if (dieResult == -1) {
            return 8;
        } else if (dieResult == 0) {
            return 12;
        } else if (dieResult == 1) {
            return 16;
        } else if (dieResult == 2) {
            return 20;
        } else if (dieResult == 3) {
            return 24;
        } else if (dieResult == 4) {
            return 32;
        } else if (dieResult == 5) {
            return 40;
        } else if (dieResult == 6) {
            return 50;
        } else if (dieResult == 7) {
            return 60;
        } else if (dieResult == 8) {
            return 70;
        } else if (dieResult == 9) {
            return 80;
        } else if (dieResult == 10) {
            return 90;
        } else if (dieResult == 11) {
            return 100;
        } else if (dieResult == 12) {
            return 100;
        } else {
            return 120;
        }

        return 0;
    };

    Battle.prototype.casualties = function (baseCasualties, men, unitModifier, combatAbility, discipline, tactics) {
        return Math.round(baseCasualties * men / 1000 * unitModifier * (100 + combatAbility) / 100 * (discipline / 100) / tactics);
    };

    Battle.prototype.moralDamage = function (baseCasualties, men, moralMax, combatAbility, discipline, tactics) {
        return baseCasualties * 0.01 / 6 * men / 1000 * moralMax * (100 + combatAbility) / 100 * (discipline / 100) / tactics;
    };

    Battle.prototype.computeDamage = function (unit, attDie, leadAttSkill, leadDefSkill, attMoralMax, terMod) {
        var attPipsM = unit.moralOff;
        var defPipsM = unit.target.moralDef;

        if (this.phase == "fire") {
            var attPips = unit.fireOff;
            var defPips = unit.target.fireDef;
            var attMod = unit.fireMod;
        } else {
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
        unit.moralDamage *= 1.1;
        console.log("damage : " + unit.id + " : " + unit.casualties + ", " + unit.moralDamage);
    };
    return Battle;
})();// Battle

//# sourceMappingURL=battleSimulatorEU4.js.map
