<template>
    <div class='slot-machine'>
        <div class='slot-wrapper'>
            <div class='slot-container'>
                <div class='slot' v-for='slot in populateSlots' :key='slot.id' ref='slots'>
                    <div class='slot__window'>
                        <div class='slot__wrap'>
                            <div v-for="index in slotsAmount" :key="index">
                                <div class='slot__item' v-for='opt in slot.items' :key='opt.id'>
                                    <img :src='opt.src' width='140' height='120' :alt='opt.label' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-for="i in lineOptions.length" :key="i">
                    <div ref="winLine" :class="'win-line win-line-' + (i-1)"></div>
                </div>
            </div>
            <div ref='win' class='win'>
                <span class='win-image blink'><img src='../assets/img/win.png' width='215' height='179' alt='' /></span>
                <div v-for="i in lineOptions.length" :key="i">
                    <span ref="winShow" :class="'win-show win-show-' + (i-1)"></span>
                </div>
                <span class='win-total' ref='winTotal'></span>
            </div>
            <button @click='start' :disabled='disabled' class="btn-spin pulse"></button>
            <div class='balance'>Balance: <span class="balance-amount">{{ balance }}</span></div>
            <div class='debug'>
                <p class="btn-debug">Debug</p>
                <div class='debug-content'>
                    <div>
                        <span class="debug-head">Balance:</span>
                        <input id="balanceDebug" type='number' min='1' max='5000' maxlength='5' name='balanceDebug' v-model.number='balance' @input="inputCheck($event)" />
                    </div>
                    <div class='position'>
                        <span class="debug-head">Mode:</span>
                        <input type='radio' id='random' @change='radioRandom' value='random' v-model='positionMode'>
                        <label for='random'>Random</label>
                        <input type='radio' value='fixed' @change='radioFixed' id='fixed' v-model='positionMode'>
                        <label for='fixed'>Fixed</label>
                    </div>
                    <div>
                        <span class="debug-head">Symbol:</span>
                        <select v-for="i in slotsAmount" :key="i" @change="selectSymbol($event, i-1)" :disabled='debugInputsDis'>
                            <option v-for='(option, index) in slots[0].items' :key='option.id' :value='index'>{{ option.label }}</option>
                        </select>
                    </div>
                    <div>
                        <span class="debug-head">Line:</span>
                        <select v-for="i in slotsAmount" :key="i" @change="selectLine($event, i-1)" :disabled='debugInputsDis'>
                            <option v-for='option in lineOptions' :key='option.value' :value='option.value'>{{ option.text }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import json from '../assets/json/win-rates.json';
    import JQuery from 'jquery'
    let $ = JQuery;

    export default {
        name: 'slotMachine',
        props: {
            msg: String
        },
        data: function () {
            return {
                lines: json,
                slots: [{
                    items: [
                        {label: '3xBAR', src: require('../assets/img/3xBAR.png')},
                        {label: 'BAR', src: require('../assets/img/BAR.png')},
                        {label: '2xBAR', src: require('../assets/img/2xBAR.png')},
                        {label: '7', src: require('../assets/img/7.png')},
                        {label: 'CHERRY', src: require('../assets/img/cherry.png')}
                    ]
                }],
                slotsAmount: 3,
                opts: null,
                startedAt: null,
                isFullFinished: false,
                balance: 100,
                disabled: false,
                winTotal: null,
                positionMode: 'random',
                debugInputsDis: true,
                selectedSymbol: [0, 0, 0], // 0 - 3xBAR ..
                linePosition: 0.5, // 2 - bottom, 1 - top, 0 - center, 0.5 - random
                linePositionFixed: [1, 1, 1], // 2 - bottom, 1 - top, 0 - center, 0.5 - random
                lineOptions: [
                    {text: 'Top', value: 1},
                    {text: 'Center', value: 0},
                    {text: 'Bottom', value: 2}
                ]
            }
        },
        computed: {
            populateSlots() {
                return new Array(this.slotsAmount).fill(this.slots[0]);
            }
        },
        methods: {
            start: function () {

                if (this.opts) { return }
                // reset
                this.balance -= 1;
                this.winTotal = null;
                this.$refs.win.style.display = "none";
                for (let i = 0; i < this.lineOptions.length; i++) {
                    this.$refs.winShow[i].innerText = '';
                    this.$refs.winLine[i].style.display = "none";
                }
                this.winResult = [[],[],[]];
                this.disabled = true;
                this.isFullFinished = false;

                this.opts = this.populateSlots.map((data, i) => {
                    const slot = this.$refs.slots[i];
                    let choice;
                    // random or fixed mode choice from debug options
                    if (this.positionMode === 'random') {
                        choice = Math.floor(Math.random() * data.items.length)
                    } else {
                        this.linePosition = this.linePositionFixed[i];
                        if (this.linePosition === 2) {
                            choice = this.selectedSymbol[i] - 1;
                        } else {
                            choice = this.selectedSymbol[i];
                        }
                    }
                    //console.log("choice", choice, data.items[choice], i, data.items.length)
                    // make arrays for different lines depending on choice
                    if (Math.random() < this.linePosition) {
                        // top / bottom
                        slot.querySelector('.slot__wrap').style.marginTop = '-80px';

                        if (this.linePosition === 2 && choice < 0) {
                            this.winResult[0].push(data.items[data.items.length - 1].label);
                        } else {
                            this.winResult[0].push(data.items[choice].label);
                        }
                        if (choice === data.items.length - 1) {
                            this.winResult[2].push(data.items[0].label);
                        } else {
                            this.winResult[2].push(data.items[choice + 1].label);
                        }
                    } else {
                        // center
                        slot.querySelector('.slot__wrap').style.marginTop = '0';
                        this.winResult[1].push(data.items[choice].label);
                    }
                    // options for animation
                    return {
                        el: slot.querySelector('.slot__wrap'),
                        finalPos: choice * 180 - 90,
                        startOffset: 2000,
                        height: data.items.length * 180,
                        duration: 2000 + i * 500, // milliseconds
                        isFinished: false
                    };
                });
                // animate
                this.animate()
            },
            animate: function (timestamp) {

                if (this.startedAt == null) { this.startedAt = timestamp }
                const timeDiff = timestamp - this.startedAt;

                this.opts.forEach(opt => {
                    if (opt.isFinished) { return }
                    const timeRemaining = Math.max(opt.duration - timeDiff, 0);
                    const power = 3;
                    const offset = (Math.pow(timeRemaining, power) / Math.pow(opt.duration, power)) * opt.startOffset;
                    // negative - slots go from top to bottom
                    const pos = -1 * Math.floor((offset + opt.finalPos) % opt.height + opt.height);
                    opt.el.style.transform = "translateY(" + pos + "px)";
                    if (timeDiff > opt.duration) { opt.isFinished = true }
                });
                // animation check for all slots
                if (this.opts.every(o => o.isFinished)) {
                    this.opts = null;
                    this.startedAt = null;
                    this.result()
                } else {
                    next(this.animate)
                }

            },
            result: function () {
                // comparing results for three lines
                for (let entry of this.lines) {
                    for (let i = 0; i < this.lineOptions.length; i++) {
                        if (this.compareArrays(this.winResult[i], entry.items)) {
                            this.winTotal += entry.payOut[i];
                            this.$refs.winShow[i].innerText = this.lineOptions[i].text + ": " + entry.payOut[i];
                            this.$refs.winLine[i].style.display = "block";
                        }
                    }
                }

                this.isFullFinished = true;
                this.win();
                this.isDisabled();

            },
            compareArrays: function(a1, a2) {
                return a1.length === a2.length && a1.sort().every((v,i)=> v === a2.sort()[i]);
            },
            radioFixed: function () {
                this.linePosition = 1;
                this.debugInputsDis = false;
            },
            radioRandom: function () {
                this.linePosition = 0.5;
                this.debugInputsDis = true;
            },
            isDisabled: function () {
                if (this.balance < 1) {
                    this.disabled = true;
                } else if (this.isFullFinished) {
                    this.disabled = false;
                }
            },
            win: function () {
                if (this.winTotal)  {
                    this.$refs.win.style.display = "block";
                    this.$refs.winTotal.innerText = "Total win: " + this.winTotal;
                    this.balance += parseInt(this.winTotal);
                    this.isDisabled();
                }
            },
            selectSymbol(event, form) {
                this.selectedSymbol[form] = parseInt(event.target.value);
            },
            selectLine(event, form) {
                this.linePositionFixed[form] = parseInt(event.target.value);
            },
            inputCheck(event) {
                let min = parseInt(event.target.getAttribute('min'));
                let max = parseInt(event.target.getAttribute('max'));
                let value = parseInt(event.target.value);
                if (value > max) this.balance = max;
                if (value < min) this.balance = min;
                this.isDisabled();
            }
        }
    }

    $(document).ready(function(){
        $( ".btn-debug" ).click(function() {
            $( ".debug-content" ).slideToggle( "fast" );
        });
    });

    const next = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function (cb) {
            window.setTimeout(cb, 1000 / 60)
        };
</script>