/*

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

function bubblesort_list(xs) {
    
    if (!is_null(head(xs))) {
        const len = length(xs);
        let temp = head(xs);
        
        function bubble(xs, temp) {
            if (!is_null(tail(xs))) {
                if (head(tail(xs)) <= temp) {
                    set_head(xs, head(tail(xs)));
                } else {
                    temp = head(tail(xs));
                }
                bubble(tail(xs));
            } else if (is_null(tail(xs))) {
                set_head(xs, temp);
                }
            }
        bubble(xs, temp);    
        
        }
        
    }
    
    

const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL; 

*/
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

//palindrome substings time complexity n^2 use memoization
function rotate_matrix(M) {
    for (let i = 0; i < array_length(M); i = i + 1) {
        reverse(M[i]);
    }
}

const M = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
transpose(M);
rotate_matrix(M);
M;















