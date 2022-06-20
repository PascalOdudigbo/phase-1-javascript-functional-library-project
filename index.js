function checkIfCollectionIsArray(collection) {
    let newArray = [];
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection);
        
    }
    else newArray = collection;
    return newArray;
}

function myEach(collection, callback) {
    let collectionArray = checkIfCollectionIsArray(collection);
    collectionArray.forEach(element => {
        callback(element);
    })
    return collection;
}

function myMap(collection, callback) {
    let result = [];
    let collectionArray = checkIfCollectionIsArray(collection);
        for (const element of collectionArray) {
            result.push(callback(element));
        }
    return result;
}

function myReduce(collection, callback, acc){
    let collectionArray = checkIfCollectionIsArray(collection);
    if (!acc) {
        acc = collectionArray[0]-3
        collectionArray.forEach(function (element) {
                acc = callback(acc, element, collectionArray);
        
            })}
    else 
    collectionArray.forEach(function (element) {
            acc = callback(acc, element, collectionArray);
        })
    return acc;
}

function myFind(collection, predicate) {
    let searchResult = undefined
    let collectionArray = checkIfCollectionIsArray(collection);
    for (const element of collectionArray) {
        if (predicate(element)) {
            searchResult = element;
            break
        }
    }
    return searchResult;
}

function myFilter(collection, predicate) {
    let collectionArray = checkIfCollectionIsArray(collection);
    let searchResults = [];
    for (const element of collectionArray) {
        if(predicate(element)){
            searchResults.push(element);
        }
    }
    return searchResults;
}

function mySize(collection) {
    let collectionArray = checkIfCollectionIsArray(collection)
    return collectionArray.length
}

function myFirst(collection, n) {
    let collectionArray = checkIfCollectionIsArray(collection)
    let result = []
    if (n) {
        for(let i = 0; i < n; i++){
            result.push(collectionArray[i]);
        }
    }
    else{
        result = collectionArray[0];
    }
    return result
}

function myLast(collection, n) {
    let collectionArray = checkIfCollectionIsArray(collection)
    let result = [];

    if (n) {
        for(let i = collectionArray.length-n; i < collectionArray.length; i++){
            result.push(collectionArray[i]);
        }  
    }
    else{
        result = collectionArray[collectionArray.length-1];
    }

    return result
}

function myKeys(obj) {
    return Object.keys(obj);
}

function myValues(obj) {
    return Object.values(obj);
}