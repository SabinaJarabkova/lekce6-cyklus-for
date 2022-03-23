// Použij výpis do konzole prohlížeče pomocí console.log('text')
console.log('text');

// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10');
console.log('FOR CYKLUS');

for ( let i = 0; i <= 10; i++) {
  console.log(i);
};

console.log('WHILE CYKLUS');

let a = -1;
while (a <= 9) {
  a = a + 1;
  console.log(a);
}


// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - rozdíl mezi <= a <');
console.log('FOR CYKLUS');

for ( let i = 0; i < 10; i++) {
  console.log(i);
};

console.log('WHILE CYKLUS');

let b = -1;
while (b < 9) {
  b = b + 1;
  console.log(b);
}


// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');
console.log('FOR CYKLUS');


for ( let i = 10; i >= 0; i = i - 1) {
  console.log(i);
};

console.log('WHILE CYKLUS');
let c = 11;
while( c >= 1) {
  c = c - 1;
  console.log(c);
}