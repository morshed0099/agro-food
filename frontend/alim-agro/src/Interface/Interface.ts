export type TloginError={
    status:number
    data:{
        success:boolean,
        message:string,
        errorMessage:string
    }
}

export type TCategory={
    _id:string,
    name:string
  }