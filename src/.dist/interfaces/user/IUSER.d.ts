export default interface IUSER {
    name: string;
    age: number;
    tech: string;
    email: string;
    password: string;
}
export default interface IREQUEST {
    user: IUSER;
    type: String;
}
