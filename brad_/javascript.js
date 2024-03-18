// // // // // console.log("hello")
// // // // // console.error(" erro");
// // // // // console.table([sna]:"sam",email:"sam@gmail.com"});
// // // // // console.warn("warning");
// // // // // console.group()
// // // // // console.log(100);
// // // // // console.log("hello");
// // // // // console.error(" erro");
// // // // // console.groupEnd;

// // // // // // variable :let , const ,var( global variable)
// // // // // let lastsName = "Maurice";
// // // // // const firstsName = "Dsouza";
// // // // // console.log(firstsName,lastsName);//underdefined//
// // // // // const age ="23";
// // // // // console.log(age)

// // // // // const ar = [1,2,3,4];
// // // // // // to manipulate array we use push func
// // // // // ar.push(1);
// // // // // console.log(ar)

// // // // // // mutiple assign value at once
// // // // // let a=27
// // // // // b=20
// // // // // c=10;
// // // // // d=23
// // // // // console.log(a,b,c,d)

// // // // // // data type
// // // // // const   firstValue = "gesture";
// // // // //         lastValue = 100;
// // // // // console.log(lastValue,typeof lastValue);
// // // // // console.log(firstValue,typeof firstValue);

// // // // // const sname='maam';
// // // // // let  sName=sname;

// // // // // console.log(sName,sname);
// // // // // let value="12";
// // // // // console.log(value,typeof value);
// // // // // // type conversion into number

// // // // // // value=parseInt(value);
// // // // // // value=+(value);
// // // // // value=Number(value);
// // // // // console.log(value,typeof value);

// // // // // // convert to string
// // // // // let value1 = 12
// // // // // output1=value1.toString();
// // // // // console.log(output1,typeof output1)

// // // // // /*type of coercion*/
// // // // // let x;
// // // // // x=2+2+'3';
// // // // // x=+'3';

// // // // // // console.log(x,typeof x);
// // // // // const name1 ="john";
// // // // // const age  =20;
// // // // // let out = `My name is $[nam]} and Im $[age]old.`;
// // // // // console.log(out,typeof out);

// // // // // // tag =name1.__proto__;
// // // // // // tag =name1.toUpperCase();
// // // // // // tag =name1.charAt(0)
// // // // // // tag = out.indexOf('n')
// // // // // // tag = out.substring(1,8)
// // // // // // tag = out.slice(2,10)
// // // // // // tag = out.trim()
// // // // // // tag = out.replace('name',"mic")
// // // // // tag = out.split(' ')

// // // // // console.log(name1)
// // // // // console.log(tag,typeof tag);

// // // // // /*CHALLENGE FROM COURSE*/
// // // // //  const myString ="developer";
// // // // //  o =myString.charAt(0).toUpperCase() + myString.slice(1,9);

// // // // // //  second option
// // // // //  o =`$[myS]ing[0].toUpperCase()}$[myS]ing.substring(1,9)}`;

// // // // //  console.log(o);

// // // // //     const num= new Number(50.9880);

// // // // //     // x=num.toFixed(2).length;
// // // // //     x=num.toPrecision(3);
// // // // //     x=Number.MIN_VALUE;
// // // // //     x=Number.MAX_VALUE;
// // // // // console.log(x,typeof x)

// // // // // math job
// // // // // x=Math.sqrt(4);
// // // // // x=Math.round(34.8)
// // // // // x=Math.ceil(34.8)
// // // // // // x=Math.floor(34.8)
// // // // // x=Math.pow(5,2)
// // // // // x=Math.min(2,4,5 )
// // // // // x=Math.max(2,4,5 )
// // // // // x=Math.floor(1+Math.random() *10);
// // // // // console.log(x)

// // // // // // ?challenge
// // // // // let x =Math.floor(Math.random()*100);
// // // // // let y = Math.floor((Math.random()*100)/2)
// // // // // sum = x+y;
// // // // // mult = x*y;
// // // // // div = x/y;
// // // // // rem = x%y;
// // // // // console.log(x,y,sum,div,rem,mult)

// // // // // let d =new Date();
// // // // /* DATE "YYYY-MM-DD"*/
// // // // // DATE YYYY,MM,DD   HERE MM will be 0-11

// // // // // // let d= new Date("2023-11-14");
// // // // // let e= new Date('2023/10/12');
// // // // // // let d=e.getDate();
// // // // // let d=e.getMonth()+1;
// // // // // console.log(d,typeof d)

// // // // // /* array */
// // // // // const arr=[1,23,"hek"];
// // // // // const fra = new Array(1,23,3)
// // // // // let fruits=['apple','grapes','strawberry'];
// // // // // fruits[fruits.length]='orange';
// // // // // console.log(fruits,typeof fruits);
// // // // // console.log(fra,typeof fra)
// // // // // console.log(arr,typeof arr)

// // // // // //array manipulation
// // // // // const dip = [1,2,3,4,5,6,8];
// // // // // // dip.push(5);
// // // // // // dip.pop()

// // // // // // dip.unshift(23);dip.shift()
// // // // // // dip.reverse()
// // // // // // x=dip.splice(1,4)
// // // // // // x= dip.includes(3)
// // // // // // x= dip.reverse()
// // // // // // x=dip.slice(1,4)
// // // // // x=dip.slice(1,3)

// // // // // console.log(dip,x);
// // // // // // dip.reverse()
// // // // // console.log(dip)

// // // // // //nesting of array//
// // // // // const num = [1,2,3,4,5]
// // // // // const mun = [6,7,8,9,10];

// // // // // //  num.push(mun)
// // // // // //  let x= num[5][2];

// // // // // // concat
// // // // // ////x=mun.concat(num)
// // // // // //spread operator//
// // // // // // const x = [...num,mun]
// // // // // // const x = Array.isArray(num)
// // // // // const x = Array.from('umsadsf')

// // // // // console.log(x,num)

// // // // const person ={
// // // //     name1:'maurice',
// // // //     age:24,
// // // //     ar:{
// // // //         city:"bangalore",
// // // //         dist:'urban'
// // // //     },
// // // //     sa:[1,23,34,45]
// // // // };
// // // // console.log(person.name1)
// // // // console.log(person);
// // // // console.log(person.age)
// // // // console.log(person.ar)
// // // // console.log(person.ar['city']);
// // // // console.log(person.ar.dist);
// // // // console.log(person.sa[0]);
// // // // console.log(person.sa[2]);
// // // // console.log(person.sa[1]);
// // // // console.log(person.sa[3]);
// // // // console.log(person.sa[1]);
// // // // delete  person.age;
// // // // // person.add = "wewhe"
// // // // // console.log(person);

// // // const a= new Object()
// // // a.name1='maurice'
// // // a.age=24;
// // // a.addres='kumta';
// // // a.place='bangalore';

// // // // const b={
// // // //     game:'cricket',
// // // //     ground:'sam',
// // // // }
// // // const x = Object.assign({});
// // // // const x = Object.assign({});

// // // const y=new Object({KEY:'MAS'})
// // // // u=Object.values(a).length;
// // // i=Object.entries(a)[1]
// // // o =Object.keys(a).length;
// // // console.log(o,i)

// // const toDo = {
// //     nest:'2',
// //     firstname:'mas',
// //     lastname:'ds',
// //     age:'24',
// // }
// // delete toDo.ds
// // // destructor & rest operator
// // const { nest,age,...rest }=toDo
// // console.log( age,rest)

// // json (javascript object notation)

// // const x={ name:'may',age:'23'};
// // console.log(x)
// // // convert to json
// // const y =JSON.stringify(x);
// // console.log(y)
// // const z=JSON.parse(y)
// // console.log(z)

// // const library=[
// //    {title:"sd",
// //    author:"ad",
// //    status:
// //    {
// //     own:true,
// //     reading:false,
// //     read:false
// // } },
// //         {title:"we",
// //         author:"wd",
// //         status:{
// //             own:true,
// //             reading:false,
// //             read:false
// //         } },
// //     {title:"red",
// //     author:"ard",
// //     status:{
// //         own:true,
// // //         reading:false,
// // //         read:false }
// // //     }
// // // ];

// // // // Step2
// // // library[0].status.read='true';
// // // library[1].status.read='true';
// // // library[2].status.read='true';
// // // console.log(library)
// // //  const { title:book,author:writer} =library[0];
// // // console.log(book,writer);
// // // console.log(library)

// // // // step3
// // // const injson = JSON.stringify(library);
// // // console.log(injson)

// // // function
// // function na(num1, num2) {
// //     console.log(num1 + num2)
// // }
// // na(10, 3)

// // //default params
// // function dsa(su = 'marice') {
// //     result= `my mane is ${su}`
// // }
// // console.log(dsa())

// // //object as params
// // let su = {
// //     name: 'maurice', id: '2320968'
// // }
// // function dsa(su) {
// //     result= `my mane is ${su.name, su.id}`
// // }
// // console.log(dsa(su))

// //array as params

// function ds(...arr) {
//     let ran = Math.floor(Math.random() * arr.length);
//     const iten = arr[ran];

//     console.log(iten)
// }

// ds(1, 2, 3, 4, 56, 6, 7);

// // global scope
// const bo = 100;
// function fg() {
//     const x = 23;
//     console.log(bo + x)
// }
// fg()

// // functional scope
// function g() {
//     const x = 23;
//     console.log(bo + x)
// }
// g()

// // variable shadowing
// let er = 100;
// function f() {
//     const x = 23;
//     let er = 10;
//     console.log(er + x)
// }
// f()

// // illegal shadowing

// function func() {
//     var a = 'Geeks';
//     let b = 'Geeks';

//     if (true) {
//         let a = 'GeeksforGeeks'; // Legal Shadowing
//         let b = 'Geeks'; // Illegal Shadowing
//         console.log(a); // It will print 'GeeksforGeeks'
//         console.log(b); // It will print error
//     }
// }
// func();

// // function expression

// const r = function (nam) {
//     result= nam;
// };

// console.log(r(120))
// console.log(rs(10))

// function rs(nam) {
//     result= nam;
// };

// //arrow function

// function add(a, b) {
//     result= a + b
// }

// console.log(add(12, 13))

// const sub = function (a, b) {
//     result= a + b;
// };

// console.log(sub(12, 19));
// const doun = (d, s) => {
//     result= d + s;
// };
// console.log(doun(12, 23));

// //implict
// //const fund = (ru, fu) => ru - fu;
// // console.log(fund(4, 8))

// const fund = () => ({ name: 'mau', id: 12 });
// console.log();

// // const num = [1, 2, 3, 4, 5];
// // num.forEach(function (n) {
// //     console.log(n);
// // });
//  arrow function
//     num.forEach(element => {
//         console.log(element)

//     });

// // challeges degree
// const getcelecius = (f) => (f - 32) * (5 / 9)
// // console.log(`${getcelecius(prompt('enter value'))} \xB0C`);

// // challenge 2
// function minMax(arr) {
//     const ad = Math.min(...arr);
//     const e = Math.max(...arr);
//     result= {
//         min: ad,
//         max: e
//     };
// }

// // console.log(minMax([1, 2, 3, 45, 5]));

// ((len, wid) => {
//     console.log(len * wid);
//     console.log(len)
//     console.log(len)
// })(window.innerWidth, window.innerHeight);

// const x = 100;
// const y = 230;
// function sum(x, y) {
//     const sum = x + y;
//     result= console.log(sum);

// }
// const a = sum(x, y)
// const b = sum(10, 23)

// const d = new Date(2023, 10, 22, 8, 0, 0)
// const month = d.getMonth()
// switch (month) {
//     case 1: console.log("jan");
//         break;
//     case 2: console.log("feb");
//         break;
//     case 1: console.log("march");
//         break;
//     default: console.log("not jan , feb || march");
// }

// function cal(a, b, operator) {
//     switch (operator) {
//         case 'add': const sum = a + b;
//             result = console.log(sum);

//             break;
//         case 'sub': const sub = a - b;
//             result = console.log(sub);

//             break;
//         case 'mult': const mult = a * b;
//             result = console.log(mult);

//             break;
//         case 'diva': const divs = a / b;
//             result = console.log(divs);

//             break;

//         default: result = console.log('cant perform')
//             break;
//     }

// }
// // const ops = prompt('3')
// // const a = prompt('1')
// // const b = prompt('2')

// // console.log(typeof ops)

// cal(1, 4, "diva")

// const p = 3
// if (p) {
//     console.log("true")
// } else {
//     console.log("fasle")

// }

// //nullish
// const c = 20 ?? null;
// console.log(c)
// let age = 2;
// age > 18 && console.log('ican vote')

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`tables of ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i}*${j}=${i * j}`)
//     }

// }

// // loop through an array
// const arer = ['nas', 'sd', 'wer'];
// for (let i = 0; i < arer.length; i++) {
//     console.log(arer[i]);
// }

// //break
// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         console.log(`NUmber is 5.okay!`)
//         break
//     } else {
//         console.log(`number is${i} `)

//     }
// }
// //continue
// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         console.log(`NUmber is 5.okay!`)
//         continue;
//     } else {
//         console.log(`number is${i} `)

//     }
// }

// while loop

// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;

// }

// // nesting while loop
// let i = 1;
// while (i <= 5) {
//     console.log(`tables of ${i}`);
//     let j = 1;
//     while (j <= 5) {
//         console.log(` ${i} * ${j} = ${i * j}`);
//         j++;
//     }
//     i++;
// }

/*  challenge fizzbuzz */
/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`fizz buzz ${i}`);
    }
    else if (i % 3 === 0) {
        console.log(`fizz  ${i}`);
    } else if (i % 5 === 0) {
        console.log(`buzz  ${i}`);
    } else {
        console.log(`${i}`);
    }
}
*/
// let i = 1;
// while (i <= 100) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`fizz buzz ${i}`);
//     }
//     else if (i % 3 === 0) {
//         console.log(`fizz  ${i}`);
//     } else if (i % 5 === 0) {
//         console.log(`buzz  ${i}`);
//     } else {
//         console.log(`${i}`);
//     }
//     i++;
// }

// for of loop
// let arr = [1, 23, 3, 4, 5]
// for (let basn of arr) {
//     console.log(basn)
// }

// let arr = { 1, 23, 3, 4, 5}
// for (let basn of arr) {
//     console.log(basn)
// }

/* loop over map
 */
// const maoi = new Map();
// maoi.set(name, "maurice");
// maoi.set("naage", 323);
// for (let [key, val] of maoi) {
//     console.log(key, val)
// }

/* for in loop
 */
// const onbg = {
//     nmae: 'mas',
//     age: 23,
//     addr: "bangalore"
// }

// for (const key in onbg) {
//     console.log(key)
//     console.log(onbg[key])

// // }

// // loop over oarray using array for each

// // const social = ['twitter', 'linkden', 'insta', 'facebook'];

// // social.forEach(item => {
// //     console.log(item)

// // });

// /*loop over oarray using array for each*/

// const social = { name: 'twitter' }, { place: 'linkden' }, { thing: 'insta' }, { cre: 'facebook' };
// console.log(social)
// social.forEach(items => console.log(items))

/* array.fillter*/
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// const evennum = console.log(number.filter(item => item % 2 === 0));

// const companies = [
//     { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
//     { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
//     { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
//     { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
//     { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
//     { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
//     { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
//     { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
//     { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
// ];

// const x = companies.filter((company) => company.category = "retail")
// console.log(x)
// // const y = companies.filter((company) => company.start >= 1980 && company.end <= 1990);
// const y = companies.filter((company) => company.start - company.end >= -10);
// console.log(y)

// /*array map*/
// const companies = [
//     { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
//     { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
//     { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
//     { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
//     { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
//     { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
//     { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
//     { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
//     { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
// ];

// create an array//
// const companyNames = companies.map((items) => items.name);
// console.log(companyNames)
//

// const nweas = companies.map(
//     (compj) => {
//         return {
//             name: compj.name,
//             key: compj.category,
//         }
//     }
// )
// console.log(nweas)

// const arre = companies.map((items) => {
//     return {
//         name: items.name,
//         lenght: items.end - items.start,
//     }
// })
// console.log(arre.filter((items) => items.lenght > 10))

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let c = 0;
// const sd = number.map((items) => c += items);
// console.log(sd.filter((items) => items % 2 === 0).reduce((pr, cr) => pr + cr, 0))

// // Challenge 1
// const people = [
//     {
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'john@gmail.com',
//         phone: '111-111-1111',
//         age: 30,
//     },
//     {
//         firstName: 'Jane',
//         lastName: 'Poe',
//         email: 'jane@gmail.com',
//         phone: '222-222-2222',
//         age: 25,
//     },
//     {
//         firstName: 'Bob',
//         lastName: 'Foe',
//         email: 'bob@gmail.com',
//         phone: '333-333-3333',
//         age: 45,
//     },
//     {
//         firstName: 'Sara',
//         lastName: 'Soe',
//         email: 'Sara@gmail.com',
//         phone: '444-444-4444',
//         age: 19,
//     },
//     {
//         firstName: 'Jose',
//         lastName: 'Koe',
//         email: 'jose@gmail.com',
//         phone: '555-555-5555',
//         age: 23,
//     },
// ];

// const was = people
//     .filter((items) => items.age >= 20)
//     .map((person) => ({
//         name: `${person.firstName} ${person.lastName}`,
//         email: person.email,
//     }))
// // const ad = [];
// // const was = people.forEach((person) => (ad.push({
// //     name1: `${person.firstName} ${person.lastName}`,
// //     email: person.email,
// // })))

// console.log(was);

// // Challenge 2
// const numbers = [2, -30, 50, 20, -12, -9, 7];
// const addpostive = numbers.filter((num) => num >= 0)
//     .reduce((prev, curr) => prev + curr, 0);
// console.log(addpostive);

// // Challenge 3
// const words = ['coder', 'programmer', 'developer'];

// const ere = words.map((items) => {
//     return items[0].toUpperCase() + items.slice(1, items.length)
// })
// console.log(ere)

// Geolocation get current location
function curLocation(loc) {
  console.log({
    latitude: loc.coords.latitude,
    longitude: loc.coords.longitude,
    accuracy: loc.coords.accuracy,
  });
}

function CurError(error) {
  console.log(error);
}

const CurOption = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

window.navigator.geolocation.getCurrentPosition(
  curLocation,
  CurError,
  CurOption
);
