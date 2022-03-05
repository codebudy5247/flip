declare type UserProfile = {
    _id?:string;
    Name?:string;
    username?:string;
    Age?:string;
    Location?:string;
    Password?:string;
    Email_id?:string;
    PhoneNumber?:string;
    avatar?:string;
    story?:string;
    bio?:string;
}

declare type SigninSignupResponse = {
    token?:string;
    msg?:string;
}

declare type Upload = {
    image:any;
}

declare type uploadResponse = {
    msg:string;
    public_id:string;
    url:string;
}