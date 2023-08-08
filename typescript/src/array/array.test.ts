// import { bubbleSort, linearSearch, binarySearch, two_crystal_balls } from "./array";
import { describe, expect, test } from '@jest/globals';
import { binarySearch, bubbleSort, linearSearch, two_crystal_balls } from "./array";

describe('sorting', () => {

    test('bubble sort', () => {
        let a = [4,2,5,7,1,0];
        bubbleSort(a);
        expect(a).toStrictEqual([0,1,2,4,5,7]);
    });

});


describe('searching', () => {
    
    test('linear search', () => {
        expect(linearSearch([1,2,3,4], 3)).toBeTruthy();
    });
    
    test('binary search', () => {
        expect(binarySearch([1,2,3,4,5,6,7,8,9,10], 8)).toBeTruthy();
    });

    test('two crystal balls', () => {
        expect(two_crystal_balls([false, false, false, true, true])).toBe(3);
    });

})