const users = require('./original.json');

function dateStringToDateObject(dateString) {
    try {
        const [day, month, year] = dateString.split(".");
        return new Date(`${year}-${month}-${day}`);
    } catch (error) {
        return undefined
    }
}

const newUsers = users.map(user => {
    return {
        fullName: `${user.first_name} ${user.last_name ?? ''}`.trim(),
        username: user.username,
        power: Number(user.power),
        birthDate: dateStringToDateObject(user.birth_date)
    }
});

const powerTotal = newUsers.reduce((acc, user) => acc + user.power ?? 0, 0);
const powerMean = powerTotal / newUsers.length;

console.log(`Users after format:\n${JSON.stringify(newUsers)}`);
console.log(`\n\n`);
console.log(`Power Mean: ${powerMean}`);