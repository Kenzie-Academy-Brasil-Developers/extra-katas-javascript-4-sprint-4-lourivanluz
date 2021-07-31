const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";



const criaElemento = (local,elemento,className,result)=>{

    let lugar = document.querySelector(local)
    let elem = document.createElement(elemento)
    elem.setAttribute('class',className)
    elem.textContent = JSON.stringify(result);
    lugar.appendChild(elem)

}


function kata1(arr) {
    let arrCity = arr.split(',')
    criaElemento('body','div','div1')
    criaElemento('.div1','h1','titulo kata1','Kata1')
    criaElemento('.div1','p','result',arrCity)
    return arrCity
}

function kata2(arr) {
    let arrWord = arr.split(' ')
    criaElemento('body','div','div2')
    criaElemento('.div2','h1','titulo kata2','Kata2')
    criaElemento('.div2','p','result',arrWord)
    return arrWord
}

function kata3(arr) {
    let arrCity = arr.replace(/,/g,';')
    criaElemento('body','div','div3')
    criaElemento('.div3','h1','titulo kata3','Kata3')
    criaElemento('.div3','p','result',arrCity)
    return arrCity
}

function kata4(arr) {
    let arrCity = arr.join(',')
    criaElemento('body','div','div4')
    criaElemento('.div4','h1','titulo kata4','kata4')
    criaElemento('.div4','p','result',arrCity)
    return arrCity
}

function kata5(arr) {
    let arrCity = arr.slice(0,5)
    criaElemento('body','div','div5')
    criaElemento('.div5','h1','titulo kata5','kata5')
    criaElemento('.div5','p','result',arrCity)
    return arrCity
}

function kata6(arr) {
    let arrCity = arr.slice(3,8)
    criaElemento('body','div','div6')
    criaElemento('.div6','h1','titulo kata6','kata6')
    criaElemento('.div6','p','result',arrCity)
    return arrCity
}

function kata7(arr) {
    let arrCity = [arr[2],arr[4]]
    criaElemento('body','div','div7')
    criaElemento('.div7','h1','titulo kata7','kata7')
    criaElemento('.div7','p','result',arrCity)
    return arrCity
}

function kata8(arr) {
    arr.splice(2,1)
    criaElemento('body','div','div8')
    criaElemento('.div8','h1','titulo kata8','kata8')
    criaElemento('.div8','p','result',arr)
    return arr
}

function kata9(arr) {
    arr.splice(5,8)
    criaElemento('body','div','div9')
    criaElemento('.div9','h1','titulo kata9','kata9')
    criaElemento('.div9','p','result',arr)
    return arr
}

function kata10(arr) {
    arr.splice(2,0,'Rohan')
    criaElemento('body','div','div10')
    criaElemento('.div10','h1','titulo kata10','kata10')
    criaElemento('.div10','p','result',arr)
    return arr
}

function kata11(arr) {
    arr.splice(5,1,'Deadest Marshes')
    criaElemento('body','div','div11')
    criaElemento('.div11','h1','titulo kata11','kata11')
    criaElemento('.div11','p','result',arr)
    return arr
}

function kata12(arr) {
    let letters = arr.slice(0,14)
    criaElemento('body','div','div12')
    criaElemento('.div12','h1','titulo kata12','kata12')
    criaElemento('.div12','p','result',letters)
    return letters
}

function kata13(arr) {
    let letters = arr.slice(-12)
    criaElemento('body','div','div13')
    criaElemento('.div13','h1','titulo kata13','kata13')
    criaElemento('.div13','p','result',letters)
    return letters
}

function kata14(arr) {
    let letters = arr.slice(23,38)
    criaElemento('body','div','div14')
    criaElemento('.div14','h1','titulo kata14','kata14')
    criaElemento('.div14','p','result',letters)
    return letters
}

function kata15(arr) {
    let letters = arr.substring(arr.length -12)
    criaElemento('body','div','div15')
    criaElemento('.div15','h1','titulo kata15','kata15')
    criaElemento('.div15','p','result',letters)
    return letters
}

function kata16(arr) {
    let letters = arr.substring(23,38)
    criaElemento('body','div','div16')
    criaElemento('.div16','h1','titulo kata16','kata16')
    criaElemento('.div16','p','result',letters)
    return letters
}

function kata17(arr) {
    arr.pop()
    criaElemento('body','div','div17')
    criaElemento('.div17','h1','titulo kata17','kata17')
    criaElemento('.div17','p','result',arr)
    return arr
}
function kata18(arr) {
    arr.push('Deadest Marshes')
    criaElemento('body','div','div18')
    criaElemento('.div18','h1','titulo kata18','kata18')
    criaElemento('.div18','p','result',arr)
    return arr
}

function kata19(arr) {
    arr.shift()
    criaElemento('body','div','div19')
    criaElemento('.div19','h1','titulo kata19','kata19')
    criaElemento('.div19','p','result',arr)
    return arr
}

function kata20(arr) {
    arr.unshift('Mordor')
    criaElemento('body','div','div20')
    criaElemento('.div20','h1','titulo kata20','kata20')
    criaElemento('.div20','p','result',arr)
    return arr
}

function kata21(arr) {
    let indixOnly = arr.split(' ').indexOf('only')
    criaElemento('body','div','div21')
    criaElemento('.div21','h1','titulo kata21','Bonus kata21')
    criaElemento('.div21','p','result',indixOnly)
    return indixOnly
}

function kata22(arr) {
    let indexLastWord = arr.split(' ').length-1

    criaElemento('body','div','div22')
    criaElemento('.div22','h1','titulo kata22','Bonus kata22')
    criaElemento('.div22','p','result',indexLastWord)
    return indexLastWord
}

function kata23(arr) {
    let result = []
    let word = arr.split(',')

    word.forEach(palavra=>{
        let vogais = palavra.replace(/[^aeiou]/g,'').split('').sort().join('')

        for(let index = 0; index<vogais.length; index++){
            let letra = vogais[index]
            if(letra === vogais[index+1]){
                result.push(palavra) 
                break
            }
        }
    })
    criaElemento('body','div','div23')
    criaElemento('.div23','h1','titulo kata23','Bonus kata23')
    criaElemento('.div23','p','result',result)
    return result
}

function kata24(arr) {
    let word = arr.filter(item=>{
        return item.slice(-2)==='or'
    })
    criaElemento('body','div','div24')
    criaElemento('.div24','h1','titulo kata24','Bonus kata24')
    criaElemento('.div24','p','result',word)
    return word
}

function kata25(arr) {
    let word = arr.split(' ').filter(item=>{
        return item[0]==='b'
    })
    criaElemento('body','div','div25')
    criaElemento('.div25','h1','titulo kata25','Bonus kata25')
    criaElemento('.div25','p','result',word)
    return word
}

function kata26(arr) {
    let contains = arr.includes('Mirkwood') ? 'sim':'não'
    criaElemento('body','div','div26')
    criaElemento('.div26','h1','titulo kata26','Bonus kata26')
    criaElemento('.div26','p','result',contains)
    return contains
}

function kata27(arr) {
    let contains = arr.includes('Hollywood') ? 'sim':'não'
    criaElemento('body','div','div27')
    criaElemento('.div27','h1','titulo kata27','Bonus kata27')
    criaElemento('.div27','p','result',contains)
    return contains
}

function kata28(arr) {
    let indexMirkwood = arr.indexOf('Mirkwood')
    criaElemento('body','div','div28')
    criaElemento('.div28','h1','titulo kata28','Bonus kata28')
    criaElemento('.div28','p','result',indexMirkwood)
    return indexMirkwood
}

function kata29(arr) {
    let arrContemPalavras = arr.filter(item =>{
        return item.includes(' ')
    })
    criaElemento('body','div','div29')
    criaElemento('.div29','h1','titulo kata29','Bonus kata29')
    criaElemento('.div29','p','result',arrContemPalavras[0])
    return arrContemPalavras[0]
}

function kata30(arr) {
    let arrReverse = arr.reverse()
    criaElemento('body','div','div30')
    criaElemento('.div30','h1','titulo kata30','Bonus kata30')
    criaElemento('.div30','p','result',arrReverse)
    return arrReverse
}

function kata31(arr) {
    let arrSorted = arr.sort()
    criaElemento('body','div','div31')
    criaElemento('.div31','h1','titulo kata31','Bonus kata31')
    criaElemento('.div31','p','result',arrSorted)
    return arrSorted
}

function kata32(arr) {
    let arrSorted = arr.sort((a,b)=> a.length - b.length)
    criaElemento('body','div','div32')
    criaElemento('.div32','h1','titulo kata32','Bonus kata32')
    criaElemento('.div32','p','result',arrSorted)
    return arrSorted
}

kata1(gotCitiesCSV);
kata2(bestThing)
kata3(gotCitiesCSV)
kata4(lotrCitiesArray)
kata5(lotrCitiesArray)
kata6(lotrCitiesArray)
kata7(lotrCitiesArray)
kata8(lotrCitiesArray)
kata9(lotrCitiesArray)
kata10(lotrCitiesArray)
kata11(lotrCitiesArray)
kata12(bestThing)
kata13(bestThing)
kata14(bestThing)
kata15(bestThing)
kata16(bestThing)
kata17(lotrCitiesArray)
kata18(lotrCitiesArray)
kata19(lotrCitiesArray)
kata20(lotrCitiesArray)
kata21(bestThing)
kata22(bestThing)
kata23(gotCitiesCSV)
kata24(lotrCitiesArray)
kata25(bestThing)
kata26(lotrCitiesArray)
kata27(lotrCitiesArray)
kata28(lotrCitiesArray)
kata29(lotrCitiesArray)
kata30(lotrCitiesArray)
kata31(lotrCitiesArray)
kata32(lotrCitiesArray)
// daqui em diante é contigo
