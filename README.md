# Pulse Survey API

## How to run

1. You'll have to set up PSQL and a database
    1. `sudo --login --user=postgres password=postgres psql`
    2. `CREATE DATABASE pulse_survey`
    3. `psql -h 127.0.0.1 -p 5432 -U postgres -d pulse_survey`

2. Create the tables by copy-pasting or running the contents of the db/create.sql file

3. Install Deno: `curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.9.2`
    1. Check if correctly installed with `deno --version`

4. Run the server with `deno run --no-check --allow-net --allow-env index.js`


## Endpoints

### POST Survey - `/survey`
- Body: 
    - 
    ``` 
    {
        "name": String,
        "accountId": Number,
        "questions": String[],
        "userIds": Number[],
    }
    ``` 

- Response: 
    - 
    ``` 
    {
        "surveyId": Number,
    }
    ``` 

- Notes:
    - Will automatically create completion entry with value of `false`

<br />

### GET Survey - `/survey/:surveyId`
- Response: 
    - 
    ``` 
    {
        "id": Number,
        "name": String,
        "accountId": Number,
        "questions": Object[] - { "id": Number, "question": String },
    }
    ```
<br /> 
    
### POST Answers - `/answers`
- Body: 
    - 
    ``` 
    {
        "answers": Object[] - { "questionId": Number, "answer": Number }
        "surveyId": Number,
        "userId": Number,
    }
    ``` 
- Note:
    - Will set completion entry for this surveyId/userId combination to `true`

<br />

### GET Completion - `/completion/:surveyId/:userId`
- Response: 
    - 
    ``` 
    Boolean
    ``` 
<br />
    
### GET Answer Aggregate - `/answers/:questionId`
- Response: 
    - 
    ``` 
    [
       { 
        "x": Number,
        "y": Number,
       }
    ]
    ``` 
- Note:
    - "x" = answer
    - "y" = count
    
    