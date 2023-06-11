import jwt from 'jsonwebtoken';
//wants to like a post
//click the like button => auth middleware (NEXT) => like controller...
const auth1 = async(req, res, next) =>{
    //const userId=req.headers["Authorization"];
    try{

        
        // const token="";
        console.log(req.headers);
        // if(req.headers.Authorization) { token = req.headers.Authorization.split(' ')[1]; }
        const token = req.headers.authorization.split(" ")[1];
        //const token = req.headers["Authorization"];
        console.log(token);
        
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth){
            decodedData = jwt.verify(token , 'test');
            req.userId = decodedData ?.id;
        }
        else{
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        next();
    }
    catch(error){
        console.log(error);
    }
}

export default auth1;