class shiftCipher {
    constructor(string, n) {
        this.string = string;
        this.n = n;
    }

    encrypt(string, n){
        
        let uniCodeArray = [];

        let shiftArray = [];
               
        //Stores all lowercase codes from a to z        
        let codesArray = [97,98,99,100,101,102,103,104,105,106,107,108,109,110,
        111,112,113,114,115,116,117,118,119,120,121,122];
        
        //Step 1 converts string to lowercase
        let lowerCase = this.string.toLowerCase();
        // console.log(lowerCase);      
         
        // Step 2 converts all characters to unicode
        for(let i = 0; i < lowerCase.length; i++){
            uniCodeArray.push(lowerCase.charCodeAt(i));
        }
        // console.log(uniCodeArray);
        
        // Step 3 Shifts letters n positions, except those not included in codesArray
        uniCodeArray.forEach((character) => {
                let n = this.n;
                if (codesArray.includes(character) === true) {
                    //insert logic here to shift character n positions
                    if(character + n <= 122){;
                    shiftArray.push(character + n);
                    } else {
                    shiftArray.push(codesArray[(character + n )% 123]);    
                    }
                } else {
                    shiftArray.push(character);
                }
            })
        // console.log(shiftArray);

        // Step 4 Returns a coded uppercase string        
        let codedString = String.fromCharCode.apply(null,shiftArray).toUpperCase();

        console.log(codedString);
    }

    decrypt(string, n){
        let uniCodeArray = [];

        let shiftArray = [];
               
        //Stores all lowercase codes from a to z        
        let codesArray = [97,98,99,100,101,102,103,104,105,106,107,108,109,110,
        111,112,113,114,115,116,117,118,119,120,121,122];
        
        //Step 1 converts string to lowercase
        let lowerCase = this.string.toLowerCase();
        //console.log(lowerCase);

        // Step 2 converts all characters to unicode
        for(let i = 0; i < lowerCase.length; i++){
            uniCodeArray.push(lowerCase.charCodeAt(i));
        }
        //console.log(uniCodeArray);

         // Step 3 Shifts letters n positions, except those not included in codesArray
        uniCodeArray.forEach((character) => {
            let n = this.n * -1;
            if (codesArray.includes(character) === true) {
                //logic to shift back character n positions
                if(character + n <= 122){;
                shiftArray.push(character + n);
                } else {
                shiftArray.push(codesArray[(character + n )% 123]);    
                }
            } else {
                shiftArray.push(character);
            }
        })
        //console.log(shiftArray);

        // Step 4 Returns a coded uppercase string        
        let codedString = String.fromCharCode.apply(null,shiftArray);

        console.log(codedString);
    }      
}

const testClass = new shiftCipher('UJNJE DFMFCSBUJPO', 1);


//testClass.encrypt();
testClass.decrypt()