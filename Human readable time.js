function humanReadable(seconds) {
    let sec=seconds%60;//how to calculate sec
    let timeSec=sec<10? `0${sec}`:`${sec}`;
    let min=parseInt((seconds%3600)/60);//how to calculate min
    let timeMin=min<10? `0${min}`:`${min}`;
    let hr=parseInt(seconds/3600);//how to calculate hr
    let timeHr=hr<10? `0${hr}`:`${hr}`;
    return `${timeHr}:${timeMin}:${timeSec}`;
}