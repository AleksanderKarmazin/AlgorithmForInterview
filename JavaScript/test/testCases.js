const expect = require("chai").expect;
const main = require("../main/main");


describe("Color Code Converter", function() {
    describe("RGB to Hex conversion", function() {
     // specification for RGB to HEX converter


     it("converts the basic colors", function() {
        const first = 2;
        const second = 3;
        console.log("1  MOCHA !!!!!!!!!!!")
        expect(first).to.equal(2);
        expect(second).to.equal(3);
      });
      
    });
  
    describe("Hex to RGB conversion", function() {
     // specification for HEX to RGB converter
     it("converts the basic colors", function() {
        const first = 2;
        const second = 3;
        console.log("2  MOCHA !!!!!!!!!!!")
        // console.log(idonotknow)
        expect(first).to.equal(2);
        expect(second).to.equal(3);
      });
    });

    describe("MAIN - discribe", function() {
        // specification for HEX to RGB converter
        it.only("main - it ", function() {
            main.main(" Testing of main function ! ")
         });
       });
  });



