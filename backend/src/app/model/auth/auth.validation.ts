import { z } from "zod";

const loginValidation=z.object({
   body:z.object({
    email:z.string({required_error:"email is requied"}).email(),
    password:z.string({required_error:"password is requied"})
   })
})


export const authValidation={
    loginValidation
}