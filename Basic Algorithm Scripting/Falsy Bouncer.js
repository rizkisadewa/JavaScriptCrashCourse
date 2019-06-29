function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));

/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

1. bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
2. bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
3. bouncer([false, null, 0, NaN, undefined, ""]) should return [].
4. bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
*/
