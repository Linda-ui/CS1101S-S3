//Q1
/*function make_optimized_search(A) {
    //for many calls of this function
    const B = [];
    const len = array_length(A);
    
    for (let i = 0; i < len; i = i + 1) {
        B[i] = A[i];
        
    }
    
    merge_sort(B);
     
    return x => binary_search(B,x);
                  
}
*/
//Q2
function fib(n) {
    const a = [0,1];
    
    for (let c = 2; c <= n - 1; c = c + 1) {
        a[c] = a[c - 1] + a[c - 2];
    }
    
    return a[n - 1];
}

function fib_shorter(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    
    let a = 0;
    let b = 1;
    for ( let i = 2; i <= n; i = i + 1) {
        b = a + b;
        a = b - a;
    }
    
    return b;
}

display(fib_shorter(0));


    



















