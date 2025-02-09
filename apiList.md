#DevTinder APIs

authRouter
-POST /singup
-POST /login
-POST /logout

profileRouter
-GET /profile/view
-PATCH /profile/edit
-PATCH /profile/password - Forgot Password API

connectionRequestRouter
-POST /request/send/:status/:userId
-POST /request/review/:status/:userId

userRouter
-GET /user/connections
-GET /user/request/received
-GET /user/feed - Gets you the profiles other users on platform

Status: ignore, interested, accepted,rejected
