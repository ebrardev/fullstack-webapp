import bcrypt from 'bcrypt';

export const  register = async (req,res) =>{
    const {username,email,password} = req.body;

    //? hast the password

    const hashedPassword = await bcrypt.hashSync(password,10);
   console.log(hashedPassword)
    //? create a new user
}

export const  login = (req,res) => {
}

export const  logout = (req,res) => {
}