import { getMinPositiveValue } from '../ejercicio18-withfunc';

describe("ejercicio 18", ()=>{
    
    beforeEach(() => {}); 
    
    it("should return 20 with negative values", ()=> {
        // SetUp
        const array = [-3, -7, -9, 20, 85, 41];

        // Execution
        const result = getMinPositiveValue(array);
        
        // Assertion
        expect(result > 0).toBe(true);
        expect(result).toBe(20);
    });


    it("should return 20 without negative values", ()=> {
        // SetUp
        const array = [20, 85, 41];

        // Execution
        const result = getMinPositiveValue(array);
        
        // Assertion
        expect(result > 0).toBe(true);
        expect(result).toBe(20);
    });

});