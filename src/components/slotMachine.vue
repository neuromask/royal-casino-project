<template>
    <div class='slot-machine'>
        <div class='slotwrap'>
            <div class='slot' v-for='(slot, index) of slots' v-bind:key='index + "-label-1"' ref='slots'>
                <div class='slot__window'>
                    <div class='slot__wrap'>
                        <div class='slot__item' v-for='(opt, index) of slot.items' v-bind:key='index + "-one"'><img :src='opt.src' width='140' height='120' :alt='opt.label' /></div>
                        <div class='slot__item' v-for='(opt, index) of slot.items' v-bind:key='index + "-two"'><img :src='opt.src' width='140' height='120' :alt='opt.label' /></div>
                        <div class='slot__item' v-for='(opt, index) of slot.items' v-bind:key='index + "-three"'><img :src='opt.src' width='140' height='120' :alt='opt.label' /></div>
                    </div>
                </div>
            </div>
            <div class='winline winline-top' ref='winlineTop'></div>
            <div class='winline winline-center' ref='winlineCenter'></div>
            <div class='winline winline-bottom' ref='winlineBottom'></div>
        </div>
        <div ref='win' class='win'>
            <span class='win-image blink'><img src='../assets/img/win.png' width='215' height='179' alt='' /></span>
            <span ref='wintop'></span>
            <span ref='wincenter'></span>
            <span ref='winbottom'></span>
            <span class='wintotal' ref='wintotal'></span>
        </div>
        <button @click='start' :disabled='disabled' class="btn-spin pulse"></button>
        <div class='balance'>Balance: <span class="balance-amount">{{ balance }}</span></div>
        <div class='debug'>
            <p class="btn-debug">Debug</p>
            <div class='debug-content'>
            <div>
                <span class="debug-head">Balance:</span>
                <input id="balanceDebug" type='number' min='1' max='5000' maxlength='5' name='balanceDebug' v-model='balanceDebug' oninput="(!validity.rangeOverflow||(value=this.max)) && (!validity.rangeUnderflow||(value=this.min));" />
                <button  @click='updateBalanceDebug' class="btn-balance-debug">Update</button>
            </div>
            <div class='position'>
                <span class="debug-head">Position:</span>
                <input type='radio' id='random' v-on:change='radioRandom' value='random' v-model='position'>
                <label for='random'>Random</label>
                <input type='radio' value='fixed' v-on:change='radioFixed' id='fixed' v-model='position'>
                <label for='fixed'>Fixed</label>
            </div>
            <div>
                <span class="debug-head">Symbol:</span>
                <select :disabled='debugInputsDis' v-model='selected'>
                    <option v-for='option in options' :key='option.value' v-bind:value='option.value'>{{ option.text }}</option>
                </select>
            </div>
            <div>
                <span class="debug-head">Line:</span>
                <input :disabled='debugInputsDis' type='radio' id='linetop' value='1' v-model='lineposition'>
                <label for='linetop'>Top</label>
                <input :disabled='debugInputsDis' type='radio' id='linecenter' value='0' v-model='lineposition'>
                <label for='linecenter'>Center</label>
                <input :disabled='debugInputsDis' type='radio' id='linebottom' value='2' v-model='lineposition'>
                <label for='linebottom'>Bottom</label>
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
                balanceDebug: 100,
                disabled: false,
                wintotal: null,
                wintop: null,
                wincenter: null,
                winbottom: null,
                position: 'random',
                debugInputsDis: true,
                lineposition: 0.5, // 2 - bottom, 1 - top, 0 - center, 0.5 - random
                fixedLinepPosition: [0, 1, 1], // 2 - bottom, 1 - top, 0 - center, 0.5 - random
                selected: 0,
                options: [
                    {text: '3xBAR', value: 0},
                    {text: 'BAR', value: 1},
                    {text: '2xBAR', value: 2},
                    {text: '7', value: 3},
                    {text: 'CHERRY', value: 4}
                ]
            }
        },
        methods: {
            start: function () {

                if (this.opts) { return }

                // reset
                this.wintotal = null;
                this.wintop = null;
                this.wincenter = null;
                this.winbottom = null;
                this.$refs.wintop.innerText = "";
                this.$refs.wincenter.innerText = "";
                this.$refs.winbottom.innerText = "";
                this.$refs.winlineTop.style.display = "none";
                this.$refs.winlineCenter.style.display = "none";
                this.$refs.winlineBottom.style.display = "none";

                this.balance -= 1;
                this.disabled = true;
                this.resultCenter = [];
                this.resultTop = [];
                this.resultBottom = [];
                this.$refs.win.style.display = "none";

                this.opts = this.slots.map((data, i) => {
                    console.log(this.fixedLinepPosition[i]);
                    const slot = this.$refs.slots[i];
                    let choice;

                    if (this.position == 'random') {
                        choice = Math.floor(Math.random() * data.items.length)
                    } else {
                        if (this.lineposition == 2) {
                            choice = this.selected - 1;
                        } else {
                            choice = this.selected;
                        }
                    }
                    //console.log("choice", choice, data.items[choice], i, data.items.length)

                    if (Math.random() < this.fixedLinepPosition[i]) {
                        // top / bottom
                        slot.querySelector('.slot__wrap').style.marginTop = '-80px';

                        if (this.lineposition == 2 && choice < 0) {
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
                    let opts = {
                        el: slot.querySelector('.slot__wrap'),
                        finalPos: choice * 180 - 90,
                        startOffset: 2000,
                        height: data.items.length * 180,
                        duration: 2000 + i * 500, // milliseconds
                        isFinished: false
                    };
                    return opts

                });

                next(this.animate)

            },
            animate: function (timestamp) {

                if (this.startedAt == null) { this.startedAt = timestamp }

                const timeDiff = timestamp - this.startedAt;

                this.opts.forEach(opt => {

                    if (opt.isFinished) { return }

                    const timeRemaining = Math.max(opt.duration - timeDiff, 0);
                    const power = 6;
                    const offset = (Math.pow(timeRemaining, power) / Math.pow(opt.duration, power)) * opt.startOffset;

                    // negative - slots go from top to bottom
                    const pos = -1 * Math.floor((offset + opt.finalPos) % opt.height + opt.height);

                    opt.el.style.transform = "translateY(" + pos + "px)";

                    if (timeDiff > opt.duration) { opt.isFinished = true }

                });

                if (this.opts.every(o => o.isFinished)) {
                    this.opts = null;
                    this.startedAt = null;
                    //console.log('finished')
                    next(this.result)
                } else {
                    next(this.animate)
                }

            },
            result: function () {
                //console.log('top', this.resultTop);
                //console.log('center', this.resultCenter);
                //console.log('bottom', this.resultBottom);

                Array.prototype.equals = this.$helpers.arrayEquals;

                this.lines.map((data) => {
                    //console.log('lines', data.items);
                    if (data.items.equals(this.resultTop, false)) {
                        //console.log('WIN - top', data.payTop);
                        this.wintop = data.payTop;
                        this.balance += this.wintop;
                        this.$refs.wintop.innerText = "Top: " + this.wintop;
                        this.$refs.winlineTop.style.display = "block";
                    }
                    if (data.items.equals(this.resultCenter, false)) {
                        // console.log('WIN - center', data.payCenter);
                        this.wincenter = data.payCenter;
                        this.balance += this.wincenter;
                        this.$refs.wincenter.innerText = "Center: " + this.wincenter;
                        this.$refs.winlineCenter.style.display = "block";
                    }
                    if (data.items.equals(this.resultBottom, false)) {
                        //console.log('WIN - bottom', data.payBottom);
                        this.winbottom = data.payBottom;
                        this.balance += this.winbottom;
                        this.$refs.winbottom.innerText = "Bottom: " + this.winbottom;
                        this.$refs.winlineBottom.style.display = "block";
                    }
                });

                this.isDisabled();
                this.winTotal();

            },
            radioFixed: function () {
                this.lineposition = 1;
                this.debugInputsDis = false;
            },
            radioRandom: function () {
                this.lineposition = 0.5;
                this.debugInputsDis = true;
            },
            updateBalanceDebug: function () {
                this.balance = parseInt(this.balanceDebug);
                if (this.balance > 0) {
                    this.disabled = false;
                }
            },
            isDisabled: function () {
                if (this.balance < 1) {
                    this.disabled = true;
                } else {
                    this.disabled = false;
                }
            },
            winTotal: function () {
                let wintotal = this.wintop + this.wincenter + this.winbottom;
                //console.log(wintotal);
                if (wintotal)  {
                    this.$refs.win.style.display = "block";
                    this.$refs.wintotal.innerText = "Total win: " + wintotal;
                }
            }

        }
    }
</script>
