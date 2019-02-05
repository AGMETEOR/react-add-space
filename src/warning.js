// @flow

let warning = () => {};

if (__DEV__) {
  warning = function warn(condition:boolean, message:string):void {
    if (typeof console !== 'undefined') {
      if (!condition) {
        console.error(`Warning: ${message}`);
      }
    }
  };
}

export default warning;
