function vovel(a) {
    let count = 0;
    for (const char of a) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }
    return count;
}
let y = vovel("preater is not good");
console.log("num of vovels =", y);
