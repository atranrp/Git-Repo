﻿Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Sync @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName").Set "tutorial" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password").SetSecure "57964c5bffc01193df717163b8f2a11f3360419b8243" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In").Click @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In")_;_script infofile_;_ZIP::ssf4.xml_;_

Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("SIGN-OFF").Check CheckPoint("SIGN-OFF") @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("SIGN-OFF")_;_script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Welcome: Mercury Tours").Close
