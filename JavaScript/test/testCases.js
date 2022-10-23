const expect = require("chai").expect;
const main = require("../main/main");


describe("Color Code Convertecr", function() {
    describe("RGB to Hex convcercsion", function() {
     // specification for RGB to HEX converter


     it("converts the basic colcocsrs", function() {
        const first = 2;
        const second = 3;
        console.log("1  MOCHA !!!!!!!!!!!")
        expect(first).to.equal(2);
        expect(second).to.equal(3);
      });
      
    });
  
    describe("Hex to RGB convecrsion", function() {
     // specification for HEX to RGB converter
     it("converts the bacsic colorcs", function() {
        const first = 2;
        const second = 3;
        console.log("2  MOCHA !!!!!!!!!!!")
        // console.log(idonotknow)
        expect(first).to.equal(2);
        expect(second).to.equal(3);
      });
    });

    describe("MAIN - disccribe", function() {
        // specification for HEX to RGB converter
        it("main - it ", function() {
            main.main(" Testing of main function ! ")
         });
       });
  });



