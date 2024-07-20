import {sum} from "../Components/sum"

test("testing the sum function", ()=>{
    const result = sum(5,4);
    expect(result).toBe(20);
});