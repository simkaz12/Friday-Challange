console.clear();
/*

1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)

*/







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

*/

// 5.
let num = 0;

while (num !== 5) {
    num = Math.floor(Math.random() * 10);
    console.log(num);
} 












