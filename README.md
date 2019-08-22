# RUST + WASM + NEXT

This repository is the most simple example that I could create for creating
Rust code that compiles to .wasm, and then executes in the browser via next.js

### Prereq: Install nightly to obtail wasm32-unknown-unknown rust compilation target

`rustup install nightly`

### Install Dependencies + Compile Rust code to wasm (Assumes rust, cargo,are installed as well as node + yarn)

`yarn up`

### Run
#### Development mode
`yarn dev`

#### Production mode
`yarn build && yarn start`

### What to expect

When you load the index page, eg `localhost:3000`, 
you will see the number 42.

What has happened behind the scenes is that the 
RustComponent (`components/RustComponent.jsx`) has imported the `.wasm` code
(that we compiled in the `yarn up` step - `static/number_adder.wasm`) and executed the `add_numbers` function from that Rust module (`number_adder/src/lib.rs`). This means that we have essentially made a call to machine-level code from javascript and rendered the result on the page. 

WHAT?! :O