//if list is declared as a constant
//it is still mutable
function d_filter(pred, xs) {
    
    if (!is_null(xs)) {
         if (pred(head(xs))) {
         set_tail(xs, d_filter(pred,tail(xs)));
         
         
    } else {
        xs = tail(xs);
        return d_filter(pred,xs);
    }
     }
     
    
    return xs;
}

const L = list(1,2,3,4,5,6);
d_filter(x => x % 2 === 0, L);
L;

//create pairs for each pair that is not already a member of pairs(store them 
//in heads), tail of it points to previous newly created pairs, length of pairs 
//will be total pairs







