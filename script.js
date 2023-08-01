// Initial Variables
job = 'freelance';
race = 'mystery';
classChoices = ['bard', 'cleric', 'barbarian', 'wizard', 'rogue'];
raceChoices = ['dwarf', 'elf', 'human'];

// Number Generators
numGenClass = Math.floor(Math.random()* 5);
numGenRace = Math.floor(Math.random()* 3);

// Functions
const generateClass = () => {
    const num = numGenClass;
    return classChoices[num];
}
const generateRace = () => {
    const num = numGenRace;
    return raceChoices[num];
}
const generateStat = () => {
    const numGenStat = Math.floor(Math.random()* 18) + 6;
    return numGenStat;
}

// Roll Them Dice!
job = generateClass();
stats = {
    STR: generateStat(),
    DEX: generateStat(),
    CON: generateStat(),
    INT: generateStat(),
    WIS: generateStat(),
    CHA: generateStat()
};

// Race modifiers
switch (race) {
    case 'dwarf':
        stats.CON = stats.CON +2;
        stats.WIS = stats.WIS +1;
    break;
    case 'elf':
        stats.DEX = stats.DEX +2;
        stats.INT = stats.INT +1;
    break;
    case 'humnan':
        stats.STR = stats.STR +1;
        stats.DEX = stats.DEX +1;
        stats.CON = stats.CON +1;
        stats.INT = stats.INT +1;
        stats.WIS = stats.WIS +1;
        stats.CHA = stats.CHA +1;
    break;
    default:
};

// Generate Messages
const generateMessage = () =>{
    switch (job) {
        case 'bard':
            if (stats.CHA >= 18){
                return 'Even for a Bard, your Charisma is EXCEPTIONAL!';
            } else if (stats.CHA <= 12) {
                return 'Unfortunately, your Charisma is kinda weak for a bard.';
            } else {
                return 'For a Bard, you have a failry decent Charisma score.';
            };
        break;
        case 'cleric':
            if (stats.WIS >= 18){
                return 'Even for a Cleric, your Wisdom is EXCEPTIONAL!';
            } else if (stats.WIS <= 12) {
                return 'Unfortunately, your Wisdom is kinda weak for a Cleric.';
            } else {
                return 'For a Cleric, you have a failry decent Wisdom score.';
            };
        break;
        case 'barbarian':
            if (stats.STR >= 18){
                return 'Even for a Barbarian, your Strength is EXCEPTIONAL!';
            } else if (stats.STR <= 12) {
                return 'Unfortunately, your Strength is kinda weak for a Barbarian.';
            } else {
                return 'For a Barbarian, you have a failry decent Strength score.';
            };
        break;
        case 'wizard':
            if (stats.INT >= 18){
                return 'Even for a Wizard, your Intelligence is EXCEPTIONAL!';
            } else if (stats.INT <= 12) {
                return 'Unfortunately, your Intelligence is kinda weak for a Wizard.';
            } else {
                return 'For a Wizard, you have a failry decent Intelligence score.';
            };
        break;
        case 'rogue':
            if (stats.DEX >= 18){
                return 'Even for a Rogue, your Dexterity is EXCEPTIONAL!';
            } else if (stats.DEX <= 12) {
                return 'Unfortunately, your Dexterity is kinda weak for a Rogue.';
            } else {
                return 'For a Rogue, you have a failry decent Dexterity score.';
            };
        break;
        default:
    };
};

// Output
if (race = 'elf'){
    console.log(`You are an ${race} ${job}.` + '\n'+ 'Your stats are:' + '\n' + `Strength: ${stats.STR}` + '\n' + `Dexterity: ${stats.DEX}` + '\n' + `Constitution: ${stats.CON}` + '\n' + `Intelligence: ${stats.INT}` + '\n' + `Wisdom: ${stats.WIS}` + '\n' + `Charisma: ${stats.CHA}` + '\n' + generateMessage());
} else {
    console.log(`You are a ${race} ${job}.` + '\n'+ 'Your stats are:' + '\n' + `Strength: ${stats.STR}` + '\n' + `Dexterity: ${stats.DEX}` + '\n' + `Constitution: ${stats.CON}` + '\n' + `Intelligence: ${stats.INT}` + '\n' + `Wisdom: ${stats.WIS}` + '\n' + `Charisma: ${stats.CHA}` + '\n' + generateMessage());
};