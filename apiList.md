#DevTinder APIs

authRouter
-POST /singup
-POST /login
-POST /logout

profileRouter
-GET /profile/view
-PATCH /profile/edit
-PATCH /profile/password

connectionRequestRouter
-POST /request/send/interested/:userId
-POST /request/send/ignored/:userId
-POST /request/send/accepted/:userId
-POST /request/send/rejected/:userId

userRouter
-GET /user/connections
-GET user/requests/
-GET /user/feed - Gets you the profiles other users on platform

Status: ignore, interested, accepted,rejected
