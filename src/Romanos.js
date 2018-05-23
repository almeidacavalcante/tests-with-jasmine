class Romanos {

    constructor(algarismo) {
        this._algarismo = algarismo;
    }

    toArabic(){
        let arabic = 0;

        this._algarismo.split('').forEach((char, index, array) => {
            if(char == "I" && array[index+1] != "V"){
                arabic++;
            }else if(char == "I" && array[index+1] == "V"){
                arabic += 4;
            }

            if(char == "I" && array[index+1] != "X"){
                arabic++;
            }else if(char == "I" && array[index+1] == "X"){
                arabic += 9;
            }

            if( char == "X" && array[index-1] != "I") {
                arabic += 10;
            }

            if( char == "V" && array[index-1] != "I") {
                arabic += 5;
            }
        })

        return arabic;
    }
}