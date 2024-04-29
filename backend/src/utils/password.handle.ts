import { compare, hash } from "bcryptjs"

const encrypter = async (pass: string): Promise<string> => {
    const passwordHashed = await hash(pass, 10)
    return passwordHashed;
}


const verified = async (passHashed: string, pass: string): Promise<boolean> => {
    const isVerified = await compare(pass, passHashed);
    return isVerified;
}


export { verified, encrypter } 