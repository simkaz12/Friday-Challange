console.clear();

// 1.
/*
const a = 1;
const b = 2;


if (a > b) {
    console.log('a yra didesnis');
} else if (a < b) {
    console.log('b yra didesnis');
} else {
    console.log('a ir b yra lygus');
}
*/

// 2.
/*
for (let i = 1; i < 11; i++) {
    console.log(i);
}
*/

// 3.
/*
for (let i = 0; i < 11; i += 2) {
    console.log(i);
}
*/

// 4.
/*
for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * 10);
    console.log(random);
}
*/

// 5.

// 6.
/*
const masyvas = [];

for (let i = 0; i < 30; i++) {
    masyvas.push(Math.floor(Math.random() * 20 + 10));
}

let rez = 0;

for (let i = 0; i < masyvas.length; i++) {
    if (rez < masyvas[i]) {
        rez = masyvas[i];
    }
}

console.log(rez);
*/

// 7.
/*
const masyvas = [];

let aCount = 0;
let bCount = 0;
let cCount = 0;
let dCount = 0;

for (let i = 0; i < 100; i++) {
    masyvas.push(Math.floor(Math.random() * 4));
}

for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] === 0) {
        masyvas[i] = 'A';
        aCount++;
    } else if (masyvas[i] === 1) {
        masyvas[i] = 'B';
        bCount++;
    } else if (masyvas[i] === 2) {
        masyvas[i] = 'C';
        cCount++;
    } else if (masyvas[i] === 3) {
        masyvas[i] = 'D';
        dCount++;
    } 
}

console.log(`a: ${aCount}, b: ${bCount}, c: ${cCount}, d: ${dCount}`);
*/

// 8./9.
/*
function lygineSuma (a, b) {
    if (typeof a === 'string' || typeof a === 'boolean' || typeof a === 'undefined' || typeof a === 'null') {
        return `Pirmas kintamasis yra netinkamo tipo`
    }
    if (typeof b === 'string' || typeof b === 'boolean' || typeof b === 'undefined' || typeof b === 'null') {
        return `Antras kintamasis yra netinkamo tipo`
    }
    if (a % 2 === 1) {
        return `Pirmas skaicius nera lyginis.`;
    }
    if (b % 2 === 1) {
        return `Antras skaicius nera lyginis.`
    }
    if (typeof a !== typeof b) {
        return `Kintamuju tipai turi buti vienodi.`
    }
    if (typeof a === 'number' || isFinite(a)) {
        if ((a + b) % 2 === 1) {
            return `Suma yra nelygine`
        } else {
            return a + b
        }
    }
    if (typeof a === 'object') {
        if ((a.lenght + b.lenght) % 2 === 1) {
            return `Objektu ilgiu suma yra nelygine`
        } else {
            return a.lenght + b.lenght
        }
    }
}
*/

// 10.


function telefonoNumeris(a) {
    let rez = '';
    for (let i = 0; i < a.length; i++) {
        if (typeof a[i] !== 'number' || !isFinite(a[i]) || a[i].length > 1) {
            return `Netinkami masyvo elementai`
        } else {
            rez += a[i];
        }
    }
    return `(${rez[0]}${rez[1]}${rez[2]}) ${rez[3]}${rez[4]}${rez[5]}-${rez[6]}${rez[7]}${rez[8]}${rez[9]}`;
}

