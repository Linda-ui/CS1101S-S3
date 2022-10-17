//Question 1 bubblesort list and array

function bubblesort_array(A) {
    const len = array_length(A);
    
    for (let i = len - 1; i >= 1; i = i - 1) {
        
        for (let j = 0; j < i; j = j + 1) {
            
        if (A[j] > A[j + 1]) {
            
            const temp = A[j];
            A[j] = A[j + 1];
            A[j + 1] = temp;
        }
        }
    }
}

//modify as per array using set_head
function bubblesort_list(L) {
    const len = length(L);
    for (let i = len - 1; i >= 1; i = i - 1) {
        let curr = L;
        for (let j = 0; j < i; j = j + 1) {
            if (head(curr) > head(tail(curr))) {
                const temp = head(tail(curr));
                set_head(tail(curr), head(curr));
                set_head(curr, temp);
            }
            curr = tail(curr);
        }
    }
}
    

const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL; 

//Question 2 write memoized coin change function 
const mem = [];

function read(n, k) {
    return mem[n] === undefined
           ? undefined
           : mem[n][k];
}


function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}

function first_denomination(kinds_of_coins) {
 return kinds_of_coins === 1 ? 5 :
        kinds_of_coins === 2 ? 10 :
        kinds_of_coins === 3 ? 20 :
        kinds_of_coins === 4 ? 50 :
        kinds_of_coins === 5 ? 100 : 0;
} 

//n is amount left, k is kinds of coins
function mcc(n, k) {
    // Your solution here.
    if (n === 0) {
        return 1;
    } else if (n < 0 || k === 0) {
        return 0;
    } else if (read(n, k) !== undefined) {
        return read(n, k);
    } else {
        const result = mcc(n, k - 1) + mcc(n - first_denomination(k), k);
        write(n, k, result);
        return result;
    }
}


//orders of growth for both time and space is nk


function swap(A, i,j,x,y) {
 let temp = A[i][j];
 A[i][j] = A[x][y];
 A[x][y] = temp;
}

function swap1(A, i, j) {
 let temp = A[i];
 A[i] = A[j];
 A[j] = temp;
}

function transpose(M) {
    const len = array_length(M);
    for (let i = 0; i <= len; i = i + 1) {
        for (let j = i + 1; j < len; j = j + 1) {
            swap(M,i,j,j,i);
        }
    }
}
function reverse(arr) {
    for (let i = 0; i < array_length(arr) / 2; i = i + 1) {
        let j = array_length(arr) - 1 - i;
        swap1(arr, i, j);
    }
}
//function rotates the matrix 90 degrees clockwise
//M is assumed n x n


function rotate_matrix(M) {
    for (let i = 0; i < array_length(M); i = i + 1) {
        reverse(M[i]);
    }
}

const M = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
transpose(M);
rotate_matrix(M);
M;



//Given a string s, return the number of palindromic substrings in it.
//A string is a palindrome when it reads the same backward as forward.
//constraint: time complexity is n^2


const memo = [];

function read(index, num) {
    if (!is_undefined(memo[index])) {
        if (!is_undefined(memo[index][num])) {
            return memo[index][num];
        }
    }
    return undefined;
}

function write(index, num, bool) {
    memo[index][num] = bool;
}


function countPalin(arr) { //use immutable array to represent immutable string
    //initialise read when num = 1,2
    const len = array_length(arr);
    for (let r = 0; r < len; r = r + 1) {
        memo[r]=[];
        memo[r][0] = true;
        memo[r][1] = true;
    }
    
    for (let r = 0; r < len - 1; r = r + 1) {
        if (arr[r] === arr[r + 1]) {
            memo[r][2] = true;
        } else {
            memo[r][2] = false;
        }
    }
    
    let count = array_length(arr); //every chr itself is a palindrome
    for (let i = 2; i <= len; i = i + 1) { // i is num 
        for (let j = 0; j <= len - i ; j = j + 1) { // j is index
            
            if (read(j + 1, i - 2) && arr[j] === arr[j + i - 1]) {
                write(j, i, true);
                count = count + 1;
            } else {
                write(j, i, false);
            }
        }
    }
    return count;
}

display(countPalin(['d','d','f']));






















