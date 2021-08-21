import { Module } from '../core/module'
import { setAttributesElement } from '../utils'
export class Timer extends Module {
    constructor(type, text) {
        super('timer', 'Запустить таймер')
    }
    trigger() {
        const timeEl = document.createElement('div')
        const timeForm = document.createElement('form')
        const inputTime = document.createElement('input')
        const timeCounter = document.createElement('p')
        const timeStart = document.createElement('button')
        timeEl.className = 'time__container'
        setAttributesElement(inputTime, { 'type': 'text', 'name': 'inputTime', 'placeholder': '00:00', 'maxLength': '5' })
        timeCounter.className = 'time__counter'
        timeCounter.innerHTML = "00:00"
        timeStart.className = 'btn__time-start'
        timeStart.textContent = 'Старт'
        timeForm.append(inputTime, timeStart)
        timeEl.append(timeCounter, timeForm)
        setTimeout(() => {
            timeEl.classList.add('active')
        }, 200)
        document.body.append(timeEl)
        let totalAmount = 0
        let counter
        timeForm.addEventListener('submit', (event) => {
            clearInterval(counter)
            event.preventDefault()
            const { target } = event
            let time = target.inputTime.value
            if (time === '') {
                alert('Введите значение')
            } else if (time.indexOf(':') != -1) {
                var cleanAmount = time.split(':')
                totalAmount = parseInt(cleanAmount[0] | 0) * 60 + parseInt(cleanAmount[1] | 0)
                timeCounter.innerHTML = setTime(parseInt(totalAmount / 60), parseInt(totalAmount % 60))
                inputTime.value = ""
                counter = setInterval(timer, 1000)
            } else {
                alert('Неверный формат')
            }
        })
        function timer() {
            console.log(totalAmount)
            if (totalAmount === 0) {
                finishTimer()
            } else {
                --totalAmount
                let min = parseInt(totalAmount / 60)
                let sec = parseInt(totalAmount % 60)
                timeCounter.innerHTML = setTime(min, sec, totalAmount)
            }
        }
        function setTime(min, sec) {
            if (sec < 10) {
                sec = `0${sec}`
            }
            if (min < 10) {
                min = `0${min}`
            }
            return `${min}<span>m</span>${sec}<span>s</span>`
        }

        function finishTimer() {
            clearInterval(counter)
            alert('Конец таймера')
            timeEl.classList.remove('active')
        }
    }
}