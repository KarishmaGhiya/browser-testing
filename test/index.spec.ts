import { assert } from "chai";
import { Calculator } from "../src/index";

describe("test Calculator",() =>{
    const calc = new Calculator();
    it("adds two numbers", async function() {
        const res:number = calc.add(2,5);
        assert.equal(res,7, "Result is as expected");
    });
    it("multiplies two numbers", async function() {
        const res:number = calc.multiply(2,5);
        assert.equal(res,10, "Result is as expected");
    });
});