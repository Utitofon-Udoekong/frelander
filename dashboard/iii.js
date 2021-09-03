setInterval(()=>{
    console.log(valuePresets());
}, 10000);

const valuePresets = () => {
    let rands = [];
    for (let i = 1; i <= 6; i++) {
        let val = Math.floor(Math.random() * (110 + 1)) - 10;
        let up_or_down = (val < 0)?0:1;
        let presets = [val, up_or_down];
        rands.push(presets);
    };
    return rands;
}