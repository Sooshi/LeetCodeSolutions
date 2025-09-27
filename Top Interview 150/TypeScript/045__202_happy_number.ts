function isHappy(n: number): boolean {
    const log: number[] = [];
    let digits: number[] = [];

    function getDigits(n: number) {
        digits = [];
        while (n > 0) {
            digits.unshift(n % 10);
            n = Math.floor(n/10)
        }
    }

    getDigits(n);

    while (true) {
        let sum = 0;
        digits.forEach((digit) => sum += digit**2);

        if (log.includes(sum)) {
            return false;
        }

        if (sum == 1) {
            return true;
        }

        log.push(sum);
        getDigits(sum);
    }
};
