

// linear search o(n)

export function linearSearch(arr: number[], term: number): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === term) {
            return true;
        }
    }
    return false;
}


// binary search o(log n)

export function binarySearch(arr: number[], n: number): boolean {
    // low always inclusive, high always exclusive
    // only works on a sorted array
    let low = 0;
    let high = arr.length;

    do {
        let mp = Math.floor(low + (high - low) / 2);
        let val = arr[mp];

        if (val === n) {
            return true;
        } else if (val > n) {
            high = mp;
        } else {
            low = mp + 1;
        }

    } while (low < high);
 
    return false;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 8));


/* 
* 1) Given two crystal balls that will break if dropped from high enough
* distance, determine the exact spot in which it will break in the most
* optimized way.
* input: [false, false, false, true, true], output: 3
*/

// linear search is o(n) and binary search is o(log n) can we jump sqrt(n)
// then walk? Yes! We can make our worse case o(sqrt(n) + s)

export function two_crystal_balls(breaks: boolean[]): number{
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount){
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpAmount;

    for (let j = 0; j < jmpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;  
}


// -------- Sorting --------

// BubbleSort o(n^2)

export function bubbleSort(arr: number[]): void {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }

}

