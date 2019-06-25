# Slot machine for Derivco

## From author (Aleksandr Ponomarjov)
It was fun and interesting to develop this app :)

### Workflow and solutions
App developed with Vue JavaScript Framework, styled with SASS and added JSON winning rate file. 

Here are the steps I made:
1) Research the best technique to accomplish the task. Vue is perfectly capable of powering Single-Page Applications.
2) Slot machine reel on JsFiddle with Vue Framework.
3) Slot machine graphic mock-up in Adobe Illustrator and Adobe Photoshop.
4) Project in IDE PhpStorm, graphics and code combined, styles added - according to task.

<p>NOTE: I have added separate input field to update balance in debug area, since I think it should be used only for debugging purpose.</p>
<p>ADDITIONAL: I have researched different array comparing functions. I have been running performance tests on some of the more simple examples here with the following results: <a href='http://jsben.ch/vB3Qn' target='_blank'>here (http://jsben.ch/vB3Qn)</a>.</p>

## Project description
Slot machine simulation web-app running under Google Chrome.

Slot machine page has following interface elements:
1. Reels
2. Pay-table
3. Balance indicator (text-box)
4. SPIN button
5. Debug area

### Reels
Slot machine has 3 reels, each having following 5 symbols in order:<br />
3xBAR, BAR, 2xBAR, 7, CHERRY

### Pay-table
3 CHERRY symbols on top line 2000<br />
3 CHERRY symbols on center line 1000<br />
3 CHERRY symbols on bottom line 4000<br />
3 7 symbols on any line 150<br />
Any combination of CHERRY and 7 on any line 75<br />
3 3xBAR symbols on any line 50<br />
3 2xBAR symbols on any line 20<br />
3 BAR symbols on any line 10<br />
Combination of any BAR symbols on any line 5<br />

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
