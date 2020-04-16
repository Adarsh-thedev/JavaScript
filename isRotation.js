const isRotation = (array1, array2) => {
    if(array1.length !== array2.length) {
        return false;
    }
    
    const key = array1[0];
    let index = undefined;
    for(let i=0; i<array2.length; i++) {
        if(array2[i] === key) {
            index = i; 
        }
    }

    if(index !== undefined) {
        for(let i=0; i<array1.length; i++) {
            if(array2[(i+2)%array2.length] !== array1[i]) {
                return false;
            }
        }
        return true;
    }

    return false;
}

console.log(isRotation([1,2,3,4,5],[4,5,1,2,3]));