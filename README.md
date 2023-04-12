# 1. Các bước viết unit test:

- Write a failing test
- Make the test pass
- Refactor

# 2. Các thành phần cơ bản có trong 1 unit test:

- Test suit
- Block test
- Test case
- Action
- Assert

# 3. Test cases:

|      Before      | After |
| :--------------: | :---: |
|    [1, 7, 5]     | false |
| [1, 5, 7, null]  | false |
|    [1, -5, 7]    | false |
|       null       | false |
|    undefined     | false |
|        []        | false |
|       [1]        | true  |
|    [1, 2, 4]     | true  |
| [1.23, 1.234, 4] | true  |
|    [0, 0, 4]     | true  |
