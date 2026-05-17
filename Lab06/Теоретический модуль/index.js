// Задание 1
        function solveTask1() {
            var x = parseFloat(document.getElementById('task1_x').value);
            var resultDiv = document.getElementById('result1');
            
            if (isNaN(x)) {
                resultDiv.innerHTML = '<strong>Ошибка:</strong> Введите числовое значение для x';
                resultDiv.className = 'result error';
                resultDiv.style.display = 'block';
                return;
            }
            
            var numerator = Math.pow(x, 2) - 7 * x + 10;
            var denominator = Math.pow(x, 2) - 8 * x + 12;
            
            if (denominator === 0) {
                resultDiv.innerHTML = '<strong>Ошибка:</strong> Знаменатель равен нулю при x = ' + x;
                resultDiv.className = 'result error';
            } else {
                var result = numerator / denominator;
                resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                    'Числитель: ' + numerator.toFixed(4) + '<br>' +
                    'Знаменатель: ' + denominator.toFixed(4) + '<br>' +
                    'Ответ: ' + result.toFixed(4);
                resultDiv.className = 'result';
            }
            resultDiv.style.display = 'block';
        }

        // Задание 2
        function solveTask2() {
            var m1 = parseFloat(document.getElementById('task2_m1').value);
            var m2 = parseFloat(document.getElementById('task2_m2').value);
            var m3 = parseFloat(document.getElementById('task2_m3').value);
            var resultDiv = document.getElementById('result2');
            
            if (isNaN(m1) || isNaN(m2) || isNaN(m3)) {
                resultDiv.innerHTML = '<strong>Ошибка:</strong> Введите все массы';
                resultDiv.className = 'result error';
                resultDiv.style.display = 'block';
                return;
            }
            
            var sum = m1 + m2 + m3;
            var heaviest = Math.max(m1, m2, m3);
            var lightest = Math.min(m1, m2, m3);
            
            resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                'Сумма масс: ' + sum.toFixed(2) + ' кг<br>' +
                'Самая тяжелая: ' + heaviest.toFixed(2) + ' кг<br>' +
                'Самая легкая: ' + lightest.toFixed(2) + ' кг';
            resultDiv.className = 'result';
            resultDiv.style.display = 'block';
        }

        // Задание 3
        function solveTask3() {
            var surname = document.getElementById('task3_surname').value;
            var resultDiv = document.getElementById('result3');
            
            if (!surname) {
                resultDiv.innerHTML = '<strong>Ошибка:</strong> Введите фамилию';
                resultDiv.className = 'result error';
                resultDiv.style.display = 'block';
                return;
            }
            
            var vowels = 'аеёиоуыэюяaeiou';
            var consonants = 'бвгджзйклмнпрстфхцчшщbcdfghjklmnpqrstvwxyz';
            var vowelCount = 0;
            var consonantCount = 0;
            
            for (var i = 0; i < surname.length; i++) {
                var char = surname[i].toLowerCase();
                if (vowels.indexOf(char) !== -1) {
                    vowelCount++;
                } else if (consonants.indexOf(char) !== -1) {
                    consonantCount++;
                }
            }
            
            resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                'Фамилия: ' + surname + '<br>' +
                'Гласных: ' + vowelCount + '<br>' +
                'Согласных: ' + consonantCount;
            resultDiv.className = 'result';
            resultDiv.style.display = 'block';
        }

        // Задание 4
        function solveTask4() {
            var str = document.getElementById('task4_str').value;
            var resultDiv = document.getElementById('result4');
            
            if (str.length < 20) {
                str = str.padEnd(20, ' ');
            } else if (str.length > 20) {
                str = str.substring(0, 20);
            }
            
            var targetChar = str[4];
            var count = 0;
            for (var i = 0; i < 20; i++) {
                if (str[i] === targetChar) {
                    count++;
                }
            }
            
            resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                'Строка (20 символов): "' + str + '"<br>' +
                '5-й символ: "' + targetChar + '"<br>' +
                'Повторяется: ' + count + ' раз(а)';
            resultDiv.className = 'result';
            resultDiv.style.display = 'block';
        }

        // Задание 5
        function solveTask5() {
            var x = parseFloat(document.getElementById('task5_x').value);
            var y = parseFloat(document.getElementById('task5_y').value);
            var op = parseInt(document.getElementById('task5_op').value);
            var resultDiv = document.getElementById('result5');
            
            if (isNaN(x) || isNaN(y)) {
                resultDiv.innerHTML = '<strong>Ошибка:</strong> Введите оба числа';
                resultDiv.className = 'result error';
                resultDiv.style.display = 'block';
                return;
            }
            
            var result;
            var operationName;
            
            switch (op) {
                case 1:
                    result = x + y;
                    operationName = 'Сложение';
                    break;
                case 2:
                    result = x - y;
                    operationName = 'Вычитание';
                    break;
                case 3:
                    result = x * y;
                    operationName = 'Умножение';
                    break;
                case 4:
                    if (y === 0) {
                        resultDiv.innerHTML = '<strong>Ошибка:</strong> Деление на ноль';
                        resultDiv.className = 'result error';
                        resultDiv.style.display = 'block';
                        return;
                    }
                    result = x / y;
                    operationName = 'Деление';
                    break;
            }
            
            resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                operationName + ': ' + x + ' ' + 
                (op === 1 ? '+' : op === 2 ? '-' : op === 3 ? '×' : '÷') + 
                ' ' + y + ' = ' + result.toFixed(4);
            resultDiv.className = 'result';
            resultDiv.style.display = 'block';
        }

        // Задание 6
        function solveTask6() {
            var voltage = parseFloat(document.getElementById('task6_voltage').value);
            var current = parseFloat(document.getElementById('task6_current').value);
            var resultDiv = document.getElementById('result6');
            
            if (isNaN(voltage) || isNaN(current)) {
                resultDiv.innerHTML = '<strong>Ошибка:</strong> Введите напряжение и ток';
                resultDiv.className = 'result error';
                resultDiv.style.display = 'block';
                return;
            }
            
            if (current === 0) {
                resultDiv.innerHTML = '<strong>Ошибка:</strong> Ток не может быть равен нулю';
                resultDiv.className = 'result error';
            } else {
                var resistance = voltage / current;
                resultDiv.innerHTML = '<strong>Результат (Закон Ома):</strong><br>' +
                    'R = U / I<br>' +
                    'R = ' + voltage + ' В / ' + current + ' А = ' + resistance.toFixed(4) + ' Ом';
                resultDiv.className = 'result';
            }
            resultDiv.style.display = 'block';
        }

        // Задание 7
        function solveTask7() {
            var R1 = parseFloat(document.getElementById('task7_r1').value);
            var R2 = parseFloat(document.getElementById('task7_r2').value);
            var resultDiv = document.getElementById('result7');
            
            if (isNaN(R1) || isNaN(R2)) {
                resultDiv.innerHTML = '<strong>Ошибка:</strong> Введите оба сопротивления';
                resultDiv.className = 'result error';
                resultDiv.style.display = 'block';
                return;
            }
            
            var series = R1 + R2;
            var parallel = (R1 * R2) / (R1 + R2);
            
            resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                'Последовательное соединение: R = R1 + R2 = ' + series.toFixed(4) + ' Ом<br>' +
                'Параллельное соединение: R = (R1×R2)/(R1+R2) = ' + parallel.toFixed(4) + ' Ом';
            resultDiv.className = 'result';
            resultDiv.style.display = 'block';
        }

        // Задание 8
        function solveTask8() {
            var input = document.getElementById('task8_words').value;
            var resultDiv = document.getElementById('result8');
            
            if (!input.trim()) {
                resultDiv.innerHTML = '<strong>Ошибка:</strong> Введите слова';
                resultDiv.className = 'result error';
                resultDiv.style.display = 'block';
                return;
            }
            
            var words = input.trim().split(/\s+/);
            var transformed = [];
            
            for (var i = 0; i < words.length; i++) {
                var word = words[i];
                var firstA = word.indexOf('а');
                if (firstA !== -1) {
                    var newWord = word.substring(0, firstA) + 'о' + word.substring(firstA + 1);
                    newWord = newWord.replace(/а/g, '');
                    transformed.push(newWord);
                } else {
                    transformed.push(word);
                }
            }
            
            resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                'Исходные: ' + words.join(', ') + '<br>' +
                'Преобразованные: ' + transformed.join(', ');
            resultDiv.className = 'result';
            resultDiv.style.display = 'block';
        }

        // Задание 9
        function solveTask9() {
            var now = new Date();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var currentTime = hours + minutes / 60;
            
            var category;
            if ((currentTime >= 7 && currentTime < 8) || (currentTime >= 13 && currentTime < 14) || 
                (currentTime >= 19 && currentTime < 20)) {
                if (currentTime >= 7 && currentTime < 8) category = 'Завтрак';
                else if (currentTime >= 13 && currentTime < 14) category = 'Обед';
                else category = 'Ужин';
            } else if (currentTime >= 9 && currentTime < 18) {
                category = 'Работа';
            } else if (currentTime >= 18 && currentTime < 23) {
                category = 'Отдых';
            } else if (currentTime >= 23 || currentTime < 6.5) {
                category = 'Сон';
            } else {
                category = 'Другое';
            }
            
            var resultDiv = document.getElementById('result9');
            resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                'Текущее время: ' + hours.toString().padStart(2, '0') + ':' + 
                minutes.toString().padStart(2, '0') + '<br>' +
                'Категория: <strong>' + category + '</strong>';
            resultDiv.className = 'result';
            resultDiv.style.display = 'block';
        }

        // Задание 10
        function solveTask10() {
            var primes = [];
            for (var num = 2; num <= 10; num++) {
                var isPrime = true;
                for (var i = 2; i < num; i++) {
                    if (num % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    primes.push(num);
                }
            }
            
            var resultDiv = document.getElementById('result10');
            resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                'Простые числа от 2 до 10: ' + primes.join(', ');
            resultDiv.className = 'result';
            resultDiv.style.display = 'block';
        }

        // Задание 11
        function solveTask11() {
            var text = document.getElementById('task11_text').value;
            var resultDiv = document.getElementById('result11');
            
            if (!text.trim()) {
                resultDiv.innerHTML = '<strong>Ошибка:</strong> Введите текст';
                resultDiv.className = 'result error';
                resultDiv.style.display = 'block';
                return;
            }
            
            var words = text.trim().split(/\s+/).filter(function(word) {
                return word.replace(/[.,!?;:]/g, '').length > 0;
            });
            
            var wordCount = words.length;
            var maxLength = 0;
            var minLength = Infinity;
            var totalLength = 0;
            var maxWord = '';
            var minWord = '';
            
            for (var i = 0; i < words.length; i++) {
                var cleanWord = words[i].replace(/[.,!?;:]/g, '');
                var len = cleanWord.length;
                totalLength += len;
                if (len > maxLength) {
                    maxLength = len;
                    maxWord = cleanWord;
                }
                if (len < minLength) {
                    minLength = len;
                    minWord = cleanWord;
                }
            }
            
            var averageLength = wordCount > 0 ? totalLength / wordCount : 0;
            
            resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                'Количество слов: ' + wordCount + '<br>' +
                'Максимальная длина: ' + maxLength + ' (слово: "' + maxWord + '")<br>' +
                'Минимальная длина: ' + minLength + ' (слово: "' + minWord + '")<br>' +
                'Средняя длина: ' + averageLength.toFixed(2);
            resultDiv.className = 'result';
            resultDiv.style.display = 'block';
        }

        // Задание 12
        function solveTask12() {
            var str = document.getElementById('task12_str').value;
            var resultDiv = document.getElementById('result12');
            
            if (!str) {
                resultDiv.innerHTML = '<strong>Ошибка:</strong> Введите строку';
                resultDiv.className = 'result error';
                resultDiv.style.display = 'block';
                return;
            }
            
            var cleaned = str.toLowerCase().replace(/[^a-zA-Zа-яА-Я0-9]/g, '');
            var reversed = cleaned.split('').reverse().join('');
            var isPal = cleaned === reversed;
            
            resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                'Исходная строка: "' + str + '"<br>' +
                'После очистки: "' + cleaned + '"<br>' +
                'Перевернутая: "' + reversed + '"<br>' +
                (isPal ? '<strong>Это палиндром! ✓</strong>' : '<strong>Это не палиндром ✗</strong>');
            resultDiv.className = 'result';
            resultDiv.style.display = 'block';
        }

        // Задание 13
        function solveTask13() {
            var email = document.getElementById('task13_email').value;
            var resultDiv = document.getElementById('result13');
            
            if (!email) {
                resultDiv.innerHTML = '<strong>Ошибка:</strong> Введите email';
                resultDiv.className = 'result error';
                resultDiv.style.display = 'block';
                return;
            }
            
            var errors = [];
            
            if (email.indexOf('@') === -1) {
                errors.push('Отсутствует символ @');
            } else {
                var atIndex = email.indexOf('@');
                var afterAt = email.substring(atIndex + 1);
                var lastDotIndex = afterAt.lastIndexOf('.');
                
                if (email.length < 6) {
                    errors.push('Минимальный размер адреса - 6 символов');
                }
                if (atIndex < 1) {
                    errors.push('Слева от @ должен быть как минимум один символ');
                }
                if (afterAt.indexOf('.') === -1) {
                    errors.push('Справа от @ должна быть как минимум одна точка');
                }
                if (lastDotIndex !== -1 && afterAt.length - lastDotIndex - 1 < 2) {
                    errors.push('Справа от последней точки должно быть как минимум 2 символа');
                }
                if (lastDotIndex > 0 && lastDotIndex - 1 < 1) {
                    errors.push('Между @ и точкой должен быть как минимум один символ');
                }
            }
            
            if (errors.length === 0) {
                resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                    'Email: ' + email + '<br>' +
                    '<strong>✓ Email корректен!</strong>';
                resultDiv.className = 'result';
            } else {
                resultDiv.innerHTML = '<strong>Ошибки:</strong><br>' +
                    email + '<br><br>' +
                    errors.map(function(e) { return '• ' + e; }).join('<br>');
                resultDiv.className = 'result error';
            }
            resultDiv.style.display = 'block';
        }

        // Задание 14
        function solveTask14() {
            var x = parseFloat(document.getElementById('task14_x').value);
            var y = parseFloat(document.getElementById('task14_y').value);
            var xc = parseFloat(document.getElementById('task14_xc').value);
            var yc = parseFloat(document.getElementById('task14_yc').value);
            var r = parseFloat(document.getElementById('task14_r').value);
            var resultDiv = document.getElementById('result14');
            
            if (isNaN(x) || isNaN(y) || isNaN(xc) || isNaN(yc) || isNaN(r)) {
                resultDiv.innerHTML = '<strong>Ошибка:</strong> Введите все значения';
                resultDiv.className = 'result error';
                resultDiv.style.display = 'block';
                return;
            }
            
            var distance = Math.sqrt(Math.pow(x - xc, 2) + Math.pow(y - yc, 2));
            var isInCircle = distance <= r;
            
            resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                'Точка: (' + x + ', ' + y + ')<br>' +
                'Центр круга: (' + xc + ', ' + yc + ')<br>' +
                'Радиус: ' + r + '<br>' +
                'Расстояние от центра: ' + distance.toFixed(4) + '<br>' +
                (isInCircle ? '<strong>✓ Точка принадлежит кругу</strong>' : 
                              '<strong>✗ Точка не принадлежит кругу</strong>');
            resultDiv.className = 'result';
            resultDiv.style.display = 'block';
        }

        // Задание 15
        function solveTask15() {
            var results = [];
            for (var t = 0.1; t <= 0.8; t += 0.05) {
                var y = 4 * Math.sin(t) - 0.5 * Math.sin(t);
                results.push({ t: t, y: y });
            }
            
            var output = '<strong>Результат:</strong><br><table border="1" cellpadding="5">';
            output += '<tr><th>T</th><th>Y</th></tr>';
            for (var i = 0; i < results.length; i++) {
                output += '<tr><td>' + results[i].t.toFixed(2) + '</td><td>' + 
                          results[i].y.toFixed(4) + '</td></tr>';
            }
            output += '</table>';
            
            var resultDiv = document.getElementById('result15');
            resultDiv.innerHTML = output;
            resultDiv.className = 'result';
            resultDiv.style.display = 'block';
        }

        // Задание 16
        function solveTask16() {
            var v0 = parseFloat(document.getElementById('task16_v0').value);
            var t = parseFloat(document.getElementById('task16_t').value);
            var resultDiv = document.getElementById('result16');
            
            if (isNaN(v0) || isNaN(t)) {
                resultDiv.innerHTML = '<strong>Ошибка:</strong> Введите скорость и время';
                resultDiv.className = 'result error';
                resultDiv.style.display = 'block';
                return;
            }
            
            var g = 9.8;
            var sinAlpha = (g * t) / (2 * v0);
            
            if (sinAlpha > 1 || sinAlpha < -1) {
                resultDiv.innerHTML = '<strong>Ошибка:</strong> Невозможные параметры (sin α > 1)';
                resultDiv.className = 'result error';
            } else {
                var alpha = Math.asin(sinAlpha);
                var degrees = alpha * 180 / Math.PI;
                
                resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                    'Ускорение свободного падения g = 9.8 м/с²<br>' +
                    'sin(α) = ' + sinAlpha.toFixed(4) + '<br>' +
                    'Угол α = ' + degrees.toFixed(2) + '° (' + alpha.toFixed(4) + ' рад)';
                resultDiv.className = 'result';
            }
            resultDiv.style.display = 'block';
        }

        // Задание 17
        function updateTask17Inputs() {
            var method = document.getElementById('task17_method').value;
            document.getElementById('task17_inputs_sides').style.display = 
                method === 'sides' ? 'block' : 'none';
            document.getElementById('task17_inputs_twoSidesAngle').style.display = 
                method === 'twoSidesAngle' ? 'block' : 'none';
            document.getElementById('task17_inputs_baseHeight').style.display = 
                method === 'baseHeight' ? 'block' : 'none';
        }

        function solveTask17() {
            var method = document.getElementById('task17_method').value;
            var resultDiv = document.getElementById('result17');
            var area;
            
            if (method === 'sides') {
                var a = parseFloat(document.getElementById('task17_a').value);
                var b = parseFloat(document.getElementById('task17_b').value);
                var c = parseFloat(document.getElementById('task17_c').value);
                
                if (isNaN(a) || isNaN(b) || isNaN(c)) {
                    resultDiv.innerHTML = '<strong>Ошибка:</strong> Введите все стороны';
                    resultDiv.className = 'result error';
                    resultDiv.style.display = 'block';
                    return;
                }
                
                if (a + b <= c || a + c <= b || b + c <= a) {
                    resultDiv.innerHTML = '<strong>Ошибка:</strong> Треугольник не существует';
                    resultDiv.className = 'result error';
                } else {
                    var p = (a + b + c) / 2;
                    area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
                    resultDiv.innerHTML = '<strong>Результат (формула Герона):</strong><br>' +
                        'Полупериметр p = ' + p.toFixed(4) + '<br>' +
                        'Площадь S = ' + area.toFixed(4);
                    resultDiv.className = 'result';
                }
            } else if (method === 'twoSidesAngle') {
                var a2 = parseFloat(document.getElementById('task17_a2').value);
                var b2 = parseFloat(document.getElementById('task17_b2').value);
                var angle = parseFloat(document.getElementById('task17_angle').value);
                
                if (isNaN(a2) || isNaN(b2) || isNaN(angle)) {
                    resultDiv.innerHTML = '<strong>Ошибка:</strong> Введите все значения';
                    resultDiv.className = 'result error';
                    resultDiv.style.display = 'block';
                    return;
                }
                
                var angleRad = angle * Math.PI / 180;
                area = 0.5 * a2 * b2 * Math.sin(angleRad);
                resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                    'S = 0.5 × a × b × sin(α)<br>' +
                    'S = 0.5 × ' + a2 + ' × ' + b2 + ' × sin(' + angle + '°)<br>' +
                    'Площадь S = ' + area.toFixed(4);
                resultDiv.className = 'result';
            } else {
                var base = parseFloat(document.getElementById('task17_base').value);
                var height = parseFloat(document.getElementById('task17_height').value);
                
                if (isNaN(base) || isNaN(height)) {
                    resultDiv.innerHTML = '<strong>Ошибка:</strong> Введите основание и высоту';
                    resultDiv.className = 'result error';
                    resultDiv.style.display = 'block';
                    return;
                }
                
                area = 0.5 * base * height;
                resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                    'S = 0.5 × основание × высота<br>' +
                    'S = 0.5 × ' + base + ' × ' + height + '<br>' +
                    'Площадь S = ' + area.toFixed(4);
                resultDiv.className = 'result';
            }
            resultDiv.style.display = 'block';
        }

        // Задание 18
        function solveTask18() {
            var n = parseInt(document.getElementById('task18_n').value);
            var resultDiv = document.getElementById('result18');
            
            if (isNaN(n) || n < 1) {
                resultDiv.innerHTML = '<strong>Ошибка:</strong> Введите количество элементов (n ≥ 1)';
                resultDiv.className = 'result error';
                resultDiv.style.display = 'block';
                return;
            }
            
            var sequence = [];
            if (n >= 1) sequence.push(0);
            if (n >= 2) sequence.push(1);
            
            for (var i = 2; i < n; i++) {
                sequence.push(sequence[i - 1] + sequence[i - 2]);
            }
            
            resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                'Первые ' + n + ' чисел Фибоначчи:<br>' +
                sequence.join(', ');
            resultDiv.className = 'result';
            resultDiv.style.display = 'block';
        }

        // Задание 19
        function solveTask19() {
            var str = document.getElementById('task19_str').value;
            var resultDiv = document.getElementById('result19');
            
            if (!str) {
                resultDiv.innerHTML = '<strong>Ошибка:</strong> Введите строку';
                resultDiv.className = 'result error';
                resultDiv.style.display = 'block';
                return;
            }
            
            var unique = '';
            for (var i = 0; i < str.length; i++) {
                if (unique.indexOf(str[i]) === -1) {
                    unique += str[i];
                }
            }
            
            resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                'Исходная строка: "' + str + '"<br>' +
                'Уникальные символы: "' + unique + '"<br>' +
                'Было символов: ' + str.length + ', стало: ' + unique.length;
            resultDiv.className = 'result';
            resultDiv.style.display = 'block';
        }

        // Задание 20
        function solveTask20() {
            var n = parseInt(document.getElementById('task20_n').value);
            var resultDiv = document.getElementById('result20');
            
            if (isNaN(n) || n < 1) {
                resultDiv.innerHTML = '<strong>Ошибка:</strong> Введите количество элементов (n ≥ 1)';
                resultDiv.className = 'result error';
                resultDiv.style.display = 'block';
                return;
            }
            
            var arr = [];
            var sum = 0;
            for (var i = 0; i < n; i++) {
                var num = Math.floor(Math.random() * 11);
                arr.push(num);
                sum += num;
            }
            
            resultDiv.innerHTML = '<strong>Результат:</strong><br>' +
                'Массив: [' + arr.join(', ') + ']<br>' +
                'Сумма элементов: ' + sum + '<br>' +
                'Количество элементов: ' + n;
            resultDiv.className = 'result';
            resultDiv.style.display = 'block';
        }