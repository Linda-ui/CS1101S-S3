function add_streams(s1, s2) {
return is_null(s1)
? s2
: is_null(s2)
? s1
: pair(head(s1) + head(s2),
() => add_streams(stream_tail(s1),
stream_tail(s2)));
}
function scale_stream(c, stream) {
return stream_map(x => c * x, stream);
}
const add_series = add_streams;
const scale_series = scale_stream;
function negate_series(s) {
return scale_series(-1, s);}
function subtract_series(s1, s2) {
return add_series(s1, negate_series(s2));
}

//add infinite no of zeros after the list_of_coeffs
function coeffs_to_series(list_of_coeffs) {
const zeros = pair(0, () => zeros);
function iter(list) {
return is_null(list)
? zeros
: pair(head(list),
() => iter(tail(list)));
}
return iter(list_of_coeffs);
} 
const zeros = pair(0, () => zeros);
const non_neg_integers = integers_from(0);
function fun_to_series(fun) {
return stream_map(fun, non_neg_integers);
}

const alt_ones = pair(1, () => negate_series(alt_ones));
const alt_ones1 = pair(1, () => subtract_series(zeros, alt_ones1));
const alt_ones2 = fun_to_series(x => x % 2 === 0 ? 1 : -1);

const e = s => display_list(eval_stream(s,10));
e(alt_ones2);
e(alt_ones1);
e(alt_ones);

const zeros1 = add_streams(alt_ones, stream_tail(alt_ones));
const zeros2 = subtract_series(alt_ones, alt_ones);
e(zeros1);
e(zeros2);
