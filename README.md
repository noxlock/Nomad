# T4A2-A



## Description

### Purpose

The purpose of this project, is to provide the user with a German word upon visiting the page, the word will provided alongside other details such as the definition, pronunciation, and English equivalent.

The user can then choose to save the word to their 'dictionary', which will allow them to revisit the word at a later time. 



### Functionality/Features

- Display a word upon visiting page/clicking 'New Word' button.

  Result includes:

  - Pronunciation
  - Definition
  - English translation

- Save a word to 'dictionary'

  - Revisit the word at a later time
  - Drill all words in dictionary
  - Saved to each user

- Login to access dictionary and features

### Target Audience

The target audience for this project is any English speakers who would like to improve their vocabulary and/or understanding of German words, in a way that is less studious than reading textbooks for hours, but rather could add a word a day to someone's vocabulary by simply visiting the page.

It is likely that companies or educational facilities would adopt this project as a free, open-source method of improving language skills, for employees, or for students.

### Tech Stack

- Node
  - Express
  - React
- MongoDB



## Dataflow Diagram

![Data Flow Diagram](./docs/DataFlow.jpg)



## Application Architecture Diagram

![](./docs/AAD.png)

## User Stories

| Story                                                        | Implementation                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| As a German learner, I want to learn a new word everyday, so that I can improve my vocabulary. | Index page, word generation, translation, definition and pronunciation. |
| As a teacher, I want my students to improve their vocabulary and understanding of the German language by reinforcing their knowledge of specific words they've chosen to learn, so that they can do better in class reading tasks. | Dictionary save feature.                                     |
| As a user, I want to log in and view my saved words, so that I can practice them. | Login and dictionary pages.                                  |



## Wireframes

### Index Page Wireframe

![Index Page Wireframe](./docs/Indx-Wireframe.png)



### Login Page Wireframe

![Login Page Wireframe](./docs/Log-Wireframe.png)



### Dictionary Page Wireframe

![Dictionary Page Wireframe](./docs/Dicti-Wireframe.png)

## Trello Board

Here's what my Trello board looked like before starting the project, it's set out in an agile style.

![Trello Board screenshot at beginning of project](./docs/trello-start.png)



Here's what the board looked like a bit later on in the project.

![Trello Board later in the project](./docs/Trello-later.png)



Here's what my board looks like at the end of the project

![Trello board at the end of the project](./docs/Trello-done.png)



## User Testing

### Development Stage

| Tester | Environment | Feature    | Expected Outcome                                             | Actual Outcome                                               |
| ------ | ----------- | ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Joseph | Development | Login      | I expect to be able to click a login button, and be redirected to a login page, where I can enter my credentials and be authenticated. | I am able to click a login button, enter my credentials, and be authenticated. |
| Liam   | Development | Home Page  | I expect to visit the home page, and see a German word, with it's pronunciation, definition and translation. | I am able to visit the home page, and see a German word, with it's pronunciation, definition and translation. |
| Oliver | Development | Dictionary | I expect to be able to login, and then view the words that I have saved, so I can study them at a later date. | I can login, and save words, but I'm unable to view them.    |

### Production Stage

| Tester | Environment | Feature    | Expected Outcome                                             | Actual Outcome                                               |
| ------ | ----------- | ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Joseph | Production  | Login      | I expect to be able to click a login button, and be redirected to a login page, where I can enter my credentials and be authenticated. | I am able to click a login button, enter my credentials, and be authenticated. |
| Liam   | Production  | Home Page  | I expect to visit the home page, and see a German word, with it's pronunciation, definition and translation. | I am able to visit the home page, and see a German word, with it's pronunciation, definition and translation. |
| Oliver | Production  | Dictionary | I expect to be able to login, and then view the words that I have saved, so I can study them at a later date. | I can login, and save words, then visit my dictionary to study them in further detail. |



