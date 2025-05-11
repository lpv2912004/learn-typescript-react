// * ---------------------------------------- VARIABLES ----------------------------------------------------
let variable: string = 'hello world';
variable = 'string name';

const age: number = 25;
const testArray = [1, 'two', 3, false, []];

//FUNCTIONS
const sayHi = () => {
    console.log('hi');
};

const functionReturn = (): string => {
    console.log('hello');
    return 'hello';
};

const multipleNumber = (a: number) => {
    return a * 2;
};

const multipleNumber2 = (a: number): number => {
    return a * 2;
};

const multipleNumber3 = (a: number): void => {
    console.log(a * 2);
};

const sum = (num1: number, num2: number): number => {
    return num1 + num2;
};

sum(1, 2);

const func = (user: { username: string; age: number; phone?: string }) => {
    console.log(user.username);
};

// * --------------------------------- TYPE ALIASES ---------------------------------------------------------
type UserType = {
    username: string;
    age: number;
    phone?: string;
};

const betterFunc = (user: UserType) => {
    console.log(user.username);
};

type myFunc = (a: number, b: string) => void;

const write: myFunc = (a, b) => {
    console.log('num' + a, 'time' + b);
};

type UserType2 = {
    username: string;
    age: number;
    phone?: string;
    theme: 'dark' | 'light';
};

const userWithTheme: UserType2 = {
    username: 'John',
    age: 25,
    theme: 'dark'
};

// * ---------------------------------------- INTERFACES ----------------------------------------------------

interface IUser {
    username: string;
    email: string;
    age: number;
}

interface IEmployee extends IUser {
    employeeId: number;
}

const emp: IEmployee = {
    username: 'John',
    email: 'la@gmailc.com',
    age: 25,
    employeeId: 1
};

const client: IUser = {
    username: 'John',
    email: 'la@gmailc.com',
    age: 25
};

// * ---------------------------------------- GENERICS ----------------------------------------------------

interface IAuthor {
    id: number;
    username: string;
}

interface ICategory {
    id: number;
    title: string;
}

interface IPost {
    id: number;
    title: string;
    body: string;
    extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
    id: number;
    title: string;
    body: string;
    extra: T[];
}

const textMe: IPostBetter<string> = {
    id: 1,
    title: 'post title',
    body: 'post desc',
    extra: ['hello', 'world']
};

interface IPostEvenBetter<T extends object> {
    id: number;
    title: string;
    body: string;
    extra: T[];
}

const textMe2: IPostEvenBetter<IAuthor> = {
    id: 1,
    title: 'post title',
    body: 'post desc',
    extra: [
        { id: 1, username: 'category' },
        { id: 2, username: 'category2' }
    ]
};

const textMe3: IPostEvenBetter<ICategory> = {
    id: 1,
    title: 'post title',
    body: 'post desc',
    extra: [
        { id: 1, title: 'category' },
        { id: 2, title: 'category2' }
    ]
};
