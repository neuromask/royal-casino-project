<template>
    <div class='slot-machine'>
        <div class='slot-container'>
            <div class='slot' v-for='(slot, index) of slots' v-bind:key='index + "-label-1"' ref='slots'>
                <div class='slot__window'>
                    <div class='slot__wrap'>
                        <div class='slot__item' v-for='(opt, index) of slot.items' v-bind:key='index + "-one"'><img :src='opt.src' width='140' height='120' :alt='opt.label' /></div>
                        <div class='slot__item' v-for='(opt, index) of slot.items' v-bind:key='index + "-two"'><img :src='opt.src' width='140' height='120' :alt='opt.label' /></div>
                        <div class='slot__item' v-for='(opt, index) of slot.items' v-bind:key='index + "-three"'><img :src='opt.src' width='140' height='120' :alt='opt.label' /></div>
                    </div>
                </div>
            </div>
            <div class='win-line win-line-top' ref='winlineTop'></div>
            <div class='win-line win-line-center' ref='winLineCenter'></div>
            <div class='win-line win-line-bottom' ref='winLineBottom'></div>
        </div>
        <div ref='win' class='win'>
            <span class='win-image blink'><img src='../assets/img/win.png' width='215' height='179' alt='' /></span>
            <span ref='winTop'></span>
            <span ref='winCenter'></span>
            <span ref='winBottom'></span>
            <span class='win-total' ref='winTotal'></span>
        </div>
        <button @click='start' :disabled='disabled' class="btn-spin pulse"></button>
        <div class='balance'>Balance: <span class="balance-amount">{{ balance }}</span></div>
        <div class='debug'>
            <p class="btn-debug">Debug</p>
            <div class='debug-content'>
            <div>
                <span class="debug-head">Balance:</span>
                <input id="balanceDebug" type='number' min='1' max='5000' maxlength='5' name='balanceDebug' v-model='balance' @input="inputCheck($event)" />
            </div>
            <div class='position'>
                <span class="debug-head">Mode:</span>
                <input type='radio' id='random' v-on:change='radioRandom' value='random' v-model='positionMode'>
                <label for='random'>Random</label>
                <input type='radio' value='fixed' v-on:change='radioFixed' id='fixed' v-model='positionMode'>
                <label for='fixed'>Fixed</label>
            </div>
            <div>
                <span class="debug-head">Symbol:</span>
                <select @change="selectSymbol($event, '0')" :disabled='debugInputsDis'>
                    <option v-for='option in symbolOptions' :key='option.value' v-bind:value='option.value'>{{ option.text }}</option>
                </select>
                <select @change="selectSymbol($event, '1')" :disabled='debugInputsDis'>
                    <option v-for='option in symbolOptions' :key='option.value' v-bind:value='option.value'>{{ option.text }}</option>
                </select>
                <select @change="selectSymbol($event, '2')" :disabled='debugInputsDis'>
                    <option v-for='option in symbolOptions' :key='option.value' v-bind:value='option.value'>{{ option.text }}</option>
                </select>
            </div>
            <div>
                <span class="debug-head">Line:</span>
                <select @change="selectLine($event, '0')" :disabled='debugInputsDis'>
                    <option v-for='option in lineOptions' :key='option.value' v-bind:value='option.value'>{{ option.text }}</option>
                </select>
                <select @change="selectLine($event, '1')" :disabled='debugInputsDis'>
                    <option v-for='option in lineOptions' :key='option.value' v-bind:value='option.value'>{{ option.text }}</option>
                </select>
                <select @change="selectLine($event, '2')" :disabled='debugInputsDis'>
                    <option v-for='option in lineOptions' :key='option.value' v-bind:value='option.value'>{{ option.text }}</option>
                </select>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import JQuery from 'jquery'
    let $ = JQuery;

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

    import json from '../assets/json/win-rates.json';

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
                }, {
                    items: [
                        {label: '3xBAR', src: require('../assets/img/3xBAR.png')},
                        {label: 'BAR', src: require('../assets/img/BAR.png')},
                        {label: '2xBAR', src: require('../assets/img/2xBAR.png')},
                        {label: '7', src: require('../assets/img/7.png')},
                        {label: 'CHERRY', src: require('../assets/img/cherry.png')}
                    ]
                }, {
                    items: [
                        {label: '3xBAR', src: require('../assets/img/3xBAR.png')},
                        {label: 'BAR', src: require('../assets/img/BAR.png')},
                        {label: '2xBAR', src: require('../assets/img/2xBAR.png')},
                        {label: '7', src: require('../assets/img/7.png')},
                        {label: 'CHERRY', src: require('../assets/img/cherry.png')}
                    ]
                }],
                opts: null,
                startedAt: null,
                balance: 100,
                disabled: false,
                winTotal: null,
                winTop: null,
                winCenter: null,
                winBottom: null,
                positionMode: 'random',
                debugInputsDis: true,
                linePosition: 0.5, // 2 - bottom, 1 - top, 0 - center, 0.5 - random
                linePositionFixed: [1, 1, 1], // 2 - bottom, 1 - top, 0 - center, 0.5 - random
                selectedSymbolDefault: 0,
                selectedSymbol: [0, 0, 0], // 0 - 3xBAR ..
                symbolOptions: [
                    {text: '3xBAR', value: 0},
                    {text: 'BAR', value: 1},
                    {text: '2xBAR', value: 2},
                    {text: '7', value: 3},
                    {text: 'CHERRY', value: 4}
                ],
                lineOptions: [
                    {text: 'Top', value: 1},
                    {text: 'Center', value: 0},
                    {text: 'Bottom', value: 2}
                ]
            }
        },
        methods: {
            start: function () {

                if (this.opts) { return }

                // reset
                this.winTotal = null;
                this.winTop = null;
                this.winCenter = null;
                this.winBottom = null;
                this.$refs.winTop.innerText = "";
                this.$refs.winCenter.innerText = "";
                this.$refs.winBottom.innerText = "";
                this.$refs.winlineTop.style.display = "none";
                this.$refs.winLineCenter.style.display = "none";
                this.$refs.winLineBottom.style.display = "none";

                this.balance -= 1;
                this.disabled = true;
                this.resultCenter = [];
                this.resultTop = [];
                this.resultBottom = [];
                this.$refs.win.style.display = "none";

                this.opts = this.slots.map((data, i) => {
                    //console.log(this.selectedSymbol[i], this.linePositionFixed[i]);
                    const slot = this.$refs.slots[i];
                    let choice;
                    // random or fixed mode choice from debug options
                    if (this.positionMode == 'random') {
                        choice = Math.floor(Math.random() * data.items.length)
                    } else {
                        this.linePosition = this.linePositionFixed[i];
                        if (this.linePosition == 2) {
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

                        if (this.linePosition == 2 && choice < 0) {
                            this.resultTop.push(data.items[data.items.length - 1].label);
                        } else {
                            this.resultTop.push(data.items[choice].label);
                        }
                        if (choice === data.items.length - 1) {
                            this.resultBottom.push(data.items[0].label);
                        } else {
                            this.resultBottom.push(data.items[choice + 1].label);
                        }
                    } else {
                        // center
                        slot.querySelector('.slot__wrap').style.marginTop = '0';
                        this.resultCenter.push(data.items[choice].label);
                    }
                    // options for animation
                    let animationOpts = {
                        el: slot.querySelector('.slot__wrap'),
                        finalPos: choice * 180 - 90,
                        startOffset: 2000,
                        height: data.items.length * 180,
                        duration: 2000 + i * 500, // milliseconds
                        isFinished: false
                    };
                    return animationOpts

                });

                next(this.animate)

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
                    next(this.result)
                } else {
                    next(this.animate)
                }

            },
            result: function () {
                // array compare function
                Array.prototype.equals = this.$helpers.arrayEquals;
                // comparing results for three lines
                this.lines.map((data) => {
                    if (data.items.equals(this.resultTop, false)) {
                        this.winTop = data.payTop;
                        this.$refs.winTop.innerText = "Top: " + this.winTop;
                        this.$refs.winlineTop.style.display = "block";
                    }
                    if (data.items.equals(this.resultCenter, false)) {
                        this.winCenter = data.payCenter;
                        this.$refs.winCenter.innerText = "Center: " + this.winCenter;
                        this.$refs.winLineCenter.style.display = "block";
                    }
                    if (data.items.equals(this.resultBottom, false)) {
                        this.winBottom = data.payBottom;
                        this.$refs.winBottom.innerText = "Bottom: " + this.winBottom;
                        this.$refs.winLineBottom.style.display = "block";
                    }
                });

                this.isDisabled();
                this.win();

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
                } else {
                    this.disabled = false;
                }
            },
            win: function () {
                this.winTotal = this.winTop + this.winCenter + this.winBottom;
                if (this.winTotal)  {
                    this.$refs.win.style.display = "block";
                    this.$refs.winTotal.innerText = "Total win: " + this.winTotal;
                    this.balance += this.winTotal;
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
            }
        }
    }
</script>
