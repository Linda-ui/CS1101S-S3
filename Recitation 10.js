
//takes in a list of infinite streams and zips up them all in gib=ven order
//eg.s1 = 1,11,111..., s2 = 2,22,222..., s3 = 3,33,333...
//zip(list(s1, s2, s3)) returns 1, 2, 3, 11, 22, 33, ...
function zip_list_of_streams(ss) {
    return pair(head(head(ss)), 
    () => zip_list_of_streams(append(tail(ss), list(stream_tail(head(ss))))));
}

function integerStream(n) {
    return pair(n, () => integerStream(n + 1));
}

const integers = integerStream(1);

function add_streams(s1, s2) {
    if (is_null(s1)) {
        return s2;
    } else if (is_null(s2)) {
        return s1;
    } else {
        return pair(head(s1) + head(s2), 
        () => add_streams(stream_tail(s1), stream_tail(s2)));
    }
}

function partial_sums(s) {
    return pair(head(s), () => add_streams(partial_sums(s), stream_tail(s)));
}

eval_stream(partial_sums(integers), 10);

function memo_fun(fun) {
    let already_run = false;
    let result = undefined;
    
    function mfun() {
        if (!already_run) {
            result = fun();
            already_run = true;
            return result;
        } else {
            return result;
        }
    }
    
    return mfun;
}
function stream_map_optimized(f, s) {
    return is_null(s)
           ? is_null
           : pair(f(head(s)),
           memo_fun( () => stream_map_optimized(f, stream_tail(s))));
}

const x = stream_map_optimized(display, enum_stream(0,10));
stream_ref(x, 3);
stream_ref(x, 5);