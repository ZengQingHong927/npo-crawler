function sleepP (ms) {
        return new Promise((r) => {
                setTimeout(() => r(), ms)
        })
}

module.exports = {
        sleepP,
}