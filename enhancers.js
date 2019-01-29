// const items = require('./data.js');

const item = {
    originalName: 'Lambda Shield',
    name: 'Lambda Shield',
    type: 'armor',
    durability: 100,
    enhancement: 0,
    enhancementLevel: 0,
}

module.exports = {
    success,
    fail,
    repair,
}

function success(item) {
    // Throw an error if an object is not passed
    if(typeof item !== 'object') {
        throw new Error('Expecting an object');
    }

    // selectedItem is the item that will be changed.
    let selectedItem = item;

    // New enhancementLevel
    let newEnhancementLevel;

    if (selectedItem.enhancementLevel === 20) {
        // 20 is the max enhancement level
        newEnhancementLevel = 20;
    } else {
        newEnhancementLevel = selectedItem.enhancementLevel + 1;
    }

    // New enhancement. This is equal to the enhancementLevel, unless the enhancementLevel is 16 or above. Then it needs to be the Arabic numerals.
    let newEnhancement;

    if (newEnhancementLevel <= 15) {
        newEnhancement = `+${newEnhancementLevel}`;
    } else if (newEnhancementLevel === 16) {
        newEnhancement = 'PRI';
    } else if (newEnhancementLevel === 17) {
        newEnhancement = 'DUO';
    } else if (newEnhancementLevel === 18) {
        newEnhancement = 'TRI';
    } else if (newEnhancementLevel === 19) {
        newEnhancement = 'TET';
    } else if (newEnhancementLevel === 20) {
        newEnhancement = 'PEN';
    };

    // Set the updated name.
    let newName;

    if (newEnhancementLevel > 0) {
        newName = `[${newEnhancement}] ${selectedItem.originalName}`;
    } else {
        newName = selectedItem.name;
    }

    // Create the new object that will be returned.
    selectedItem = {
        ...selectedItem,
        name: newName,
        enhancement: newEnhancement,
        enhancementLevel: newEnhancementLevel,
    }

    return selectedItem;
};

function fail(item) {
    // Throw an error if an object is not passed
    if(typeof item !== 'object') {
        throw new Error('Expecting an object');
    }

    // selectedItem is the item that will be changed.
    let selectedItem = item;

    // New enhancementLevel
    let newEnhancementLevel;

    if (selectedItem.enhancementLevel > 16) {
        newEnhancementLevel = selectedItem.enhancementLevel -1;
    };
    
    // New enhancement. This is equal to the enhancementLevel, unless the enhancementLevel is 16 or above. Then it needs to be the Arabic numerals.
    let newEnhancement;

    if (newEnhancementLevel <= 15) {
        newEnhancement = newEnhancementLevel;
    } else if (newEnhancementLevel === 16) {
        newEnhancement = 'PRI';
    } else if (newEnhancementLevel === 17) {
        newEnhancement = 'DUO';
    } else if (newEnhancementLevel === 18) {
        newEnhancement = 'TRI';
    } else if (newEnhancementLevel === 19) {
        newEnhancement = 'TET';
    } else if (newEnhancementLevel === 20) {
        newEnhancement = 'PEN';
    };

    // Set the updated name.
    if (newEnhancementLevel > 0) {
        newName = `[${newEnhancement}] ${selectedItem.originalName}`;
    } else {
        newName = selectedItem.name;
    }

    // update the durability level
    let newDurability;

    if (newEnhancementLevel <=14) {
        newDurability = selectedItem.durability - 5;
    } else {
        newDurability = selectedItem.durability - 10;
    }

    // Create the new object that will be returned.
    selectedItem = {
        ...selectedItem,
        name: newName,
        enhancement: newEnhancement,
        enhancementLevel: newEnhancementLevel,
        durability: newDurability
    }

    return selectedItem;
};

function repair(item) {
    // Throw an error if an object is not passed
    if(typeof item !== 'object') {
        throw new Error('Expecting an object');
    }

    // selectedItem is the item that will be changed.
    let selectedItem = item;


    selectedItem = {
        ...selectedItem,
        durability: 100
    }

    return selectedItem;
};