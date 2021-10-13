![Down 24](down24.png)

### Description
There is a proxy server that will be able to make all of the requests to the API with the CORS policy enabled.
The client will make all of the requests to the proxy server to be able to get data.

### Getting Started
1. Go to the server folder
2. `yarn install` to install server dependencies
3. `npm run start` to run a proxy server on port `8080`.
4. Go to the client folder
5. `yarn install` to install client dependencies
6. `npm run start` to run a proxy server on port `3000`.
7. Go to your browser http://localhost:3000

### Remarks and comments
– The design for the widget was for 1920x1020 px. So I took it as a root point and used it between functions to be able to save some of the proportions. As for me, it does not look very good on some sizes of the screen. It's just too huge. But it was too late to change the whole CSS. In real life, I would ask questions and clarify all the requirements with the designer or team leader.

– In design, we had day segments with period of time of 1 hour for one day. But it figured out that it is not like that in the API data. It was not clear how to manage this, so I printed everything in one line straight. I hope the current solution meets your requirements. I would like to make a dropdown selector, but I am afraid it takes to much time already

– There were not enough icons to handle all of the possible weather states, I made one with rain by myself, and for the rest I created no-img.svg

– There are no tests because I do not have any experience with the unit or functional or end-to-end tests. My thoughts are next: each simple function(like a conversion from kelvins to celsius) should have a unit test with predefined arguments. And if the result meets our expectations then the test is should be passed. Also, there should be rendered tests - when we have specified props we should see elements on the screen. And behavioral tests, when you click on day segment the data should be changed accordingly

– I did not create any commits. It's just one(there might be more though if I would like to make some fixes). I know that in real life we should create a separate branch for each feature, we should have a pretty descriptive commit name and we should follow one of the git naming conventions, but in this short test-job project it is just only me, so I decided just not to do that and leave this message about it.

– I used Redux just to show that I am able to use it. Of course for that kind of project, it is overhead and there is no need to use it if it was a real-life project. I use redux to pass some data between the components, to be able to debug and rewind app state. I know that there is a context hook in react which allows us to pass data to all child components. But I just wanted to show that I can work with Redux as well.

– I used SCSS for this project because I used to. But actually, I start to think that it is not a great idea because you have to follow up with lots of the files and windows. it might be better to use styled-components or something similar. At the same time from the point of view of optimization, it would be better to not have styles inside js bundle at all.
