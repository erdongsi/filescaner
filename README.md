# filescaner
 A simple file scaner that scan special folder.

# How to code?
Key codes of example_filescaner.js:

    const filescaner = require("./src/filescaner");

    let mod = new filescaner();

    let folder = "d:\\_github";
    let excludefolders = [".git"];

    mod.scan(folder, (fi,cb)=>{
        helper.log(fi);
        cb();
    }, (e,r)=>{
        helper.log("["+MOD_NAME+"] e:", e);
        helper.log("["+MOD_NAME+"] r:", r);
        helper.log("["+MOD_NAME+"] done.");
    }, excludefolders);


# How to run it?
Install node.js first.

windows>node example_filescaner.js

linux>nohup node example_filescaner.js </dev/null >/dev/null 2>err.error &


