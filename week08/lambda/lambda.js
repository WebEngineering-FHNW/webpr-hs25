
/**
 * Identity function, aka "I" in the SKI calculus or "Ibis" (or "Idiot") in the Smullyan bird metaphors.
 * The function is pure and runs in O(1). Function calls can be inlined.
 * @template _T_
 * @param    { _T_ } x
 * @returns  { _T_ } the parameter {@link x} unchanged.
 * @pure
 * @example
 * id(1) === 1
 */
const id = x => x;

/**
 * A function with two parameters in curried form, that returns the first of the two parameters.
 * @template _T_
 * @type { <_T_> (x:_T_) => (...*) => _T_  }
 * @pure
 * @example
 * konst(42)(null) === 42;
 */
const konst = x => _ => x;
