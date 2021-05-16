const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = 0;

    const updateCounter = () => {
        const target = parseInt(counter.getAttribute('data-target'))
        const c = parseInt(counter.innerText)
        
        const increment = target / 200

        if(c < target) {
            console.log(Math.ceil(c + increment))
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }

        console.log(increment)
    }

    updateCounter()
})

