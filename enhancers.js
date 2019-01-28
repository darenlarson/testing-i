// const items = require('./data.js');

const items = [
    {
        originalName: 'Lambda Shield',
        name: 'Lambda Shield',
        type: 'armor',
        durability: 100,
        enhancement: 0,
    },
    {
        originalName: 'Elf Sword',
        name: 'Elf Sword',
        type: 'weapon',
        durability: 100,
        enhancement: 0,
    },
]

module.exports = {
    success,
}

function success(item) {
    // Find the string that was passed in the array of items
    const selectedItem = items.find(i =>  i.name === item );

    // ensure a valid item was entered
    if (selectedItem === undefined) throw new Error('Not a valid item')

    let newDurability;
    let newEnhancement;
    let newName;
    // New durability

    // New enhancement level
    if (selectedItem.enhancement < 15) {
        newEnhancement = selectedItem.enhancement + 1;
    } else if (selectedItem.enhancement === 15) {
        newEnhancement = 'PRI';
    } else if (selectedItem.enhancement === 16) {
        newEnhancement = 'DUO';
    } else if (selectedItem.enhancement === 17) {
        newEnhancement = 'TRI';
    } else if (selectedItem.enhancement === 18) {
        newEnhancement = 'TET';
    } else if (selectedItem.enhancement === 19) {
        newEnhancement = 'PEN';
    } else if (selectedItem.enhancement === 'PEN') {
        newEnhancement = 'PEN'
    }

    // New name
    if (newEnhancement > 0) {
        newName = `[+${newEnhancement} ${selectedItem.name}]`;
    } else {
        newName = selectedItem.name;
    }

    selectedItem = {
        ...selectedItem,
        name: newName,
        enhancement: newEnhancement,
        durability: newDurability
    }
};
