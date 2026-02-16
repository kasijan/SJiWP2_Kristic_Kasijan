let display = document.getElementById('display');
        let currentInput = '0';
        let previousInput = '';
        let operation = null;
        let shouldResetDisplay = false;

        function updateDisplay() {
            display.textContent = currentInput;
        }

        function clearDisplay() {
            currentInput = '0';
            previousInput = '';
            operation = null;
            shouldResetDisplay = false;
            updateDisplay();
        }

        function deleteDigit() {
            if (currentInput.length > 1) {
                currentInput = currentInput.slice(0, -1);
            } else {
                currentInput = '0';
            }
            updateDisplay();
        }

        function appendNumber(number) {
            if (shouldResetDisplay) {
                currentInput = number;
                shouldResetDisplay = false;
            } else {
                if (currentInput === '0' && number !== '.') {
                    currentInput = number;
                } else {
                    // Prevent multiple decimal points
                    if (number === '.' && currentInput.includes('.')) {
                        return;
                    }
                    currentInput += number;
                }
            }
            updateDisplay();
        }

        function appendOperator(op) {
            if (operation !== null && !shouldResetDisplay) {
                calculate();
            }
            previousInput = currentInput;
            operation = op;
            shouldResetDisplay = true;
        }

        function calculate() {
            if (operation === null || shouldResetDisplay) {
                return;
            }

            let result;
            const prev = parseFloat(previousInput);
            const current = parseFloat(currentInput);

            switch (operation) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        alert('Cannot divide by zero!');
                        clearDisplay();
                        return;
                    }
                    result = prev / current;
                    break;
                default:
                    return;
            }

            currentInput = result.toString();
            operation = null;
            shouldResetDisplay = true;
            updateDisplay();
        }

        // Keyboard support
        document.addEventListener('keydown', function(event) {
            if (event.key >= '0' && event.key <= '9') {
                appendNumber(event.key);
            } else if (event.key === '.') {
                appendNumber('.');
            } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
                appendOperator(event.key);
            } else if (event.key === 'Enter' || event.key === '=') {
                calculate();
            } else if (event.key === 'Escape') {
                clearDisplay();
            } else if (event.key === 'Backspace') {
                deleteDigit();
            }
        });