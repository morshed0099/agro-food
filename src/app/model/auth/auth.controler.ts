import httpStatus from "http-status";
import { catchAsync } from "../../midleware/catchAsync";
import { authService } from "./auth.service";

const loginUser= catchAsync(async(req,res)=>{
    const userInfo= req.body
    const result = await authService.loginUser(userInfo)
    res.status(httpStatus.OK).json({
      success:true,
      message:"login successfully",
      data:result
    })
  })
  
  export const authControler = {
    loginUser
  };
  