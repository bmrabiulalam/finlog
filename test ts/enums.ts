const addUID = <T extends object> (obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'abu', age: 40});

console.log(docOne.uid);

enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR};

interface Resource <T> {
    uid: number;
    resourceName: ResourceType;
    data: T;
}

const doc2: Resource<object> = {
    uid: 2,
    resourceName: ResourceType.AUTHOR,
    data: {}
}

const doc3: Resource<string[]> = {
    uid: 3,
    resourceName: ResourceType.DIRECTOR,
    data: ['adsf']
}