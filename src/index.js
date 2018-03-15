// DO WHATEVER YOU WANT HERE
let n = 0;
const createEnumerableProperty = (propertyName) => { return propertyName;};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName,{
        enumerable:false,
        value: 'value'
    });
    return propertyName;
};
const createProtoMagicObject = () => {return Function};
const incrementor = () => {
    n++;
    return n;
};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = (object) => {
    let something = new Boolean(object);
    return something;
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    const compareFunction = (a,b) =>{
        return a-b;
        }
  return  arr.sort(compareFunction);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;