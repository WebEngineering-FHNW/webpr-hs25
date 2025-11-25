
Security Warning:
=================
No usages or installs that depend on Node.js, NPM, or equivalent should ever
be done with your personal user account on your personal machine!
This could read/write/delete/execute all your personal data.

The use of bundlers and all other NPM-dependent code should be
confined to **anonymous throw-away virtual machines** 
(even github actions can be compromised, see 
https://socket.dev/blog/shai-hulud-strikes-again-v2).

No privacy concerned code or data must ever be committed to the
repository.

For running the code that is built on the ES6 module feature you best
run it from an IDE-integrated server or in debug mode.
  
