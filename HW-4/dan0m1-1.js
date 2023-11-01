function VigenèreCipher(key, abc) {
    this.encode = function (str) {
        return str.split('').map((letter, index) => {
            if (abc.indexOf(letter) !== -1){
                return abc.at((abc.indexOf(letter)+abc.indexOf(key[index%key.length]))%abc.length);
            }
            else return letter;
        }).join('');
    };
    this.decode = function (str) {
        return str.split('').map((letter, index) => {
            if (abc.indexOf(letter) !== -1){
                return abc.at((abc.indexOf(letter)-abc.indexOf(key[index%key.length]))%abc.length);
            }
            else return letter;
        }).join('');
    };
}