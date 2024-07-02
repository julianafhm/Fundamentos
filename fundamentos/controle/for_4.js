// [1, 1] [1, 2] [1, 3]
// [2, 1] [2, 2] [2, 3]
// [3, 1] [3, 2] [3, 3]
//  proposto

for(let x = 1; x <= 3; x++) {
    let linha = ''
    for(let y = 1; y <= 3; y++) {
        linha += `[${x}, ${y}]`
    }
    console.log(linha)
}