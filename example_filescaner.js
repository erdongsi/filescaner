const path = require("path");

const helper = require("./utils/helper");
const cmd = require("./utils/cmd");
const logs = require("./utils/logs");

const filescaner = require("./src/filescaner");

const mycmd = require("./mycmd");

const MOD_NAME = "example_filescaner";

logs.getInst().setID(MOD_NAME,2);

// 0.make mycmd
cmd.start(mycmd.doCmd);

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