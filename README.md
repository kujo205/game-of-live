# Laboratory work number 1

This laboratory work implements The Game Of Life
The objective of this work is to showcase tesing and how it's performed

## What I plan to achieve after completing this work 
- Be more profiscient in `nvim` (yeah, i want to use it for this very work, why not)
- Create very exhaustive suite for game of live game
- Create game of life itself


## TODO list for this work
- [x] Налаштуйте GitHubActions так,щоб тести запускалися на кожен push та pull request
- [x] Створіть pull request з одним unit test'ом,що проходить успішнов GitHub Actions.
- [x] Створіть pull request з одним unit test'ом,що падаєв GitHub Actions.
- [x] Не зливайте в main тестові pull request'и. Вони просто демонструють, що GitHub Actions налаштовані правильно.
- [x] Виконайте алгоритмічне завдання: реалізацію поставленого завдання та юніт-тести для нього.
- [ ] Додайте файл README.md, в якому вкажіть ваше ПІБ, групу, а також інструкції для налаштування середовища і запуску тестів. За цією інструкцією, людина, що перевіряє, повинна бути здатна одною командою налаштувати середовище/встановити залежності та іншою - запустити тести.



## Student's information

1. Group - IM-22
2. Name - Куц Іван Васильович 

## Setting up the project instructions

In order to run this program complete the following algorithm:

1. Clone the repo:
```bash
git clone git@github.com:future-stardust/im-2x-lab-1-kujo205.git
```
on your command line

2. Run installation script 
```bash
npm i 
```
3. Install `bun` globally
```bash
npm i -g bun 
```

4. Add input file with the structure shown below
```md
100
5 5
..x..
..x..
.....
.....
..x..
```
First number - number of generations (100 in example)
Second row, first number - width of the field (5 in example)
Second row, second number - height of the field (5 in example)

The matrix below the numbers represents the field, cells of the matrix can be either `x` or `.`

5. Run the command below to start the program
```bash
bun bun start --input input.txt [OPTIONS]
```
Options:
- --display_in_terminal - lets you have a colorful output in the terminal, default - false
- --output output.txt - specify output file, default - output.txt

6. You can run the test using the command below:
```bash
bun test
```


## Examples
Here you can see an input file, this is called `almosymmetric` and this is a cool Organism in The Game of life
```md
100
17 10
.................
........x........
....xx..x.x......
....x.x..........
...........xx....
.....x...........
....x......x.....
....xx.x.x.......
.........x.......
.................
```
launched with the command
```bash
bun start --input input.txt --display_in_terminal --output output2.txt
```


https://github.com/user-attachments/assets/b8a08173-19cb-435f-aeb0-0ef54db25701
